let btn_white = document.querySelector('.btn_white_js')
let btn_grey = document.querySelector('.btn_grey_js')
let white = document.querySelector('.white')
let grey = document.querySelector('.grey')
let firstSsd = document.querySelector('#d_js')
let secondSsd = document.querySelector('#stb_js')
let therthSsd = document.querySelector('#xtb_js')
let firthSsd = document.querySelector('#ctb_js')
let imgWhite = document.querySelector('.mac_white')
let imgGrey = document.querySelector('.mac_grey')
let price = document.querySelector('.price')
let cost = document.querySelectorAll('.cost')

function BTN() {
    btn_white.onclick = () => {
        imgWhite.style.display = 'block'
        imgGrey.style.display = 'none'
        white.style.display = 'block'
        grey.style.display = 'none'
        btn_grey.style.background = '#CFE7FF'
        btn_white.style.background = '#0071E3'
        btn_white.style.color = 'white'
        btn_grey.style.color = 'rgba(121, 121, 121, 1)'
    }
    btn_grey.onclick = () => {
        white.style.display = 'none'
        grey.style.display = 'block'
        imgWhite.style.display = 'none'
        imgGrey.style.display = 'block'
        btn_grey.style.background = '#0071E3'
        btn_grey.style.color = 'white'
        btn_white.style.background = '#CFE7FF'
        btn_white.style.color = 'rgba(121, 121, 121, 1)'
    }
    firstSsd.onclick = () => {
        firstSsd.style.border = '2px solid #007FFF'
        secondSsd.style.border = '2px solid #CFE7FF'
        therthSsd.style.border = '2px solid #CFE7FF'
        firthSsd.style.border = '2px solid #CFE7FF'
        // price.innerHTML = '$1,999'
    }
    secondSsd.onclick = () => {
        secondSsd.style.border = '2px solid #007FFF'
        firthSsd.style.border = '2px solid #CFE7FF'
        firstSsd.style.border = '2px solid #CFE7FF'
        therthSsd.style.border = '2px solid #CFE7FF'
        // price.innerHTML = '$2,199'
    }
    therthSsd.onclick = () => {
        therthSsd.style.border = '2px solid #007FFF'
        secondSsd.style.border = '2px solid #CFE7FF'
        firstSsd.style.border = '2px solid #CFE7FF'
        firthSsd.style.border = '2px solid #CFE7FF'
        // price.innerHTML = '$2,599'
    }
    firthSsd.onclick = () => {
        firthSsd.style.border = '2px solid #007FFF'
        secondSsd.style.border = '2px solid #CFE7FF'
        firstSsd.style.border = '2px solid #CFE7FF'
        therthSsd.style.border = '2px solid #CFE7FF'
        // price.innerHTML = '$3,199'
    }
}
BTN()

