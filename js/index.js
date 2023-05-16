
import { Router } from './router.js'
import {
  homeBtn,
  universeBtn,
  explorationBtn,
  body
} from './elements.js'

const router = new Router


// mapeamento de rotas:
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()




homeBtn.addEventListener('click', function() {
  homeButtonPress()
})

universeBtn.addEventListener('click', function() {
  universeButtonPress()
})

explorationBtn.addEventListener('click', function() {
  explorationButtonPress()
})



function homeButtonPress() {
  body.classList.add('bgHome')
  body.classList.remove('bgUniverse', 'bgExploration')
}

function universeButtonPress() {
  body.classList.add('bgUniverse')
  body.classList.remove('bgHome', 'bgExploration')
}

function explorationButtonPress() {
  body.classList.add('bgExploration')
  body.classList.remove('bgHome', 'bgUniverse')
}
