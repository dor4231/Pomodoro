class CreateWebsites < ActiveRecord::Migration[5.1]
  def change
    create_table :websites do |t|
      t.integer :work_seconds
      t.integer :break_seconds
      t.integer :sessions

      t.timestamps
    end
  end
end
