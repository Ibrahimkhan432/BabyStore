import { notFound } from 'next/navigation';

// Define the product type
type Product = {
  id: number;
  price: number;
  title: string;
  description: string;
  image: string;
};

// Sample products data - in a real app, this would come from a database or API
const products: Product[] = [
  {
    id: 1,
    price: 29,
    title: "Baby Onesie",
    description: "Soft and comfortable onesie for newborns",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    price: 35,
    title: "Baby Blanket",
    description: "Warm and cozy blanket for your little one",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    price: 19,
    title: "Baby Toys",
    description: "Safe and educational toys for infants",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    price: 45,
    title: "Baby Stroller",
    description: "Lightweight and easy to maneuver stroller",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    price: 22,
    title: "Baby Bottles",
    description: "BPA-free feeding bottles",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    price: 38,
    title: "Baby Carrier",
    description: "Ergonomic baby carrier for parents",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 7,
    price: 27,
    title: "Baby Bed",
    description: "Safe and comfortable crib for newborns",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    price: 15,
    title: "Baby Clothes",
    description: "Adorable clothing set for babies",
    image: "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
  }
];

// Get a product by ID
const getProductById = (id: string): Product | undefined => {
  const productId = parseInt(id, 10);
  return products.find(product => product.id === productId);
};

// Define the props for the page component
type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound(); // This will render the not-found.tsx page
  }

  return (
    <div className="py-8 container mx-auto px-4 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-96 object-contain md:h-full"
            />
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
            
            <div className="text-2xl font-bold text-indigo-600 mb-6">
              $ {product.price}.00
            </div>
            
            <p className="text-gray-700 text-base mb-6">
              {product.description}
            </p>
            
            <div className="flex space-x-4 mb-8">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Add to Cart
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                Buy Now
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Product Details</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Material: 100% Cotton</li>
                <li>Machine washable</li>
                <li>Available in multiple sizes</li>
                <li>Safety tested for infants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}