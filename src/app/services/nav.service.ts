import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  getNavigationData() {
    return [
      {
        category: 'Women Ethnic',
        sections: [
          {
            title: 'All Women Ethnic',
            items: ['View All']
          },
          {
            title: 'Sarees',
            items: ['All Sarees', 'Silk Sarees', 'Cotton Sarees', 'Georgette Sarees', 'Chiffon Sarees', 'Satin Sarees', 'Embroidered Sarees']
          },
          {
            title: 'Kurtis',
            items: ['All Kurtis', 'Anarkali Kurtis', 'Rayon Kurtis', 'Cotton Kurtis', 'Embroidered Kurtis']
          },
          {
            title: 'Kurta Sets',
            items: ['All Kurta Sets', 'Cotton Kurta Sets', 'Embroidered Kurta Sets', 'Printed Kurta Sets']
          },
          {
            title: 'Suits & Dress Material',
            items: ['All Suits & Dress Material', 'Cotton Suits', 'Embroidered Suits', 'Chanderi Suits']
          },
          {
            title: 'Other Ethnic',
            items: ['Blouses', 'Dupattas', 'Lehanga', 'Gown', 'Ethnic Bottomwear']
          }
        ]
      },
      {
        category: 'Women Western',
        sections: [
          {
            title: 'Topwear',
            items: ['Tops', 'Dresses', 'Sweaters', 'Jumpsuits', 'T-shirts', 'Shirts', 'Blouses']
          },
          {
            title: 'Bottomwear',
            items: ['Jeans', 'Jeggings', 'Palazzos', 'Shorts', 'Skirts', 'Trousers', 'Leggings']
          },
          {
            title: 'Innerwear',
            items: ['Bra', 'Briefs', 'Sleepwear', 'Shapewear', 'Camisoles', 'Thermals']
          },
          {
            title: 'Sportswear',
            items: ['Sports Bras', 'Sports Shorts', 'Sports T-Shirts', 'Track Pants', 'Yoga Wear']
          }
        ]
      },
      {
        category: 'Men',
        sections: [
          {
            title: 'Top Wear',
            items: ['All Top Wear', 'T-Shirts', 'Shirts', 'Polo Shirts', 'Kurtas']
          },
          {
            title: 'Bottom Wear',
            items: ['Track Pants', 'Jeans', 'Trousers', 'Shorts', 'Formal Pants', 'Joggers']
          },
          {
            title: 'Men Footwear',
            items: ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sandals', 'Loafers']
          },
          {
            title: 'Men Accessories',
            items: ['Watches', 'Belts', 'Wallets', 'Sunglasses', 'Bags']
          }
        ]
      },
      {
        category: 'Kids',
        sections: [
          {
            title: 'Boys & Girls 2+ Years',
            items: ['Dresses', 'T-Shirts', 'Clothing Sets', 'Shorts', 'Jeans']
          },
          {
            title: 'Infant 0-2 Years',
            items: ['Rompers', 'Clothing Sets', 'Bodysuits', 'Dresses', 'T-Shirts']
          },
          {
            title: 'Toys & Accessories',
            items: ['Soft Toys', 'Footwear', 'Stationery', 'Watches', 'Bags & Backpacks']
          },
          {
            title: 'Baby Care',
            items: ['Diapers', 'Wipes', 'Baby Bath', 'Baby Cream & Lotion', 'Baby Powder']
          }
        ]
      },
      {
        category: 'Home & Kitchen',
        sections: [
          {
            title: 'Home Furnishing',
            items: ['Bedsheets', 'Curtains', 'Cushions & Covers', 'Blankets', 'Towels']
          },
          {
            title: 'Kitchen & Dining',
            items: ['Kitchen Storage', 'Cookware & Bakeware', 'Kitchen Tools', 'Dining & Serving']
          },
          {
            title: 'Home Decor',
            items: ['Wall Decor', 'Clocks', 'Showpieces', 'Photo Frames', 'Plants & Planters']
          },
          {
            title: 'Storage & Organization',
            items: ['Storage Boxes', 'Hangers', 'Organizers', 'Hooks & Holders']
          }
        ]
      },
      {
        category: 'Beauty & Health',
        sections: [
          {
            title: 'Makeup',
            items: ['Face', 'Eyes', 'Lips', 'Nails', 'Makeup Kits']
          },
          {
            title: 'Skincare',
            items: ['Face Moisturizer', 'Cleanser', 'Face Wash', 'Sunscreen', 'Face Serum']
          },
          {
            title: 'Haircare',
            items: ['Shampoo', 'Hair Conditioner', 'Hair Oil', 'Hair Mask', 'Hair Serum']
          },
          {
            title: 'Personal Care',
            items: ['Perfumes & Deos', 'Body Lotion', 'Body Wash', 'Soap']
          }
        ]
      },
      {
        category: 'Jewellery & Accessories',
        sections: [
          {
            title: 'Jewellery',
            items: ['All Jewellery', 'Earrings', 'Necklaces & Chains', 'Bangles & Bracelets', 'Rings', 'Jewellery Sets']
          },
          {
            title: 'Women Accessories',
            items: ['Watches', 'Hair Accessories', 'Sunglasses', 'Scarves & Stoles', 'Belts']
          },
          {
            title: 'Men Accessories',
            items: ['Watches', 'Belts', 'Wallets', 'Cufflinks', 'Card Holders']
          },
          {
            title: 'Premium Jewellery',
            items: ['Gold Jewellery', 'Silver Jewellery', 'Diamond Jewellery', 'Pearl Jewellery']
          }
        ]
      },
      {
        category: 'Bags & Footwear',
        sections: [
          {
            title: 'Women Bags',
            items: ['All Bags', 'Handbags', 'Clutches', 'Slingbags', 'Wallets', 'Backpacks']
          },
          {
            title: 'Women Footwear',
            items: ['All Footwear', 'Flats', 'Heels', 'Casual Shoes', 'Sports Shoes', 'Boots']
          },
          {
            title: 'Men Bags',
            items: ['All Bags', 'Backpacks', 'Wallets', 'Messenger Bags', 'Laptop Bags']
          },
          {
            title: 'Men Footwear',
            items: ['All Footwear', 'Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sandals']
          }
        ]
      },
      {
        category: 'Electronics',
        sections: [
          {
            title: 'Mobile & Accessories',
            items: ['All Mobile & Accessories', 'Smartphones', 'Feature Phones', 'Cases & Covers', 'Screen Protectors', 'Power Banks']
          },
          {
            title: 'Laptops & Computers',
            items: ['Laptops', 'Desktop PCs', 'Gaming Laptops', 'Computer Accessories', 'Computer Components']
          },
          {
            title: 'Audio & Wearables',
            items: ['Headphones', 'Earphones', 'Speakers', 'Smartwatches', 'Fitness Bands']
          },
          {
            title: 'Cameras & Accessories',
            items: ['DSLR Cameras', 'Action Cameras', 'Camera Lenses', 'Camera Accessories', 'Memory Cards']
          }
        ]
      },
      {
        category: 'Sports & Fitness',
        sections: [
          {
            title: 'Sports Equipment',
            items: ['Cricket', 'Football', 'Basketball', 'Badminton', 'Table Tennis', 'Swimming']
          },
          {
            title: 'Exercise & Fitness',
            items: ['Yoga Mats', 'Dumbbells', 'Exercise Bikes', 'Treadmills', 'Gym Accessories']
          },
          {
            title: 'Sports Wear',
            items: ['T-Shirts & Tops', 'Track Pants', 'Sports Shorts', 'Sports Shoes', 'Gym Wear']
          },
          {
            title: 'Supplements',
            items: ['Protein Supplements', 'Energy Drinks', 'Vitamins & Minerals', 'Weight Gainers']
          }
        ]
      },
      {
        category: 'Car & Bike',
        sections: [
          {
            title: 'Car Accessories',
            items: ['Car Care', 'Car Electronics', 'Car Fresheners', 'Car Covers', 'Car Mobile Holders']
          },
          {
            title: 'Bike Accessories',
            items: ['Helmets', 'Bike Care', 'Bike Covers', 'Locks & Security', 'Bike Mobile Holders']
          },
          {
            title: 'Tools & Spare Parts',
            items: ['Car Tools', 'Bike Tools', 'Car Spare Parts', 'Bike Spare Parts', 'Tyre & Wheel Care']
          },
          {
            title: 'Car Electronics',
            items: ['Car Chargers', 'Car Speakers', 'Car Cameras', 'GPS & Navigation', 'Car Air Purifiers']
          }
        ]
      }
    ];
  }
}