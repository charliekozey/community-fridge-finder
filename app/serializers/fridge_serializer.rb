class FridgeSerializer < ActiveModel::Serializer
    attributes :location, :id
    has_many :foods
end