/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import error from '~/assets/img/error.svg'
import loading from '~/assets/img/loading.svg'

Vue.use(VueLazyload, {
    preLoad: 1,
    error,
    loading,
    attempt: 1
})