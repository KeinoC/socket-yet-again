const next = require('next')
const app = next({
  dir: './',
  proxy: {
    '/api': 'http://localhost:5555',
  },
})

