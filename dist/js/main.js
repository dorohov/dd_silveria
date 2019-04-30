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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc2V0U2l6ZUZvckZyYW1lcygpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFNpemVGb3JGcmFtZXMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFNpemVGb3JGcmFtZXMoKSB7XHJcbiAgICAgICAgICAgICQoJy5fX2RkX19zaXRlZnJhbWUnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICQoJy5fX2RkX19zaXRlZnJhbWVfX21vY2snKS5pbm5lcldpZHRoKCksXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICQoJy5fX2RkX19zaXRlZnJhbWVfX21vY2snKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
