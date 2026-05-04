require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb+srv://sooryathejusk_db_user:PgqF6315EZNdZ9eX@cluster0.pl1dhpv.mongodb.net/terrafitdb?retryWrites=true&w=majority&appName=Cluster0')
    .then(async () => {
        console.log('✅ Connected!');

        await Product.deleteMany(); // clear old products

        await Product.insertMany([
            {
                name: 'Running Shoes',
                price: 1499,
                description: 'Lightweight running shoes for everyday training',
                image: 'https://via.placeholder.com/300',
                category: 'Footwear',
                stock: 20
            },
            {
                name: 'Yoga Mat',
                price: 799,
                description: 'Non-slip yoga mat for home workouts',
                image: 'https://via.placeholder.com/300',
                category: 'Equipment',
                stock: 15
            },
            {
                name: 'Protein Shake',
                price: 999,
                description: 'Chocolate flavour whey protein 1kg',
                image: 'https://via.placeholder.com/300',
                category: 'Nutrition',
                stock: 50
            },
            {
                name: 'Gym Gloves',
                price: 399,
                description: 'Anti-slip gym gloves for weight training',
                image: 'https://via.placeholder.com/300',
                category: 'Accessories',
                stock: 30
            }
        ]);

        console.log('✅ Sample products added!');
        process.exit(0);
    })
    .catch(err => {
        console.log('❌ Error:', err.message);
        process.exit(1);
    });