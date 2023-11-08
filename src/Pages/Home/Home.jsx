import Banner from "./Banner";
import Newsletter from "./Newsletter";
import RecentBlogs from "./RecentBlog/RecentBlogs";

const Home = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <Banner />
      <RecentBlogs />
      <Newsletter/>
    </div>
  );
};

export default Home;
