const {name, version} = require('./package.json')

const demo = process.env.NODE_ENV === 'development' || process.env.npm_lifecycle_event === 'docs:build'

// converts MyComponent to my-component
const kebabCase = (s) => {
    return s.replace(/([A-Z])([^A-Z\-])/g, (_, a, b) => `-${a}${b}`)
        .toLowerCase()
        .replace(/[\s_-]+/g, '-')
        .replace(/(^\W)|(\W$)/g, '')
}

module.exports = {
    entry: demo ? 'src/docs/docs.vue' : 'src/index.js',
    babel: {
        jsx: 'vue'
    },
    output: {
        html: demo,
        fileNames: {
            js: demo ? undefined : kebabCase(name) + '.js',
            css: demo ? undefined : 'style.css',
            font: demo ? undefined : `assets/fonts/${kebabCase(name)}.[ext]`,
            image: demo ? undefined : `assets/images/${kebabCase(name)}.[ext]`,
        },
    },
    envs: {
        VERSION: JSON.stringify(version)
    }
}
