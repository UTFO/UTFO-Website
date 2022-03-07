const ThumbPost = ( { image, title, link, description } ) => {
    return (
            <div className="homeArticleBlurbPost">
                <a className="homeArticleBlurbPostLink" href={link} target="_blank" rel="noreferrer">
                    <img src={image} alt=""/>
                    <div className="homeArticleBlurbPostTextContainer">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </a>
            </div>

    )
}

export default ThumbPost
