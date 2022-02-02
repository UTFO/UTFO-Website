
const FeaturedPost = ( { post }) => {

    return (
        <div className="articleFeaturedPostContainer">
            <img className="articleFeaturedPostImage" src={post.image} alt=""/>
            <div className="articleFeaturedPostTextContainer">
                <p className="articleFeaturedPostTitle">{post.title}</p>
                <p className="articleFeaturedPostText">{post.text}</p>
                <p className="readMore">CLICK TO READ MORE</p>
                {/* <form action={post.link} target="_blank" rel="noreferrer">
                  <input type="submit" className="articleFeaturedPostButton" value="Read More"/>
                </form> */}
            </div>
        </div>
    )
}


export default FeaturedPost