import fgInput from './components/Inputs/formGroupInput.vue'
import DropDown from './components/Dropdown.vue'
import Spinner from './components/Spinner.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */
const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
    Vue.component('drop-down', DropDown)
    Vue.component('spinner', Spinner)
  }
}

export default GlobalComponents
