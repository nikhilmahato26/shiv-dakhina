import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { posters } from '../../data/itinerary'
import SectionHeading from '../common/SectionHeading'
import { fadeUp } from '../../utils/motion'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Itinerary() {
  return (
    <section id="itinerary" className="relative section-pad py-24 lg:py-32 bg-navy-900/40 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header container with flex layout for title + custom navigation buttons on large screens */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Tour Posters"
            title="Our Divine Tour Gallery"
            subtitle="Explore our exclusive tour packages and travel poster highlights designed for a premium spiritual experience."
            align="left"
          />
          
          {/* Custom Navigation buttons (visible on all screens) */}
          <div className="flex items-center gap-3 mb-2">
            <button className="itinerary-swiper-prev flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-navy-950/40 text-gold-300 backdrop-blur-md transition-all duration-300 hover:bg-gold-400/20 hover:border-gold-400/70 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="itinerary-swiper-next flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/30 bg-navy-950/40 text-gold-300 backdrop-blur-md transition-all duration-300 hover:bg-gold-400/20 hover:border-gold-400/70 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            navigation={{
              prevEl: '.itinerary-swiper-prev',
              nextEl: '.itinerary-swiper-next',
            }}
            pagination={{
              clickable: true,
              el: '.itinerary-swiper-pagination',
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2, // Shows 2 full posters side-by-side (half-half screen)
                spaceBetween: 32,
              },
            }}
            className="!pb-16 overflow-visible"
          >
            {posters.map((poster) => (
              <SwiperSlide key={poster.id}>
                <div className="group space-y-4">
                  {/* Poster Image Wrapper - naturally sized, no cropping/cutting */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-xl transition-all duration-500 hover:border-gold-400/40 hover:shadow-2xl hover:shadow-gold-500/5">
                    <img
                      src={poster.image}
                      alt={poster.title}
                      loading="lazy"
                      className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    />
                    {/* Glowing highlight border overlay */}
                    <div className="absolute inset-0 border border-transparent rounded-2xl pointer-events-none transition-all duration-500 group-hover:border-gold-400/30" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination container (centered at the bottom) */}
          <div className="itinerary-swiper-pagination flex justify-center gap-2 mt-4" />
        </motion.div>
      </div>
    </section>
  )
}
