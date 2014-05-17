FactoryGirl.define do
  factory :user do
    name     "Jake Bladt"
    email    "jake@jakebladt.com"
    password "foobar"
    password_confirmation "foobar"
  end
end
