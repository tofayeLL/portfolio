import html from "../../assets/images/logos/html-5.png";
import css from "../../assets/images/logos/css-3.png";
import tailwind from "../../assets/images/logos/tailwind-css-48.png";
import bootstrap from "../../assets/images/logos/bootstrap.png";
import javascript from "../../assets/images/logos/js.png";
import react from "../../assets/images/logos/physics.png";
import node from "../../assets/images/logos/programing.png";
import express from "../../assets/images/logos/express-js-48.png";
import firebase from "../../assets/images/logos/firebase-console-48.png";
import daisy from "../../assets/images/logos/daisy1.jpg";
import mongodb from "../../assets/images/logos/mongodb1.png";
import router from "../../assets/images/logos/react-router1.png";
import jwt from "../../assets/images/logos/stripe.png";
import stripe from "../../assets/images/logos/stripe1.png";


const Skills = () => {
    return (
        <section className="py-20">



            <div className='lg:p-1  text-slate-200  p-4 text-center'>

                <div>
                    <div className='lg:pl-0 pl-6'>
                        <a className="relative px-6 py-4 font-semibold text-slate-200 group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full border-4 border-slate-400 "></span>
                            <span className="relative px-2 py-2  font-bold  lg:text-4xl text-xl uppercase">My skills</span>
                        </a>

                    </div>

                    <div className=''>


                        <div className='pt-16'>
                            <h1 className='text-slate-300 text-2xl'>Versatile skill set with a focus on continuous learning</h1>
                        </div>


                        <div className="py-20 flex justify-center items-center lg:gap-20 gap-8 flex-wrap ">


                            {/* html */}

                            <div className='text-center space-y-2  flex flex-col items-center '>
                                <div >
                                    <img src={html} alt="" className='w-20 bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>HTML</p>
                            </div>



                            {/* css */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div >
                                    <img src={css} alt="" className='w-20 bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>CSS</p>
                            </div>

                            {/* Tailwind */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={tailwind} alt="" className='w-20 bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>Tailwind</p>
                            </div>

                            {/* Daisy ui */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={daisy} alt="" className='w-20 bg-slate-300 object-cover  rounded-full p-2   object-center' />
                                </div>
                                <p className=' text-xl'>Daisyui</p>
                            </div>

                            {/* bootstrap */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={bootstrap} alt="" className='w-20 bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>Bootstrap</p>
                            </div>


                            {/* java */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={javascript} alt="" className='w-20  bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>Javascript</p>
                            </div>


                            {/* react */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={react} alt="" className='w-20  bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>React.js</p>
                            </div>


                            {/* nodejs */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={node} alt="" className='w-20  bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>Node.js</p>
                            </div>
                            {/* express */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={express} alt="" className='w-20  bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>Express.js</p>
                            </div>
                            {/* Mongodb */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={mongodb} alt="" className='w-20  bg-slate-300 object-cover h-20 object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>MongoDB</p>
                            </div>

                            {/* firebase */}
                            <div className='text-center space-y-2  flex flex-col items-center'>
                                <div className=''>
                                    <img src={firebase} alt="" className='w-20  bg-slate-300 object-cover object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>Firebase</p>
                            </div>

                            {/* react router */}
                            <div className='text-center space-y-2  flex flex-col items-center  '>
                                <div className='text-center'>
                                    <img src={router} alt="" className='w-20  bg-slate-300 object-cover h-20 object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>React Router</p>
                            </div>
                            {/* jwt*/}
                            <div className='text-center space-y-2  flex flex-col items-center  '>
                                <div className='text-center'>
                                    <img src={jwt} alt="" className='w-20  bg-slate-300 object-cover h-20 object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>JWT</p>
                            </div>
                            {/* stripe */}
                            <div className='text-center space-y-2  flex flex-col items-center  '>
                                <div className='text-center'>
                                    <img src={stripe} alt="" className='w-20  bg-slate-300 object-cover h-20 object-center rounded-full p-2' />
                                </div>
                                <p className=' text-xl'>Stripe</p>
                            </div>





                        </div>





                    </div>










                </div>





            </div>

        </section>
    );
};

export default Skills;