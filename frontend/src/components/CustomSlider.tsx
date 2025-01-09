'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { useEffect } from 'react'
import type { CarouselApi } from '@/components/ui/carousel'
import bedroom_img from "../../public/furniro_assets/bedroom1.png"
import living_img from "../../public/furniro_assets/Living1.png"
import dining_img from "../../public/furniro_assets/dining1.png"

const slides = [
  {
    id: 1,
    number: '01',
    title: 'Bed Room',
    subtitle: 'Inner Peace',
    image: bedroom_img,
  },
  {
    id: 2,
    number: '02',
    title: 'Living Room',
    subtitle: 'Modern Comfort',
    image: living_img,
  },
  {
    id: 3,
    number: '03',
    title: 'Dining',
    subtitle: 'Culinary Haven',
    image: dining_img,
  },
]

export default function CustomSlider() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(1)

  useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
      setNext((api.selectedScrollSnap() + 1) % slides.length)
    })
  }, [api])

  const handleNext = () => {
    api?.scrollNext()
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-2">
        {/* Main Large Card */}
        <div className="col-span-8">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      height={582}
                      width={484}
                      className="object-cover"
                      priority
                    />
                    <div className="px-8 py-4 bg-white/70 backdrop-blur-sm absolute bottom-5 left-10">
                      <p className="text-sm text-gray-600">
                        {slide.number} -- {slide.title}
                      </p>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {slide.subtitle}
                      </h2>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Preview Card and Navigation */}
        <div className="col-span-4 flex flex-col">
          {/* Preview Card */}
          <div className="relative aspect-[3/4] w-full mb-4">
            <Image
              src={slides[next].image}
              alt={`Preview of ${slides[next].title}`}
              height={486}
              width={372}
              className="object-cover opacity-75"
              priority
            />
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  current === index 
                    ? "bg-amber-600 scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>

          {/* Navigation Button */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white hover:bg-amber-700 transition-colors"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}