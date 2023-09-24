
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css';

function Nav() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
        <div className="free">
            
                <div className="icon">
                <FaTruckMoving/>
                </div>
                    <p> FREE Shipping when shopping up to $500 </p>   
        </div>
        <div className="mainHeader">
            <div className="container">
                <div className="logo">
                    <img src='./logo.jpg' alt="logo"></img>
                </div>
                    <div className="search-box">
                        <input type="text" value='' placeholder="Search your product..." autoComplete="off"></input>
                        <button>Search</button>
                    </div>
                <div className="icon">
                    {
                        isAuthenticated && 
                        (
                            <div className="account">
                        <div className="user-icon">
                            <AiOutlineUser/>
                        </div>
                            <p>Hello, {user.name}</p>
                    </div>
                        )

                    }
                        <div className="second-icon">
                                <Link to='/favorites' className="link"><AiOutlineHeart/></Link>
                                <Link to='/cart' className="link"><BsBagCheck/></Link>
                        </div>
                </div>
            </div>
        </div>
        <div className="header">
            <div className="container">
                <div className="nav">
                <ul>
                    <li>
                        <Link to='/' className="link">Home</Link>
                    </li>
                    <li>
                        <Link to='/products' className="link">Product</Link>
                    </li>
                    <li>
                        <Link to='/about' className="link">About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="link">Contact</Link>
                    </li>           
                </ul>
                </div>
                <div className="auth">
                    {
                        isAuthenticated ? 
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
                        :
                        <button onClick={() => loginWithRedirect()}><CiLogin/></button>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav;