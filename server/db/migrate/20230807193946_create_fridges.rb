class CreateFridges < ActiveRecord::Migration[7.0]
  def change
    create_table :fridges do |t|
      t.string :location

      t.timestamps
    end
  end
end
