import Banner from "./Banner";
import RecentBlogs from "./RecentBlog/RecentBlogs";

const Home = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <Banner />
      <RecentBlogs />
    </div>
  );
};

export default Home;
