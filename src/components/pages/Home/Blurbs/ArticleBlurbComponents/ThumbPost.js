const ThumbPost = ( { image, title, link } ) => {
    return (
            <div className="homeArticleBlurbPost">
                <a className="homeArticleBlurbPostLink" href={link} target="_blank" rel="noreferrer">
                    <img src={image} alt=""/>
                    <div className="homeArticleBlurbPostTextContainer">
                        <h2>{title}</h2>
                        <p>Lorem ipsem!</p>
                    </div>
                </a>
            </div>

    )
}

export default ThumbPost
