import Para from "./para"
const Card = props => {
    console.log("Card running")
    return <>
        <h1>{props.title}</h1>
        {props.showPara && <Para>This is a Card</Para>}
        <p>Toggle paragraph for {props.action}</p>
    </>
}

export default Card;