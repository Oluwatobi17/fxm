const IntroCard = ({img, title, story}) =>{
    return <div className="cardintro">
        <img src={img} alt="introimg" />
        <h4>{title}</h4>
        <p>{story}</p>
    </div>
}

export default IntroCard;