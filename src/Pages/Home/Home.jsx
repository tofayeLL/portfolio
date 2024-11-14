import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import About from "../../components/About/About";
import Nav from "../Nav/Nav";
import { Typewriter } from "react-simple-typewriter";
import image from '../../assets/images/pictures/tofayel.png';
import Skills from "../../components/Skills/Skills";
import Blogs from "../../components/Blogs/Blogs";
import Contact from "../../components/Contact/Contact";
import { Link } from "react-scroll";
import Projects from "../../components/Projects/Projects";
import Education from "../../components/Education/Education";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";


const Home = () => {

    // Aos 
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);







    return (
        <section className=" min-h-screen bg-[linear-gradient(45deg,rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(https://i.ibb.co/5rqPS75/bg.png)] bg-center bg-cover "   >
            {/* nav */}
            <div>
                <Nav></Nav>
            </div>


            {/* home */}
            <div className="flex  lg:flex-row flex-col justify-between items-center lg:px-16 px-4" id="home"  >


                <div className="flex flex-1 justify-center items-center min-h-screen lg:pt-0 pt-7" data-aos="fade-down">


                    <div className="lg:w-[100%] mx-auto text-start">

                        <div className="text-base-300 space-y-4  ">
                            <h1 className="lg:text-4xl text-2xl font-semibold text-purple-500 flex justify-start items-center gap-2"> <span><img src="https://raw.githubusercontent.com/kekoawong/kekoawong/master/wave2.gif" alt="" className='lg:w-20 w-10 ' /></span> <span className="text-slate-200">Hi there, I'm
                            </span>
                                {/* 
                                <span className='lg:text-5xl text-xl font-bold '>
                                    <Typewriter
                                        words={["I'm Tofayel Ahmed"]}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span> */}

                            </h1>


                            <p className="lg:text-4xl text-xl font-bold text-slate-200">
                                
                                <span className='lg:text-5xl text-xl font-semibold '>
                                    <Typewriter
                                        words={["Creative Web Developer"]}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span> 
                            </p>

                            <p className="lg:text-base text-sm text-slate-200">
                                Delivering a unique identity for you and your business.
                                I blend creativity with technical skills to build websites that stand out and perform well. Let’s create something great together that truly represents your brand.</p>

                            <div className="flex justify-start items-center gap-5 py-3">
                                <div>
                                    <a href="https://drive.google.com/file/d/1-S8cNwc1PbGmQzYNMt8TBwJPKh0O5IbH/view?usp=sharing" target="_blank" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                        <span className="w-full h-full bg-gradient-to-br from-[#a84ce6] via-[#9576ff] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#b238eb] group-hover:to-[#8347e2] absolute"></span>
                                        <span className="relative px-6 py-3 transition-all ease-out bg-[#23226b] rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative lg:text-lg text-sm text-white">Download Resume</span>
                                        </span>
                                    </a>
                                </div>


                                <div>
                                    <Link to="contact"
                                        smooth={true}
                                        duration={1500}
                                        className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                        <span className="w-full h-full bg-gradient-to-br from-[#a84ce6] via-[#9576ff] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#b238eb] group-hover:to-[#8347e2] absolute"></span>
                                        <span className="relative px-6 py-3 transition-all ease-out bg-[#23226b] rounded-md group-hover:bg-opacity-0 duration-400">
                                            <span className="relative lg:text-lg text-sm  text-white">Contact Me</span>
                                        </span>
                                    </Link>
                                </div>



                            </div>







                          {/*   <div className="space-y-3 ">
                              
                                <div className="flex  space-x-4 justify-center ">
                                    <a href="https://www.linkedin.com/in/tofayel-ahmed-680022295" title="Facebook" className="hover:scale-110 transition">
                                        <FaLinkedin className="w-12 h-12 border-2 border-purple-400  p-1 rounded-full text-blue-400 fill-current"></FaLinkedin >
                                    </a>
                                    <a href="https://github.com/tofayeLL" title="Twitter" className="hover:scale-110 transition ">
                                        < FaGithub className="w-12 h-12 border-2 border-purple-400  p-1 rounded-full text-blue-400 fill-current"></ FaGithub >
                                    </a>
                                    <a rel="noopener noreferrer" href="https://www.instagram.com/?hl=en" title="Instagram" className="hover:scale-110 transition">
                                        <FaInstagram className="w-12 h-12 border-2 border-purple-400  p-1 rounded-full text-blue-400 fill-current  "></FaInstagram>
                                    </a>




                                </div>




                            </div> */}

                        </div >



                    </div>

                </div>



                <div className="flex-1 w-full  flex flex-col justify-center items-end lg:p-0 p-4">
                    <div className="avatar  lg:w-96">
                        <div className=" w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} className="object-cover object-center" />
                        </div>
                    </div>
                </div>







            </div>



            {/* about */}
            <div className="lg:px-16 px-4" id="about">
                <About></About>
            </div>


            {/* skills */}
            <div id="skills" className="lg:px-16 px-4">
                <Skills></Skills>
            </div>

            {/* projects */}
            <div id="projects" className="lg:px-16 px-4">
                <Projects></Projects>
            </div>

            {/* education */}
            <div id="education" className="lg:px-16 px-4">
                <Education></Education>
            </div>

            {/* blogs */}
            <div id="blogs" className="lg:px-16 px-4">
                <Blogs></Blogs>
            </div>

            {/* contact */}
            <div id="contact" className="lg:px-16 px-4">
                <Contact></Contact>
            </div>





               {/* to scroll down to up */}
               <ScrollToTop />





        </section>
    );
};

export default Home;