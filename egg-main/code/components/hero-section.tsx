'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/s1.jpg)',
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="mb-6 inline-block px-6 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
          <span className="text-sm font-medium">✨ 100% Nguồn Gốc Thiên Nhiên Việt Nam</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
          <span className="bg-gradient-to-r from-white via-primary-foreground to-accent-foreground bg-clip-text text-transparent">
            Bí Đao Thiên Nhiên
          </span>
          <br />
          <span className="text-primary">Việt Nam</span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-4 text-balance font-semibold text-primary-foreground/90">
          Nguồn Cội Thanh Lọc Dịu Mát
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-gray-100 max-w-2xl mx-auto text-balance leading-relaxed">
          Khám phá bí mật đằng sau làn da thanh khiết từ Nước Tẩy Trang Bí Đao Cocoon – nơi mỗi giọt tinh túy được chắt lọc từ thiên nhiên Việt Nam.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#san-pham"
            className="group px-10 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/50 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              ✨ Khám Phá Ngay
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a 
            href="#nguon-goc"
            className="px-10 py-4 border-2 border-white/80 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-lg cursor-pointer"
          >
            🔗 Xem Hành Trình Nguyên Liệu
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-xl">🌿</span>
            <span>100% Thuần Chay</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-xl">✓</span>
            <span>CGMP ASEAN</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-xl">🇻🇳</span>
            <span>Made in Vietnam</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#nguon-goc"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">Cuộn xuống</span>
          <svg className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </section>
  )
}
