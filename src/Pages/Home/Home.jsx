import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import About from "../../components/About/About";
import Nav from "../Nav/Nav";
import { Typewriter } from "react-simple-typewriter";
import  image from '../../assets/images/pictures/github2.png';


const Home = () => {
    return (
        <section className=" min-h-screen bg-[#23226b] lg:px-10 px-4"   >
            {/* nav */}
            <div>
                <Nav></Nav>
            </div>


            {/* home */}
            <div className="flex  lg:flex-row flex-col justify-between items-center">


                <div className="flex flex-1 justify-center items-center min-h-screen lg:p-0 p-4">


                    <div className="lg:w-[100%] mx-auto text-center">

                        <div className="text-base-300 space-y-8   text-center">
                            <h1 className="lg:text-6xl text-2xl font-semibold text-purple-500 flex justify-center items-center gap-2"> <span><img src="https://raw.githubusercontent.com/kekoawong/kekoawong/master/wave2.gif" alt="" className='lg:w-24 w-12 ' /></span> <span className="text-slate-200">Hi,
                            </span>

                                <span className='lg:text-5xl text-xl font-bold '>
                                    <Typewriter
                                        words={['Im Tofayel Ahmed']}
                                        loop={6}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span>

                            </h1>

                            <p className="lg:text-base text-sm font-medium text-slate-300 ">A junior front-end web developer passionate about creating responsive and intuitive web interfaces.I'm passionate about blending creativity with technical skills to build engaging digital experiences. Constantly learning and exploring new technologies, I strive to stay updated with industry trends and best practices.

                            </p>

                            <p className="lg:text-base text-sm">Feel free to explore my portfolio and reach out if you’d like to connect!</p>







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
            <div>
                <About></About>
            </div>



        </section>
    );
};

export default Home;