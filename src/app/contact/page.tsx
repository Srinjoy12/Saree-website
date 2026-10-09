"use client";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-[1440px] mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl text-primary mb-6"
        >
          Visit the <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Boutique</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-secondary max-w-2xl mx-auto"
        >
          Experience the quiet luxury of Darsh Collections in person. Our boutique offers a serene environment to explore our handwoven masterpieces.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative aspect-[3/4] w-full bg-secondary/10 shadow-lg border border-accent/20"
        >
          <Image 
            src="/images/boutique/flagship-salon.jpg" 
            alt="Darsh Flagship Boutique Salon"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Side: Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col gap-12 pt-8"
        >
          <div>
            <h2 className="font-serif text-3xl text-primary mb-6">Store Details</h2>
            <ul className="flex flex-col gap-6 font-sans text-secondary">
              <li className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-primary font-medium mb-1">Address</strong>
                  {siteConfig.contact.address}
                  <a href={siteConfig.contact.mapLink} target="_blank" rel="noreferrer" className="block mt-2 text-xs uppercase tracking-widest text-accent hover:text-primary transition-colors">
                    Get Directions
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-primary font-medium mb-1">Hours</strong>
                  {siteConfig.contact.hours}
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full h-px bg-accent/20"></div>

          <div>
            <h2 className="font-serif text-3xl text-primary mb-6">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-background py-4 font-sans text-xs uppercase tracking-widest hover:bg-accent transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} 
                className="flex items-center justify-center gap-3 border border-primary text-primary py-4 font-sans text-xs uppercase tracking-widest hover:bg-primary/5 transition-colors"
              >
                <Phone size={16} /> Call Us
              </a>
            </div>
            <a 
              href={`mailto:${siteConfig.contact.email}`} 
              className="mt-4 flex items-center justify-center gap-3 border border-secondary/30 text-secondary py-4 font-sans text-xs uppercase tracking-widest hover:text-primary transition-colors"
            >
              <Mail size={16} /> {siteConfig.contact.email}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
