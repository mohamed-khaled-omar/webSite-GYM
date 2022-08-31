function initMap() {
    // The location of Uluru
    var cairo = { lat: 30.044420, lng: 31.235712 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: cairo,
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: cairo,
        map: map,
    });
}
$("#navbar a, .btn").on("click", function (event) {
    debugger;
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $("html,body").animate({ scrollTop: $(hash).offset().top -100 }, 800);
    }
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.5;
    }
    else {
        document.querySelector("#navbar").style.opacity = 1;
    }
})
