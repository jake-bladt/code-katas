class StepsReadingsController < ApplicationController
  def index
    @readings = StepsReading.all
  end

  def create
    @reading = StepsReading.new(reading_params)
    if(@reading.save)
      flash[:success] = "Reading saved"
      redirect_to root_url
    else
      render 'new'
    end
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

  private

    def reading_params
      params.require(:steps_reading).permit(:day, :steps)
    end

end
