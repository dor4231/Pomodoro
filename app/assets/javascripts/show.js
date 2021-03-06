class Timer {
    constructor(seconds, sound_path, sessions=null) {
        // self = this
        this.user_seconds = parseInt(seconds);
        this.seconds = parseInt(seconds);
        this.clear = true;
        this.audio = new Audio(sound_path);
        this.sessions = sessions;
        this.running = false;
        this.interval = null;
    }

    // The interval that tuns the timer.
    static countdown(timer) {
            $("#pom-time").html(timer.time_string());
            if(timer.sessions == 0){
                timer.times_up();
                clearInterval(timer.interval);
            }else if(timer.seconds <= 0) {
                clearInterval(timer.interval);
                timer.running = false;
                timer.make_a_sound();
                timer.work_break_toggle();
            }
            else 
                timer.seconds -= 1;
    }
    
    // Convert the seconds into a clock form. 
    
    //**** We actually need only the minutes and the seconds *****
    time_string() {
        var timeFormat = ["00", "00", "00"];
        var hours = parseInt(this.seconds / 3600);
        var minutes = parseInt((this.seconds % 3600) / 60);
        var seconds = parseInt(this.seconds % 60)

        timeFormat[0] = Timer.numberChanger(hours);
        timeFormat[1] = Timer.numberChanger(minutes);
        timeFormat[2] = Timer.numberChanger(seconds);

        return timeFormat[1] + ":" + timeFormat[2];
    }

    // Sets new secons into the timer object.
     new_seconds() {
        this.seconds = new_seconds;
    }

    // Keep the format of the clock like "01" instead of jus "1"
    static numberChanger(number) {
        if(String(number).length > 1)
            return number;
        else
            return "0" + number;
    } 

    // An Eastern Egg
    print_junk() {
        console.log("Alex & Dor are the BEST!")
    }

    // Supose to change the view of the page from Work to Brake and vis versa.
    work_break_toggle() {
        // Check if we finished "work" or a "break"

        // switch the seconds from break to work

        if( $("#pom-top").hasClass("work") ) {
            $("#pom-top").replaceWith('<div id="pom-top" class="break"><h1>Break Time Remaining</h1></div>');
            $("#play").replaceWith('<button id="play" class="break" onclick="breakTimer.start_timer()">Play</button>');
            $("#reset").replaceWith('<button id="reset" class="break" onclick="breakTimer.reset_timer()">Reset</button>');
            
            this.seconds = this.user_seconds;
            this.clear = true;
            this.sessions -= 1;
            $("#play").trigger("click");
        } else {
            $("#pom-top").replaceWith('<div id="pom-top" class="work"><h1>Work Time Remaining</h1></div>');
            $("#play").replaceWith('<button id="play" class="work" onclick="workTimer.start_timer()">Play</button>');
            $("#reset").replaceWith('<button id="reset" class="work" onclick="workTimer.reset_timer()">Reset</button>');
            
            this.seconds = this.user_seconds;
            this.clear = true;
            $("#play").trigger("click");
        };
    }

    times_up() {
        $('#container').addClass('allDone')
        $('#currentlyWorking').addClass("hide").removeClass("show");
        $('#goAway').addClass("show").removeClass("hide");
    }

    // After the timer runs up this is the sign that it ended.
    make_a_sound() {
        this.audio.play();
    }

    // The buttons functions.
    start_timer() {
        self = this;
        if(this.running == true) {
            clearInterval(this.interval);
            this.running = false;
            $("#play").html("Play");
        } else {
            this.interval = setInterval(function() {Timer.countdown(self)} ,1000);
            this.running = true;
            $("#play").html("Pause");
        }           
    }

    pause_timer() {
        this.pause = true;
    }

    reset_timer() {
        this.set_seconds(10);
        this.pause = true;
    }   
}