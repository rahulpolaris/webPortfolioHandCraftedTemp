// import { customCardBodContainerArray } from "./ourwork"
import handleNavigation from './Navigation.js';
const fixedDimensionsDisplay = () =>{
    const workCards = Array.from(document.querySelectorAll('.custom-cardbody-container'))
    const DimensionBox = document.getElementById('dimension-box')
    const NavigationBar = document.querySelector('.nav-container')
    const NavBarHeight = parseFloat(NavigationBar.getBoundingClientRect().height)
    const sections =Array.from(document.querySelectorAll('section'))
    console.log(sections)
    //  const padTop =parseFloat(window.getComputedStyle(AboutSection,null).getPropertyValue('padding-top').slice(0,-2))
    //  console.log(`%cHello${padTop}`,'color:green;font-size:2rem')
    sections.forEach((section)=>{
        section.style.paddingTop= NavBarHeight  +'px'
        section.style.paddingBottom= NavBarHeight  +'px'

    })
    // console.log(DimensionBox)
    
    
    DimensionBox.innerHTML = `<b>window:</b><br/>${window.innerWidth}x${window.innerHeight} <br/> ${window.outerWidth}x${window.innerHeight}
    <br/>`
    if(DimensionBox.classList.contains('dimention-box-on'))
    {
        
    }
    else
    {
        DimensionBox.classList.add('dimention-box-on')
    }
   if (window.innerWidth<800)
   {
    workCards.forEach((workCard)=>{
        if(workCard.classList.contains('hide-card'))
        {
            workCard.classList.remove('hide-card')
        }
        else{
            
        }
    })
   }
   else{
    workCards.forEach((workCard)=>{
        if(workCard.classList.contains('hide-card'))
        {
            // workCard.classList.add('hide-card')
        }
        else{
            workCard.classList.add('hide-card')

        }
    })


   }
   handleNavigation()

    
    // console.log(DimensionBox)
    // console.log("this function running")
    
    }
    export default fixedDimensionsDisplay