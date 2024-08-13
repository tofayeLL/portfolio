import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Contact = () => {


    const handleMessage = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const message = form.message.value;
        console.log(email, name, message);

        toast.success("Your message has been send successfully");
        e.target.reset();
    }



    // Aos 
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);






    return (
        <section className="pt-20">
            <div className="lg:p-0 p-4">

                <div className=" lg:pl-0 pl-6 text-center">

                    <a className="relative px-6 py-4 font-semibold text-slate-200 group  ">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-gray-400 "></span>
                        <span className="relative px-2 py-2  font-bold  lg:text-4xl text-xl uppercase">Contact</span>
                    </a>

                </div>



                <div className="grid  grid-cols-1 gap-10 px-4 py-20 rounded-lg md:grid-cols-2 " >

                    <div className="flex pt-6 flex-col justify-between lg:px-6 space-y-5 text-slate-200 " data-aos="fade-up">

                        <div className="py-6 md:py-0 ">

                            <h1 className="text-4xl font-bold">Get in touch</h1>
                            <p className="pt-5 pb-6 lg:text-lg md:text-base text-sm">Fel free to send me message. Fill in the form to start a conversation with me.</p>

                            <div className="space-y-4">

                                <p className="flex items-center">
                                    <span className="w-5 h-5 mr-2 sm:mr-4">
                                        <FaLocationDot></FaLocationDot>
                                    </span>
                                    <span className="lg:text-lg md:text-base text-sm"> Dhaka, Bangladesh </span>
                                </p>
                                <p className="flex items-center">
                                    <span className="w-5 h-5 mr-2 sm:mr-4">
                                        <IoMdCall className="text-xl"></IoMdCall>
                                    </span>
                                    <span className="lg:text-lg md:text-base text-sm">01795628299</span>
                                </p>


                                <p className="flex lg:flex-row items-center flex-wrap">
                                    <span className="w-5 h-5 mr-2 sm:mr-4">
                                        <MdOutlineMailOutline className="text-xl"></MdOutlineMailOutline>
                                    </span>
                                    <p className="lg:text-lg md:text-base text-sm">ahmedtofayel132@gmail.com</p>

                                </p>
                                <div className="">

                                    <p className="lg:text-lg text-sm pb-3">Feel free to explore my portfolio and reach out if you’d like to connect!</p>



                                </div>

                                <div className="flex  space-x-4 justify-start items-center ">
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
                        </div>



                    </div>

                    <form onSubmit={handleMessage} className="space-y-6 text-slate-200" data-aos="fade-down">
                        <div>
                            <label name="name" className="text-lg ">Full name</label>
                            <input id="name" type="text" placeholder="Your  name" className="w-full p-3 text-black bg-slate-200 rounded " required />
                        </div>
                        <div>
                            <label name="email" className="text-lg">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded text-black bg-slate-200 " placeholder='Your email' required />
                        </div>
                        <div>
                            <label name="message" className="text-lg">Message</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded text-black bg-slate-200" placeholder='Message...' required></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-base font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900">Send Message</button>
                    </form>





                </div>


            </div>



            <div className="text-center text-white pt-20 pb-4">

                <p className="pb-4">©2024 - All right reserved by Tofayel Ahmed</p>

               {/*  <div className="flex  space-x-4 justify-center items-center ">
                    <a href="https://www.linkedin.com/in/tofayel-ahmed-680022295" title="Facebook" className="hover:scale-110 transition">
                        <FaLinkedin className="w-12 h-12 border-2 border-purple-400  p-1 rounded-full text-blue-400 fill-current"></FaLinkedin >
                    </a>
                    <a href="https://github.com/tofayeLL" title="Twitter" className="hover:scale-110 transition ">
                        < FaGithub className="w-12 h-12 border-2 border-purple-400  p-1 rounded-full text-blue-400 fill-current"></ FaGithub >
                    </a>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/?hl=en" title="Instagram" className="hover:scale-110 transition">
                        <FaInstagram className="w-12 h-12 border-2 border-purple-400  p-1 rounded-full text-blue-400 fill-current  "></FaInstagram>
                    </a>
                </div> */}
            </div>






        </section>
    );
};

export default Contact;