require('dotenv').config()

const express = require('express')
const path = require('path')
const assert = require('assert')

const health = async function () {
  let status = 200
  let msg = 'healthy'
  
  if (result === undefined || result.length === 0) {
    status = 500
    msg = 'unhealthy'
  }
  return { status, msg }
}

express()
  .use(express.static(path.join(__dirname, 'public/')))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function (req, res) {
    res.render('pages/index')
})

.get('/health', async function (req, res) {
  const result = await health()
  res.status(result.status).send(result.msg)
})

.get('/about', function (req, res) => {
  res.render('pages/about')
})

// Add other routes

fetch("schema.sql")
  .then((reponse) => reponse.json())
  .then((data) => console.log(data));

async function postData(url = "", data = {}) {
  const reponse = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}





