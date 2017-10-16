class WebsitesController < ApplicationController
    def new
        @website = Website.new
    end

    def show
        @website = Website.find(params[:format])
    end

    def create
        @website = Website.new
        @variables = params[:post]
        @website.hours = 60
        @minutes = @variables["minutes"]
        # website.minutes = variables["minutes"]
        @website.save
        
        
        redirect_to website_path(@website)
        # redirect_to website_path(:website => 3)
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
