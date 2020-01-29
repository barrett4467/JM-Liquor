import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import styled from "styled-components";

class Carousel extends Component {
    render(){
        const settings = {
            arrows: false,
            dots: true,
            adaptiveHeight: false
        }
        const SliderComp = styled.section`
            display: flex, 
            flex-direction: column,
            justify-content: center,
            max-width: 100%,
            height: 50px
        `
        const Button = styled.a`
            position: relative,
            border: 1px solid black,
            top: -10px
        `
        const handleClick = page => {
            window.location.href="/" + page
        }
        return(
            <Slider { ...settings } style={{position: "absolute"}}>
                <SliderComp>
                    <img src="https://via.placeholder.com/300"/>
                    <button onClick={()=>handleClick("products")}>View Products</button>
                </SliderComp>
                <div>
                    <img src="https://via.placeholder.com/300" alt="placeholder2" />
                    <button onClick={()=>handleClick("cart")}>View Cart</button>
                </div>
                <div>
                    <img src="https://via.placeholder.com/300" alt="placeholder3" />
                    <button onClick={()=>handleClick("contact")}>Find Us</button>
                </div>
            </Slider>
        )
    }
}
export default Carousel; 