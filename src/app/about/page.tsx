import Image from "next/image";
import Footer from "@/app/_component/layouts/footer";
import Navbar from "@/app/_component/layouts/navbar";
import Explain from "@/app/_component/explain/index";
import Change from "@/app/_component/change/index";
import Discover from "@/app/_component/discover/index";
import ESG from "@/app/_component/esg/index";

export default function About() {
    return (
        <main className="flex-1">
            <div className="relative h-screen bg-cover bg-center bg-[#FFFFFF] pt-[50px]">
                <Navbar />
                <Explain />
                <Change />
                <Discover />
                <ESG />
            </div>
            {/* <div className="mt-3">
                <Footer />
            </div> */}
        </main>
    );
}