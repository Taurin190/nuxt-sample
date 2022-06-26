import { addDecorator } from '@storybook/vue'
import 'vuetify/dist/vuetify.css'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
  customVariables: ['../assets/variables.scss']
})

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
})

const vuetifyConfig = new Vuetify({
  icons: { iconfont: 'mdi' },
  theme: { dark: false }
})

const vuetifyOptions = {}

addDecorator(() => {
  return {
    vuetify: vuetifyConfig,
    template: '<v-app><div><story/></div></v-app>'
  }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}