import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    ProductId: "1",
    Name: "Classic White T-Shirt",
    Category: "Men",
    Price: 25.0,
    OriginalPrice: 30.0,
    AvailableStock: 120,
    Rating: 4.7,
    TotalReviews: 320,
    Description:
      "A versatile classic white t-shirt made of soft cotton, perfect for layering or wearing alone.",
    Colors: ["White"],
    Sizes: ["S", "M", "L", "XL", "XXL"],
    Images: [
      {
        Url: "https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_Images/ClassicWhiteT-Shirt1.jpg",
        AltText: "Front view of classic white t-shirt",
      },
      {
        Url: "https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_Images/ClassicWhiteT-Shirt2.jpg",
        AltText: "Back view of classic white t-shirt",
      },
      {
        Url: "https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_Images/ClassicWhiteT-Shirt3.jpg",
        AltText: "Only classic white t-shirt",
      },
    ],
  },
  {
    ProductId: "2",
    Name: "High-Waisted Denim Jeans",
    Category: "Women",
    Price: 55.0,
    OriginalPrice: 70.0,
    AvailableStock: 80,
    Rating: 4.5,
    TotalReviews: 150,
    Description:
      "Stylish high-waisted denim jeans with a flattering fit and a hint of stretch for comfort.",
    Colors: ["Light Blue", "Dark Blue", "Black"],
    Sizes: ["24", "26", "28", "30", "32"],
    Images: [
      {
        Url: "/images/HighWaistedDenimJeans1.jpg",
        AltText: "Front view of high-waisted jeans",
      },
      {
        Url: "/images/HighWaistedDenimJeans2.jpg",
        AltText: "Side view of high-waisted jeans",
      },
    ],
  },
  {
    ProductId: "3",
    Name: "Casual Button-Up Shirt",
    Category: "Men",
    Price: 45.0,
    OriginalPrice: 60.0,
    AvailableStock: 50,
    Rating: 4.6,
    TotalReviews: 210,
    Description:
      "A lightweight button-up shirt perfect for casual outings or smart-casual events.",
    Colors: ["Navy", "White", "Gray"],
    Sizes: ["M", "L", "XL"],
    Images: [
      {
        Url: "/images/CasualButton-UpShirt1.jpg",
        AltText: "Front view of casual button-up shirt",
      },
      {
        Url: "/images/CasualButton-UpShirt2.jpg",
        AltText: "Back view of casual button-up shirt",
      },
    ],
  },
  {
    ProductId: "4",
    Name: "Floral Maxi Dress",
    Category: "Women",
    Price: 70.0,
    OriginalPrice: 90.0,
    AvailableStock: 40,
    Rating: 4.8,
    TotalReviews: 180,
    Description:
      "A flowy floral maxi dress perfect for summer outings and beach vacations.",
    Colors: ["Pink", "Blue"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      {
        Url: "/images/FloralMaxiDress1.jpg",
        AltText: "Front view of floral maxi dress",
      },
      {
        Url: "/images/FloralMaxiDress2.jpg",
        AltText: "Side view of floral maxi dress",
      },
    ],
  },
  {
    ProductId: "5",
    Name: "Leather Jacket",
    Category: "Men",
    Price: 150.0,
    OriginalPrice: 200.0,
    AvailableStock: 25,
    Rating: 4.9,
    TotalReviews: 110,
    Description:
      "A classic black leather jacket with a timeless design, perfect for any outfit.",
    Colors: ["Black"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      {
        Url: "/images/LeatherJacket1.jpg",
        AltText: "Front view of leather jacket",
      },
      {
        Url: "/images/LeatherJacket2.jpg",
        AltText: "Side view of leather jacket",
      },
    ],
  },
  {
    ProductId: "6",
    Name: "Canvas Sneakers",
    Category: "Footwear",
    Price: 40.0,
    OriginalPrice: 55.0,
    AvailableStock: 100,
    Rating: 4.7,
    TotalReviews: 230,
    Description:
      "Comfortable canvas sneakers for everyday wear, available in multiple colors.",
    Colors: ["White", "Black", "Red"],
    Sizes: ["6", "7", "8", "9", "10"],
    Images: [
      {
        Url: "/images/CanvasSneakers1.jpg",
        AltText: "Front view of canvas sneakers",
      },
      {
        Url: "/images/CanvasSneakers2.jpg",
        AltText: "Side view of canvas sneakers",
      },
    ],
  },
  {
    ProductId: "7",
    Name: "Running Shorts",
    Category: "Men",
    Price: 35.0,
    OriginalPrice: 45.0,
    AvailableStock: 60,
    Rating: 4.4,
    TotalReviews: 150,
    Description:
      "Lightweight running shorts designed for comfort and breathability during workouts.",
    Colors: ["Gray", "Blue"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      {
        Url: "/images/RunningShorts1.jpg",
        AltText: "Front view of running shorts",
      },
      {
        Url: "/images/RunningShorts2.jpg",
        AltText: "Back view of running shorts",
      },
    ],
  },
  {
    ProductId: "8",
    Name: "Athletic Leggings",
    Category: "Women",
    Price: 50.0,
    OriginalPrice: 65.0,
    AvailableStock: 70,
    Rating: 4.6,
    TotalReviews: 130,
    Description:
      "High-waisted athletic leggings with moisture-wicking fabric, perfect for yoga or running.",
    Colors: ["Black", "Navy"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      {
        Url: "/images/AthleticLeggings1.jpg",
        AltText: "Front view of athletic leggings",
      },
      {
        Url: "/images/AthleticLeggings2.jpg",
        AltText: "Back view of athletic leggings",
      },
    ],
  },
  {
    ProductId: "9",
    Name: "Chino Pants",
    Category: "Men",
    Price: 45.0,
    OriginalPrice: 55.0,
    AvailableStock: 90,
    Rating: 4.3,
    TotalReviews: 75,
    Description:
      "Smart casual chino pants that can be dressed up or down for any occasion.",
    Colors: ["Beige", "Navy"],
    Sizes: ["30", "32", "34"],
    Images: [
      { Url: "/images/ChinoPants1.jpg", AltText: "Front view of chino pants" },
      { Url: "/images/ChinoPants2.jpg", AltText: "Side view of chino pants" },
    ],
  },
  {
    ProductId: "10",
    Name: "Silk Scarf",
    Category: "Accessories",
    Price: 30.0,
    OriginalPrice: 40.0,
    AvailableStock: 40,
    Rating: 4.8,
    TotalReviews: 110,
    Description:
      "Luxurious silk scarf with a beautiful print, perfect for adding a touch of elegance to any outfit.",
    Colors: ["Red", "Blue", "Green"],
    Sizes: ["One Size"],
    Images: [
      { Url: "/images/SilkScarf1.jpg", AltText: "Silk scarf display" },
      { Url: "/images/SilkScarf2.jpg", AltText: "Silk scarf close-up" },
    ],
  },
  {
    ProductId: "11",
    Name: "Winter Coat",
    Category: "Women",
    Price: 120.0,
    OriginalPrice: 160.0,
    AvailableStock: 30,
    Rating: 4.5,
    TotalReviews: 90,
    Description:
      "A warm winter coat featuring a stylish design, perfect for cold weather.",
    Colors: ["Black", "Gray"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      { Url: "/images/WinterCoat1.jpg", AltText: "Front view of winter coat" },
      { Url: "/images/WinterCoat2.jpg", AltText: "Back view of winter coat" },
    ],
  },
  {
    ProductId: "12",
    Name: "Trendy Sunglasses",
    Category: "Accessories",
    Price: 25.0,
    OriginalPrice: 35.0,
    AvailableStock: 150,
    Rating: 4.6,
    TotalReviews: 220,
    Description:
      "Stylish sunglasses that offer UV protection while adding a trendy touch to your outfit.",
    Colors: ["Black", "Brown"],
    Sizes: ["One Size"],
    Images: [
      {
        Url: "/images/TrendySunglasses1.jpg",
        AltText: "Front view of trendy sunglasses",
      },
      {
        Url: "/images/TrendySunglasses2.jpg",
        AltText: "Side view of trendy sunglasses",
      },
    ],
  },
  {
    ProductId: "13",
    Name: "Puffer Jacket",
    Category: "Men",
    Price: 130.0,
    OriginalPrice: 180.0,
    AvailableStock: 35,
    Rating: 4.7,
    TotalReviews: 160,
    Description:
      "A lightweight puffer jacket that provides warmth without the bulk, perfect for layering.",
    Colors: ["Black", "Olive"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      {
        Url: "/images/PufferJacket1.jpg",
        AltText: "Front view of puffer jacket",
      },
      {
        Url: "/images/PufferJacket2.jpg",
        AltText: "Back view of puffer jacket",
      },
    ],
  },
  {
    ProductId: "14",
    Name: "Basic Hoodie",
    Category: "Men",
    Price: 60.0,
    OriginalPrice: 75.0,
    AvailableStock: 90,
    Rating: 4.5,
    TotalReviews: 130,
    Description:
      "A comfortable basic hoodie for casual wear, made with soft fabric.",
    Colors: ["Gray", "Navy"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      {
        Url: "/images/BasicHoodie1.jpg",
        AltText: "Front view of basic hoodie",
      },
      {
        Url: "/images/BasicHoodie2.jpg",
        AltText: "Back view of basic hoodie",
      },
    ],
  },
  {
    ProductId: "15",
    Name: "Elegant Blouse",
    Category: "Women",
    Price: 50.0,
    OriginalPrice: 65.0,
    AvailableStock: 75,
    Rating: 4.6,
    TotalReviews: 95,
    Description:
      "A beautiful elegant blouse perfect for both work and casual outings.",
    Colors: ["White", "Pink"],
    Sizes: ["S", "M", "L"],
    Images: [
      {
        Url: "/images/ElegantBlouse1.jpg",
        AltText: "Front view of elegant blouse",
      },
      {
        Url: "/images/ElegantBlouse2.jpg",
        AltText: "Side view of elegant blouse",
      },
    ],
  },
  {
    ProductId: "16",
    Name: "Chunky Knit Sweater",
    Category: "Women",
    Price: 70.0,
    OriginalPrice: 85.0,
    AvailableStock: 40,
    Rating: 4.4,
    TotalReviews: 100,
    Description: "A cozy chunky knit sweater ideal for chilly weather.",
    Colors: ["Cream", "Beige"],
    Sizes: ["S", "M", "L"],
    Images: [
      {
        Url: "/images/ChunkyKnitSweater1.jpg",
        AltText: "Front view of chunky knit sweater",
      },
      {
        Url: "/images/ChunkyKnitSweater2.jpg",
        AltText: "Back view of chunky knit sweater",
      },
    ],
  },
  {
    ProductId: "17",
    Name: "Slip-On Loafers",
    Category: "Men",
    Price: 65.0,
    OriginalPrice: 85.0,
    AvailableStock: 80,
    Rating: 4.8,
    TotalReviews: 140,
    Description: "Comfortable slip-on loafers for both casual and formal wear.",
    Colors: ["Brown", "Black"],
    Sizes: ["8", "9", "10", "11"],
    Images: [
      {
        Url: "/images/Slip-OnLoafers1.jpg",
        AltText: "Front view of slip-on loafers",
      },
      {
        Url: "/images/Slip-OnLoafers2.jpg",
        AltText: "Side view of slip-on loafers",
      },
    ],
  },
  {
    ProductId: "18",
    Name: "Belted Trench Coat",
    Category: "Women",
    Price: 110.0,
    OriginalPrice: 150.0,
    AvailableStock: 30,
    Rating: 4.9,
    TotalReviews: 120,
    Description:
      "A stylish belted trench coat that adds sophistication to any outfit.",
    Colors: ["Camel", "Black"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      {
        Url: "/images/BeltedTrenchCoat1.jpg",
        AltText: "Front view of belted trench coat",
      },
      {
        Url: "/images/BeltedTrenchCoat2.jpg",
        AltText: "Back view of belted trench coat",
      },
    ],
  },
  {
    ProductId: "19",
    Name: "Ripped Skinny Jeans",
    Category: "Women",
    Price: 55.0,
    OriginalPrice: 70.0,
    AvailableStock: 60,
    Rating: 4.4,
    TotalReviews: 80,
    Description: "Stylish ripped skinny jeans that add an edge to your outfit.",
    Colors: ["Light Blue", "Dark Blue"],
    Sizes: ["24", "26", "28", "30"],
    Images: [
      {
        Url: "/images/RippedSkinnyJeans1.jpg",
        AltText: "Front view of ripped skinny jeans",
      },
      {
        Url: "/images/RippedSkinnyJeans2.jpg",
        AltText: "Side view of ripped skinny jeans",
      },
    ],
  },
  {
    ProductId: "20",
    Name: "Graphic Tee",
    Category: "Men",
    Price: 25.0,
    OriginalPrice: 30.0,
    AvailableStock: 100,
    Rating: 4.7,
    TotalReviews: 150,
    Description: "A fun graphic tee that expresses your style and personality.",
    Colors: ["Black", "White"],
    Sizes: ["S", "M", "L", "XL"],
    Images: [
      { Url: "/images/GraphicTee1.jpg", AltText: "Front view of graphic tee" },
      { Url: "/images/GraphicTee2.jpg", AltText: "Back view of graphic tee" },
    ],
  },
];
