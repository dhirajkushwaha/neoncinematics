'use client'

type CardpropType = { image: string, title: string, description: string }

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

const Card = ({ image, title, description }: CardpropType) => {
    return (
        <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
            <img src={image} alt={title} className="w-full h-48 object-cover" />

            <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};

const CardSection = () => {
    const upcoming = [
        {
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            title: "Noteworthy technology acquisitions 2021",
            description:
                "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        },
        {
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            title: "Revolutionizing Remote Work",
            description:
                "Discover how companies are adapting to remote-first models and what it means for productivity.",
        },
    ];

    return (
        <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 lg:w-[1080px] mx-auto DMSans">
            {/* <p className="polysans polysans  text-3xl lg:text-5xl"  >
                Club Mission & Mission
            </p> */}
            <div>
                <h2 className="text-3xl ml-5 sm:text-4xl font-extrabold mb-6 polysans">Upcoming Events</h2>
                <div className="max-w-6xl mt-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcoming.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>

            </div>

            <div className="mt-10">
                <h2 className="text-3xl ml-5 sm:text-4xl font-extrabold mb-6 polysans">Past Events</h2>
                <div className="max-w-6xl mt-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
                        <img src="./assets/images/events/SF grid.jpg" className="w-full  object-cover" />

                        <div className="p-5">
                            <h3 className="text-xl font-bold mb-2">Short Film 2025</h3>
                        </div>
                    </div>



                    <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
                        <img src="./assets/images/events/snackathon.jpg" className="w-full   object-cover" />

                        <div className="p-5">
                            <h3 className="text-xl font-bold mb-1">Snackathon</h3>
                            <p className="text-gray-400">A fun game organised in Garba Gravity '24</p>
                        </div>
                    </div>


                </div>
                <div className="max-w-6xl mt-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
                        {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
                        <LiteYouTubeEmbed
                            aspectHeight={9}
                            aspectWidth={16}
                            id="c6WOUab3h8o"
                            title="{video_title}"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-bold mb-2">IIIT KOTA Fresher's Introduction 2K24</h3>
                            {/* <p className="text-gray-400">{description}</p> */}
                        </div>
                    </div>


                    <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
                        {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
                        
 <LiteYouTubeEmbed
                            aspectHeight={9}
                            aspectWidth={16}
                            id="SL1U_5A6R9I"
                            title="{video_title}"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-bold mb-2">IIIT KOTA Orientation 2K24 !!</h3>
                            {/* <p className="text-gray-400">{description}</p> */}
                        </div>
                    </div>


                    <div className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md border border-gray-800 hover:shadow-gray-500/30 transition-shadow">
                        {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
                  
 <LiteYouTubeEmbed
                            aspectHeight={9}
                            aspectWidth={16}
                            id="5dFBIIe2i1w"
                            title="{video_title}"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-bold mb-2">IIIT KOTA Fresher's Introduction 2K23</h3>
                            {/* <p className="text-gray-400">{description}</p> */}
                        </div>
                    </div>





                </div>

            </div>

            <div className="mt-10">
                <h2 className="text-3xl ml-5 sm:text-4xl font-extrabold mb-6 polysans">Behind the scenes</h2>
                <div className="max-w-6xl mt-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcoming.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>

            </div>



        </section>
    );
};

export default CardSection;