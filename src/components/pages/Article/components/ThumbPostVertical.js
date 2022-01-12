import './styles/ThumbPostVert.css'

const ThumbPostThree = ( { post } ) => {
    
    return (
        
            <div className="articleThumbVertContainer">
                <a className='articleThumbVertLinkBox' href={post.link} target="_blank" rel="noreferrer"> 
                    <div>
                        <img className="articleThumbVertImage" src={post.image} alt=""/>
                        <div>
                            <p className="articleThumbVertTitle">{post.title}</p>
                        </div>
                    </div>
                </a>
                <div className="articleThumbVertAuthorContainer">
                    <p className="articleThumbVertAuthor">{post.author}</p>
                    <p className="articleThumbVertDate">{post.date}</p>
                    <div className="articleThumbVertAuthorImageContainer">
                        <img className="articleThumbVertAuthorImage" src={post.authorImage} alt=""/></div>
                    
                    <p className="articleThumbVertCategory">• {post.category}</p>
                </div>
            </div>
        
    )
}

ThumbPostThree.defaultProps = {
    category: 'Neutral'
}

export default ThumbPostThree
