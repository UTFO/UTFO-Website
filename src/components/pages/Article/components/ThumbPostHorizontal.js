import './styles/ThumbPostHorizontal.css'

const ThumbPostFour = ( { post } ) => {
    
    return (
        
            <div className="articleThumbHorizContainer">
                <a className='articleThumbHorizLinkBox' href={post.link} target="_blank" rel="noreferrer"> 
                    <div>
                        <img className="articleThumbHorizImage" src={post.image} alt=""/>
                        
                    </div>
                    <div className="articleThumbHorizAuthorContainer">
                        <p className="articleThumbHorizTitle">{post.title}</p>
                        <p className="articleThumbHorizAuthor">{post.author}</p>
                        <p className="articleTHubHorizDate">{post.date}</p>
                        <div className="articleThumbHorizAuthorImageContainer">
                            <img className="articleThumbHorizAuthorImage" src={post.authorImage} alt=""/>
                        </div>
                        
                        <p className="articleThumbHorizCategory">• {post.category}</p>
                    </div>
                </a>
                
            </div>
        
    )
}

ThumbPostFour.defaultProps = {
    category: 'Neutral'
}

export default ThumbPostFour