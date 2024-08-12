

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
                    <h1 className="text-white lg:text-2xl text-lg font-semibold">B.Sc in Computer Science & Engineering</h1>

                    <p className="text-purple-400 lg:text-xl text-lg font-medium pt-8">Daffodil International University</p>
                    <p className="pt-2 text-white">2017-2021</p>

                </div>



                <div className="shadow-2xl lg:w-[60%] w-full hover:bg-purple-800 transition lg:hover:scale-110 hover:scale-105 text-start p-8 rounded-xl border-[1px] border-purple-600 overflow-hidden">
                    <h1 className="text-white lg:text-2xl text-lg font-semibold">HSC in Science</h1>

                    <p className="text-purple-400 lg:text-xl text-lg font-medium pt-8">Dhaka Megacity college</p>
                    <p className="pt-2 text-white">2014-2016</p>

                </div>










            </div>




        </section>
    );
};

export default Education;