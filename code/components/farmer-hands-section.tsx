'use client'

import { useEffect, useState } from 'react'

export default function FarmerHandsSection() {
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

    const element = document.getElementById('cham-soc')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cham-soc" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/s1.jpg)',
          filter: 'brightness(0.66) contrast(1.0) saturate(0.65)',
        }}
      />
      
      {/* Light brown background overlay */}
      <div className="absolute inset-0 bg-amber-50/50 backdrop-blur-sm" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow delay-700" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Content Grid - Image First on Desktop */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Image Side with Overlay Card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Main Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <img 
                  src="/s3.2.jpg"
                  alt="Nông dân thu hoạch bí đao bằng tay"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-6 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm font-medium">Thủ công</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Eyebrow */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="inline-block px-6 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold tracking-wide">
                CHĂM SÓC TẬN TÂM
              </span>
            </div>

            {/* Heading */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
                <span className="block md:inline mr-3">Bàn Tay Nông Dân:</span>
                <span className="text-primary inline-block tracking-tight whitespace-nowrap">Nâng Niu Từ Gốc Đến Ngọn</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Tại Cocoon, chúng tôi tin rằng vẻ đẹp bền vững bắt nguồn từ những điều nhỏ bé nhất.
              </p>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                Trong buổi sớm mùa mưa, những trái bí đao xanh mướt căng mọng dưới ánh nắng nhẹ. Từ lâu, bí đao đã gắn bó với người Việt và nhiều vùng nhiệt đới – một loại quả bình dị nhưng chứa cả kho báu: amino acid, mucins, khoáng chất, vitamin B và C.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                Khoa học hiện đại còn tìm thấy alunsenol và mutiflorenol – hai triterpenes quý giúp chống oxy hóa và bảo vệ da. Trong y học cổ truyền, bí đao được xem là vị thuốc thanh nhiệt, làm mát, giảm viêm và hỗ trợ kháng khuẩn.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                Khi trái bí đạt độ chín hoàn hảo, người nông dân nhẹ nhàng thu hái và chuyển ngay về nhà máy. Tại đây, quy trình chiết xuất khép kín giúp giữ trọn tinh chất tự nhiên của bí đao. Từng giọt tinh chất ấy được kết hợp cùng các thành phần thuần chay lành tính, tạo nên sản phẩm làm sạch – làm mát – làm dịu – cân bằng da.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80">
                Đó không chỉ là mỹ phẩm. Đó là hành trình từ nông trại đến giọt tinh chất xanh thuần khiết. Là cách Cocoon giữ gìn giá trị thiên nhiên Việt Nam và mang vẻ đẹp thuần chay đến mọi người.
              </p>
            </div>

            {/* Feature Grid */}
            <div className={`grid gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="group relative p-6 bg-gradient-to-br from-background to-accent/5 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    🌱
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Canh tác bền vững</h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">Giảm thiểu tác động môi trường, giữ gìn đất đai cho thế hệ tương lai</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 bg-gradient-to-br from-background to-primary/5 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    👋
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Thu hoạch thủ công từng trái</h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">Lựa chọn kỹ lưỡng khi đạt độ chín hoàn hảo, giữ trọn dưỡng chất</p>
                  </div>
                </div>
              </div>

              <div className="group relative p-6 bg-gradient-to-br from-background to-accent/5 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    ❤️
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Tận tâm từ nông dân địa phương</h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">Hàng chục năm kinh nghiệm truyền từ thế hệ sang thế hệ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
