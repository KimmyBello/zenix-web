import Footer from "@/app/_component/layouts/footer";
import Navbar from "@/app/_component/layouts/navbar";
import Product from "@/app/_component/products/product-list";

export default function DigitalProducts() {
  return (
    <main className="flex-1 pt-[50px]">
      <Navbar />
      <div className="flex flex-col max-w-screen-2xl mx-auto">
        <span className="text-[40px] text-[#C2131A] font-bold mt-[80px]">
          Digital Products
        </span>
        <div className="h-[400px] bg-cover bg-[url('/assets/images/digital-product/robot.png')] rounded-lg mt-[30px]" />
        <Product />
      </div>
      <Footer />
    </main>
  );
}
