import TopNav from "@/components/LandingPage/TopNav";
import Hero from "@/components/LandingPage/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <TopNav />
      <Hero />
    </main>
  );
}
