
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import './Home.css';
import './Products';

function Home() {
    return(
        <>
            <div className='topBanner'>
                <div className='container'>
                    <div className='detail'>
                        <h2>Good makeup is a good day's start</h2>
                        <Link to='/products' className='link'>Shop now <BsArrowRight/></Link>
                    </div>
                        <div className='imgPresent'>
                            <img src='./assets/slide-img1.jpg' className='imgPresent' alt='slide-img'></img>
                        </div>
                </div>
            </div>
                <div className='productType'>
                    <div className='container-p'>
                        <div className='box'>
                            <div className='imgBox'>
                                <img src='./assets/img1.jpg' className='image' alt='img1'></img>
                            </div>
                                <div className='detail'>
                                    <p>Most Popular</p>
                                </div>
                        </div>
                        <div className='box'>
                            <div className='imgBox'>
                                <img src='./assets/img2.jpg' className='image' alt='img2'></img>
                            </div>
                                <div className='detail'>
                                    <p>Most Popular</p>
                                </div>
                        </div>
                        <div className='box'>
                            <div className='imgBox'>
                                <img src='./assets/img3.jpg' className='image' alt='img3'></img>
                            </div>
                                <div className='detail'>
                                    <p>Most Popular</p>
                                </div>
                        </div>
                        <div className='box'>
                            <div className='imgBox'>
                                <img src='./assets/img4.jpg' className='image' alt='img4'></img>
                            </div>
                                <div className='detail'>
                                    <p>Most Popular</p>
                                </div>
                </div>
                        <div className='box'>
                            <div className='imgBox'>
                                <img src='./assets/img5.jpg' className='image' alt='img5'></img>
                            </div>
                                <div className='detail'>
                                    <p>Most Popular</p>
                                </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home;