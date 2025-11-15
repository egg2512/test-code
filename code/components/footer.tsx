import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const productLinks = [
    { label: 'Nước Tẩy Trang Bí Đao', href: '#' },
    { label: 'Sản Phẩm Khác', href: '#' },
    { label: 'Bộ Sưu Tập', href: '#' },
  ]

  const aboutLinks = [
    { label: 'Về Cocoon', href: '#' },
    { label: 'Câu Chuyện Thương Hiệu', href: '#' },
    { label: 'Cam Kết Bền Vững', href: '#' },
    { label: 'Đối Tác', href: '#' },
  ]

  const supportLinks = [
    { label: 'Liên Hệ', href: '#' },
    { label: 'Câu Hỏi Thường Gặp', href: '#' },
    { label: 'Chính Sách Đổi Trả', href: '#' },
    { label: 'Điều Khoản Sử Dụng', href: '#' },
  ]

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Top footer columns removed per request */}

        {/* Contact Info removed per request */}

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; 2025 Cocoon Vietnam. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Chính Sách Bảo Mật
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Điều Khoản Dịch Vụ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
