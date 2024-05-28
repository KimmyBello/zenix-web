import Footer from "@/app/_component/layouts/footer";
import Navbar from "@/app/_component/layouts/navbar";
import GetQuote from "@/app/_component/get-quote";
import Welcome from "@/app/_component/homepage/welcome";
import Innovation from "@/app/_component/homepage/innovation";
import Service from "@/app/_component/homepage/service/service";
import UniQue from "@/app/_component/homepage/unique";
import WorkWithBrand from "@/app/_component/homepage/with-brand";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="relative h-screen bg-cover bg-center bg-[url('/assets/images/landing-page-bg.png')] pt-[50px]">
        <Navbar />
        <Welcome />
        <Innovation />
        <Service />
        <UniQue />
        <WorkWithBrand />
        <GetQuote />
        <Footer />
      </div>
    </main>
  );
}
