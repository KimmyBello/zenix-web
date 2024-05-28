import Image from "next/image";
import Footer from "@/app/_component/layouts/footer";
import Navbar from "@/app/_component/layouts/navbar";
import Explain from "@/app/_component/about/service/explain";
import Change from "@/app/_component/about/service/change";
import Discover from "@/app/_component/about/service/discover";
import ESG from "@/app/_component/about/service/esg";

export default function About() {
    return (
        <main className="flex-1">
            <div className="relative h-screen bg-cover bg-center bg-[#FFFFFF] pt-[50px]">
                <Navbar />
                <Explain />
                <Change />
                <Discover />
                <ESG />
                <Footer />
            </div>
        </main>
    );
}