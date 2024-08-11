
import { Link } from "react-scroll";



const Nav = () => {
    return (
        <section >



            <div className="navbar fixed z-10  bg-opacity-20  text-white bg-[#23226b] py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 space-x-6  text-white">

                      {/* this "Link" import from react scroll not react dom */}
                       <Link
                            to="home"
                            smooth={true}
                            duration={1000}
                           
                            className="text-base font-semibold hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Home
                        </Link>
                      
                        <Link
                            to="about"
                            smooth={true}
                            duration={1000}
                            
                            className="text-base font-semibold hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            About
                        </Link>

                        <Link
                            to="skills"
                            smooth={true}
                            duration={1000}
                            
                            className="text-base font-semibold hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Skills
                        </Link>


                        <Link
                            to="projects"
                            smooth={true}
                            duration={1000}
                            
                            className="text-base font-semibold hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Projects
                        </Link>



                         <Link
                            to="education"
                            smooth={true}
                            duration={1000}
                            
                            className="text-base font-semibold hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Education
                        </Link>

                        <Link
                            to="blogs"
                            smooth={true}
                            duration={1000}
                            
                            className="text-base font-semibold hover:border-b-2 hover:border-purple-600 cursor-pointer"
                        >
                            Blogs
                        </Link>


                        <Link
                            to="contact"
                            smooth={true}
                            duration={1000}
                            
                            className="text-base font-semibold hover:border-b-2 hover:border-purple-600 cursor-pointer"
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