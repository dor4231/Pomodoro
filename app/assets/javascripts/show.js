class Timer {
    constructor(work_seconds, break_seconds) {
        this.work_seconds = parseInt(work_seconds);
        this.break_seconds = parseInt(break_seconds);
        this.mode = "work";
        this.running = false;
    }

    static time_string(seconds) {
        var timeFormat = ["00", "00", "00"];
        var hours = parseInt(seconds / 3600);
        var minutes = parseInt((seconds % 3600) / 60);
        var seconds = parseInt(seconds % 60)

        timeFormat[0] = Timer.numberChanger(hours);
        timeFormat[1] = Timer.numberChanger(minutes);
        timeFormat[2] = Timer.numberChanger(seconds);

        return timeFormat[0] + ":" + timeFormat[1] + ":" + timeFormat[2];
    }

    set_seconds(new_seconds) {
        this.work_seconds = new_seconds;
    }

    static numberChanger(number) {
        if(String(number).length > 1)
            return number;
        else
            return "0" + number;
    }

   countdown(seconds) {
        this.running = true;
        var self = this.work_seconds;
        self.started = true;
        var running_timer = setInterval(function() {

            self.print_junk();
            self.seconds -= 1
            $("#pom-time").replaceWith('<div id="pom-time">' + Timer.time_string(self.work_seconds) + '</div>')
            if(self.seconds <= 0 || self.pause)
                if( self.mode == "work" ) {
                    $("#pom-top").replaceWith('<div id="pom-top" class="break"><h1>Break Time Remaining</h1></div>')
                    self.mode = "break";
                    clearInterval(running_timer);
                    self.countdown(this.work_seconds);
                } else {
                    $("#pom-top").replaceWith('<div id="pom-top" class="work"><h1>Work Time Remaining</h1></div>')
                    self.mode = "work";
                    clearInterval(running_timer);
                    self.countdown(this.break_seconds);
                };
        }
            ,1000);
    }

    start_timer() {
        if(!this.running) {
            this.countdown(this.work_seconds);
        }
        
        this.pause = false;
    }

    pause_timer() {
        this.pause = true;
    }

    reset_timer() {
        this.set_seconds(25 * 60);
        this.pause = true;
    }    


    print_junk() {
        console.log("Alex & Dor are the BEST!")
    }
   reduce_time() {
    }
}


const myTimer = new Timer(5, 6);

console.log("seconds: " + myTimer.seconds);


// starting a session

// Session ends

// A break st