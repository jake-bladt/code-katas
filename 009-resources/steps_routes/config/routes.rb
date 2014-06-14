Rails.application.routes.draw do
  root to: 'steps#index'
  resources :steps
end
