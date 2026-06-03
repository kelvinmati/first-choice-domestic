import React, { useEffect, useMemo, useState } from 'react'

type Slide = {
  src: string
  alt: string
}

type ImageCarouselProps = {
  onOpenModal: () => void
}

const ImageCarousel = ({ onOpenModal }: ImageCarouselProps) => {
  const slides = useMemo<Slide[]>(
    () => [
      { src: '/img1copy.png', alt: 'Professional domestic cleaning service' },
      { src: '/img2.jpeg', alt: 'Spotless kitchen cleaning result' },
      { src: '/img10.jpeg', alt: 'Living room deep cleaning' },
      { src: '/img3.jpeg', alt: 'Bathroom sanitisation and sparkle finish' },
      { src: '/img9.jpeg', alt: 'Reliable home cleaner at work' },
    ],
    []
  )

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goTo = (index: number) => setCurrentIndex(index)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length)
  return (
    <div className="relative w-full" aria-label="Image Carousel">
      <div className="relative h-[280px] w-full overflow-hidden min-h-screen">
        <div className="relative h-full w-full">
            {slides.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent pointer-events-none" />

  

            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous slide"
              className="absolute z-20 left-3 top-1/2 -translate-y-1/2 rounded-full px-4 py-3 text-white transition hover:scale-105"
              style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.35)' }}
            >
              &#8592;
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute z-20 right-3 top-1/2 -translate-y-1/2 rounded-full px-4 py-3 text-white transition hover:scale-105"
              style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.35)' }}
            >
              &#8594;
            </button>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src + index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="h-2.5 rounded-full transition-all"
              style={{
                width: index === currentIndex ? '30px' : '10px',
                background: index === currentIndex ? '#b09a2e' : 'rgba(255,255,255,0.65)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel