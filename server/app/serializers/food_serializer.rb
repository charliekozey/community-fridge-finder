class FoodSerializer < ActiveModel::Serializer
    attributes :name, :quantity
    belongs_to :fridge
end