import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Slider from "./components/Thumb";
import Thumb from "./components/Thumb";
import Helloworld from "./components/Helloworld";

function App() {
    return (

        <div className="body">
            <Helloworld></Helloworld>

            <div><img src="https://i.imgur.com/T4qrN8c.png" alt="The Tubes of You logo" height="50px" style={{float : 'left', marginRight : '10px'}} />
                <h1>The Tubes of You!</h1>
                <p><i>Welcome to the Tubes of You -- your #1 supplier of cheap unicorn meat.</i></p>
            </div>
            <div className="mainWrapper flex-container">


                <div className="main flex-child">
                    <iframe width="100%" height="400px" src="https://www.youtube-nocookie.com/embed/0td9Z8C4jNU"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <h2>Dit is de titel van de video</h2>
                    <p>Dit is de beschrijving Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis
                        risus a velit maximus, non tristique enim mattis. Etiam porttitor dapibus luctus. Ut faucibus
                        interdum augue. Aenean porttitor semper aliquam. Morbi mattis erat quis leo sollicitudin
                        pellentesque. Integer augue ipsum, interdum sed finibus luctus, laoreet vitae nibh. Integer
                        efficitur dignissim quam nec iaculis. Morbi eu urna tristique leo iaculis aliquam id nec ligula.
                        Maecenas interdum molestie enim eget lobortis. Integer quis convallis sem. Suspendisse vitae
                        hendrerit mauris.

                    </p>
                </div>
                <div className="sidebar flex-child">
                    <Thumb url="http://nu.nl"
                           imgsrc="https://via.placeholder.com/200x100"
                           titel="videotitel1"></Thumb>
                    <Thumb url="http://nu.nl"
                           imgsrc="https://via.placeholder.com/200x100"
                           titel="dit is de titel"></Thumb>
                    <Thumb url="http://nu.nl"
                           imgsrc="https://via.placeholder.com/200x100"
                           titel="dit is de titel"></Thumb>

                </div>

            </div>
            <div>&copy; Diederik Schrotelkamp 1998</div>
        </div>
    );
}

export default App;
