const active = document.querySelectorAll('.nav-a');

active.forEach(element => {
    element.addEventListener('click', function() {
        active.forEach(elem=> {
            elem.classList.remove('active-a')
        })
        this.classList.add('active-a')
    })
})

