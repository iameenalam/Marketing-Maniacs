import Hero from "@/components/main/hero";
import About from "@/components/main/About";
import Counter from "@/components/main/Counter";
import Services from "@/components/main/services";
import TrustedClients from "@/components/main/Clients";
import Testimonials from "@/components/main/Testimonials";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        {/* <Counter /> */}
        <Services />
        <TrustedClients />
        <Testimonials />
      </div>
    </main>
  );
}