Rails.application.routes.draw do
  root to: "websites#setup"
  resource :website
end
