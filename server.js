const express = require('express')
const app = express()

app.get('/health', (req, res) => {
  res.status(200).end()
  res.send('healthy')
})

app.get('/', (req, res) => {

})

app.get('/about', (req, res) => {
  res.send('Arianne Kornmann')
  res.send('https://github.com/it-sd/sqc-project-akornmann123')
  res.send('The purpose of my site is to keep track on the threatened species around the world.
           + 'On this site, you can find different aspects of the threatened species.'
           + 'For example, they can be categorized by country, habitat, threats, and individual species.')
})
  
