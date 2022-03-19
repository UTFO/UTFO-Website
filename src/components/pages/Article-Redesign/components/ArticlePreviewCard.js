import React from "react";
import { Link } from "react-router-dom";
import stockThumbnailImage from "./images/stockThumbnailImage.jpeg"
import "./styles/ArticlePreviewCard.css";

const ArticlePreviewCard = ({post}) => {
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
        <div className="articleCardContainer">
            <Link className="articleCardLink" to={`/articles/${post._id}`} target="_blank" ></Link>
            <img src={post.imageThumbnail || stockThumbnailImage} alt="Thumbnail Missing" className="articleCardImage" />
            <div className="articleCardContent">
                <h4 className="articleCardTitle">{post.title}</h4>
                <h6 className="articleCardDate">{getMonthName(post.publishDate)}</h6>
                <p className="articleCardAuthor">Posted by {post.authorName}</p>
                <div className="articleCardTagContainer">
                    {post.articleType.map((tag) => {
                        return <p className="articleCardTag">{tag}</p>
                    })}
                </div>
                </div> 
        </div>
    );
};

export default ArticlePreviewCard;