import React from 'react';
import Header from '../components/Header';

import '../styles/pages/home.css'
import photo1 from '../photos/photo2.jpg'
import photo2 from '../photos/photo1.jpg'
import coffee from '../photos/coffee.png'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <section>
          <div>
            <h1 className="photoCard back" >
              <img src={photo1} alt="family-photo" className="cropImage"/>
            </h1>
            <h1 className="photoCard front" >
              <img src={photo2} alt="family-photo"/>
            </h1>
          </div>
        </section>
        <main>
          <div>
            <h2>Hello there!</h2>
            <p>My name is <strong>Iago César</strong>, I am a software developer with special ability to turn coffee into code...</p>
          </div> 
          <img src={coffee} alt=""/>         
        </main>
      </div>
    </>
  );
}

export default Home;