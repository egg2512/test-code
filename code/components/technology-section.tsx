'use client'

import { useEffect, useState } from 'react'

export default function TechnologySection() {
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

    const element = document.getElementById('cong-nghe')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: '🧪',
      title: 'Công Nghệ Chiết Xuất Tiên Tiến',
      description: 'Tách chiết tinh chất quý giá từ bí đao: vitamin, khoáng chất và các hợp chất làm sạch, làm dịu da'
    },
    {
      icon: '🏭',
      title: 'Quy Trình CGMP Khép Kín',
      description: 'Thoản mãn tiêu chuẩn CGMP ASEAN, quy trình vô trùng, đảm bảo độ tinh khiết và an toàn'
    },
    {
      icon: '💧',
      title: 'Độ Tinh Khiết Cao Nhất',
      description: 'Mỗi giọt tinh chất đạt chuẩn cao nhất, sẵn sàng kết hợp với thành phần lành tính tạo sản phẩm hoàn chỉnh'
    },
  ]

  return (
    <section id="cong-nghe" className="relative py-20 px-6 md:px-12 overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <span className="block">🌿 CÔNG NGHỆ HIỆN ĐẠI</span>
              <span className="block">GIỮ TRỌN TINH TÚY THIÊN NHIÊN</span>
            </h2>
          </div>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />

          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 p-6 md:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="text-lg text-white/80 space-y-4">
              <p>
                Khi những trái bí đao tươi được đưa về nhà máy đạt chuẩn CGMP ASEAN của Cocoon, hành trình của chúng bước vào giai đoạn quan trọng nhất: chiết xuất tinh chất.
              </p>

              <p>
                Tại đây, bí đao trải qua quy trình nghiêm ngặt với công nghệ hiện đại, giúp tách chiết trọn vẹn vitamin, khoáng chất và các hợp chất quý giá có khả năng làm sạch, làm dịu và cân bằng làn da.
              </p>

              <p>
                Mọi bước trong quy trình đều khép kín và vô trùng, đảm bảo từng giọt tinh chất giữ được độ tinh khiết cao nhất. Các tinh chất thu được được kết hợp cùng thành phần thuần chay và lành tính để tạo nên sản phẩm Cocoon dịu nhẹ, an toàn cho mọi làn da.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`bg-black/40 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + idx * 150}ms` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className={`text-2xl font-bold mb-3 text-white`}>{feature.title}</h3>
              <p className={`text-white leading-relaxed`}>{feature.description}</p>
              <div className={`mt-6 pt-6 border-t border-white/20`}>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span>✓ Được chứng minh khoa học</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight removed per request */}
      </div>
    </section>
  )
}
