import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import SectionHeading from '../common/SectionHeading'

export default function Testimonials() {
  return (
    <section className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pilgrim Stories"
          title="Loved by Our Travellers"
          subtitle="Real words from families and friends who journeyed with us across the sacred sites of Odisha."
        />

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="flex h-full flex-col rounded-3xl glass p-7">
                  <Quote className="h-8 w-8 text-gold-400/50" />
                  <p className="mt-4 flex-1 text-navy-100/85 leading-relaxed">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-1 text-gold-400">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold-400" />
                    ))}
                  </div>
                  <div className="mt-4 border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-navy-200/60">{t.place}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
