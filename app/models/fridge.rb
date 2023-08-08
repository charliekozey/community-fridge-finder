class Fridge < ActiveRecord::Base
    has_many :foods, dependent: :destroy
    has_many :users, through: :foods
end