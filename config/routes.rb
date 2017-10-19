Rails.application.routes.draw do
  devise_for :users
  root to: "websites#setup"
  resource :website
end
