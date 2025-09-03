import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div className="bg-pink-50 min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
      </main>
    </div>
  );
}
