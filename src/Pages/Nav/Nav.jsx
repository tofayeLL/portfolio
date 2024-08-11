import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <section>



            <div className="navbar bg-base-100">
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
                    <ul className="menu menu-horizontal px-1 space-x-6">

                       
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                                to={'/'}>
                                Home
                            </NavLink>
                   

                     
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                                to={'/about'}>
                                About
                            </NavLink>
                      

                        
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                                to={'/skill'}>
                                Skills
                            </NavLink>
                     

                      
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                                to={'/project'}>
                                Projects
                            </NavLink>
                      
                        
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                                to={'/education'}>
                                Education
                            </NavLink>
                       
                       
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                                to={'/blog'}>
                                Blogs
                            </NavLink>
                      
                       
                            <NavLink className={({ isActive }) =>
                                isActive ? 'text-primary font-bold' : 'font-bold'
                            }
                                to={'/contact'}>
                                Contact
                            </NavLink>
                    



                    </ul>
                </div>

            </div>




        </section>
    );
};

export default Nav;