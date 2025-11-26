// Smooth scroll for nav links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Fade-in animations using IntersectionObserver
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("fade-in-visible");
        }
    });
},{
    threshold: 0.2
});

document.querySelectorAll(".fade-item").forEach(el=>{
    observer.observe(el);
});
