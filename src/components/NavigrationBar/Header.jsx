import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthenticationPage/AuthProvider';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
                
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base font-serif">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/allToys'>All Toys</Link></li>
                            <li><Link >Blog</Link></li>
                            {/* <img src={user?.photoURL} alt="" srcset="" /> */}
                            {
                                user?.email ? <>
                                    <li><Link >My Toys</Link></li>
                                    <li><Link to='/addToys'>Add Toys</Link></li>
                                    <div>
                                        <img id='title' src={user?.photoURL} className='rounded' width={'30px'} height={'30px'} />
                                        <ReactTooltip anchorId='title' place='bottom-0' content={user?.displayName}> </ReactTooltip>
                                    </div>
                                    <li><Link onClick={handleLogOut}>Log out</Link></li>
                                </> : <li><Link to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                    <a ></a>
                    <Link className="normal-case text-2xl font-serif" to='/'>Invention Science</Link>
                </div>
                <div className="navbar-end hidden lg:flex me">
                    <ul className="menu menu-horizontal px-1 text-base  font-serif">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        <li><Link >Blog</Link></li>
                        {
                            user?.email ? <> 
                                <li><Link to='/myToys'>My Toys</Link></li>
                                <li><Link to="/addToys">Add Toys</Link></li>
                                <div>
                                    <img id='title' src={user?.photoURL} className='rounded' width={'30px'} height={'30px'}  />
                                    <ReactTooltip anchorId='title' place='bottom' content={user?.displayName}> </ReactTooltip>
                                </div>
                                <li><Link onClick={handleLogOut}>Log out</Link></li>
                            </> : <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Header;