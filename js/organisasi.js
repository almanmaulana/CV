document.addEventListener("DOMContentLoaded", function () {

    if (window.innerWidth <= 768) {

        const photo = document.querySelector(".detail-photo");

        window.addEventListener("scroll", function () {

            if (window.scrollY > 120) {
                photo.classList.add("floating");
            } else {
                photo.classList.remove("floating");
            }

        });

    }

});