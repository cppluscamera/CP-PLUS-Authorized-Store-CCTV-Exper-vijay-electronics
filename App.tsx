
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GeminiExpert from './components/GeminiExpert';
import { Icons, CONTACT_INFO, SOCIAL_LINKS } from './constants';

const SectionHeader: React.FC<{ title: string; subtitle: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-16 text-center">
    <h2 className={`text-sm font-black uppercase tracking-[0.4em] mb-4 ${light ? 'text-blue-400' : 'text-blue-600'}`}>
      {subtitle}
    </h2>
    <h3 className={`text-4xl md:text-6xl font-black tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h3>
  </div>
);

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-2">
    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h4 className="text-2xl font-bold text-slate-900 mb-4">{title}</h4>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center text-blue-600 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      Learn More <span className="ml-2">→</span>
    </div>
  </div>
);

const PricingCard: React.FC<{ name: string; price: string; features: string[]; popular?: boolean }> = ({ name, price, features, popular }) => (
  <div className={`relative p-10 rounded-[3rem] border-2 transition-all duration-500 ${popular ? 'bg-slate-900 border-[#f1c40f] scale-105 shadow-2xl z-10' : 'bg-white border-slate-100 hover:border-blue-200'}`}>
    {popular && (
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#f1c40f] text-slate-900 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
        Recommended
      </div>
    )}
    <h4 className={`text-2xl font-bold mb-2 ${popular ? 'text-white' : 'text-slate-900'}`}>{name}</h4>
    <div className="mb-8">
      <span className={`text-4xl font-black ${popular ? 'text-white' : 'text-slate-900'}`}>{price}</span>
      <span className="text-slate-500 text-sm ml-2">/ installation</span>
    </div>
    <ul className="space-y-4 mb-10">
      {features.map((f, i) => (
        <li key={i} className={`flex items-start text-sm ${popular ? 'text-slate-400' : 'text-slate-600'}`}>
          <span className="text-blue-500 mr-3 mt-1 font-bold">✓</span>
          {f}
        </li>
      ))}
    </ul>
    <a 
      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=I am interested in the ${name} package.`}
      className={`block text-center py-5 rounded-2xl font-black transition-all ${popular ? 'bg-[#f1c40f] text-slate-900 hover:bg-yellow-400' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
    >
      Request Quote
    </a>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-white selection:bg-[#f1c40f] selection:text-slate-900">
      <Navbar />

      {/* Hero: Elite Tech Hub */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-3 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full mb-8 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f1c40f] animate-pulse"></span>
                <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Authorized CP PLUS Store Unnao</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
                Secure Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#f1c40f]">World Today.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Professional CCTV Installation, Laptop Repairs, and Networking solutions for Unnao's homes and businesses. 
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a href="#services" className="bg-[#f1c40f] hover:bg-yellow-400 text-slate-900 px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl hover:scale-105">
                  View Solutions
                </a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="bg-white/5 border border-white/10 text-white hover:bg-white/10 px-12 py-5 rounded-2xl font-black text-lg transition-all backdrop-blur-md">
                  WhatsApp Support
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-[4rem] overflow-hidden border-[12px] border-white/5 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200" alt="Security Dashboard" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/30 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO/Brand Block: CP PLUS Authorized Store */}
      <section className="py-24 bg-white px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.4em] mb-6">Authorized Partner</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                CP PLUS Store & CCTV Camera Service in Unnao
              </h3>
              <div className="prose prose-slate lg:prose-lg text-slate-600 max-w-none space-y-6">
                <p>
                  <strong>CP PLUS Unnao</strong> is a trusted destination for CCTV cameras, video surveillance systems, DVR/NVR solutions, and IP cameras in Unnao and nearby areas. 
                  As an authorized dealer, we specialize in genuine CP PLUS products with professional installation for homes, offices, schools, and hospitals.
                </p>
                <p>
                  Our objective is to deliver high-quality security solutions in Unnao that ensure safety, reliability, and peace of mind. Whether you need a new installation, system upgrade, or AMC maintenance, CP PLUS Unnao offers tailored solutions at competitive prices.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600">✓</div>
                    <p className="text-sm font-bold text-slate-800">Complete CCTV sales, installation & service</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600">✓</div>
                    <p className="text-sm font-bold text-slate-800">HD, Full HD & 4K Camera Solutions</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600">✓</div>
                    <p className="text-sm font-bold text-slate-800">IP, WiFi & Smart Night Vision Cameras</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600">✓</div>
                    <p className="text-sm font-bold text-slate-800">Trusted by 2500+ Unnao families</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner">
              <h4 className="text-xl font-black text-slate-900 mb-6">Store Locations Unnao</h4>
              <ul className="space-y-4">
                {["Purani Bazar (Main Store)", "Civil Lines Support", "Shuklaganj Service", "Safipur Outreach", "Bangarmau Partner"].map(loc => (
                  <li key={loc} className="flex items-center text-slate-600 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-4"></span>
                    {loc}
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-slate-200">
                <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Store Hours</h5>
                <p className="text-slate-800 font-bold">{CONTACT_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section id="services" className="py-32 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Expert Tech Solutions" subtitle="What We Do" />
          <div className="grid md:grid-cols-3 gap-10">
            <ServiceCard 
              title="CCTV Surveillance" 
              desc="Next-generation monitoring with AI human detection, mobile alerts, and 24/7 color night vision."
              icon={<Icons.CCTV />}
            />
            <ServiceCard 
              title="IT & Computing" 
              desc="Professional chip-level laptop repairs for all major brands including HP, Dell, and Apple."
              icon={<Icons.Laptop />}
            />
            <ServiceCard 
              title="Smart Home" 
              desc="Integrated security with smart locks, video doorbells, and automated perimeter alarms."
              icon={<Icons.Shield />}
            />
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Transparent Pricing" subtitle="The Security Bundles" />
          <div className="grid lg:grid-cols-3 gap-12">
            <PricingCard 
              name="Home Starter"
              price="₹7,990"
              features={["2x 2MP Night Vision Cameras", "4-Channel Hybrid DVR", "500GB Dedicated Storage", "Complete Cabling (upto 40m)", "1 Year On-site Support"]}
            />
            <PricingCard 
              popular
              name="Business Elite"
              price="₹14,490"
              features={["4x 2MP Audio Recording Cameras", "4-Channel Smart Audio DVR", "1TB Surveillance HDD", "Remote Mobile App Config", "2 Year Product Warranty"]}
            />
            <PricingCard 
              name="Industrial IP"
              price="₹27,990"
              features={["4x 4MP Ultra-HD IP Cameras", "8-Channel POE NVR", "2TB High-Speed Storage", "AI Analytics (Line Cross)", "Lifetime Remote Support"]}
            />
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section id="about" className="py-32 px-4 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader title="Consult Our AI Assistant" subtitle="Instant Expertise" light />
            <p className="text-slate-400 text-lg mb-12 leading-relaxed font-light">
              Don't know which camera to choose? Our AI assistant is trained on the latest CP PLUS and Hikvision catalog to help you plan your security setup in seconds.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h5 className="text-white font-bold text-xl mb-1">IP vs Analog</h5>
                <p className="text-slate-500 text-sm">Instant Comparisons</p>
              </div>
              <div className="border-l-4 border-[#f1c40f] pl-6">
                <h5 className="text-white font-bold text-xl mb-1">Storage Help</h5>
                <p className="text-slate-500 text-sm">Capacity Calculators</p>
              </div>
            </div>
          </div>
          <GeminiExpert />
        </div>
      </section>

      {/* Trust & Service Areas */}
      <section className="py-24 bg-white border-t border-slate-100 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-12">Authorized Service Hub</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {["Civil Lines", "Avas Vikas", "Shuklaganj", "Safipur", "Bangarmau", "Hasanganj", "Purani Bazar"].map(area => (
              <span key={area} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-600 font-bold hover:bg-blue-600 hover:text-white transition-all cursor-default shadow-sm">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-16 pb-20 border-b border-white/5">
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-black text-white mb-8 tracking-tighter">Vijay <span className="text-[#f1c40f]">Electronics</span></h3>
              <p className="text-slate-400 max-w-sm mb-10 leading-relaxed">
                Unnao's premier technology provider. We turn your security concerns into peace of mind with elite surveillance and IT services.
              </p>
              <div className="flex space-x-6">
                {['facebook', 'instagram', 'youtube'].map(s => (
                  <a key={s} href={SOCIAL_LINKS[s as keyof typeof SOCIAL_LINKS]} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all font-bold uppercase text-[10px] tracking-widest">{s[0]}</a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-[#f1c40f] font-black uppercase tracking-widest text-xs mb-8">Navigation</h5>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">AI Consulting</a></li>
                <li><a href={SOCIAL_LINKS.website} className="hover:text-white transition-colors">Legacy Site</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#f1c40f] font-black uppercase tracking-widest text-xs mb-8">Direct Contact</h5>
              <div className="space-y-6">
                <p className="text-slate-400 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                <div className="pt-4">
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest block mb-2">Call Center</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-black hover:text-[#f1c40f] transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-6 font-medium">
            <p>© {new Date().getFullYear()} Vijay Electronics Unnao. Powered by CP PLUS Store Unnao.</p>
            <div className="flex space-x-10">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Sale</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
