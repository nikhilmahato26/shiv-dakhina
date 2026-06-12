import Hero from '../components/hero/Hero'
import HighlightsBar from '../components/common/HighlightsBar'
import Fleet from '../components/fleet/Fleet'
import PackageOverview from '../components/packages/PackageOverview'
import StatsBand from '../components/common/StatsBand'
import Itinerary from '../components/itinerary/Itinerary'
import Places from '../components/gallery/Places'
import FoodExperience from '../components/packages/FoodExperience'
import Includes from '../components/packages/Includes'
import Pricing from '../components/pricing/Pricing'
import WhyChooseUs from '../components/packages/WhyChooseUs'
import Testimonials from '../components/testimonials/Testimonials'
import BookingCTA from '../components/contact/BookingCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsBar />
      <Fleet />
      <PackageOverview />
      <StatsBand />
      <Itinerary />
      <Places />
      <FoodExperience />
      <Includes />
      <Pricing />
      <WhyChooseUs />
      <Testimonials />
      <BookingCTA />
    </>
  )
}
