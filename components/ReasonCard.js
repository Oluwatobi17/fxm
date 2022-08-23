const ReasonCard = ({img, title, story}) =>{
    return <div className="reasoncard">
        <img src={img} alt={title} />

        <div>
            <h4>{title}</h4>
            <p>{story}</p>
        </div>
    </div>
}

export default ReasonCard;