// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import { useEffect, useState } from 'react';

import developer from "../../assets/images/pictures/developer.jpg"


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])




    return (
        <section className='py-20'>



            <div className='text-center'>


                <div className='lg:pl-0 pl-6' >

                    <a className="relative px-6 py-4 font-semibold text-slate-200 group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-slate-400 "></span>
                        <span className="relative px-2 py-2   font-bold  lg:text-4xl text-xl uppercase">Blogs</span>
                    </a>

                </div>







                <div className='lg:block md:block hidden w-full bg-purple-500 rounded-lg mt-20'>

                    <div className='text-center mb-12 pt-12'>
                        <h2 className="text-3xl font-bold sm:text-5xl ">Coming soon latest blogs</h2>
                    </div>




                    <div className='bg-[#e3f4fe]  rounded-lg p-6 '>


                        <>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={0}
                                freeMode={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}

                                modules={[Autoplay, FreeMode, Pagination]}
                                className="mySwiper"
                            >

                                <div>
                                    {
                                        blogs?.map((blog, index) => <div key={index}>
                                            <SwiperSlide className='lg:p-6 '>
                                                {/* <div className='border-[1px] w-full border-cyan-600 rounded-lg lg:p-4    shadow-lg'>
                                    <article className="flex flex-col dark:bg-gray-50 space-y-2">
                                        <div >
                                            <img alt="" className="object-cover  h-52 dark:bg-gray-500" src={blog?.blogImage} />
                                        </div>

                                        <div className="flex flex-col flex-1 p-6 space-y-2">


                                            <div className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600"><span className='bg-cyan-300 p-1 text-gray-900'>{blog?.category}</span></div>

                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog?.title}</h3>


                                            <p>{blog?.content} <br />
                                                <span className="hover:underline dark:text-gray-600 text-cyan-600">_____By {blog.author}</span></p>

                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                                <span>{blog?.date}</span>
                                                <span>{blog?.views} views</span>
                                            </div>
                                        </div>
                                    </article>

                                </div>


                                
*/}





                                                <div className='border-[1px] w-full border-cyan-600 rounded-lg lg:p-4    shadow-lg'>
                                                    <article className="flex flex-col dark:bg-gray-50 space-y-2">
                                                        <div >
                                                            <img alt="" className="object-cover  h-52 dark:bg-gray-500 hover:scale-110 transition overflow-hidden  " src={developer} />
                                                        </div>

                                                        <div className="flex flex-col flex-1 p-6 space-y-2">




                                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Coming soon</h3>


                                                            <p> <br />
                                                                <span className="hover:underline dark:text-gray-600 text-cyan-600"></span></p>


                                                        </div>
                                                    </article>

                                                </div>







                                            </SwiperSlide>
                                        </div>

                                        )

                                    }
                                </div>

                            </Swiper>
                        </>



                    </div>

                </div>








            </div>




        </section>
    );
};

export default Blogs;