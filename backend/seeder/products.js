const products = [
    {
    name: "Product1 Piese Radiator Comp1 Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Motor/Radiator/Piese",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "Marca", value: "Opel" }],
  },
  {
    name: "Product2 Turbina Comp2 Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Turbina",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "marca", value: "Audi" },
      { key: "model", value: "A5" },
    ],
  },
  {
    name: "Product3 Filtre Comp Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Filtre",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "marca", value: "Bmw" },
      { key: "model", value: "x5" },
    ],
  },
  {
    name: "Product4 Electrice Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Electrice",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product5 Directie Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Directie",
    images: [
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product6 Ambreiaj Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Ambreiaj",
    images: [
      { path: "/images/poza3.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product7 Rulmenti Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Rulmenti",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
      { path: "/images/poza2.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product8 Motor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Motor",
    images: [
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product9 Sistem de esapament Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Sistem de esapament",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product10 Motor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Motor",
    images: [
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product11 Ambreiaj Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Ambreiaj",
    images: [
      { path: "/images/poza3.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product12 Rulmenti Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Rulmenti",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
      { path: "/images/poza2.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product13 Electrice Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Electrice",
    images: [
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product14 Filtre Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Filtre",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product15 Turbina Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Turbina",
    images: [
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product16 Motor/Piston Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Motor/Piston",
    images: [
      { path: "/images/poza3.png" },
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product17 Arbori Cardanici Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Arbori Cardanici",
    images: [
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
      { path: "/images/poza2.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product18 Motor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Motor",
    images: [
      { path: "/images/poza2.png" },
      { path: "/images/poza1.png" },
      { path: "/images/poza3.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
]

module.exports = products
