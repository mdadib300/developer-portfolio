import React from 'react';
import project3 from '../../assets/projects/Penguin-Fashion.png';
import project5 from '../../assets/projects/Jerins-parlour.png';
import project6 from '../../assets/projects/Influencer-Point.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='m-3 text-white'>
            <h1 className="text-4xl font-semibold text-center my-10 lg:my-20">Portfolio 📁</h1>

            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>1. Penguin Fashion</h2>
                <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                    <img src={project3} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='mr-0 lg:mr-10'>
                        <h2>Penguin Fashion, an e-commerce landing page. Made with HTML, HTML5, CSS, CSS3. No framework is used. This webpage isn't responsive, only suitable for desktop and laptop. The main objectives of the webpage are Flexbox and Grid layout.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3">HTML</div>
                            <div class="badge badge-outline">CSS</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/penguin-fashion/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/penguin-fashion' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-3/4 mx-auto mb-7'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>2. Influencer Point</h2>
                <div className='flex flex-col lg:flex-row items-center justify-around py-5 rounded-md'>
                    <img src={project6} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='ml-0 lg:ml-10'>
                        <h2>Influencer point, an e-commerce landing page. Made with HTML, HTML5, CSS, CSS3, Tailwind CSS, DaisyUI. This webpage is fully responsive for mobile phone, tablet, laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3 hidden md:inline">HTML</div>
                            <div class="badge badge-outline mr-3 hidden md:inline">CSS</div>
                            <div class="badge badge-outline mr-3">Tailwind CSS</div>
                            <div class="badge badge-outline">DaisyUI</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://mdadib300.github.io/Influencer-Point/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Influencer-Point' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-3/4 mx-auto'>
                <h2 className='text-3xl font-semibold mb-0 lg:mb-5'>3. Jerin's Parlour</h2>
                <div className='flex flex-col lg:flex-row-reverse items-center justify-around py-5 rounded-md'>
                    <img src={project5} alt='project demo' className='rounded-md w-full lg:w-[500px] mb-5 lg:mb-0'></img>
                    <div className='mr-0 lg:mr-10'>
                        <h2>Jerin's Parlour, an e-commerce landing page. Made with HTML, HTML5, CSS, CSS3, React, Bootstrap, React-Bootstrap. React Router and Bootstrap icons are also used. This webpage is fully responsive for mobile phone, tablet, laptop and desktop.</h2>
                        <div className='mt-5'>
                            <div class="badge badge-outline mr-3 hidden md:inline">HTML</div>
                            <div class="badge badge-outline mr-3 hidden md:inline">CSS</div>
                            <div class="badge badge-outline mr-3">React</div>
                            <div class="badge badge-outline mr-3">Bootstrap</div>
                            <div class="badge badge-outline hidden md:inline">React-Bootstrap</div>
                        </div>
                        <div className='mt-8'>
                            <a href='https://jerin-s-parlour-2023.netlify.app/' target='blank' className='myBtn mr-5'>Live Website</a>
                            <a href='https://github.com/mdadib300/Jerin-s-parlour' target='blank' className='myBtn'>Details</a>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex justify-center mt-10'>
                <Link to='/projects' className='myWideBtn'>View More</Link>
            </div>
        </div>
    );
};

export default Portfolio;