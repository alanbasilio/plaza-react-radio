import type { App } from 'vue'
import WindowDonate from '@mobile/windows/WindowDonate.vue'
import WindowPlayer from '@mobile/windows/WindowPlayer.vue'
import WindowPlayerTimer from '@mobile/windows/WindowPlayerTimer.vue'

export default {
  install: (Vue: App) => {
    Vue.component('WindowDonate', WindowDonate)
    Vue.component('WindowPlayer', WindowPlayer)
    Vue.component('WindowPlayerTimer', WindowPlayerTimer)
  }
}
