import './styles/ThumbPostThree.css'

const postWidth = 250, postHeight = postWidth;
const fontSize = 15;



const ThumbPostFour = ( { post } ) => {
    
    return (
        
            <div style={postContainerStyle}>
                <a className='linkBox' href={post.link} style={linkStyle} target="_blank" rel="noreferrer"> 
                    <div>
                        <img style={imageStyle} src={post.image} alt=""/>
                        
                    </div>
                    <div style={authorContainerStyle}>
                        <p style={titleStyle}>{post.title}</p>
                        <p style={authorStyle}>{post.author}</p>
                        <p style={dateStyle}>{post.date}</p>
                        <div style={authorImageContainerStyle}>
                            <img style={authorImageStyle} src={post.authorImage} alt=""/>
                        </div>
                        
                        <p style={categoryStyle}>• {post.category}</p>
                    </div>
                </a>
                
            </div>
        
    )
}

const imageStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight*3/4,
    boxShadow: '0px 0px 10px 0px'
}

const postContainerStyle = {
    textAlign: 'center',
    zIndex: 1,
    width: 'fit-content'
}

const titleStyle = {
    fontSize: 20,
    fontWeight: 'bold',  
    textAlign: 'center',
    margin: 'auto',
    width: postWidth-50,
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: 'rgb(0, 0, 0, 0.3)',
    marginTop: 30,
    paddingBottom: 5,
    gridArea: 'title'
}

const linkStyle = {
    textDecoration: 'none',
    display: 'flex'
}

const authorStyle = {
    gridArea: 'author',
    fontSize: fontSize,
    marginTop: 10,
    marginBottom: 3,
    marginRight: '0'
}

const dateStyle = {
    marginTop: 0,
    gridArea: 'date',
    fontSize: fontSize,
}

const categoryStyle = {
    fontSize: fontSize,
    color: 'rgb(0, 0, 0, 0.5)', 
    gridArea: 'category',
    position: 'relative',
    margin: 0,
    marginTop: -12,
    marginRight: '20%' 
    
}

const authorImageStyle = {
    width: fontSize*2 + 4*5,
    height: fontSize*2 + 3*5,
    objectFit: 'cover',
    marginTop: 5,
    marginLeft: -50,
    borderRadius: 100,
}

const authorImageContainerStyle = {
    gridArea: 'authorImage',
}

const authorContainerStyle = {
    position: 'relative',
    margin: 'auto',
    display: 'grid',
    maxWidth: postWidth,
    gridTemplateAreas:
        '\'title title\' \'author authorImage\'  \'date authorImage\'  \'category category\'',
    textAlign: 'right'
}

ThumbPostFour.defaultProps = {
    category: 'Neutral'
}

export default ThumbPostFour