const counters = document.querySelectorAll('.counter')

counters.forEach(counter => { 
    counter.innerTex = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerTex

        const increment = target / 200

        if(c < target) {
            counter.innerTex = `${Math.ceil(c + increment)}`
        }
    }

    updateCounter()
})