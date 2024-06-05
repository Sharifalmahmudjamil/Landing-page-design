import Banner from "../Banner/Banner";
import CardSection from "../CardSection/CardSection";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NewListedProperties from "../New Listed Properties/NewListedProperties";
import PopularProperties from "../Popular Properties/PopularProperties";
import PostProperty from "../PostProperty/PostProperty";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <CardSection></CardSection>
      <PopularProperties></PopularProperties>
      <NewListedProperties></NewListedProperties>
      <Testimonials></Testimonials>
      <PostProperty></PostProperty>
      <Footer></Footer>
    </div>
  );
};

export default Home;
