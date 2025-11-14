import { PlaneIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";

import { AboutPageText, TEAM_VALUES, STORY_POINTS, STATS, GlobalText } from "@/lib/text";
import Image from "next/image";


export default function Dfooter() {
  return (   
        <footer className="relative mt-20 border-t border-purple-200 bg-gradient-to-br footer-bg to-white">
          <div className="container py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image src="/logo_from_url.jpg" alt="Logo" width={40} height={40} className="rounded-2xl" />
                  <span className="font-bold text-white bg-clip-text text-transparent">
                    {GlobalText.appName}
                  </span>
                </div>
                <p className="text-white">{GlobalText.footerSlogan}</p>
              </div>
              
              <div>
                <h5 className="font-bold text-white mb-3">{GlobalText.quickLinks}</h5>
                <div className="space-y-2 ">
                  <a className="block text-white hover:text-white transition-colors" href="/">{GlobalText.homeLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/how-it-works">{GlobalText.howItWorksLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/pricing">{GlobalText.pricingLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/faq">{GlobalText.faqLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/about">{GlobalText.aboutLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/contact">{GlobalText.contactLink}</a>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold text-white mb-3">{GlobalText.legal}</h5>
                <div className="space-y-2 ">
                  <a className="block text-white hover:text-white transition-colors" href="/terms">{GlobalText.termsLink}</a>
                  <a className="block text-white hover:text-white transition-colors" href="/privacy">{GlobalText.privacyLink}</a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text text-white">
                {GlobalText.copyright}
                <p className="text-sm text-white">The Six-Hour Layover is permitted and licensed by the Pike Place Market Preservation and Development Authority (PDA) to operate tours in the Pike Place Market Historical District.</p>
                
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61580441967255" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br bg-light headings_color rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/sixhourlayoverseattle/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br bg-light headings_color rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@sixhourlayover_sea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-br bg-light headings_color rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow us on TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
  );
}
