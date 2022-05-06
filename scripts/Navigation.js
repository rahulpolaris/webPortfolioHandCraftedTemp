const desktopNavList = document.querySelector('.desktop-nav')
const mobileNavList = document.querySelector('.mobile-nav')
const NavigationButton = document.querySelector('.nav-button')
const NavMenuState = { 
    navButtonArrow:false,
    mobileMaximize:false
}

NavigationButton.addEventListener("click",(e)=>{
    console.log("nav button clicked")
    if(!NavigationButton.classList.contains("arrow-state")&&mobileNavList.classList.contains("minimize"))
    {
        NavigationButton.classList.add("arrow-state")
        mobileNavList.classList.remove("minimize")
        mobileNavList.classList.add("maximize")
    }
    else if(NavigationButton.classList.contains("arrow-state")&&mobileNavList.classList.contains("maximize"))
    {
        NavigationButton.classList.remove("arrow-state")
        mobileNavList.classList.remove("maximize")
        mobileNavList.classList.add("minimize")


    }
})

const handleNavigation = () => {
console.log(desktopNavList,mobileNavList)


    if (window.innerWidth<839)
    {
        if(desktopNavList.classList.contains("visible"))
        {
            desktopNavList.classList.remove("visible")
            desktopNavList.classList.add("visually-hidden")
        }
        if(mobileNavList.classList.contains("visually-hidden"))
        {
            mobileNavList.classList.remove("visually-hidden")
            mobileNavList.classList.add("visible")
        }
        if(NavigationButton.classList.contains("visually-hidden"))
        {
            NavigationButton.classList.remove("visually-hidden")
            NavigationButton.classList.add("visible")
        }


        
    }
    else{
        if(desktopNavList.classList.contains("visually-hidden"))
        {
            desktopNavList.classList.remove("visually-hidden")
            desktopNavList.classList.add("visible")
        }
        if(mobileNavList.classList.contains("visible"))
        {
            mobileNavList.classList.remove("visible")
            mobileNavList.classList.add("visually-hidden")
        }
        if(NavigationButton.classList.contains("visible"))
        {
            NavigationButton.classList.remove("visible")
            NavigationButton.classList.add("visually-hidden")
        }


    }
}
export default handleNavigation;