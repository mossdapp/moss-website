import React from "react";
import Image from "next/image";

const LINKS = {
  os: "https://os.mossdapp.com",
  store: "https://store.mossdapp.com",
  docs: "https://docs.mossdapp.com",
  labs: "https://labs.mossdapp.com",
  sdk: "https://www.npmjs.com/package/@mossdapp/sdk",
};

const APPS = [
  { name: "PeerDex", icon: "/apps/peerdex.svg" },
  { name: "Flashman", icon: "/apps/flashman.svg" },
  { name: "CloseSky", icon: "/apps/closesky.svg" },
  { name: "CryptoWill", icon: "/apps/cryptowill.svg" },
  { name: "BlinkPay", icon: "/apps/blinkpay.svg" },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden selection:bg-pink-500/30 selection:text-pink-900">
      {/* 极简背景 - 还原清爽感 */}
      <div className="background-container opacity-60">
        <div className="background-shape shape1 mix-blend-multiply" />
        <div className="background-shape shape2 mix-blend-multiply" />
        <div className="background-shape shape3 mix-blend-multiply" />
      </div>

      {/* 顶部导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-8 pointer-events-none mix-blend-darken">
        <div className="pointer-events-auto flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <Image src="/moss-icon.svg" alt="Moss" width={28} height={28} className="shrink-0" />
          <span className="font-bold tracking-tight text-xl">moss</span>
        </div>
        
        <div className="pointer-events-auto hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#1B0D15]">
          <a href={LINKS.store} className="hover:text-indigo-600 transition-colors">STORE</a>
          <a href={LINKS.docs} className="hover:text-indigo-600 transition-colors">DOCS</a>
          <a href={LINKS.labs} className="hover:text-indigo-600 transition-colors">LABS</a>
        </div>
      </nav>

      <main className="relative z-10 w-full pb-32">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center px-4 sm:px-10 pt-10 sm:pt-20">
          
          <div className="relative flex flex-col items-start">
            {/* 行 1: MOSS - 还原纯色高级感 */}
            <h1 className="text-[26vw] leading-[0.75] font-bold tracking-tighter text-[#1B0D15] mix-blend-overlay opacity-90 select-none ml-[-1vw]">
              MOSS
            </h1>
            
            {/* 行 2: ACCOUNT OS */}
            <h1 className="text-[11vw] sm:text-[12vw] leading-[0.9] font-bold tracking-tighter text-outline hover:text-[#1B0D15] cursor-default select-none transition-colors duration-700 mt-2 sm:mt-0">
              ACCOUNT OS
            </h1>

            {/* 右侧浮动的 OS 定义 - 此处增加颜色点缀 */}
            <div className="absolute top-[5%] right-0 max-w-[180px] sm:max-w-xs text-right hidden lg:block">
              <span className="block text-xs font-bold uppercase tracking-widest text-pink-600">
                WEB3 OPERATING SYSTEM
                <br />
                & DAPP STORE
              </span>
            </div>
            
            {/* 圆形 CTA - 保持之前好评的粉色阴影，但去除内部复杂渐变 */}
            <a 
              href={LINKS.os}
              target="_blank" 
              rel="noreferrer"
              className="absolute right-[5%] top-[65%] sm:top-auto sm:bottom-[10%] w-28 h-28 sm:w-48 sm:h-48 rounded-full bg-[#1B0D15] text-white flex items-center justify-center text-center p-4 
              shadow-[0_20px_50px_-10px_rgba(236,72,153,0.3)] hover:shadow-[0_30px_60px_-10px_rgba(236,72,153,0.5)] hover:scale-105 transition-all duration-500 group z-20 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-xs sm:text-lg font-medium opacity-80">Launch</span>
                <span className="text-lg sm:text-3xl font-bold italic">OS</span>
                <span className="material-symbols-outlined mt-1 text-base sm:text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </a>
          </div>

          <div className="mt-12 sm:mt-8 sm:pl-4">
            <p className="text-sm font-mono opacity-60 tracking-tight">Universal EVM support. Compatible with any account</p>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section className="px-4 sm:px-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
            
            {/* 1. MOSS STORE (7列) */}
            <div id="store" className="md:col-span-7 frosted-glass rounded-[3rem] p-8 sm:p-12 min-h-[420px] flex flex-col group relative overflow-hidden card-hover-effect">
               <div className="relative z-10 flex-1 flex flex-col">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/60 border border-white/40 flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-2xl opacity-60">apps</span>
                    </div>
                    <div>
                       <span className="block text-xs font-mono uppercase tracking-widest opacity-40">Ecosystem</span>
                       <span className="font-medium text-sm text-[#1B0D15]/70">Moss Store</span>
                    </div>
                 </div>
                 
                 <p className="text-3xl font-medium text-[#1B0D15] tracking-tight leading-tight mb-8">
                   Your Dapp. Your NFT.
                 </p>
               </div>
               
               {/* App Icons */}
               <div className="mt-auto flex flex-wrap gap-3 relative z-10">
                  {APPS.map((app) => (
                    <a 
                      key={app.name} 
                      href={LINKS.store} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                       <Image src={app.icon} alt={app.name} width={20} height={20} />
                       <span className="text-sm font-medium text-[#1B0D15]">{app.name}</span>
                    </a>
                  ))}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black/5 bg-white/20 text-xs opacity-50 hover:bg-white hover:opacity-100 transition-all cursor-pointer">
                    +
                  </div>
               </div>
            </div>

            {/* 2. CORE / ACCOUNT OS (5列) */}
            <div id="core" className="md:col-span-5 frosted-glass rounded-[3rem] p-8 sm:p-12 min-h-[420px] flex flex-col group relative overflow-hidden card-hover-effect">
               <div className="relative z-10 flex-1 flex flex-col">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100/50 flex items-center justify-center shadow-sm">
                       <span className="material-symbols-outlined text-2xl text-indigo-900/70">hub</span>
                    </div>
                    <div>
                       <span className="block text-xs font-mono uppercase tracking-widest opacity-40">Infrastructure</span>
                       <span className="font-medium text-sm text-[#1B0D15]/70">Account OS</span>
                    </div>
                 </div>
                 
                 <p className="text-3xl font-medium text-[#1B0D15] tracking-tight leading-tight opacity-80">
                   Your Account. Your OS. Your World.
                 </p>
               </div>
               
               <div className="mt-auto w-full h-px bg-gradient-to-r from-indigo-900/10 to-transparent"></div>
               <a
                 href={LINKS.os}
                 target="_blank"
                 rel="noreferrer"
                 className="mt-6 inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
               >
                 <Image src="/moss-icon.svg" alt="Moss" width={20} height={20} />
                 <span className="text-sm font-medium text-[#1B0D15]">moss</span>
               </a>
            </div>

            {/* 3. DEVELOPERS (8列) - 保持深色高级感 */}
            <a href={LINKS.sdk} target="_blank" rel="noreferrer" className="md:col-span-8 bg-[#0F080C] text-white rounded-[3rem] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between !border-none group relative overflow-hidden md:h-[240px] hover:bg-[#1a1216] transition-colors duration-500">
               <div className="relative z-10 max-w-lg">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-1.5 bg-white/10 rounded-lg">
                        <span className="material-symbols-outlined text-xl text-white/90">terminal</span>
                     </div>
                     <span className="font-mono text-xs border border-white/10 bg-white/5 px-2 py-1 rounded text-white/60">npm i @mossdapp/sdk</span>
                  </div>
                  <h3 className="text-3xl font-light tracking-tight mb-2">Developers</h3>
               </div>
               
               {/* 装饰箭头 */}
               <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all mt-6 sm:mt-0 self-end sm:self-center shrink-0">
                  <span className="material-symbols-outlined text-2xl">arrow_forward</span>
               </div>
            </a>

            {/* 4. LABS (4列) */}
            <a href={LINKS.labs} target="_blank" rel="noreferrer" id="labs" className="md:col-span-4 frosted-glass rounded-[3rem] p-8 flex flex-col justify-between card-hover-effect group md:h-[240px] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity opacity-50 group-hover:opacity-80"></div>

               <div className="flex items-center justify-between relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-100/50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <span className="material-symbols-outlined text-2xl text-purple-900/60">science</span>
                  </div>
                  <span className="material-symbols-outlined text-xl opacity-30 group-hover:rotate-45 transition-transform">arrow_outward</span>
               </div>
               
               <div className="relative z-10 mt-4">
                 <h3 className="text-3xl font-light tracking-tight mb-1 text-[#1B0D15]">Labs</h3>
                 <p className="text-sm opacity-60 font-medium text-[#1B0D15]/80 leading-tight font-mono">
                   Redefine Web3
                 </p>
               </div>
            </a>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 px-10 border-t border-black/5 pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 opacity-60">
           <div>
              <p className="font-bold tracking-tight text-lg text-[#1B0D15]">moss</p>
              <p className="text-xs mt-1">© 2026 MOSSDAPP</p>
           </div>
           <div className="flex gap-6 text-sm font-medium text-[#1B0D15]">
              <a href="https://github.com/mossdapp" className="hover:text-black transition-colors">GitHub</a>
              <a href="https://x.com/moss_dapp" className="hover:text-black transition-colors">Twitter</a>
           </div>
        </footer>

      </main>
    </div>
  );
}
