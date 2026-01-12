import { ProductData } from "@/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the product type
type Product = {
  id: number;
  slug: string;
  price: number;
  title: string;
  description: string;
  image: string;
};

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const {slug} = await params;
  console.log("Product Slug:", slug)
  const product = ProductData.find((product: Product) => product.slug === slug);
  console.log("Product:", product)

  if (!product) notFound();
  return (
    <div className="py-8 container mx-auto px-4 max-w-6xl">
     <div className="flex flex-col md:flex-row gap-16 mt-4">
  <div className="flex gap-3">
    <div className="flex flex-col gap-3">
      <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
        <Image
          src={product.image}
          width={300} height={300} alt="Thumbnail 1"
        />
      </div>
      <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
        <Image
          src={product.image}
          width={300}
          height={300}
          alt="Thumbnail 1"
        />
      </div>
      <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
        <Image
          src={product.image}
          width={300}
          height={300}
          alt="Thumbnail 1"
        />
      </div>
      <div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
         <Image
          src={product.image}
          width={300}
          height={300}
          alt="Thumbnail 1"
        />
      </div>
    </div>
    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
       <Image
          src={product.image}
          width={300}
          height={300}
          alt="Thumbnail 1"
        />
    </div>
  </div>
  <div className="text-sm w-full md:w-1/2">
    <h1 className="text-3xl font-medium">{product.title}</h1>
    <div className="mt-6">
      <p className="text-2xl font-medium">Rs: {product.price}</p>
      <span className="text-gray-500/70">(inclusive of all taxes)</span>
    </div>
    <p className="text-base font-medium mt-6">About Product</p>
    <ul className="list-disc ml-4 text-gray-500/70">
      <li>{product.description}</li>
    </ul>
    <div className="flex items-center mt-10 gap-4 text-base">
      <button className="w-full py-3.5 font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition cursor-pointer">
        Add to Cart
      </button>
      <button className="w-full py-3.5 font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition cursor-pointer">
        Buy now
      </button>
    </div>
  </div>
</div>

    </div>
  );
}
