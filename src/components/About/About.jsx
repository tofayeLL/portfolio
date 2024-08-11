import { FaFileDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
    return (
        <section id="about" >


            <div className="text-center">
                {/* title */}
                <div className="lg:pl-0 pl-6">

                    <a className="relative px-6 py-6 font-semibold text-slate-200 group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-slate-400 "></span>
                        <span className="relative px-2 py-2 font-bold  lg:text-4xl text-xl uppercase">ABOUT ME</span>
                    </a>

                </div>
            </div>








            <div  >

                <div className='flex-1'>

                    {/* text content */}
                    <div className="pt-24 space-y-3">
                        <div className='flex items-center'>
                            <span><img src="https://raw.githubusercontent.com/kekoawong/kekoawong/master/wave2.gif" alt="" className='w-16 ' /></span>

                            <h1 className="lg:text-4xl text-2xl text-slate-300">Hello !  </h1>


                        </div>
                        <h1 className="lg:text-4xl text-2xl "> <span className="text-purple-400">
                            <Typewriter
                                words={['Im Tofayel Ahmed']}
                                loop={6}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            /></span></h1>

                        <p className="lg:text-lg text-base text-slate-300 pb-4">A web developer and specializes in front-end technologies. I specialize in using HTML, CSS, JavaScript,React , Node.js, Express, Firebase, and MongoDB to bring ideas to life on the web. I have a keen interest in technology and design, always exploring new tools and techniques to enhance my skills. I'm highly passionate about JavaScript-based software development technologies such as MERN Stack (MongoDB, Express.js, React, Node.js). </p>




                        <div className="pt-4">
                            <a href='https://drive.google.com/file/d/1i4kF4jeuc6cBGbmokiWMjMMJE4HBLty3/view?usp=sharing' download="Frontend Developer - Tofayel Ahmed.docx.pdf" target="_blank" className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-800 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center gap-2 w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease text-white">Resume <span className="text-base ">< FaFileDownload></FaFileDownload></span></span>
                                <span className="relative invisible">Resume </span>
                            </a>
                        </div>

                    </div>

                </div>



            </div>

        </section>
    );
};

export default About;