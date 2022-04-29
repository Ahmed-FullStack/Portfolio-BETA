const container = document.querySelectorAll('.intersection-observer')

const left = document.querySelectorAll('.from-left')

const right = document.querySelectorAll('.from-right')

const ham = document.querySelector('.ham')   

const ulList = document.querySelector('.ul-items') 
  
const options = {
    root : null,
    threshold: 0,
    rootMargin: '0px 0px -200px 0px'
}

const containerOBserver = new IntersectionObserver((entries, containerOBserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return 
        } else {
            entry.target.classList.add('container-animation')
            containerOBserver.unobserve(entry.target)
        }
    })
}, options)

container.forEach(forContainer =>{

    containerOBserver.observe(forContainer)
})



const sideOptions = {
    root : null,
    threshold: 0,
    rootMargin: '0px 0px -900px 0px'
}

const sideObserver = new IntersectionObserver((sideEntries, sideObserver) => {
    sideEntries.forEach(sideEntry => {
        if(!sideEntry.isIntersecting){
            return 
        } else {
            sideEntry.target.classList.add('transform0')
            sideObserver.unobserve(sideEntry.target)
        }
    })
}, options)

left.forEach(eachLeft => {
    sideObserver.observe(eachLeft)
})
right.forEach(eachRight => {
    sideObserver.observe(eachRight)
})


ham.addEventListener('click', () => {
    ulList.classList.toggle('click')
})


const x = 2



