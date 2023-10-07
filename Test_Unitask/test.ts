interface Product {
  id: number;
  sku: string;
  productName: string;
  category: number;
}

interface Pricing {
  sku: string;
  price: number;
}

interface Category {
  id: number;
  name: string;
}

const products: Product[] = [
  {
    id: 1,
    sku: "abc",
    productName: "name 1",
    category: 1,
  },
  {
    id: 2,
    sku: "def",
    productName: "name 2",
    category: 2,
  },
  {
    id: 3,
    sku: "ghi",
    productName: "name 1",
    category: 2,
  },
  {
    id: 4,
    sku: "klm",
    productName: "name 1",
    category: 3,
  },
  {
    id: 5,
    sku: "xyz",
    productName: "name 1",
    category: 1,
  },
];

const pricing: Pricing[] = [
  {
    sku: "abc",
    price: 10,
  },
  {
    sku: "def",
    price: 20,
  },
  {
    sku: "ghi",
    price: 30,
  },
  {
    sku: "klm",
    price: 40,
  },
  {
    sku: "xyz",
    price: 50,
  },
];

const categories: Category[] = [
  {
    id: 1,
    name: "category 1",
  },
  {
    id: 2,
    name: "category 2",
  },
  {
    id: 3,
    name: "category 3",
  },
  {
    id: 4,
    name: "category 4",
  },
  {
    id: 5,
    name: "category 5",
  },
];

// Create an array to store the result
const result = products.map((product) => {
  const { id, sku, productName, category } = product;
  const productPricing = pricing.find((item) => item.sku === sku);
//   const categoryName = categories.find((item) => item.id === id);

  if (productPricing) {
    const { price } = productPricing;
    return {
      id,
      sku,
      productName,
      category,
      price
    };
  }
});

console.log(result);
