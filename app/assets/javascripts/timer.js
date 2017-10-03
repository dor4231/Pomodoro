class Timer {

    constructor(input_seconds=0) {
        var seconds = input_seconds;
        var minutes = @seconds / 60;
        var hours = @minutes / 60
    }

    seconds(new_seconds) {
        @seconds = new_seconds
        @minutes = @seconds / 60
        @hours = @minutes / 60
    }
}

    def time_string
    timeFormat = ["00", "00", "00"]
    #Convert the number of seconds to minutes
    if @seconds > 60
        # If needed convert the number of minutes to hours.
        if @minutes > 60
        timeFormat[0] =  self.numberChanger(@hours)
        @minutes -= @hours * 60

        end
        timeFormat[1] = self.numberChanger(@minutes)
        @seconds -= @minutes * 60 + @hours * 3600
    end
    timeFormat[2] = self.numberChanger(@seconds)
    timeFormat[0] + ":" + timeFormat[1] + ":" + timeFormat[2]
    end

    def numberChanger number
    number = number.to_s
    if number.length > 1
        return number
    else
        return "0" + number
    end
    end
    end
}