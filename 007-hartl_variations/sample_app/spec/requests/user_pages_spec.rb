require 'spec_helper'

describe "User pages" do
  let(:title_prefix) { "Ruby on Rails Tutorial Sample App" }
  subject { page }

  describe "signup page" do
    before { visit signup_path }
    it { should have_selector('h1','Sign up') }
    it { should have_title(title_prefix + ' | Sign up') }
  end
end
