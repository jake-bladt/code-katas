class StepsReading < ActiveRecord::Base
  validates_presence_of :steps
  validates             :day, uniqueness: true, presence: true
end
