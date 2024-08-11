import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import About from "../../components/About/About";
import Nav from "../Nav/Nav";
import { Typewriter } from "react-simple-typewriter";
import image from '../../assets/images/pictures/github2.png';
import Skills from "../../components/Skills/Skills";


const Home = () => {
    return (
        <section className=" min-h-screen bg-[#23226b] "   >
            {/* nav */}
            <div>
                <Nav></Nav>
            </div>


            {/* home */}
            <div className="flex  lg:flex-row flex-col justify-between items-center lg:px-16 px-4" id="home" >


                <div className="flex flex-1 justify-center items-center min-h-screen lg:p-0 p-4">


                    <div className="lg:w-[100%] mx-auto text-center">

                        <div className="text-base-300 space-y-4   text-center">
                            <h1 className="lg:text-6xl text-2xl font-semibold text-purple-500 flex justify-center items-center gap-2"> <span><img src="https://raw.githubusercontent.com/kekoawong/kekoawong/master/wave2.gif" alt="" className='lg:w-24 w-12 ' /></span> <span className="text-slate-200">Hi,
                            </span>

                                <span className='lg:text-5xl text-xl font-bold '>
                                    <Typewriter
                                        words={["I'm Tofayel Ahmed"]}
                                        loop={6}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span>

                            </h1>

                            {/* <p className="lg:text-base text-sm font-medium text-slate-300 ">A junior front-end web developer passionate about creating responsive and intuitive web interfaces.I'm passionate about blending creativity with technical skills to build engaging digital experiences. Constantly learning and exploring new technologies, I strive to stay updated with industry trends and best practices.

                            </p> */}
                            <p className="lg:text-4xl text-xl font-bold">
                            Creative Web Developer/>
                            </p>

                            <p className="lg:text-base text-sm">Feel free to explore my portfolio and reach out if you’d like to connect!</p>

                            <div className="flex justify-center items-center gap-5 py-3">
                                       <div>
                                       <a href="https://drive.google.com/file/d/1II7ro9pWYJCZe39OKFcTyqWJ23BP-FlS/view?usp=sharing" target="_blank" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                            <span class="w-full h-full bg-gradient-to-br from-[#a84ce6] via-[#9576ff] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#b238eb] group-hover:to-[#8347e2] absolute"></span>
                                            <span class="relative px-6 py-3 transition-all ease-out bg-[#23226b] rounded-md group-hover:bg-opacity-0 duration-400">
                                                <span class="relative text-white">Download Resume</span>
                                            </span>
                                        </a>
                                       </div>


                                       <div>
                                       <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                            <span class="w-full h-full bg-gradient-to-br from-[#a84ce6] via-[#9576ff] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#b238eb] group-hover:to-[#8347e2] absolute"></span>
                                            <span class="relative px-6 py-3 transition-all ease-out bg-[#23226b] rounded-md group-hover:bg-opacity-0 duration-400">
                                                <span class="relative text-white">Contact Me</span>
                                            </span>
                                        </a>
                                       </div>


                                        
                                    </div>







                            <div className="space-y-3 ">
                                {/* <div className=" text-lg font-semibold">Social media</div> */}
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




                            </div>

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



        </section>
    );
};

export default Home;