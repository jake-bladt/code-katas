class StepsController < ApplicationController
  def index
    @readings = StepsReading.all
  end

  def create
  end

  def new
    @reading = StepsReading.new
  end

  def edit
  end

  def show
  end

  def update
  end

  def destroy
  end
end
