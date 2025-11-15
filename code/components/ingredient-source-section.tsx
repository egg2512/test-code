'use client'

import { useEffect, useState } from 'react'

export default function IngredientSourceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    { src: '/s2.1.jpg', alt: 'Nước tẩy trang bí đao với hiệu ứng nước' },
    { src: '/s2.2.jpg', alt: 'Demo sử dụng nước tẩy trang' },
    { src: '/s2.3.jpg', alt: 'Giải thưởng ELLE Beauty Awards 2025' },
    { src: '/s2.4.jpg', alt: 'Kết cấu sản phẩm' },
    { src: '/s2.5.jpg', alt: 'Cách sử dụng sản phẩm' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('nguon-goc')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible, images.length])

  return (
    <section id="nguon-goc" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/s1.jpg)',
          filter: 'brightness(0.66) contrast(1.0) saturate(0.65)',
        }}
      />
      
      {/* Light brown background overlay */}
      <div className="absolute inset-0 bg-amber-50/40 backdrop-blur-sm" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className={`text-center mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-6 py-2 bg-amber-100/80 text-amber-900 rounded-full text-sm font-semibold tracking-wide border border-amber-200">
            SẢN PHẨM ĐẶC TRƯNG
          </span>
        </div>

        {/* Header - With background box */}
        <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-white rounded-2xl px-10 py-8 border border-amber-200/40 shadow-lg max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight">
              <span className="text-foreground">Nước Tẩy Trang Bí Đao</span>
            </h2>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              "Hồn Việt trong chai"
            </p>
          </div>
        </div>

        {/* Main Content - Image Carousel Style */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Interactive Image Gallery */}
          <div className="relative">
            <div className="relative h-[600px] md:h-[700px] overflow-hidden">
              {images.map((image, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    idx === currentImage 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentImage 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-primary/20 hover:bg-primary/40'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Làm Sạch Sâu - <br />
                <span className="text-primary">Dịu Nhẹ Tự Nhiên</span>
              </h3>
              <p className="text-lg leading-relaxed text-foreground/80 mb-8">
                Làn da dầu và mụn rất nhạy cảm nên cần được thiết kế một loại nước tẩy trang phù hợp. Với công nghệ Micellar, nước tẩy trang bí đao giúp làm sạch hiệu quả lớp trang điểm, bụi bẩn và dầu thừa, mang lại làn da sạch hoàn toàn và mềm mịn.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <p className="text-base text-foreground/80">Làm sạch sâu lớp trang điểm, bụi bẩn và bã nhờn trên bề mặt da.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <p className="text-base text-foreground/80">Dịu nhẹ, thông thoáng và không làm bí da.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <p className="text-base text-foreground/80">Kiểm soát dầu thừa, hỗ trợ trong việc chăm sóc da mụn.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <p className="text-base text-foreground/80">Dạng nước trong suốt không màu.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <p className="text-base text-foreground/80">Mùi tinh dầu tràm trà thoang thoảng.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></span>
                  <p className="text-base text-foreground/80">Phù hợp với làn da cần tẩy sạch nhanh lớp trang điểm, da dầu, mụn thường xuyên trang điểm cần một sản phẩm tẩy trang phù hợp.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
