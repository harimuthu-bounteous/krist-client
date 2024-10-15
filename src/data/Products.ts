import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    productId: "1",
    name: "Classic White T-Shirt",
    category: "Men",
    price: 25.0,
    original_price: 30.0,
    available_stock: 120,
    rating: 4.7,
    total_reviews: 320,
    description:
      "A versatile classic white t-shirt made of soft cotton, perfect for layering or wearing alone.",
    colors: ["White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      {
        url: "/images/ClassicWhiteT-Shirt1.jpg",
        alt_text: "Front view of classic white t-shirt",
      },
      {
        url: "/images/ClassicWhiteT-Shirt2.jpg",
        alt_text: "Back view of classic white t-shirt",
      },
    ],
  },
  {
    productId: "2",
    name: "High-Waisted Denim Jeans",
    category: "Women",
    price: 55.0,
    original_price: 70.0,
    available_stock: 80,
    rating: 4.5,
    total_reviews: 150,
    description:
      "Stylish high-waisted denim jeans with a flattering fit and a hint of stretch for comfort.",
    colors: ["Light Blue", "Dark Blue", "Black"],
    sizes: ["24", "26", "28", "30", "32"],
    images: [
      {
        url: "/images/HighWaistedDenimJeans1.jpg",
        alt_text: "Front view of high-waisted jeans",
      },
      {
        url: "/images/HighWaistedDenimJeans2.jpg",
        alt_text: "Side view of high-waisted jeans",
      },
    ],
  },
  {
    productId: "3",
    name: "Casual Button-Up Shirt",
    category: "Men",
    price: 45.0,
    original_price: 60.0,
    available_stock: 50,
    rating: 4.6,
    total_reviews: 210,
    description:
      "A lightweight button-up shirt perfect for casual outings or smart-casual events.",
    colors: ["Navy", "White", "Gray"],
    sizes: ["M", "L", "XL"],
    images: [
      {
        url: "/images/CasualButton-UpShirt1.jpg",
        alt_text: "Front view of casual button-up shirt",
      },
      {
        url: "/images/CasualButton-UpShirt2.jpg",
        alt_text: "Back view of casual button-up shirt",
      },
    ],
  },
  {
    productId: "4",
    name: "Floral Maxi Dress",
    category: "Women",
    price: 70.0,
    original_price: 90.0,
    available_stock: 40,
    rating: 4.8,
    total_reviews: 180,
    description:
      "A flowy floral maxi dress perfect for summer outings and beach vacations.",
    colors: ["Pink", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      {
        url: "/images/FloralMaxiDress1.jpg",
        alt_text: "Front view of floral maxi dress",
      },
      {
        url: "/images/FloralMaxiDress2.jpg",
        alt_text: "Side view of floral maxi dress",
      },
    ],
  },
  {
    productId: "5",
    name: "Leather Jacket",
    category: "Men",
    price: 150.0,
    original_price: 200.0,
    available_stock: 25,
    rating: 4.9,
    total_reviews: 110,
    description:
      "A classic black leather jacket with a timeless design, perfect for any outfit.",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      {
        url: "/images/LeatherJacket1.jpg",
        alt_text: "Front view of leather jacket",
      },
      {
        url: "/images/LeatherJacket2.jpg",
        alt_text: "Side view of leather jacket",
      },
    ],
  },
  {
    productId: "6",
    name: "Canvas Sneakers",
    category: "Footwear",
    price: 40.0,
    original_price: 55.0,
    available_stock: 100,
    rating: 4.7,
    total_reviews: 230,
    description:
      "Comfortable canvas sneakers for everyday wear, available in multiple colors.",
    colors: ["White", "Black", "Red"],
    sizes: ["6", "7", "8", "9", "10"],
    images: [
      {
        url: "/images/CanvasSneakers1.jpg",
        alt_text: "Front view of canvas sneakers",
      },
      {
        url: "/images/CanvasSneakers2.jpg",
        alt_text: "Side view of canvas sneakers",
      },
    ],
  },
  {
    productId: "7",
    name: "Running Shorts",
    category: "Men",
    price: 35.0,
    original_price: 45.0,
    available_stock: 60,
    rating: 4.4,
    total_reviews: 150,
    description:
      "Lightweight running shorts designed for comfort and breathability during workouts.",
    colors: ["Gray", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      {
        url: "/images/RunningShorts1.jpg",
        alt_text: "Front view of running shorts",
      },
      {
        url: "/images/RunningShorts2.jpg",
        alt_text: "Back view of running shorts",
      },
    ],
  },
  {
    productId: "8",
    name: "Athletic Leggings",
    category: "Women",
    price: 50.0,
    original_price: 65.0,
    available_stock: 70,
    rating: 4.6,
    total_reviews: 130,
    description:
      "High-waisted athletic leggings with moisture-wicking fabric, perfect for yoga or running.",
    colors: ["Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      {
        url: "/images/AthleticLeggings1.jpg",
        alt_text: "Front view of athletic leggings",
      },
      {
        url: "/images/AthleticLeggings2.jpg",
        alt_text: "Back view of athletic leggings",
      },
    ],
  },
  {
    productId: "9",
    name: "Chino Pants",
    category: "Men",
    price: 45.0,
    original_price: 55.0,
    available_stock: 90,
    rating: 4.3,
    total_reviews: 75,
    description:
      "Smart casual chino pants that can be dressed up or down for any occasion.",
    colors: ["Beige", "Navy"],
    sizes: ["30", "32", "34"],
    images: [
      { url: "/images/ChinoPants1.jpg", alt_text: "Front view of chino pants" },
      { url: "/images/ChinoPants2.jpg", alt_text: "Side view of chino pants" },
    ],
  },
  {
    productId: "10",
    name: "Silk Scarf",
    category: "Accessories",
    price: 30.0,
    original_price: 40.0,
    available_stock: 40,
    rating: 4.8,
    total_reviews: 110,
    description:
      "Luxurious silk scarf with a beautiful print, perfect for adding a touch of elegance to any outfit.",
    colors: ["Red", "Blue", "Green"],
    sizes: ["One Size"],
    images: [
      { url: "/images/SilkScarf1.jpg", alt_text: "Silk scarf display" },
      { url: "/images/SilkScarf2.jpg", alt_text: "Silk scarf close-up" },
    ],
  },
  {
    productId: "11",
    name: "Winter Coat",
    category: "Women",
    price: 120.0,
    original_price: 160.0,
    available_stock: 30,
    rating: 4.5,
    total_reviews: 90,
    description:
      "A warm winter coat featuring a stylish design, perfect for cold weather.",
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      { url: "/images/WinterCoat1.jpg", alt_text: "Front view of winter coat" },
      { url: "/images/WinterCoat2.jpg", alt_text: "Back view of winter coat" },
    ],
  },
  {
    productId: "12",
    name: "Trendy Sunglasses",
    category: "Accessories",
    price: 25.0,
    original_price: 35.0,
    available_stock: 150,
    rating: 4.6,
    total_reviews: 220,
    description:
      "Stylish sunglasses that offer UV protection while adding a trendy touch to your outfit.",
    colors: ["Black", "Brown"],
    sizes: ["One Size"],
    images: [
      {
        url: "/images/TrendySunglasses1.jpg",
        alt_text: "Front view of trendy sunglasses",
      },
      {
        url: "/images/TrendySunglasses2.jpg",
        alt_text: "Side view of trendy sunglasses",
      },
    ],
  },
  {
    productId: "13",
    name: "Puffer Jacket",
    category: "Men",
    price: 130.0,
    original_price: 180.0,
    available_stock: 35,
    rating: 4.7,
    total_reviews: 160,
    description:
      "A lightweight puffer jacket that provides warmth without the bulk, perfect for layering.",
    colors: ["Black", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      {
        url: "/images/PufferJacket1.jpg",
        alt_text: "Front view of puffer jacket",
      },
      {
        url: "/images/PufferJacket2.jpg",
        alt_text: "Back view of puffer jacket",
      },
    ],
  },
  {
    productId: "14",
    name: "Basic Hoodie",
    category: "Men",
    price: 60.0,
    original_price: 75.0,
    available_stock: 90,
    rating: 4.5,
    total_reviews: 130,
    description:
      "A comfortable basic hoodie for casual wear, made with soft fabric.",
    colors: ["Gray", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      {
        url: "/images/BasicHoodie1.jpg",
        alt_text: "Front view of basic hoodie",
      },
      {
        url: "/images/BasicHoodie2.jpg",
        alt_text: "Back view of basic hoodie",
      },
    ],
  },
  {
    productId: "15",
    name: "Elegant Blouse",
    category: "Women",
    price: 50.0,
    original_price: 65.0,
    available_stock: 75,
    rating: 4.6,
    total_reviews: 95,
    description:
      "A beautiful elegant blouse perfect for both work and casual outings.",
    colors: ["White", "Pink"],
    sizes: ["S", "M", "L"],
    images: [
      {
        url: "/images/ElegantBlouse1.jpg",
        alt_text: "Front view of elegant blouse",
      },
      {
        url: "/images/ElegantBlouse2.jpg",
        alt_text: "Side view of elegant blouse",
      },
    ],
  },
  {
    productId: "16",
    name: "Chunky Knit Sweater",
    category: "Women",
    price: 70.0,
    original_price: 85.0,
    available_stock: 40,
    rating: 4.4,
    total_reviews: 100,
    description: "A cozy chunky knit sweater ideal for chilly weather.",
    colors: ["Cream", "Beige"],
    sizes: ["S", "M", "L"],
    images: [
      {
        url: "/images/ChunkyKnitSweater1.jpg",
        alt_text: "Front view of chunky knit sweater",
      },
      {
        url: "/images/ChunkyKnitSweater2.jpg",
        alt_text: "Back view of chunky knit sweater",
      },
    ],
  },
  {
    productId: "17",
    name: "Slip-On Loafers",
    category: "Men",
    price: 65.0,
    original_price: 85.0,
    available_stock: 80,
    rating: 4.8,
    total_reviews: 140,
    description: "Comfortable slip-on loafers for both casual and formal wear.",
    colors: ["Brown", "Black"],
    sizes: ["8", "9", "10", "11"],
    images: [
      {
        url: "/images/Slip-OnLoafers1.jpg",
        alt_text: "Front view of slip-on loafers",
      },
      {
        url: "/images/Slip-OnLoafers2.jpg",
        alt_text: "Side view of slip-on loafers",
      },
    ],
  },
  {
    productId: "18",
    name: "Belted Trench Coat",
    category: "Women",
    price: 110.0,
    original_price: 150.0,
    available_stock: 30,
    rating: 4.9,
    total_reviews: 120,
    description:
      "A stylish belted trench coat that adds sophistication to any outfit.",
    colors: ["Camel", "Black"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      {
        url: "/images/BeltedTrenchCoat1.jpg",
        alt_text: "Front view of belted trench coat",
      },
      {
        url: "/images/BeltedTrenchCoat2.jpg",
        alt_text: "Back view of belted trench coat",
      },
    ],
  },
  {
    productId: "19",
    name: "Ripped Skinny Jeans",
    category: "Women",
    price: 55.0,
    original_price: 70.0,
    available_stock: 60,
    rating: 4.4,
    total_reviews: 80,
    description: "Stylish ripped skinny jeans that add an edge to your outfit.",
    colors: ["Light Blue", "Dark Blue"],
    sizes: ["24", "26", "28", "30"],
    images: [
      {
        url: "/images/RippedSkinnyJeans1.jpg",
        alt_text: "Front view of ripped skinny jeans",
      },
      {
        url: "/images/RippedSkinnyJeans2.jpg",
        alt_text: "Side view of ripped skinny jeans",
      },
    ],
  },
  {
    productId: "20",
    name: "Graphic Tee",
    category: "Men",
    price: 25.0,
    original_price: 30.0,
    available_stock: 100,
    rating: 4.7,
    total_reviews: 150,
    description: "A fun graphic tee that expresses your style and personality.",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      { url: "/images/GraphicTee1.jpg", alt_text: "Front view of graphic tee" },
      { url: "/images/GraphicTee2.jpg", alt_text: "Back view of graphic tee" },
    ],
  },
];
