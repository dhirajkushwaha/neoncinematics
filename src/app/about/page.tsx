const DiscoverStory = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 DMSans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        {/* <p className="text-sm text-orange-500 mb-2">About Us</p> */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 polysans">Discover Our Story</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
        At Neon Cinematics, we believe in the power of visuals to transcend words. Our work is a fusion of cinematic storytelling, dynamic photography, and immersive videography, all crafted to evoke emotions and create lasting impressions. Every frame we capture is meticulously designed to resonate with audiences, turning concepts into compelling narratives. 
        </p>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg mt-4">
        We are dedicated to pushing the boundaries of visual storytelling. By integrating innovative techniques and a keen eye for detail, we transform ordinary moments into extraordinary experiences. Our commitment to excellence ensures that each project not only meets but exceeds expectations. At Neon Cinematics, we don't just create visuals, we craft experiences that leave a lasting impact. Let's bring your story to life.



        </p>
      </div>

      {/* Images */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <img
          src="./assets/images/events/abt - 3.png"
          alt="Mountain hiking"
          className="w-full  object-cover rounded-xl"
        />
        <img
          src="./assets/images/events/abt - 2.jpg"
          alt="Scuba diving"
          className="w-full  object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default DiscoverStory;
