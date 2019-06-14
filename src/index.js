import Money from './component.vue'
import VMoney from './directive'
import options from './options'
const VERSION = proccess.env.VERSION

export {
  Money,
  VMoney,
  options,
  VERSION
}

const install = (Vue, globalOptions) => {
  if (globalOptions) {
    Object.keys(globalOptions).map(function(key){
      options[key] = globalOptions[key]
    })
  }
  Vue.directive('money', VMoney)
  Vue.component('money', Money)
}

export default install

// Install by default if included from script tag
if (window && window.Vue) {
  window.Vue.use(install)
}
