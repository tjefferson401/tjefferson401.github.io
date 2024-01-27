import { FaStar } from "react-icons/fa";


export const Paper = ({authors, title, conference="", picUrl, award="", url=""}) => {
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

    return (
        <div className="paper" >
            {award && <div style={badgeStyle}><FaStar/> {award}</div>}
            <img className="paper-pic" src={picUrl} alt={title}/>
            <div className="paper-info">
                {url ? <a href={url}><h2 style={style}>{title}</h2></a> : <h2 style={style}>{title}</h2>}
                <p style={style}>{authors}</p>
                {conference && <p style={style}>{conference}</p>}
            </div>


        </div>
    )
}