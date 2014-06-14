class CreateStepsReadings < ActiveRecord::Migration
  def change
    create_table :steps_readings do |t|
      t.date :day
      t.integer :steps

      t.timestamps
    end
  end
end
