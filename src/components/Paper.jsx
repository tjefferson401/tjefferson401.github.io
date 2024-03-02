import { FaStar } from "react-icons/fa";
import { useState } from "react";


export const Paper = ({authors, title, conference="", picUrl, award="", url=""}) => {
    const [open, setOpen] = useState(false)
    const style = {
        marginBottom: "4px",
        marginTop: "2px",
        color: "black"
    }

    const badgeStyle = {
        position: 'absolute',
        top: '0',
        right: '0',
        backgroundColor: 'gold',
        padding: '2px 5px',
        borderRadius: '0 0 0 5px', // Rounded corner on the bottom-left
        fontSize: '12px',
        fontWeight: 'bold',
    };


    if(!open) {
        return (
            <button className="paper-closed" onClick={() => setOpen(true)}>
                {title}
            </button>
        )
    }

    return (
        <button className="paper" onClick={() => setOpen(false)} >
            {award && <div style={badgeStyle}><FaStar/> {award}</div>}
            <img className="paper-pic" src={picUrl} alt={title}/>
            <div className="paper-info">
                {url ? <a href={url}><h2 style={style}>{title}</h2></a> : <h2 style={style}>{title}</h2>}
                <p style={style}>{authors}</p>
                {conference && <p style={style}>{conference}</p>}
            </div>


        </button>
    )
}