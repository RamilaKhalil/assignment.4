import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Categories from '../Components/Categories';
import Testimonials from '../Components/Testimonials';
import Newsletter from '../Components/Newsletter';
import HeroSection from '../Components/HeroSection';

export default function Home() {
  return (
    <div >
      <Header />
      <main>
        <HeroSection />
        <Categories />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}




