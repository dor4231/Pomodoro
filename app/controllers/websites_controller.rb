class WebsitesController < ApplicationController
    def new
        @website = Website.new
    end

    def show
        @website = Website.new
    end

    def create
        variables = params[:post]
        
        website = Website.find(1)
        website.minutes = variables["minutes"]
        
        redirect_to "/website"
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

    helper_method :number_changer
end
