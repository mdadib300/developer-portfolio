import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import developerImg from '../../assets/banner/developer.png';

const Banner = () => {
    return (
        <div className="m-5 md:pt-10">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-around">
                <img src={developerImg} alt='Web Developer Muhammad Adib Chowdhury' className='w-4/5 md:w-1/2 lg:w-1/3 mb-5 md:mb-10 lg:mb-0'></img>
                <div>
                    <h1 className="text-5xl font-semibold mb-5">MD ADIB CHOWDHURY</h1>
                    <h2 className='text-2xl md:text-3xl lg:text-3xl font-semibold lg:font-bold'>
                        <Typewriter
                            options={{
                                strings: ['Front-End Web Developer', 'React.js Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <div className='w-full lg:w-[550px]'>
                        <p className="py-6">I am a creative and passionate Front - End Web Developer who has acquired enough skills to excel in this field. I have completed some projects to utilize the skills. I have the necessary confidence to work in this sector.</p>
                    </div>
                    <a href='https://drive.google.com/file/d/1Yb-aMJrPcwWfGzsv3gEQTAJergoz6DFq/view?usp=share_link' target='blank' className="myBtn mr-5">See Resume</a>
                    <Link to='/email' className="myBtn">Hire Me</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;