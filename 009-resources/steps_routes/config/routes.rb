Rails.application.routes.draw do
  root to: 'steps_readings#index'
  resources :steps_readings, path: :steps
end
