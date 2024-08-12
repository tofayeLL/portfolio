
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
// import homelyHaven from '../../assets/images/pictures/homelyhaven.png';
import ekocraft from '../../assets/images/pictures/ecocraft.png';
import doctorConsulta from '../../assets/images/pictures/doctorConsulta.png';
import zipParcel from '../../assets/images/pictures/zippparcel.png';
import tailwind from "../../assets/images/logos/tailwind-css-48.png";
import express from "../../assets/images/logos/express-js-48.png";
import firebase from "../../assets/images/logos/firebase-console-48.png";
import daisy from "../../assets/images/logos/daisy1.jpg";
import mongodb from "../../assets/images/logos/mongodb1.png";
import react from "../../assets/images/logos/physics.png";





const Projects = () => {
    return (
        <section className="py-20">


            <div className="text-center">
                <a className="relative px-6 py-4 font-semibold text-slate-200 group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-slate-400 "></span>
                    <span className="relative px-2 py-2   font-bold  lg:text-4xl text-xl uppercase">My Projects</span>
                </a>

            </div>



            <div className='pt-16 text-center'>
                <h1 className='text-purple-400 text-2xl'>Explore my creative and innovative projects, where fresh ideas meet practical solutions</h1>
            </div>



            {/* card container */}
            <div className="pt-16 space-y-16">


                {/* card 1 */}
                <div className="text-slate-200 ">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 py-6 border-r-[12px] border-b-[12px] border-[1px]   shadow-2xl px-6 rounded-3xl">


                        <div className="rounded-xl flex-1 lg:h-[75vh] h-[52vh] mx-auto  overflow-hidden ">
                            <div className="relative rounded-lg shadow-xl">
                                <img src={zipParcel} alt="" className="rounded-lg transition-transform duration-[1.5s] ease-linear transform hover:translate-y-[-58%]" />
                            </div>

                        </div>




                        <div className="flex flex-1 flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
                            <p className="pb-4 text-orange-400 text-xl">Featured Projects</p>
                            <div className="space-y-2">
                                <h1 className="lg:text-4xl text-xl font-semibold text-purple-400 leading-none ">ZipParcel</h1>
                                <p className="text-lg font-normal">-A Parcel Management Website</p>
                            </div>

                            <p className="mt-4  text-base ">ZipParcel, your go-to platform for all your parcel delivery needs. Whether you're booking a parcel, managing deliveries, or tracking your packages, ZipParcel makes the process smooth and hassle-free. With experienced delivery personnel and a user-friendly interface, we ensure your parcels are delivered on time, every time.
                            </p>

                            {/* technologies */}
                            <div className="pt-8  flex  items-center gap-7 flex-wrap">


                                {/* react */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={react} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* daisy */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={daisy} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                                {/* Tailwind */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={tailwind} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                                {/* express */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={express} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* firebase */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={firebase} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* mongodb */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={mongodb} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                            </div>



                            <div className="flex flex-col  sm:items-center sm:justify-center sm:flex-row lg:justify-start gap-4 mt-10 ">


                                <a href="https://zipparcel-client.web.app" target="_blank" className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                    <span className="relative flex items-center gap-2 text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Visit <span><FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></span></span>
                                </a>



                                <a rel="noopener noreferrer" href="https://github.com/tofayeLL/ZipParcel-client" target="_blank" className="px-4 py-2 text-lg font-normal rounded-md text-white border hover:underline border-white bg-purple-700 flex justify-center items-center gap-2"><span className="text-xl"><FaGithub></FaGithub> </span> Client</a>


                                <a rel="noopener noreferrer" href="https://github.com/tofayeLL/ZipParcel-server" target="_blank" className="px-4 py-2 text-lg font-normal text-white border hover:underline border-white bg-purple-700  rounded-md flex justify-center items-center gap-2"><span className="text-xl"><FaGithub></FaGithub> </span>Server</a>

                            </div>





                        </div>



                    </div>
                </div>

                {/* card 2 */}
                <div className="text-slate-200 ">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 py-6 border-r-[12px] border-b-[12px] border-[1px]   shadow-2xl  px-6 rounded-3xl">


                        <div className="rounded-xl flex-1 lg:h-[75vh] h-[60vh]  mx-auto  overflow-hidden ">
                            <div className="relative rounded-lg shadow-xl">
                                <img src={doctorConsulta} alt="" className="rounded-lg transition-transform duration-[4.5s] ease-linear transform hover:translate-y-[-86%]" />
                            </div>

                        </div>




                        <div className="flex flex-1 flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
                            <p className="pb-6 text-orange-400 text-xl">Featured Projects</p>
                            <div className="space-y-2">
                                <h1 className="lg:text-4xl text-xl font-semibold text-purple-400 leading-none ">DoctorConsulta</h1>
                                <p className="text-lg font-normal">-Doctor consultation services Website</p>
                            </div>

                            <p className="mt-4  text-base ">DoctorConsulta, your premier destination for comprehensive consultation services provided by experienced doctors and medical professionals. Whether you're seeking urgent care, preventive treatments, chronic condition management, everyday wellness, or mental health support, DoctorConsulta is here to cater to your holistic well-being.
                            </p>

                            {/* technologies */}
                            <div className="pt-8  flex  items-center gap-7 flex-wrap">


                                {/* react */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={react} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* daisy */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={daisy} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                                {/* Tailwind */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={tailwind} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                                {/* express */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={express} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* firebase */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={firebase} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* mongodb */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={mongodb} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                            </div>



                            <div className="flex flex-col  sm:items-center sm:justify-center sm:flex-row lg:justify-start gap-4 pt-10">


                                <a href="https://doctorconsulta-client.web.app" target="_blank" className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                    <span className="relative flex items-center gap-2 text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Visit <span><FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></span></span>
                                </a>



                                <a rel="noopener noreferrer" href="https://github.com/tofayeLL/DoctorConsulta-client" target="_blank" className="px-4 py-2 text-lg font-normal rounded-md text-white border hover:underline border-white bg-purple-700 flex justify-center items-center gap-2"><span className="text-xl"><FaGithub></FaGithub> </span> Client</a>


                                <a rel="noopener noreferrer" href="https://github.com/tofayeLL/DoctorConsulta-server" target="_blank" className="px-4 py-2 text-lg font-normal text-white border hover:underline border-white bg-purple-700  rounded-md flex justify-center items-center gap-2"><span className="text-xl"><FaGithub></FaGithub> </span>Server</a>

                            </div>


                        </div>



                    </div>
                </div>

                {/* card 3 */}
                <div className="text-slate-200 ">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 py-6 border-r-[12px] border-b-[12px] border-[1px]   shadow-2xl  px-6 rounded-3xl">


                        <div className="rounded-xl flex-1 lg:h-[75vh] h-[59vh] mx-auto  overflow-hidden ">
                            <div className="relative rounded-lg shadow-xl">
                                <img src={ekocraft} alt="" className="rounded-lg transition-transform duration-[3.5s] ease-linear transform hover:translate-y-[-80%]" />
                            </div>

                        </div>




                        <div className="flex flex-1 flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
                            <p className="pb-6 text-orange-400 text-xl">Featured Projects</p>
                            <div className="space-y-2">
                                <h1 className="lg:text-4xl text-xl font-semibold text-purple-400 leading-none ">EcoKrafts</h1>
                                <p className="text-lg font-normal">-Eco-friendly craft products Shop Website</p>
                            </div>

                            <p className="mt-4  text-base ">EcoKrafts, your go-to for eco-friendly craft products! Explore our wide range of sustainable items, from charming wooden furniture and sculptures to rustic jute home decor and beautiful wooden and jute jewelry. Each piece is crafted with care and sustainability in mind. Embrace a greener lifestyle with EcoKrafts.
                            </p>




                            {/* technologies */}
                            <div className="pt-8  flex  items-center gap-7 flex-wrap">


                                {/* react */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={react} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* daisy */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={daisy} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                                {/* Tailwind */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={tailwind} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                                {/* express */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={express} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* firebase */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={firebase} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>
                                {/* mongodb */}
                                <div className='text-center space-y-2  flex flex-col items-center'>
                                    <div className=''>
                                        <img src={mongodb} alt="" className='w-12 bg-slate-300 object-cover object-center rounded-md p-1' />
                                    </div>

                                </div>

                            </div>








                            <div className="flex flex-col  sm:items-center sm:justify-center sm:flex-row lg:justify-start gap-4 pt-10">


                                <a href="https://ecokrafts-client.web.app" target="_blank" className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                    <span className="relative flex items-center gap-2 text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Visit <span><FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></span></span>
                                </a>



                                <a rel="noopener noreferrer" href="https://github.com/tofayeLL/EcoKrafts-client" target="_blank" className="px-4 py-2 text-lg font-normal rounded-md text-white border hover:underline border-white bg-purple-700 flex justify-center items-center gap-2"><span className="text-xl"><FaGithub></FaGithub> </span> Client</a>


                                <a rel="noopener noreferrer" href="https://github.com/tofayeLL/EcoKrafts-server" target="_blank" className="px-4 py-2 text-lg font-normal text-white border hover:underline border-white bg-purple-700  rounded-md flex justify-center items-center gap-2"><span className="text-xl"><FaGithub></FaGithub> </span>Server</a>

                            </div>


                        </div>



                    </div>
                </div>

            


            </div>







        </section>
    );
};

export default Projects;