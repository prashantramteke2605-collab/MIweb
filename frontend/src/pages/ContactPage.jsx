import { useEffect } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../lib/content";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <article
      className="relative bg-[#06060A] pt-36 pb-28 min-h-screen overflow-hidden"
      data-testid="contact-page"
    >
      <div className="absolute top-20 -right-40 w-[700px] h-[700px] orb orb--lime opacity-40" />
      <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] orb orb--ember opacity-30" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          
          {/* Left Column: Headings & Text */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="eyebrow mb-4">Contact</div>
              <h1 className="display-xxl leading-[0.95]">
                Let's build something <span className="text-lime">ambitious.</span>
              </h1>
              <p className="font-editorial text-xl md:text-2xl text-white/75 mt-8 leading-[1.3] max-w-2xl">
                {CONTACT.body}
              </p>
            </motion.div>
          </div>

          {/* Right Column: QR Code & Contact Info */}
          <div className="lg:col-span-5 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-3xl border border-line bg-white/[0.02] p-8 md:p-12 flex flex-col items-center text-center space-y-10"
            >
              {/* QR Code Container */}
              <div className="bg-white p-4 rounded-2xl w-full max-w-[280px] aspect-square flex items-center justify-center shadow-2xl">
                <img 
                  src="/images/Talk_to_us.png" 
                  alt="Scan to Contact" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              {/* Email, Phone & Rooms block */}
              <div className="space-y-6 w-full">
                
                {/* Email Block */}
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2">
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-display text-3xl text-lime hover:text-white transition-colors duration-300"
                    data-testid="contact-email"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                {/* NEW Phone Number Block */}
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2">
                    Phone
                  </div>
                  <a
                    /* Make sure to change this href to your actual number without spaces/dashes */
                    href="tel:+15550000000" 
                    className="font-display text-3xl text-lime hover:text-white transition-colors duration-300"
                  >
                    {/* Change this text to how you want the number displayed */}
                    +91 8320 262 013
                  </a>
                </div>
                
                {/* Rooms Block */}
                <div className="pt-6 border-t border-line/50">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2">
                    Our rooms
                  </div>
                  <div className="text-white/80">
                    R&D Heads · Marketing VPs · CEOs at Fortune 500 FMCG
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </article>
  );
}