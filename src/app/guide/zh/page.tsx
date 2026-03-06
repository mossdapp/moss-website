import React from "react";

const LINKS = {
  home: "/",
  os: "https://os.mossdapp.com",
  peerdexStandalone: "https://peerdex.vercel.app",
  store: "https://store.mossdapp.com/en/apps",
  storePeerDex: "https://store.mossdapp.com/en/apps/peerdex",
  osFaucet: "https://os.mossdapp.com/faucet",
  osRedPacket: "https://os.mossdapp.com/redpacket",
  osPeerDex: "https://os.mossdapp.com/peerdex",
  sepoliaFaucet: "https://sepoliafaucet.com/",
  faucetUsdcCode: "https://sepolia.etherscan.io/address/0x9d4b951592c31dc042efDC4E1F8aE00718b96fe1#code",
  faucetUsdtCode: "https://sepolia.etherscan.io/address/0xdd7468f993c52fcF43Cef80c9a4e042de4920F2d#code",
};

const STEPS = [
  {
    id: "01",
    icon: "account_balance_wallet",
    title: "连接钱包并创建 Moss 钱包",
    desc: '使用任意 EOA 钱包连接 OS，点击 "Create Moss Wallet" 完成创建。Moss 钱包就是你的 OS 账户。',
    links: [{ label: "打开 OS", href: LINKS.os }],
  },
  {
    id: "02",
    icon: "local_gas_station",
    title: "准备 Gas 并领取测试资产",
    desc: "先向 Moss 钱包转入 Sepolia 测试 ETH（gas），再到 Moss Faucet 领取测试 USDC / USDT / MOSS + NFT。",
    links: [
      { label: "Sepolia Faucet", href: LINKS.sepoliaFaucet },
      { label: "Moss Faucet", href: LINKS.osFaucet },
    ],
  },
  {
    id: "03",
    icon: "token",
    title: "在 Store mint PeerDex App NFT",
    desc: "在 Store 中 mint PeerDex App NFT，完成后 PeerDex 才会在 OS 中出现并可用。",
    links: [
      { label: "打开 Store", href: LINKS.store },
      { label: "Mint PeerDex", href: LINKS.storePeerDex },
    ],
  },
  {
    id: "04",
    icon: "rocket_launch",
    title: "System / App NFT / 独立平台",
    desc: "Red Packet（System）默认可用；钱包内 PeerDex（App NFT）需先 mint；PeerDex 独立平台是分离产品。",
    links: [
      { label: "Red Packet（System APP）", href: LINKS.osRedPacket },
      { label: "钱包内 PeerDex（App NFT）", href: LINKS.osPeerDex },
      { label: "PeerDex 独立平台", href: LINKS.peerdexStandalone },
    ],
  },
] as const;

const FAQ = [
  {
    q: "看不到 Create Moss Wallet 按钮",
    a: "确认使用的是 Moss connector，并且当前网络是 Sepolia（11155111）。可以断开后重新连接。",
  },
  {
    q: "Faucet 或 Mint 失败",
    a: "通常是网络不对或 gas 不足。请先确认 Sepolia 网络，并确保钱包里有少量测试 ETH。",
  },
  {
    q: "Mint 之后 PeerDex 还没显示",
    a: "等待链上确认和前端轮询同步（通常 10-30 秒），然后刷新 OS 页面。",
  },
] as const;

const STEP_ACCENTS = [
  "from-pink-100 to-rose-100",
  "from-amber-100 to-orange-100",
  "from-sky-100 to-cyan-100",
  "from-indigo-100 to-violet-100",
] as const;

export default function ChineseGuidePage() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-pink-500/30 selection:text-pink-900">
      <div className="background-container opacity-60">
        <div className="background-shape shape1 mix-blend-multiply" />
        <div className="background-shape shape2 mix-blend-multiply" />
        <div className="background-shape shape3 mix-blend-multiply" />
      </div>

      <main className="relative z-10 px-4 sm:px-10 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto space-y-6">
          <a
            href={LINKS.home}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-white/70 text-sm font-medium text-[#1B0D15] hover:bg-white transition-colors"
          >
            <span className="material-symbols-outlined !text-base">arrow_back</span>
            返回官网
          </a>

          <section className="frosted-glass rounded-[2.4rem] p-6 sm:p-8 bg-[linear-gradient(180deg,rgba(255,255,255,0.66),rgba(255,255,255,0.36))]">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-white/65 border border-white/70 text-[#1B0D15]/70">
              Chinese Guide
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[#1B0D15]">
              Moss 官网中文指导
            </h1>
            <p className="mt-2 text-sm text-[#1B0D15]/65">
              官网路径：`/guide/zh`。从创建 Moss 钱包到 Store mint PeerDex，再到应用使用，按步骤完成即可。
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={LINKS.os}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-[#1B0D15] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                打开 OS
              </a>
              <a
                href={LINKS.store}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white/70 border border-white/70 text-[#1B0D15] text-sm font-medium hover:bg-white transition-colors"
              >
                打开 Store
              </a>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 frosted-glass rounded-[2rem] p-5 sm:p-7 bg-white/50 border border-white/70">
              <div className="relative">
                <div className="absolute left-[1.4rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#1B0D15]/25 via-[#1B0D15]/10 to-transparent" />
                <div className="space-y-7">
                  {STEPS.map((step, index) => (
                    <article key={step.id} className="relative pl-14">
                      <span className="absolute left-0 top-2 w-11 h-11 rounded-2xl bg-[#1B0D15] text-white flex items-center justify-center shadow-lg shadow-black/20">
                        <span className="material-symbols-outlined !text-[18px]">{step.icon}</span>
                      </span>
                      <div className="rounded-2xl bg-white/80 border border-white/90 px-4 py-4 sm:px-5 sm:py-5 shadow-[0_14px_34px_-22px_rgba(17,12,34,0.45)]">
                        <div className="flex items-center justify-between gap-3">
                          <h2 className="text-base sm:text-lg font-semibold text-[#1B0D15]">{step.title}</h2>
                          <span className={`inline-flex shrink-0 px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r ${STEP_ACCENTS[index]} text-[#1B0D15]/75`}>
                            STEP {step.id}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-[#1B0D15]/75 leading-relaxed">{step.desc}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {step.links.map((link) => (
                            <a
                              key={`${step.id}-${link.label}`}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/85 border border-white/95 text-xs font-medium text-[#1B0D15] hover:bg-[#1B0D15] hover:text-white transition-colors"
                            >
                              {link.label}
                              <span className="material-symbols-outlined !text-sm">open_in_new</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[linear-gradient(145deg,#120a0f,#22131c)] text-white rounded-[2rem] p-5 sm:p-6 border border-white/10 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.6)]">
                <h3 className="text-base font-semibold">应用类型：System / App NFT / 独立交易平台</h3>
                <p className="mt-1 text-xs text-white/70">运行在以太坊 Sepolia 测试网。System / App NFT 在 OS 内运行，独立平台为外部产品。</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-white/10 border border-white/10 p-3">
                    <p className="text-xs uppercase tracking-widest text-white/60">System App</p>
                    <p className="mt-1 text-sm font-medium">Red Packet（OS 内）</p>
                    <p className="mt-1 text-xs text-white/70">默认可用，属于 OS 内置路径，无需先 mint。</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/10 p-3">
                    <p className="text-xs uppercase tracking-widest text-white/60">App NFT</p>
                    <p className="mt-1 text-sm font-medium">PeerDex（OS App）</p>
                    <p className="mt-1 text-xs text-white/70">需先在 Store mint，随后在 OS 内可用。</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 border border-white/10 p-3">
                    <p className="text-xs uppercase tracking-widest text-white/60">Standalone Platform</p>
                    <p className="mt-1 text-sm font-medium">PeerDex 独立交易平台</p>
                    <p className="mt-1 text-xs text-white/70">独立于 OS 钱包内应用路径。</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/85 to-white/60 rounded-[2rem] border border-white/80 p-5 sm:p-6 shadow-[0_15px_35px_-24px_rgba(30,27,75,0.5)]">
                <h3 className="text-base font-semibold text-[#1B0D15]">常见问题</h3>
                <div className="mt-3 space-y-2">
                  {FAQ.map((item) => (
                    <details key={item.q} className="group rounded-xl bg-white/80 border border-white/90 px-3 py-2">
                      <summary className="cursor-pointer text-sm font-medium text-[#1B0D15] list-none flex items-center justify-between gap-2">
                        <span>{item.q}</span>
                        <span className="material-symbols-outlined !text-base text-[#1B0D15]/50 group-open:rotate-45 transition-transform">add</span>
                      </summary>
                      <p className="mt-2 text-xs text-[#1B0D15]/75">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
