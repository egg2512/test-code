'use client'

import { useEffect, useState } from 'react'

export default function JourneySection() {
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

    const element = document.getElementById('quy-trinh')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    { 
      number: 1, 
      title: 'Thu Hoạch', 
      icon: '🌾', 
      description: 'Chọn lọc bí đao chín hoàn hảo',
      detail: 'Nông dân kinh nghiệm chọn từng trái'
    },
    { 
      number: 2, 
      title: 'Tuyển Chọn', 
      icon: '✅', 
      description: 'Kiểm định khắt khe ngay tại vườn',
      detail: 'Đảm bảo chất lượng cao nhất'
    },
    { 
      number: 3, 
      title: 'Vận Chuyển', 
      icon: '🚚', 
      description: 'Điều kiện tối ưu, giữ trọn độ tươi',
      detail: 'Bảo quản chuyên nghiệp'
    },
    { 
      number: 4, 
      title: 'Đến Nhà Máy', 
      icon: '🏭', 
      description: 'Đưa vào sản xuất ngay lập tức',
      detail: 'Tiết kiệm thời gian tối đa'
    },
  ]

  return (
    <section id="quy-trinh" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/s1.jpg)',
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className={`text-center mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-6 py-2 bg-amber-100/80 text-amber-900 rounded-full text-sm font-semibold tracking-wide border border-amber-200">
            QUY TRÌNH VẬN CHUYỂN
          </span>
        </div>
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-3 md:p-5 shadow-xl max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              🌿 HÀNH TRÌNH ĐẾN NHÀ MÁY TƯƠI MỚI VẸN NGUYÊN
            </h2>
          </div>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="text-xl md:text-2xl text-white/70 leading-relaxed space-y-4">
              <p>
                Ngay khi trái bí đao đạt độ chín hoàn hảo, mỗi quả được tuyển chọn khắt khe ngay tại vườn — chỉ những trái tươi, khỏe mới được thu hoạch.
              </p>

              <p>
                Các trái được đóng gói và vận chuyển trong ngày, dưới điều kiện kiểm soát nhiệt độ, độ ẩm và ánh sáng tối ưu nhằm giữ trọn hàm lượng hoạt chất và độ tươi nguyên bản.
              </p>

              <p>
                Cocoon cam kết rút ngắn tối đa thời gian từ thu hoạch đến sản xuất để hạn chế oxy hóa và bảo toàn chất lượng tự nhiên của nguyên liệu.
              </p>

              <p>
                Đây không chỉ là một quy trình vận chuyển — mà là cam kết chất lượng từ vườn tới làn da của bạn.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline with Connection Line */}
        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <div className="max-w-5xl mx-auto relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full" />
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg transition-all duration-700 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`}
                  style={{ 
                    left: `${(idx / (steps.length - 1)) * 100}%`,
                    transitionDelay: `${500 + idx * 150}ms`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + idx * 150}ms` }}
              >
                {/* Card */}
                <div className="group relative h-full">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card Content */}
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 text-white text-balance">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 mb-4 flex-grow leading-relaxed">
                      {step.description}
                    </p>

                    {/* Detail */}
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-sm text-primary font-semibold">
                        {step.detail}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Card removed as requested */}
      </div>
    </section>
  )
}
