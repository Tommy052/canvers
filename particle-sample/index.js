const canvas = document.querySelector('canvas')

const stx = canvas.getContext('2d')
const dpr = window.devicePixelRatio
const canvarsWidth = 300
const canvatsHeight = 300
canvas.style.width = canvarsWidth + 'px'
canvas.style.height = canvatsHeight + 'px'

canvas.width = canvarsWidth * dpr
canvas.width =canvatsHeight * dpr

stx.fillRect(10,10,50,50)