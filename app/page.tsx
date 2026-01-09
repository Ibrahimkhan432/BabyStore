import Category from "@/components/category/Category";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import Testimonial from "@/components/testimonial/Testimonial";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <div>
    <Hero/>
    <Category/>
    <Products/>
    <Testimonial/>
    <Footer/>
    </div>
  );
}
