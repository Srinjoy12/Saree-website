import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Darsh Collections",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-serif text-[120px] leading-none text-primary/10 mb-4">404</h1>
      <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
        A Lost Thread
      </h2>
      <p className="font-sans text-secondary max-w-md mx-auto mb-10 leading-relaxed">
        The page you are looking for has been moved or no longer exists. 
        Return to our collection to continue exploring the artistry of Indian weaves.
      </p>
      <Link 
        href="/sarees" 
        className="inline-block px-8 py-3 border border-primary text-primary font-sans text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-colors duration-500"
      >
        Explore the Catalogue
      </Link>
    </div>
  );
}
