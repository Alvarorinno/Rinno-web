import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Statement from "@/components/Statement";
import About from "@/components/About";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="bg-rinno-iceblue text-rinno-midnight">
          <Services />
        </div>
        <Products />
        <Statement />
        <About />
        <BlogPreview />
      </main>
      <Contact />
    </div>
  );
}
