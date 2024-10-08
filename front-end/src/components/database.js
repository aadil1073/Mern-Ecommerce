const db = {
    products:[
        {
            id: 1,
            name: 'Sony WX-5',
            category: 'Headphones',
            price: 100.75,
            rating: 3,
            color: 'red',
            size: 'S',
            details: {
                product: "",
                warranty: "",
                merchant: ""
            },
            image: 'product-1-square',
            images: ['product-1-square', 'product-1-square', 'product-1-square',]
        },

        {
            id: 2,
            name: 'Apple Watch 2',
            category: 'Smart Watch',
            price: 500.75,
            rating: 4,
            color: 'black',
            size: '',
            details: {
                product: "",
                warranty: "",
                merchant: ""
            },
            image: 'product-2-square',
            images: ['product-2-square', 'product-2-square', 'product-2-square',]
        },
        {
            id: 3,
            name: 'Apple iphone 11',
            category: 'Mobile',
            price: 799.75,
            rating: 4,
            color: 'red',
            size: 'S',
            details: {
                product: "",
                warranty: "",
                merchant: ""
            },
            image: 'product-3-square',
            images: ['product-3-square', 'product-3-square', 'product-3-square',]
        },
        {
            "name": "Canon EOS R5",
            "category": "Camera",
            "price": 3899,
            "rating": 4.7,
            "image": "product-4-square.jpg",
            "images": ["product-4.jpg", "product-4-2.jpg", "product-4-3.jpg"],
            "color": "red",
            "size": "L",
            "details": {
              "brand": "Canon",
              "sensor": "Full-frame CMOS",
              "megapixels": "45 MP",
              "video_resolution": "8K"
            },
            "comments": [
              { "body": "Best camera for professionals.", "date": "2024-07-15" },
              { "body": "Expensive but worth every penny.", "date": "2024-07-20" }
            ]
          }          
    ]
}


export default db;