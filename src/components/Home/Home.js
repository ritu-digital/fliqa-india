import React from 'react'
import "./Home.css"
import beachPhotography from "../../Images/beach.svg"
import preWeddingShoot from "../../Images/pre-wedding-shoot.svg"
import portfolioShoot from "../../Images/portfolio.svg"
import droneServices from "../../Images/drone.svg"
import graphicDesign from "../../Images/graphic-design.svg"
import weddingPhotography from "../../Images/wedding-pic.svg"
import backgroundImage from "../../Images/background.svg"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Header from '../Header/Header'
import { Helmet } from 'react-helmet'



const Home = () => {
    return (
        <>
        <Header/>
        <div className="home">
        <Helmet>
            <title>FliqaIndia: Photography, Videography & Graphic Design related creative
            platform</title>
            <meta name="description" content="Personalised platforms for Photography, Videography with
            Graphics. One of the leading platforms in the creative domain."/>
            <meta name = "keywords" content="photography,videography,graphics"/>
        </Helmet>
            <div className="home__imagesContainer">
                <div className="beachImage">
                    
                    <img src={beachPhotography} alt="beach photography" />
                    <p>Beach Photography</p>
                </div>
                <div className="preWeddingImage">
                    <img src={preWeddingShoot} alt="pre wedding shoot" />
                    <p>Pre Wedding Shoot</p>
                </div>
                <div className="portfolioImage">
                    <img src={portfolioShoot} alt="portfolio shoot" />
                    <p>Portfolio Shoot</p>
                </div>
                <div className="droneImage">
                    <img src={droneServices} alt="drone services" />
                    <p>Drone Services</p>
                </div>
                <div className="graphicImage">
                    <img src={graphicDesign} alt="graphic design services" />
                    <p>Graphic Design</p>
                    <div className="arrowForward"><IoIosArrowForward/></div>
                </div>
                <div className="weddingImage">
                
                    <img src={weddingPhotography} alt="wedding photography" />
                    <p>Wedding Photography</p>
                    <div className="arrowBack"><IoIosArrowBack/></div>
                </div>

            </div>
            <div className="home__background">
                <img src={backgroundImage} alt="fliqa india" />
                <div className="home__content">
                <h1>About Us</h1>
                <p><span>FliqaIndia</span> for everyone</p>
                <p>With this belief, we at <span>Fliqaindia</span> started our journey 5 years ago with the belief
that everyone has the right to quality photography to help them better capture
and conserve their special moments.
We have been appreciated and recommended by Start Up India, StartUp Bengal, Imagesbazaar
and Digital India for our novel initiative. We have partnered with Canvera to give
you the best service possible. We are also trusted by Justdial, WedMEGood, Shaadisaga, weddingwire and so many well known event organisers.

</p>
                </div>
                

            </div>
        </div>
        </>
    )
}

export default Home
