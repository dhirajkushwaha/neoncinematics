const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 DMSans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl Polysans">About Us</h2>
          <p className="mt-4 text-lg text-gray-400">
            As a Web Development Services We are Committed to Building Custom Web Solutions that Drive Business Success.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              className="rounded-2xl w-full object-cover"
              src="./assets/images/goal-page.jpg"
              alt="Team collaborating"
            />
          </div>

          {/* Text Block */}
          <div>
            <p className="text-gray-300 mb-6 text-lg">
              At our web development agency, we specialize in crafting bespoke online solutions tailored to elevate businesses toward their digital objectives. Committed to continuous evolution, we remain abreast of cutting-edge web technologies and trends.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              Our ethos is rooted in equipping clients with the essential tools for digital triumph. We deliver authentic digital experiences that align with brand identity and resonate with target audiences.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 text-black bg-orange-500 hover:bg-orange-600 rounded-lg text-sm font-medium transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
