import { Plugin } from '@nuxt/types'
import { Workbox } from 'workbox-window'

const workbox: Plugin = () => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
}

export default workbox
