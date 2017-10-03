class Timer {
    constructor(input_seconds=0) {
        this.seconds = parseInt(input_seconds);
    }

    time() {
        var timeFormat = ["00", "00", "00"];
        var hours = parseInt(this.seconds / 3600);
        var minutes = parseInt((this.seconds % 3600) / 60);
        var seconds = parseInt(this.seconds % 60)

        timeFormat[0] = this.numberChanger(hours);
        timeFormat[1] = this.numberChanger(minutes);
        timeFormat[2] = this.numberChanger(seconds);

        return timeFormat[0] + ":" + timeFormat[1] + ":" + timeFormat[2];
    }

    set_seconds(new_seconds) {
        this.seconds = new_seconds;
    }

    numberChanger(number) {
        if(String(number).length > 1)
            return number;
        else
            return "0" + number;
    }

    start_timer() {
        var self = this;
        this.pause = false;
        var running_timer = setInterval(function() {

            self.print_junk();
            self.seconds -= 1
            $("#pom-time").replaceWith('<div id="pom-time">' + self.time() + '</div>')
            if(self.seconds <= 0 || self.pause)
                clearInterval(running_timer);
        }
            ,1000);
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


const myTimer = new Timer(25 * 60);

console.log("seconds: " + myTimer.seconds);
