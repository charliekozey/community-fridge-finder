Rails.application.routes.draw do
  namespace :api do
    resources :foods
    resources :fridges
    resources :users
    get       '/sessions', to: 'sessions#index'
    get       '/login',   to: 'sessions#new'
    post      '/login',   to: 'sessions#create'
    delete    '/logout',  to: 'sessions#destroy'
  end


  get    "*path",    to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end