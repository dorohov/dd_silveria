(function($) {
    "use strict"
    $(function() {

        setSizeForFrames()

        $(window).resize(function() {
            setSizeForFrames()
        })

        function setSizeForFrames() {
            $('.__dd__siteframe').css({
                width: $('.__dd__siteframe__mock').innerWidth(),
                height: $('.__dd__siteframe__mock').innerHeight()
            })
        }        

    })
})(jQuery);