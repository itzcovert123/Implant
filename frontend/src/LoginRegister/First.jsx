import React from 'react';
import './Home.css';
import './Navbar';
import 'boxicons/css/boxicons.min.css';

const App = () => {
    return (
        <div > 
            
           

            <section className="home">
                <div className="home-content">
                    <h1 >Let's Upgrade</h1>
                    <h3>At Dipak's GYM</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus velit, vel consequatur ad, error non corrupti doloremque consequuntur perspiciatis placeat repellat ea praesentium hic sed sit animi!</p>
                    <div className="btn-box">
                        <a href='/login'>Login</a>
                        <a href='/Register'>Sign Up</a>
                    </div>
                </div>
                <div className="home-sci">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-youtube'></i></a>
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                </div>
            </section>
        </div>
    );
};

export default App;
