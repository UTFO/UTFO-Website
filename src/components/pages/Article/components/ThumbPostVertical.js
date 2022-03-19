import './styles/ThumbPostVert.css';
import stockAuthorImage from "./images/stockAuthorImage.png";

const ThumbPostThree = ( { post } ) => {

    const getMonthName = (publishDate) => {
        const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        ];
        let date_format = new Date(publishDate);
        let month = monthNames[date_format.getMonth()];
        let date = publishDate.split("/");
        return `${month} ${date[1]}, ${date[2]}`;
    };


    return (

            <div className="articleThumbVertContainer">
                    <div>
                        <img className="articleThumbVertImage" src={post.imageThumbnail} alt=""/>
                        <div>
                            {/* replace with actual article type later */}
                            <p className="type">{post.articleType}</p>
                            <p className="articleThumbVertTitle">{post.title}</p>
                        </div>
                    </div>
                <div className="articleThumbVertAuthorContainer">
                    <div className="articleThumbVertAuthorImageContainer">
                        <img className="articleThumbVertAuthorImage" src={post.authorImage || stockAuthorImage} alt=""/>
                    </div>
                    <div className="articleThumbVertAuthorDateContainer">
                        <p className="articleThumbVertAuthor">Posted by {post.authorName}</p>
                        <p className="articleThumbVertAuthor"> | </p>
                        <p className="articleThumbVertDate">{getMonthName(post.publishDate)}</p>
                    </div>
                </div>
            </div>

    )
}

ThumbPostThree.defaultProps = {
  category: "Neutral",
};

export default ThumbPostThree;
