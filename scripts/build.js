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
  return new Promise((resolve, reject) => {
    fs.mkdir(distPath + '/css').then(() =>
      fs.readFile(path.join(__dirname, '../src/less/map.less'), 'utf8')
    ).then((data) =>
      less.render(data)
    ).then((output) =>
      fs.writeFile((distPath + '/css/map.css'), output.css)
    ).then(() =>
      resolve()
    ).catch((err) =>
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
  return new Promise((resolve, reject) => {
    var b = browserify(null, {standalone: 'Map'})
    b.add(path.join(__dirname, '../src/scripts/map.js'))

    fs.mkdir(distPath + '/scripts').then(() => {
      return new Promise((resolve, reject) => {
        b.bundle((err, buffer) => {
          if (err) reject(err)
          resolve(buffer.toString())
        })
      })
    }).then((code) => {
      return new Promise((resolve, reject) => {
        var result = uglify.minify(code)
        if (result.error) reject(err)
        resolve(result.code)
      })
    }).then((code) =>
      fs.writeFile(distPath + '/scripts/map.js', code)
    ).then(() =>
      resolve()
    ).catch((err) => {
      reject(err)
    })
  })
}
