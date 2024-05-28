import Footer from "@/app/_component/layouts/footer";
import Navbar from "@/app/_component/layouts/navbar";
import StartPage from "@/app/_component/solution/start-page";
import SulutionCount from "@/app/_component/solution/solution-count";
import SolutionsList from "@/app/_component/solution/solution-list";

export default function Solutions() {
  return (
    <main className="flex-1">
      <div className="relative h-[600px] bg-cover bg-center bg-[url('/assets/images/solutions/background.png')] pt-[50px]">
        <Navbar />
        <StartPage />
        <SulutionCount />
        <SolutionsList />
        <Footer />
      </div>
    </main>
  );
}
