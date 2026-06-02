document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        target.scrollIntoView({ behavior: 'smooth' })
    })
})


const menuToggle = document.querySelector('.menu-toggle')
const navLinks = document.querySelector('.nav-links')

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

const sections = document.querySelectorAll('section')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
}, { threshold: 0.2 })

sections.forEach(section => {
    section.classList.add('hidden')
        observer.observe(section)
})