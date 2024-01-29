import { Face } from "./Face"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import React, { useState } from 'react';



export const Header = ({setIsDungeon}) => {
    const headerStyle = {marginBottom: "2px", marginTop: "2px"}
    const [isVisible, setIsVisible] = useState(true); // Tracks visibility

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const containerStyle = { display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }

    // Updated styles for fading effect
    const textStyle = {
        transition: "opacity 0.5s ease",
        opacity: isVisible ? 1 : 0,
    };

    const imageStyle = {
        transition: "opacity 0.5s ease",
        opacity: !isVisible ? 1 : 0,
        position: 'absolute',
        display: isVisible ? "none" : "block",
    };



    return (
        <div style={{ display: "flex", flexWrap: "wrap", position: "relative" }}>
            <Face toggleIsVisible={toggleVisibility} />
            <div style={containerStyle}>
                <div style={textStyle}>
                <h1 style={{marginBottom: "5px"}}>TJ Jefferson</h1>
                <h2 style={headerStyle}>Lead Software Engineer at Stanford's <a href="https://piechlab.stanford.edu">Piech Lab</a></h2>
                <h3 style={headerStyle}>tj /at/ shcove.com</h3>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href="https://github.com/tjefferson401" aria-label="Github Link" ><FaGithub style={{marginRight: "5px", fontSize:"xx-large", color: "green"}}/></a>
                    <a href="https://www.linkedin.com/in/tj-jefferson/" aria-label="LinkedIn Link"><FaLinkedin style={{marginRight: "5px", fontSize:"xx-large", color: "blue"}}/></a>                
                </div>
                </div>
                <div style={imageStyle} onClick={setIsDungeon}>
                <img src="trapdoor.jpg" alt="trapdoor" className="image-question" style={{width: '100px'}} />
            </div>
            </div>

            
        </div>
    )

}