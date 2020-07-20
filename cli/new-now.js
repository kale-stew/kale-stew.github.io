const inquirer = require('inquirer')
// const fs = require('fs');
// const path = require('path');
const { DAYS, MONTHS, /* FILE, */ QUESTIONS } = require('../src/constants.js')

const getNewContent = () => {
  return inquirer.prompt(QUESTIONS)
}

const formatDate = date => {
  const arr = date.split(' ').slice(0, 3)
  const day = DAYS[arr[0]]
  const month = MONTHS[arr[1]]
  return `${day} ${month} ${arr[2]}`
}

const createContentObj = answers => {
  const date = formatDate(new Date().toString())
  let obj = {}
  obj[date] = { ...answers }
  return obj
}

const run = async () => {
  const answers = await getNewContent()
  const foo = createContentObj(answers)
  console.log(foo)
}

run()
