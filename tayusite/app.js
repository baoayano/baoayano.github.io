window.onload = function () {
    document.getElementById('load_wrapper').remove();

    document.body.style.overflow = 'auto';
}

function scrollTrigger(sel) {
    let e_s = document.querySelectorAll(sel);

    e_s = Array.from(e_s);

    e_s.forEach(e => {
        addObserver(e);
    });
}

function addObserver(e){
    let observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }, 100);
            }
        });
    });

    observer.observe(e);
}

scrollTrigger('.skills_bar');