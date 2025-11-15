'use client'

import { useEffect, useState } from 'react'

export default function ProductSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('san-pham')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const benefits = [
    { icon: '✔', text: 'Thuần chay (Vegan)', highlight: true },
    { icon: '✔', text: 'Dịu nhẹ', highlight: true },
    { icon: '✔', text: 'Làm sạch – Cân bằng – Làm dịu', highlight: true },
    { icon: '✔', text: 'Tinh chất từ bí đao tươi Việt Nam', highlight: true },
  ]

  return (
    <section id="san-pham" className="relative py-20 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/s1.jpg)',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance mb-4">
              ✨ Nước Tẩy Trang Bí Đao Cocoon
            </h2>
            <p className="text-2xl text-primary font-semibold mb-2">
              Tinh Túy Thanh Lọc Từ Việt Nam
            </p>
            <div className="h-1 w-24 bg-white mx-auto" />
          </div>
        </div>

        {/* Content Grid */}
        <div className={`grid md:grid-cols-2 gap-12 items-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <img 
                src="/s4.jpg"
                alt="Nước Tẩy Trang Bí Đao Cocoon"
                className="w-[320px] md:w-[520px] lg:w-[640px] h-auto relative z-10 rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="space-y-4 mb-8">
              <p className="text-lg leading-relaxed text-white/90">
                Và từ hành trình của những trái bí đao tươi ngon, Nước Tẩy Trang Bí Đao Cocoon ra đời — một giải pháp làm sạch dịu nhẹ, cân bằng và làm mát làn da, mang đến cảm giác thanh khiết từ thiên nhiên Việt Nam.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                Mỗi chai sản phẩm không chỉ là một sản phẩm chăm sóc da, mà còn là câu chuyện trọn vẹn: từ đôi bàn tay tỉ mỉ của người nông dân, tới nhà máy với quy trình khép kín và công nghệ hiện đại, giữ trọn tinh túy nguyên bản của bí đao.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                Sản phẩm gửi gắm triết lý Cocoon về vẻ đẹp thuần chay và bền vững — đồng hành cùng bạn trong hành trình chăm sóc làn da nhẹ nhàng, tự nhiên và tinh khiết.
              </p>
            </div>

            {/* Benefits Pills */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-primary font-bold text-lg">{benefit.icon}</span>
                  <span className={benefit.highlight ? 'font-semibold text-white' : 'text-white/80'}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
