class Food < ActiveRecord::Base
  belongs_to :fridge
  belongs_to :user
end
