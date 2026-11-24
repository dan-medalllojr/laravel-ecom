<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Keychron K2 Pro Wireless Mechanical Keyboard',
                'description' => 'Compact 75% wireless mechanical keyboard with hot-swappable switches, PBT keycaps, and multi-device Bluetooth/USB-C support.',
                'price' => 94.99,
                'image' => 'products/keychron-k2-pro.jpg',
                'category' => 'Electronics',
                'brand' => 'Keychron',
                'stock' => 25,
                'is_featured' => true,
                'in_new' => true,
            ],
            [
                'name' => 'Logitech MX Master 3S Wireless Mouse',
                'description' => 'Ergonomic wireless mouse featuring an 8,000 DPI darkfield sensor, quiet clicks, and MagSpeed electromagnetic scrolling.',
                'price' => 99.00,
                'image' => 'products/mx-master-3s.jpg',
                'category' => 'Electronics',
                'brand' => 'Logitech',
                'stock' => 40,
                'is_featured' => true,
                'in_new' => false,
            ],
            [
                'name' => 'Anker 737 GaNPrime 120W 3-Port Charger',
                'description' => 'High-output GaN wall charger with two USB-C ports and one USB-A port plus smart power allocation for laptops and phones.',
                'price' => 79.99,
                'image' => 'products/anker-737-120w.jpg',
                'category' => 'Accessories',
                'brand' => 'Anker',
                'stock' => 32,
                'is_featured' => false,
                'in_new' => true,
            ],
            [
                'name' => 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
                'description' => 'Over-ear wireless headphones with adaptive active noise cancellation, crystal-clear call mics, and up to 30 hours of battery life.',
                'price' => 348.00,
                'image' => 'products/sony-wh1000xm5.jpg',
                'category' => 'Audio',
                'brand' => 'Sony',
                'stock' => 15,
                'is_featured' => true,
                'in_new' => false,
            ],
            [
                'name' => 'Samsung T7 Shield 2TB Portable SSD',
                'description' => 'Rugged IP65-rated external USB 3.2 Gen 2 solid-state drive with read speeds up to 1,050 MB/s for fast backups and media work.',
                'price' => 159.99,
                'image' => 'products/samsung-t7-shield-2tb.jpg',
                'category' => 'Storage',
                'brand' => 'Samsung',
                'stock' => 18,
                'is_featured' => false,
                'in_new' => true,
            ],
            [
                'name' => 'Bellroy Classic Backpack Compact',
                'description' => 'Everyday commuter backpack crafted from water-resistant woven fabric with a dedicated 15-inch laptop sleeve and quick-access pockets.',
                'price' => 129.00,
                'image' => 'products/bellroy-classic-compact.jpg',
                'category' => 'Bags & Gear',
                'brand' => 'Bellroy',
                'stock' => 12,
                'is_featured' => false,
                'in_new' => false,
            ],
            [
                'name' => 'Hydro Flask 32oz Wide Mouth Insulated Bottle',
                'description' => 'Double-wall vacuum-insulated stainless steel bottle that keeps cold drinks chilled for 24 hours and hot drinks warm for 12 hours.',
                'price' => 44.95,
                'image' => 'products/hydro-flask-32oz.jpg',
                'category' => 'Lifestyle',
                'brand' => 'Hydro Flask',
                'stock' => 50,
                'is_featured' => false,
                'in_new' => false,
            ],
            [
                'name' => 'Minimalist Desk Mat Extra Large',
                'description' => 'Smooth micro-weave desk mat with stitched edges and a non-slip natural rubber base to protect your workspace and glide your mouse.',
                'price' => 29.50,
                'image' => null,
                'category' => 'Desk Setup',
                'brand' => null,
                'stock' => 0,
                'is_featured' => false,
                'in_new' => true,
            ],
        ];

        foreach ($products as $product) {
            Product::create([
                ...$product,
                'slug' => Str::slug($product['name']),
            ]);
        }
    }
}
