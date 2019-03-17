var clock = $('.clock').FlipClock({
clockFace: 'DailyCounter',
autoStart: false,
    callbacks : function(){
        
    }

});
clock.setTime(5000);
clock.setCountdown(true);
clock.start(function() {
// Optional callback will fire when the clock starts
});