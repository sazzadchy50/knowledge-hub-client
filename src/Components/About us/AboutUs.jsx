const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row container w-full my-32 justify-center  mx-auto gap-6 p-5">
        <div className="lg:w-1/2">
          <img
            className="w-full"
            src="https://i.ibb.co/Gn6jcJr/people-concept-illustration-of-our-team-management-about-us-for-graphic-and-web-design-business-pres.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-5xl italic font-bold mb-12 border-b-4 border-purple-500 pb-5 text-center">
            About Us
          </h2>
          <p>
            <span className="text-4xl">W</span>elcome to Knowledge Hub, we
            believe in the power of words. Our mission is to create a vibrant
            online space where individuals can explore, share, and engage in a
            diverse range of ideas, stories, and insights. Whether you're a
            seasoned writer, a passionate enthusiast, or someone looking to
            discover new perspectives, you've found your home.
          </p>
          <p className="mt-5">
            At Knowledge Hub, we are committed to fostering an inclusive,
            respectful, and open-minded community. We encourage diversity of
            thought and expression, and we believe that everyone has a story
            worth sharing. Join us on this exciting journey of exploration,
            learning, and connection. Together, let's make Knowledge Hub a
            place where words come alive and ideas thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
