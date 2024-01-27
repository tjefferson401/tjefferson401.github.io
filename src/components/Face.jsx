


// export const Face = ({imageUrl="me.jpg", toggleTrapDoor=()=>{}}) => {

//     return <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg" onClick={toggleTrapDoor}>
//         <circle cx="110" cy="110" r="100" stroke="lightBlue" strokeWidth="5" fill="none" />
//         <clipPath id="circleView">
//             <circle cx="110" cy="110" r="90" />
//         </clipPath>
//         <image className="image-question" href={imageUrl} width="180" height="180" x="20" y="20" />
//     </svg>

// }
export const Face = ({ imageUrl = "me.jpg", toggleIsVisible=()=>{}}) => {


    return (
        <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg" onClick={toggleIsVisible}>
            <circle cx="110" cy="110" r="100" stroke="navy" strokeWidth="3" fill="none" />
            <clipPath id="circleView">
                <circle cx="110" cy="110" r="90" />
            </clipPath>
            <g clipPath="url(#circleView)">
                <image className="image-question" href={imageUrl} width="200" height="200" x="10" y="10"  />
            </g>
        </svg>
    );
};
