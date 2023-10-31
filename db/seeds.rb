puts "🗑 Destroying existing entries..."
Fridge.destroy_all
User.destroy_all
Food.destroy_all

puts "🌱 Seeding fridges..."

fridge1 = Fridge.create(location: "Broome & Bowery")
fridge2 = Fridge.create(location: "Brownsville Free Fridge")
fridge3 = Fridge.create(location: "The Chelsea Fridge")

puts "🌱 Seeding users..."

user1 = User.create(username: "foodie212", email: "foo@protonmail.com", password_digest: "676767676")
user2 = User.create(username: "boobar36", email: "bb@protonmail.com", password_digest: "89898989")
user3 = User.create(username: "prometheus5", email: "prmths@protonmail.com", password_digest: "90909090")


puts "🌱 Seeding foods..."

food1 = Food.create(user_id: user1.id, fridge_id: fridge1.id, name: "potatoes", quantity: 3, category: "vegetagle")
food2 = Food.create(user_id: user2.id, fridge_id: fridge2.id, name: "milk", quantity: 1, category: "dairy")
food3 = Food.create(user_id: user3.id, fridge_id: fridge2.id, name: "green pepper", quantity: 4, category: "vegetagle")
food4 = Food.create(user_id: user1.id, fridge_id: fridge3.id, name: "Sub Sandwich", quantity: 1, category: "sandwich")
food5 = Food.create(user_id: user1.id, fridge_id: fridge1.id, name: "Burrito", quantity: 10, category: "Burrito")

puts "✅ Done seeding!"