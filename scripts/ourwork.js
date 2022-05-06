


const customCardBodContainerArray = Array.from(document.querySelectorAll('.custom-card'))
// console.log(customCardBodContainerArray)



export default function handleProjectCards(){
    // console.log(customCardBodContainerArray)
    // customCardBodContainerArray.forEach((ArE)=>{
    //    ArE.addEventListener("mouseover",(e)=>{
    //        const ChildrenArray = Array.from(e.target.children)
    //        if(ChildrenArray[1].classList.contains('hide-card') && window.innerWidth > 800)
    //        {
    //         ChildrenArray[1].classList.remove('hide-card')

    //        }
    //        else
    //        {
    //        }
    //    })
    //    Array.from(ArE.children)[1].addEventListener("mouseleave",(e)=>{
    //        console.log("mouse left")
    //        if(!e.target.classList.contains('hide-card') && window.innerWidth > 800)
    //        {
    //          e.target.classList.add('hide-card')
    //        }
    //    })


    // })
    /* ------------------------------------------------- */
    
    const ourWorkSuperContainer = document.querySelector('div.our-work')
    // console.log(ourWorkSuperContainer)
    ourWorkSuperContainer.addEventListener("mouseover",(e)=>{
    // console.log(e.target.parentNode.nextElementSibling)
    if(e.target.tagName === "IMG")
    {
        const customCardBodyContainerElement = e.target.parentNode.nextElementSibling
        if(customCardBodyContainerElement.classList.contains('hide-card') && window.innerWidth > 800)
        {
            customCardBodyContainerElement.classList.remove('hide-card')
        }
    }
    })

    const customCardBodyArray = Array.from(document.querySelectorAll(".custom-cardbody-container"))
    customCardBodyArray.forEach((ele)=>{
        ele.addEventListener("mouseleave",()=>{
            console.log("event detected",ele)
            if(!ele.classList.contains('hide-card') && window.innerWidth > 800)
            {
                ele.classList.add('hide-card')
            }
    

        })
    })
}
export { customCardBodContainerArray }