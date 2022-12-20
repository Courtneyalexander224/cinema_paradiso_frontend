import React from 'react';
import Header from '../Common/Header';
import ImgBackground from '../../assets/img/Group 2218.png';

function MainImage() {
    return (
        <>
            <div class="main-image">
                <Header />
                <img style={{ width: '100%' }} src={ImgBackground} alt="" />
                <div class="text">
                    <h1>ICE AGE</h1>
                    <p>
                        With global warming threatening their <br />
                        once-icy domain with widespread flooding,
                        <br />
                        Manny (Ray Romano), Sid (John Alberto
                        <br />
                        Leguizamo) and Diego (Denis Leary)
                        <br />
                        set out to find a safe haven. Along the way,
                        <br />
                        another mammoth Queen Latifah),
                        <br />
                        who thinks she is an opossum,
                        <br />
                        joins the travellers on their perilous quest.
                    </p>
                   <a href="https://www.youtube.com/watch?v=lr_spVswTUo&vl=en" target="_blank"><button>Watch Now</button></a>
                </div>
            </div>
        </>
    );
}

export default MainImage;
