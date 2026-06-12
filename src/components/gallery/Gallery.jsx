import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { gallery } from '../../data/content'
import SectionHeading from '../common/SectionHeading'

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-navy-900/40 overflow-hidden">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Moments & Memories"
          title="A Glimpse of the Divine"
          subtitle="Heritage temples, golden shores, luxury SUVs and soulful vegetarian feasts — captured along the journey."
        />
      </div>

      <div className="mt-16">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 2.2, slideShadows: false }}
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="!pb-16"
        >
          {gallery.map((g, i) => (
            <SwiperSlide key={i} className="!w-72 sm:!w-96">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={g.src}
                  alt={g.label}
                  className="h-72 sm:h-96 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 font-serif text-xl font-semibold text-white">
                  {g.label}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
