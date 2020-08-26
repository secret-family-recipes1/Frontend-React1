import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="imageContainer">
                <img className="image" src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="fresh produce background"/>
                <div>
                    <div className='background'>
                        <Link to='/signup'>
                            <button className='signup-btn'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>       
    );
  };
export default Home;