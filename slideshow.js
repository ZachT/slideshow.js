var Slideshow = function(){
    var my = {};

    function load()
    {
        my.slides = document.querySelectorAll(".slide");
        my.current_slide = 0;

        document.addEventListener("keyup", dispatch);

        update_slides();
    }

    function dispatch(evt)
    {
        if (evt.keyCode == "39") { next_slide(); }
        else if (evt.keyCode == "37") { previous_slide(); }

        update_slides();
    }

    function clear_classes(slide)
    {
        slide.classList.remove("seen");
        slide.classList.remove("current");
        slide.classList.remove("unseen");
        slide.classList.remove("offscreen_n");
        slide.classList.remove("offscreen_p");
    }

    function update_slides()
    {
        var previous = my.slides[my.current_slide - 1];
        var current = my.slides[my.current_slide];
        var next = my.slides[my.current_slide + 1];

        for (var i = 0; i < my.slides.length; i++){
            clear_classes(my.slides[i]);

            if (i == my.current_slide - 1){
                previous.classList.add("seen");
            } else if (i == my.current_slide){
                current.classList.add("current");
            } else if (i == my.current_slide + 1){
                next.classList.add("unseen");
            } else if (i > my.current_slide + 1){
                my.slides[i].classList.add("offscreen_n");
            } else {
                my.slides[i].classList.add("offscreen_p");
            }
        }
    }

    function next_slide()
    {
        if (my.current_slide == my.slides.length - 1){
            return;
        }

        my.current_slide++;
    }

    function previous_slide()
    {
        if (my.current_slide == 0){
            return;
        }

        my.current_slide--;
    }

    return { load: load };
}();
