class WebsitesController < ApplicationController
    def new
        @website = Website.new
    end

    def show
        @website = Website.find(params[:format])
    end

    def create
        @website = Website.new
        p @website
        variables = params[:post]

        # Calculates work duration in minutes
        current_time = Time.now
        current_time_in_minutes = (current_time.hour * 60) + current_time.min
        finish_time_in_minutes = (variables["hours"].to_i * 60) + variables["minutes"].to_i
        total_time = finish_time_in_minutes - current_time_in_minutes

        
        # Breaking the time into sessions
        data = session_breaker(total_time)
        p data 
        remaining_time = (data[:remaining]/ (data[:work]*2)-1)

        # Set the data into the Website object and save it to the FB
        @website.sessions = data[:work]
        @website.work_seconds = 5 #(remaining_time + 0) * 60
        @website.break_seconds = 7#(remaining_time + 0) * 60
        @website.save
        
        redirect_to website_path(@website)
    end

    def setup
        
    end

    def number_changer(number)
        if number.to_s.length < 2
            "0" + number.to_s
        else
            number
        end
    end

    def session_breaker(total_time)
        toggle = true
        time = total_time
        data = {break: 0, work: 0, remaining: 0}
        while true
            if toggle && time > 25 
                data[:work] += 1
                time -= 25
                toggle = false
            elsif !toggle && time > 25
                data[:break] += 1
                time -= 5
                toggle = true
            else
                data[:remaining] = time
                return data 
            end
        end
    end

    helper_method :number_changer
end
