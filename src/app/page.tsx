import Image from "next/image";
import Footer from "@/app/_component/layouts/footer";
import Navbar from "./_component/layouts/navbar";
import Welcome from "@/app/_component/homepage/welcome";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative h-screen bg-cover bg-center bg-[url('/assets/images/landing-page-bg.png')] pt-[50px]">
        <Navbar />
        <Welcome />
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </main>
  );
}
