import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthenticationPage/AuthProvider';
import "react-tooltip/dist/react-tooltip.css";
// import "./styles.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import useTitle from '../../hooks/useTitle';
import inv from '../../assets/image/inv.avif'

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    // const title=useTitle();
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
                            <li><Link to='/blog'>Blog</Link></li>
                            {/* <img src={user?.photoURL} alt="" srcset="" /> */}
                            {
                                user?.email ? <>
                                    <li><Link >My Toys</Link></li>
                                    <li><Link to='/addToys'>Add Toys</Link></li>
                                    <div className='cursor-pointer flex justify-center items-center'>

                                        {/* <ReactTooltip anchorId='title' place='bottom' content=> </ReactTooltip> */}
                                        <div className="tooltip" data-tip={user?.displayName}>
                                            <img id='title' src={user?.photoURL} className='rounded' width={'30px'} height={'30px'} />
                                        </div>
                                    </div>
                                    <li><Link onClick={handleLogOut}>Log out</Link></li>
                                </> : <li><Link to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                    <a ></a>
                    <Link className="normal-case text-2xl font-serif flex items-center gap-2" to='/'>
                        <img src="https://img.freepik.com/free-vector/red-atom-with-core-orbits-electrons-isolated-3d-nuclear-chemistry-technology-concept_333792-89.jpg?w=740&t=st=1684670081~exp=1684670681~hmac=74abe9f0e9e1f308e25fc0fef9fac73ba2a4a9d73d91def9e14d930c01e7f7e8" alt=""  height={'75px'} width={'75px'}/>
                        Invention Science</Link>
                </div>
                <div className="navbar-end hidden lg:flex me">
                    <ul className="menu menu-horizontal px-1 text-base  font-serif">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user?.email ? <>
                                <li><Link to='/myToys'>My Toys</Link></li>
                                <li><Link to="/addToys">Add Toys</Link></li>
                                <div className='cursor-pointer flex justify-center items-center'>
                                    <div className="tooltip" data-tip={user?.displayName}>
                                        <img id='title' src={user?.photoURL} className='rounded' width={'30px'} height={'30px'} />
                                    </div>
                                    {/* <img id='title' src={user?.photoURL} className='rounded' width={'30px'} height={'30px'} />
                                    <ReactTooltip anchorId='title' place='bottom' content={user?.displayName}> </ReactTooltip> */}
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