const pug = require('pug')
const fs = require('fs-extra')
const path = require('path')
const less = require('less')
const bluebird = require('bluebird')
const browserify = require('browserify')
const uglify = require('uglify-js')

const distPath = path.join(__dirname, '../dist')

createDist().then(() =>
  copyAssets()
).then(() =>
  processCSS()
).then(() =>
  browserifyScripts()
).then(() =>
  renderPugTemplates()
).then(() => {
  console.log('Map Generated!')
}).catch((err) => {
  console.log(err)
})

function createDist () {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(distPath)) fs.removeSync(distPath)
    fs.mkdir(distPath).then(() =>
      resolve()
    ).catch((err) =>
      reject(err)
    )
  })
}

function copyAssets () {
  return new Promise((resolve, reject) => {
    fs.copy(path.join(__dirname, '../src/assets'), path.join(__dirname, '../dist/assets')).then(() =>
      resolve()
      ).catch((err) =>
        reject()
      )
  })
}

function processCSS () {
  var promises = []
  
  return new Promise((resolve, reject) => {
    fs.mkdir(distPath + '/css').then(() =>
      fs.readdir(path.join(__dirname, '../src/less/'))
    ).then((files) => {
      files.forEach((file) => {
        console.log(`Processing ${file}`)
        var filename = file.substr(0, file.indexOf("."))
        promises.push(new Promise((resolve, reject) => {
          fs.readFile(path.join(__dirname, `../src/less/${filename}.less`), 'utf8').then((data) =>
            less.render(data)
          ).then((output) =>
            fs.writeFile((distPath + `/css/${filename}.css`), output.css)
          ).then(() =>
            resolve()
          ).catch((err) =>
            reject(err)
          )
        }))
      })
      
      Promise.all(promises).then(() =>
        resolve()
      ).catch((err) => 
        reject(err)
      )
    }).catch((err) => 
      reject(err)
    )
  })
}

function renderPugTemplates () {
  return new Promise((resolve, reject) => {
    bluebird.promisify(pug.renderFile)(path.join(__dirname, '../src/pug/index.pug')).then((html) =>
      fs.writeFile(distPath + '/index.html', html)
    ).then(() =>
      resolve()
    ).catch((err) =>
      reject(err)
    )
  })
}

function browserifyScripts () {
  var promises = []
    
  return new Promise((resolve, reject) => {
    fs.mkdir(distPath + '/scripts').then(() =>
      fs.readdir(path.join(__dirname, '../src/scripts/'))
    ).then((files) => {
      files.forEach((file) => {

        var filename = file.substr(0, file.indexOf("."))
        if(filename !== "locationbox") {
          console.log(`Browserifying and Uglifying ${file}`)
          promises.push(new Promise((resolve, reject) => {
            var b = browserify(null, {standalone: filename.charAt(0).toUpperCase() + filename.slice(1)})
            b.add(path.join(__dirname, `../src/scripts/${filename}.js`))
            new Promise((resolve, reject) => {
              b.bundle((err, buffer) => {
                if (err) reject(err)
                resolve(buffer.toString())
              })
            }).then((code) => {
              return new Promise((resolve, reject) => {
                var result = uglify.minify(code)
                if (result.error) reject(err)
                resolve(result.code)
              })
            }).then((code) =>
              fs.writeFile(distPath + `/scripts/${filename}.js`, code)
            ).then(() =>
              resolve()
            ).catch((err) => {
              reject(err)
            })
          }))
        }
      })
      
      Promise.all(promises).then(() =>
        resolve()
      ).catch((err) => 
        reject(err)
      )
    }).catch((err) => 
      reject(err)
    )
  })
}
