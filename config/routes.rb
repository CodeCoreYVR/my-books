Rails.application.routes.draw do
  root 'home#index'
  get '/search' => 'home#search'
  post '/search' => 'home#perform_search'
  resources :books, only: [:create, :update]
end
