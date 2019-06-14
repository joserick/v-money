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

export default {
    install(Vue, globalOptions) {
        if (globalOptions) {
            Object.keys(globalOptions).map(function(key){
                options[key] = globalOptions[key]
            })
        }
        Vue.directive('money', VMoney)
        Vue.component('money', Money)
    }
}
