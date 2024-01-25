


export const Paper = ({authors, title, conference, picUrl, award=""}) => {
    const style = {
        marginBottom: "4px",
        marginTop: "2px"
    }


    return (
        <div className="paper">
            <img className="paper-pic" src={picUrl} alt={title}/>
            <div className="paper-info">
                <h4 style={style}>{title}</h4>
                <p style={style}>{authors}</p>
                <p style={style}><i>{conference}</i></p>
            </div>

        </div>
    )
}