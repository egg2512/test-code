import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import IngredientSourceSection from '@/components/ingredient-source-section'
import FarmerHandsSection from '@/components/farmer-hands-section'
import JourneySection from '@/components/journey-section'
import TechnologySection from '@/components/technology-section'
import ProductSection from '@/components/product-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        <HeroSection />
        <IngredientSourceSection />
        <FarmerHandsSection />
        <JourneySection />
        <TechnologySection />
        <ProductSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
