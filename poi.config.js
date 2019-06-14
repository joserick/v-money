const {name, version} = require('./package.json')

module.exports = {
    entry: 'src/index.js',
    output: {
        html: false,
        sourceMap: false,
        fileNames: {
            js: name + '.js'
        },
        format: 'cjs'
    },
    envs: {
        VERSION: JSON.stringify(version)
    }
}
