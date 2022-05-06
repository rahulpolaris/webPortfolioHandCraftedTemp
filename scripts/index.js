import fixedDimensionsDisplay from './Dimensions.js'
import  handleProjectCards from './ourwork.js'
import handleNavigation from './Navigation.js'
import gsapAnimations from './animations.js'


handleProjectCards()
fixedDimensionsDisplay()
handleNavigation()
gsapAnimations()
window.onresize = fixedDimensionsDisplay





// console.log("%cindexjs is running","color:yellow; background-color:blue")
// 