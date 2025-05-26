'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const images = [
  {
    src: './assets/images/shots/tnv (1).jpg',
    name: 'Tanveer Singh',
  },

  {
    src: './assets/images/shots/tnv (2).jpg',
    name: 'Tanveer Singh',
  },
  {
    src: './assets/images/shots/tnv (3).jpg',
    name: 'Tanveer Singh',
  },
  {
    src: './assets/images/shots/tnv (4).jpg',
    name: 'Tanveer Singh',
  },
  {
    src: './assets/images/shots/tnv (5).jpg',
    name: 'Tanveer Singh',
  },


  {
    src: './assets/images/shots/sbh (1).jpg',
    name: 'Shubham Repswal',
  },

  {
    src: './assets/images/shots/sbh (2).jpg',
    name: 'Shubham Repswal',
  },
  {
    src: './assets/images/shots/sbh (3).jpg',
    name: 'Shubham Repswal',
  },
  {
    src: './assets/images/shots/sbh (4).jpg',
    name: 'Shubham Repswal',
  },

  {
    src: './assets/images/shots/bhm (1).jpg',
    name: 'Bhoomika Bhatia',
  },
  {
    src: './assets/images/shots/bhm (2).jpg',
    name: 'Bhoomika Bhatia',
  }, {
    src: './assets/images/shots/bhm (3).jpg',
    name: 'Bhoomika Bhatia',
  }, {
    src: './assets/images/shots/bhm (4).jpg',
    name: 'Bhoomika Bhatia',
  },
  {
    src: './assets/images/shots/bhm (5).jpg',
    name: 'Bhoomika Bhatia',
  },
  {
    src: './assets/images/shots/bhm (6).jpg',
    name: 'Bhoomika Bhatia',
  },

  {
    src: './assets/images/shots/saj.jpg',
    name: 'Sajni',
  },

  {
    src: './assets/images/shots/av - (1).jpg',
    name: 'Ayush Vijay',
  },

  {
    src: './assets/images/shots/av - (2).jpg',
    name: 'Ayush Vijay',
  },
  {
    src: './assets/images/shots/av - (3).jpg',
    name: 'Ayush Vijay',
  },
  {
    src: './assets/images/shots/av - (5).jpg',
    name: 'Ayush Vijay',
  },
  {
    src: './assets/images/shots/av - (6).jpg',
    name: 'Ayush Vijay',
  },
  {
    src: './assets/images/shots/av - (7).jpg',
    name: 'Ayush Vijay',
  },
  {
    src: './assets/images/shots/av - (8).jpg',
    name: 'Ayush Vijay',
  },

  {
    src: './assets/images/shots/arp - 2.jpg',
    name: 'Arpit Sharma',
  },
  {
    src: './assets/images/shots/arp.png',
    name: 'Arpit Sharma',
  },

  {
    src: './assets/images/shots/adv (1).jpg',
    name: 'Advika Tiwari',
  },{
    src: './assets/images/shots/adv (2).jpg',
    name: 'Advika Tiwari',
  }, {
    src: './assets/images/shots/adv (3).jpg',
    name: 'Advika Tiwari',
  }, {
    src: './assets/images/shots/adv (4).jpg',
    name: 'Advika Tiwari',
  }, 


  {
    src: './assets/images/shots/ksh (1).jpg',
    name: 'Kashvi Dashore',
  },{
    src: './assets/images/shots/ksh (2).jpg',
    name: 'Kashvi Dashore',
  },{
    src: './assets/images/shots/ksh (3).jpg',
    name: 'Kashvi Dashore',
  },{
    src: './assets/images/shots/ksh (4).jpg',
    name: 'Kashvi Dashore',
  },

  {
    src: './assets/images/shots/div (1).jpg',
    name: 'Divyanshi Purohit',
  },{
    src: './assets/images/shots/div (2).jpg',
    name: 'Divyanshi Purohit',
  },{
    src: './assets/images/shots/div (3).jpg',
    name: 'Divyanshi Purohit',
  },{
    src: './assets/images/shots/div (4).jpg',
    name: 'Divyanshi Purohit',
  },{
    src: './assets/images/shots/div (5).jpg',
    name: 'Divyanshi Purohit',
  },


{
    src: './assets/images/shots/ast (1).jpg',
    name: 'Astha',
  },{
    src: './assets/images/shots/ast (2).jpg',
    name: 'Astha',
  },{
    src: './assets/images/shots/ast (3).jpg',
    name: 'Astha',
  },{
    src: './assets/images/shots/ast (4).jpg',
    name: 'Astha',
  },


  {
    src: './assets/images/shots/mg (1).jpg',
    name: 'Megh',
  },{
    src: './assets/images/shots/mg (2).jpg',
    name: 'Megh',
  },{
    src: './assets/images/shots/mg (3).jpg',
    name: 'Megh',
  },{
    src: './assets/images/shots/mg (4).jpg',
    name: 'Megh',
  },{
    src: './assets/images/shots/mg (5).jpg',
    name: 'Megh',
  },{
    src: './assets/images/shots/mg (6).jpg',
    name: 'Megh',
  },


  {
    src: './assets/images/shots/nk (1).jpg',
    name: 'Nikita Saini',
  },{
    src: './assets/images/shots/nk (2).jpg',
    name: 'Nikita Saini',
  },
 
  {
    src: './assets/images/shots/ragh (1).jpg',
    name: 'Raghvendra Singh',
  },{
    src: './assets/images/shots/ragh (2).jpg',
    name: 'Raghvendra Singh',
  },{
    src: './assets/images/shots/ragh (3).jpg',
    name: 'Raghvendra Singh',
  },{
    src: './assets/images/shots/ragh (4).jpg',
    name: 'Raghvendra Singh',
  },{
    src: './assets/images/shots/ragh (5).jpg',
    name: 'Raghvendra Singh',
  },{
    src: './assets/images/shots/ragh (6).jpg',
    name: 'Raghvendra Singh',
  },{
    src: './assets/images/shots/ragh (7).jpg',
    name: 'Raghvendra Singh',
  },

  {
    src: './assets/images/shots/vsh (1).jpg',
    name: 'Vishesh Goal',
  },
  {
    src: './assets/images/shots/vsh (2).jpg',
    name: 'Vishesh Goal',
  },{
    src: './assets/images/shots/vsh (3).jpg',
    name: 'Vishesh Goal',
  },{
    src: './assets/images/shots/vsh (4).jpg',
    name: 'Vishesh Goal',
  },{
    src: './assets/images/shots/vsh (5).jpg',
    name: 'Vishesh Goal',
  },{
    src: './assets/images/shots/vsh (6).jpg',
    name: 'Vishesh Goal',
  },{
    src: './assets/images/shots/vsh (7).jpg',
    name: 'Vishesh Goal',
  },{
    src: './assets/images/shots/vsh (8).jpg',
    name: 'Vishesh Goal',
    
  },
  {
    src: './assets/images/shots/vsh (9).jpg',
    name: 'Vishesh Goal',
  },{
    src: './assets/images/shots/avn.jpg',
    name: 'Avinash Galam',
  },{
    src: './assets/images/shots/avn.png',
    name: 'Avinash Galam',
  },

  {
    src: './assets/images/shots/advk (1).jpg',
    name: 'Advik',
  },

  {
    src: './assets/images/shots/advk (2).jpg',
    name: 'Advik',
  },

  {
    src: './assets/images/shots/advk (3).jpg',
    name: 'Advik',
  },

  {
    src: './assets/images/shots/advk (4).jpg',
    name: 'Advik',
  }
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
              className="object-contain w-full h-full sm:w-full sm:h-full max-w-[95vw] sm:max-w-none max-h-full"
            />
          </div>
        )}


      </div>
    </>
  )
}
