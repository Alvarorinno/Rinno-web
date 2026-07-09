import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Purpose from "@/components/Purpose";
import Values from "@/components/Values";
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
        <Services />
        <Purpose />
        <Values />
        <Products />
        <Statement />
        <About />
        <BlogPreview />
      </main>
      <Contact />
    </div>
  );
}
