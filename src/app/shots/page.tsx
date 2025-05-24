'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=600&h=600&q=80',
    name: 'David Forren',
  },
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=600&h=600&q=80',
    name: 'Amil Evara',
  },
  {
    src: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=facearea&facepad=2&w=600&h=600&q=80',
    name: 'Ebele Egbuna',
  },
  {
    src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=facearea&facepad=2&w=600&h=600&q=80',
    name: 'Maria Powers',
  },
  {
    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2&w=600&h=600&q=80',
    name: 'Delia Pawelke',
  },
  {
    src: 'https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?auto=format&fit=facearea&facepad=2&w=600&h=600&q=80',
    name: 'Tom Lowry',
  },
  {
    src: 'https://images.unsplash.com/photo-1602452920335-6a132309c7c8?auto=format&fit=facearea&facepad=2&w=600&h=600&q=80',
    name: 'Sophia Harrington',
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
    <div className='DMSans'>
<h2 className="mt-5 text-3xl sm:text-4xl text-center font-extrabold mb-6 polysans">Gallary</h2>
        {/* Flex Gallery */}
        <div className="flex flex-wrap gap-8 p-6 pt-2 justify-center ">
          {images.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center lg:w-[30%]">
              <img
                src={img.src}
                alt={img.name}
                className="   object-cover   cursor-pointer hover:opacity-80 transition"
                onClick={() => setSelected(img.src)}
              />
              <p className="mt-3 text-base text-white">Credit: {img.name}</p>
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 z-50"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Responsive Fullscreen Image */}
            <img
              src={selected}
              alt="Enlarged"
              className="object-contain w-full h-full sm:w-full sm:h-full max-w-[80vw] sm:max-w-none max-h-full"
            />
          </div>
        )}


    </div>
    </>
  )
}
