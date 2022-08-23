const Rating = ({rate}) =>{
    //if(rate<3) rate = 3;
    let half = true;
    const star = Math.floor(rate);
    // const remaining = rate - Math.ceil(rate);
    if(star == rate) half=false;
    if(rate > 5) star;
    let content = [];

    const rateByStar = () =>{
        for(let i=0; i<star; i++){
            content.push(<i className="fa fa-star" key={i} aria-hidden="true"></i>);
        }
        if(half) content.push(<i className="fa fa-star-half-o" key={0.5} aria-hidden="true"></i>)

        // if(rate > 0) content.push(<i className="fa fa-star-o" aria-hidden="true"></i>);
        // content = <i className="fa fa-star" aria-hidden="true"></i>
        return content;
    }

    const remaingStar = () =>{
        if(content.length < 5){
            const diff = 5 - content.length;
            for(let i=0; i<diff; i++){
                content.push(<i className="fa fa-star-o" key={5+i} aria-hidden="true"></i>);
            }
        }
        return;
    }
    return <span className="rate-container">
        {rateByStar()}
        {remaingStar()}
        <span> ({rate} star)</span>
    </span>
}

export default Rating;