require 'spec_helper'

describe "Static pages" do
  let(:title_prefix) { "Ruby on Rails Tutorial Sample App" }
  subject { page }

  describe "Home page" do
    before { visit root_path }
    it { should have_content('Sample App') }
    it { should have_title("#{title_prefix}") }
    it { should_not have_title('| Home') }
  end

  describe "Help page" do
    before { visit help_path }
    it { should have_content('Help') }
    it { should have_title("#{title_prefix} | Help") }
  end

  describe "About page" do
    before { visit about_path }
    it { should have_content('About Us') }
    it { should have_title("#{title_prefix} | About Us") }
  end

  describe "Contact page" do
    before { visit contact_path }
    it { should have_content('Contact Us') }
    it { should have_content('jake@jakebladt.com') }
    it { should have_title("#{title_prefix} | Contact Us") }
  end
end
