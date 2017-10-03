class Timer {
    constructor(input_seconds=0) {
        this.seconds = parseInt(input_seconds);
        this.minutes = parseInt(this.seconds / 60);
        this.hours = parseInt(this.minutes / 60);
    }

    time() {
        var timeFormat = ["00", "00", "00"];
        //Convert the number of seconds to minutes
        if(this.seconds > 60) {
            // If needed convert the number of minutes to hours.
            if(this.minutes > 60) {
                timeFormat[0] =  this.numberChanger(this.hours);
                this.minutes -= this.hours * 60;
            }
            timeFormat[1] = this.numberChanger(this.minutes);
            this.seconds -= this.minutes * 60 + this.hours * 3600;
        }
        timeFormat[2] = this.numberChanger(this.seconds);
        return timeFormat[0] + ":" + timeFormat[1] + ":" + timeFormat[2];
    }

    reset_timer(new_seconds) {
    }

    numberChanger(number) {
        if(String(number).length > 1)
            return number;
        else
            return "0" + number;
    }   

    start_timer() {
        var self = this;
        var running_timer = setInterval(function() {
            self.print_junk();
            self.seconds -= 1;
            self.minutes = parseInt(self.seconds / 60);
            self.hours = parseInt(self.minutes / 60);
            $("#pom-time").replaceWith('<div id="pom-time">' + self.time() + '</div>')
            if(self.seconds == 0)
                clearInterval(running_timer);
        }
            ,1000);
    }


    print_junk() {
        console.log("JUNK!!!!!!!")
    }
   reduce_time() {
    }
}


const myTimer = new Timer(5);

console.log("seconds: " + myTimer.seconds);
