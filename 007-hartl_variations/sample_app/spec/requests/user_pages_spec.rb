require 'spec_helper'

describe "User pages" do
  let(:title_prefix) { "Ruby on Rails Tutorial Sample App" }
  subject { page }

  describe "signup page" do
    before { visit signup_path }
    it { should have_selector('h1','Sign up') }
    it { should have_title(title_prefix + ' | Sign Up') }
  end

  describe "profile page" do
    let(:user) { FactoryGirl.create(:user) }
    before { visit user_path(user) }

    it { should have_content(user.name) }
    it { should have_title(user.name) }
  end

end
