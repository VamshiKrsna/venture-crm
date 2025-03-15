import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <TopNav />
        <h1 className="text-4xl font-bold text-center mb-8">Revolutionized Customer Relationship!</h1>
      </div>
    </main>
  );
}
