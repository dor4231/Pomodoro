class CreateWebsites < ActiveRecord::Migration[5.1]
  def change
    create_table :websites do |t|
      t.integer :hours
      t.integer :minutes

      t.timestamps
    end
  end
end
