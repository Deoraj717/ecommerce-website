/*
    This will contain review 
    which will be contained inside Reviews component
*/


export default function Review(reviews){

    const rev = reviews.reviews;

    return(
        <div className="review-block">
            <div className="review-profile">
                <img src={rev.avatar.bell}/>
            </div>
            <div className="review-user-datail">
                {rev.username} {rev.date}
            </div>
            <div className="user-rating">

            </div>
            <div className="review-description">
                {rev.description}
            </div>
        </div>
    );

}