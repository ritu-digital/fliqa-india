import React from 'react'
import { Helmet } from 'react-helmet'
import Button from '../Button/Button'
import Header from '../Header/Header'
import LoginSignupButton from '../LoginSignupButton/LoginSignupButton'
import "./Services.css"

const Services = () => {
    return (
        <>
            <Header loginButton={ <LoginSignupButton/> }/>
            <div className="services">
            <Helmet>
            <title>Logo Design</title>
            <meta name="description" content="Make your own brand identity through us. Start your design now."/>
        </Helmet>
            <h1>what is logo design ?</h1>
            <p>What is Logo design ?
    Logo tells the story of your brand. It enhances your brand image and speaks to your audience.
    Logo design makes the first impression for you in your working environment. Gives your
    business and brand an identity and projects a professional image. It creates memorable visuals
    to the outside world and build loyalty.
            </p>    
            <div className="services__buttons">
                <Button props={<p>Start designing</p>}/>
                <Button props={<p>Get a quote</p>}/>
            </div>
            </div>
            
        </>
    )
}

export default Services
