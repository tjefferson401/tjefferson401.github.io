import { Face } from "./Face"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"


export const Header = () => {
    const headerStyle = {marginBottom: "2px", marginTop: "2px"}

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <Face imageUrl="me.jpg" />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left"}}>
                <h1 style={{marginBottom: "5px"}}>Sierra Wang</h1>
                <h2 style={headerStyle}>Ph.D Student at Stanford University</h2>
                <h3 style={headerStyle}>sierraw /at/ stanford.edu</h3>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <a href="https://github.com/sierrawang" aria-label="Github Link" ><FaGithub style={{marginRight: "5px", fontSize:"xx-large", color: "green"}}/></a>
                    <a href="https://www.linkedin.com/in/sierra-wang/" aria-label="LinkedIn Link"><FaLinkedin style={{marginRight: "5px", fontSize:"xx-large", color: "blue"}}/></a>                </div>
            </div>
        </div>
    )

}