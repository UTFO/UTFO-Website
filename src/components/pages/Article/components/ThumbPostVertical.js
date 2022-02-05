import './styles/ThumbPostVert.css';

const ThumbPostThree = ( { post } ) => {

    return (

            <div className="articleThumbVertContainer">
                <a className='articleThumbVertLinkBox' href={post.link} target="_blank" rel="noreferrer">
                    <div>
                        <img className="articleThumbVertImage" src={post.image} alt=""/>
                        <div>
                            {/* replace with actual article type later */}
                            <p className="type">Article Type</p> 
                            <p className="articleThumbVertTitle">{post.title}</p>
                        </div>
                    </div>
                </a>
                <div className="articleThumbVertAuthorContainer">
                    <div className="articleThumbVertAuthorImageContainer">
                        <img className="articleThumbVertAuthorImage" src={post.authorImage} alt=""/>
                    </div>
                    <div className="articleThumbVertAuthorDateContainer">
                        <p className="articleThumbVertAuthor">{post.author}</p>
                        <p className="articleThumbVertAuthor"> | </p>
                        <p className="articleThumbVertDate">{post.date}</p>
                    </div>
                </div>
            </div>

    )
}

ThumbPostThree.defaultProps = {
    category: 'Neutral'
}

export default ThumbPostThree
