class FoodSerializer < ActiveModel::Serializer
    attributes :name, :quantity, :id
    belongs_to :fridge
end