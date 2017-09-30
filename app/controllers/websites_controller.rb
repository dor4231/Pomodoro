class WebsitesController < ApplicationController
    def new
        @website = Website.new
    end

    def show
        @website = Website.new
    end

    def create
        redirect_to "/website"
    end

    def setup
        
    end
end
