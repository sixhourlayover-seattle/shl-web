"use client";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function SLTourContent() { 
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 animated-gradient opacity-10" />
      <div className="fixed inset-0 bg-gradient-to-b from-white/95 via-purple-50/90 to-indigo-50/95" />
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="fixed top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="relative z-10">
        <Navigation />

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 py-16 font-[Noto_Sans_SC]">
          <h1 className="text-[#a32121] text-3xl text-center font-semibold">
            西雅图转机 6–8 小时城市游
          </h1>
          <h2 className="text-center text-lg mt-3">
            机场接机 · 中文向导 · 准点返航保证
          </h2>

          <p className="mt-8 text-base leading-8">
            不想在机场枯坐？我们提供 <strong>登机口接人</strong> 的城市短途游，带您轻松体验西雅图的地标景点。
            行程由中文导游全程陪同，包含轻轨进城与市内 Uber，确保您
            <strong>准点返航</strong>。
          </p>

          <h3 className="text-[#a32121] mt-10 font-semibold text-lg">
            行程路线与价格
          </h3>
          <ul className="text-base leading-8 list-disc pl-6">
            <li>
              <strong>6小时：</strong> 派克市场 + 西雅图海滨｜$250/人｜$399单人｜$750家庭（2大+3小）
            </li>
            <li>
              <strong>7小时：</strong> 派克市场 + 海滨 + 凯瑞公园｜$300/人｜$450单人｜$900家庭
            </li>
            <li>
              <strong>8小时：</strong> 派克市场 + 太空针塔｜$350/人｜$499单人（可加购9小时加点 $120/团）
            </li>
          </ul>

          <p className="mt-5 text-base">
            价格已含：机场接人 · 轻轨 + 市内 Uber · 中文向导 · 纪念手袋 ·{" "}
            <strong>准点返航保证</strong>
          </p>

          <div className="text-center mt-10">
            <p className="text-lg font-semibold mb-2">立即咨询 / 立刻预定</p>
            <p>添加微信或 WhatsApp 获取行程建议：</p>

            <div className="flex justify-center gap-10 mt-6 flex-wrap">
              <div>
                <Image
                  src="/path-to-wechat-qr.jpg"
                  alt="WeChat QR"
                  width={160}
                  height={160}
                  className="rounded-lg mx-auto"
                />
                <p className="mt-2">微信扫码</p>
              </div>
              <div>
                <a href="https://wa.me/12069281277" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/whatsapp-qr.png"
                    alt="WhatsApp"
                    width={160}
                    height={160}
                    className="rounded-lg mx-auto"
                  />
                </a>
                <p className="mt-2">WhatsApp 联系</p>
              </div>
            </div>

            <p className="mt-8 text-[#a32121] text-lg">
              💥 本月优惠码：<strong>GUAI88</strong> — 每人立减 $20（限前10单）
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          <p className="text-sm text-gray-600 text-center">
            六小时西雅图转机游 Six-Hour Layover Seattle © 2025 ｜ www.sixhourlayover.com
          </p>
        </section>

        



      
      </div>
    </div>
  );
}
