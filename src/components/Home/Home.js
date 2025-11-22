import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div>
                <p className='text-4xl text-red-600 underline font-bold text-center'>Portfolio is under construction. Come later when completed.</p>
            </div>
            <Banner />
            <Skills />
            <Portfolio />
            <Testimonials />
        </div>
    );
};

export default Home;