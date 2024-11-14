
import { Link } from "react-scroll";




const Nav = () => {
    return (
        <section className="">



<div className="navbar fixed z-10 text-white   bg-gradient-to-r from-[rgba(25,0,42,0.8)] to-[rgba(28,5,37,0.8)] py-2 lg:px-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content   z-[1] w-[100vh] p-2 shadow  space-y-3 font-semibold bg-gradient-to-r from-[rgba(25,0,42,0.8)] to-[rgba(28,5,37,0.8)]">

                            <Link
                                to="home"
                                smooth={true}
                                duration={1000}

                                className="text-base font-semibold hover:text-purple-600 cursor-pointer"
                            >
                                Home
                            </Link>

                            <Link
                                to="about"
                                smooth={true}
                                duration={1000}

                                className="text-base font-semibold hover:text-purple-600 cursor-pointer"
                            >
                                About
                            </Link>


                            <Link
                                to="skills"
                                smooth={true}
                                duration={1000}

                                className="text-base font-semibold hover:text-purple-600 cursor-pointer"
                            >
                                Skills
                            </Link>


                            <Link
                                to="projects"
                                smooth={true}
                                duration={1000}

                                className="text-base font-semibold hover:text-purple-600 cursor-pointer"
                            >
                                Projects
                            </Link>



                            <Link
                                to="education"
                                smooth={true}
                                duration={1000}

                                className="text-base font-semibold hover:text-purple-600 cursor-pointer"
                            >
                                Education
                            </Link>

                            <Link
                                to="blogs"
                                smooth={true}
                                duration={1000}

                                className="text-base hidden font-semibold hover:text-purple-600 cursor-pointer"
                            >
                                Blogs
                            </Link>


                            <Link
                                to="contact"
                                smooth={true}
                                duration={1000}

                                className="text-base font-semibold hover:text-purple-600 cursor-pointer"
                            >
                                Contact
                            </Link>





                        </ul>
                    </div>
                    <a className="text-4xl lg:block hidden font-bold  font-mono"><span className="text-purple-600 ">Tofayel</span> Ahmed</a>

                </div>
                <a className="btn btn-ghost text-xl text-white  lg:hidden navbar-end "><span className="text-purple-600 ">Tofayel</span> Ahmed</a>

                <div className="lg:navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 space-x-6  text-white font-mono lg:mr-3">

                        {/* this "Link" import from react scroll not react dom */}
                        <Link
                            to="home"
                            smooth={true}
                            duration={1000}

                            className="text-lg font-medium hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Home
                        </Link>

                        <Link
                            to="about"
                            smooth={true}
                            duration={1000}

                            className="text-lg font-medium hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            About
                        </Link>

                        <Link
                            to="skills"
                            smooth={true}
                            duration={1000}

                            className="text-lg font-medium hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Skills
                        </Link>


                        <Link
                            to="projects"
                            smooth={true}
                            duration={1000}

                            className="text-lg font-medium hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Projects
                        </Link>



                        <Link
                            to="education"
                            smooth={true}
                            duration={1000}

                            className="text-lg font-medium hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Education
                        </Link>

                        <Link
                            to="blogs"
                            smooth={true}
                            duration={1000}

                            className="text-lg font-medium  hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Blogs
                        </Link>


                        <Link
                            to="contact"
                            smooth={true}
                            duration={1000}

                            className="text-lg font-medium hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Contact
                        </Link>

















                    </ul>
                </div>

            </div>




        </section>
    );
};

export default Nav;