module.exports = {
    head: {
      title: 'starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    env: {
      HOST_URL: process.env.HOST_URL || 'http://localhost:5000'
    },
    css: []
}