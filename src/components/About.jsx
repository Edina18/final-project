
import { BsTruck } from 'react-icons/bs';
import { BiDollar } from 'react-icons/bi';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import './About.css';

function About() {
    return (
        <>
        <div className="motto">
            <h2 className="motto-down">We open all eyes to the beauty of uniqueness, bring it to life and make life itself more beautiful.</h2>
            <h2>For a world where everyone feels seen, heard and valued.</h2>
        </div>
              <div className='about'>
                    <div className='container'>
                        <div className='box'>
                            <div className='icon'>
                                <BsTruck/>
                            </div>
                            <div className='detail'>
                                <h3>Free Shipping</h3>
                                <p>Order above $500</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon'>
                                <BiDollar/>
                            </div>
                            <div className='detail'>
                                <h3>Return & Refund</h3>
                                <p>Money Back Gaurenty</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon'>
                                <CiPercent/>
                            </div>
                            <div className='detail'>
                                <h3>Member Discount</h3>
                                <p>On every order</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon'>
                                <BiHeadphone/>
                            </div>
                            <div className='detail'>
                                <h3>Customer Support</h3>
                                <p>Everytime call support 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default About;