# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

puts "#{User.count} users created"

@Comment1 = Comment.create!(comment: 'Hello', user: @admin)
@Comment2 = Comment.create!(comment: '')
@Comment3 = Comment.create!(comment: '')
@Comment4 = Comment.create!(comment: '')
@Comment5 = Comment.create!(comment: '')

puts "#{Comment.count} comments created"

