import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../private/provider/Provider";
import logo from '../../assets/images/logo.png'
import { MdAccountBox } from "react-icons/md";
const Navbar = () => {
    const { user, signout, userRole } = useContext(Authcontext)
    const navlinks = <>
        <li><Link to={'/'}> Home</Link></li>
        <li><Link to={'/allclasses'}>Classes</Link></li>
        <li><Link to={'/istractors'}>Instractors</Link></li>
    </>

    return (
        <div className="navbar shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}

                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img src={logo} className="h-[50px]" /> FluentVerse  </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            {
                user ? <>
                    <div className="navbar-end gap-4 ">
                        <div className="dropdown">
                            <label tabIndex={1} className="btn btn-ghost">
                                <img src={userRole.img} alt="" className="h-[60px] w-[60px] bg-orange-100 border-[4px] border-blue-300 rounded-full" />
                            </label>
                            <div tabIndex={1} className="z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-2 flex flex-col gap-3">
                                <p className="py-2 capitalize font-semibold text-lg text-center">{user.displayName}</p>
                                {
                                    userRole?.role == 'admin' ? <>
                                        <Link className="bg-red-500 p-2 rounded text-white capitalize font-semibold" to={'/admin/home'}>Dashboard</Link>

                                    </> : userRole?.role == 'isntaractor' ? <>

                                        <Link className="bg-red-500 p-2 rounded text-white capitalize font-semibold" to={'/moderator/modhome'}>Dashboard</Link>
                                    </> : <>

                                        <Link className="bg-red-500 p-2 rounded text-white capitalize font-semibold" to={'/myclasses'}>Dashboard</Link>

                                    </>
                                }
                                <button onClick={signout} className="bg-red-500 p-2 rounded text-white capitalize font-semibold">Sign out</button>
                            </div>
                        </div>


                    </div>

                </> : <>
                    <div className="navbar-end gap-4 ">
                        <div className="dropdown">
                            <label tabIndex={1} className="btn btn-ghost">
                                <MdAccountBox className="text-4xl"></MdAccountBox>
                            </label>

                            <div tabIndex={1} className="z-30 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-2 flex flex-col gap-3">
                                <Link className="bg-red-500 p-2 rounded text-white capitalize font-semibold" to={'/register'}>register</Link>
                                <Link className="bg-red-500 p-2 rounded text-white capitalize font-semibold" to={'/login'}>login</Link>
                            </div>
                        </div>


                    </div>

                </>
            }


        </div>
    );
};

export default Navbar;