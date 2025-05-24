const DiscoverStory = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 DMSans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        {/* <p className="text-sm text-orange-500 mb-2">About Us</p> */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 polysans">Discover Our Story</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Welcome to Nature's Bliss Retreats, where tranquility meets adventure. Established in 2010, our mission is to provide immersive experiences that rejuvenate the mind, body, and soul. Whether you seek solace in serene landscapes or crave the thrill of outdoor activities, our offerings cater to every traveler.
        </p>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mt-4">
          With a commitment to sustainability and mindful living, we foster unforgettable moments that connect you with both yourself and nature.
        </p>
      </div>

      {/* Images */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <img
          src="https://cdn.pixabay.com/photo/2022/05/27/09/15/gimbal-stabilizer-7224727_1280.jpg"
          alt="Mountain hiking"
          className="w-full  object-cover rounded-xl"
        />
        <img
          src="https://cdn.pixabay.com/photo/2022/05/27/09/15/gimbal-stabilizer-7224727_1280.jpg"
          alt="Scuba diving"
          className="w-full  object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default DiscoverStory;
