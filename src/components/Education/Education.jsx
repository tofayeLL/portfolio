import { BiSolidSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import school from '../../assets/images/logos/school.png';
import cap from '../../assets/images/logos/cap.png';
import session from '../../assets/images/logos/session.png';
import graph from '../../assets/images/logos/gpa.png';



const Education = () => {
    return (
        <section className="py-20">


            <div className="text-center">

                <a className="relative px-6 py-4 font-semibold text-slate-200 group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-purple-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-slate-400 "></span>
                    <span className="relative px-2 py-2  font-bold  lg:text-4xl text-xl uppercase">Education</span>
                </a>

            </div>

            <div className="pt-20 space-y-10 flex flex-col justify-center items-center">


                <div className="shadow-2xl lg:w-[60%] w-full hover:bg-purple-800 transition lg:hover:scale-110 hover:scale-105  text-start p-8 rounded-xl  border-[1px] border-purple-500">
                   
                    <h1 className="text-white lg:text-2xl text-lg font-semibold flex items-center gap-2"><span><img src={cap} alt="" className="w-8 h-8" /></span>B.Sc in Computer Science & Engineering</h1>


                    <p className="text-purple-400 lg:text-xl text-lg font-medium pt-8 flex items-center gap-2"><span><img src={school} alt="" className="w-7 h-7" /></span>Daffodil International University</p>

                    <p className="pt-2 text-white lg:text-xl text-lg font-normal flex items-center gap-2"><span><img src={graph} alt="" className="w-7 h-7" /></span>CGPA : 3.49 out of 4.00</p>

                    <p className="pt-2 text-white lg:text-xl text-lg font-normal flex items-center gap-2"><span><img src={session} alt="" className="w-7 h-7" /></span> 2017-2021</p>


                </div>



                <div className="shadow-2xl lg:w-[60%] w-full hover:bg-purple-800 transition lg:hover:scale-110 hover:scale-105 text-start p-8 rounded-xl border-[1px] border-purple-600 overflow-hidden">
                    <h1 className="text-white lg:text-2xl text-lg font-semibold flex items-center gap-2"><span><img src={cap} alt="" className="w-8 h-8" /></span>Higher Secondary Certificate</h1>

                    <p className="text-purple-400 lg:text-xl text-lg font-medium pt-8 flex items-center gap-2"><span><img src={school} alt="" className="w-7 h-7" /></span>Dhaka Megacity college</p>
                    <p className="pt-2 text-white lg:text-xl text-lg font-normal flex items-center gap-2"><span><img src={graph} alt="" className="w-7 h-7" /></span>GPA : 4.71 out of 5.00</p>

                    <p className="pt-2 text-white lg:text-xl text-lg font-normal flex items-center gap-2"><span><img src={session} alt="" className="w-7 h-7" /></span> 2014-2016</p>

                </div>



                <div className="shadow-2xl lg:w-[60%] w-full hover:bg-purple-800 transition lg:hover:scale-110 hover:scale-105 text-start p-8 rounded-xl border-[1px] border-purple-600 overflow-hidden">
                    <h1 className="text-white lg:text-2xl text-lg font-semibold flex items-center gap-2"><span><img src={cap} alt="" className="w-8 h-8" /></span>Secondary School Certificate</h1>

                    <p className="text-purple-400 lg:text-xl text-lg font-medium pt-8 flex items-center gap-2"><span><img src={school} alt="" className="w-7 h-7" /></span>Sristy Residential School</p>
                    <p className="pt-2 text-white lg:text-xl text-lg font-normal flex items-center gap-2"><span><img src={graph} alt="" className="w-7 h-7" /></span>GPA : 5.00 out of 5.00</p>

                    <p className="pt-2 text-white lg:text-xl text-lg font-normal flex items-center gap-2"><span><img src={session} alt="" className="w-7 h-7" /></span> 2010-2014</p>

                </div>










            </div>




        </section>
    );
};

export default Education;