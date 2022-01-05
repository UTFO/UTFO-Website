import './styles/ThumbPostThree.css'

const postWidth = 250, postHeight = postWidth;
const fontSize = 15;



const ThumbPostThree = ( { post } ) => {
    
    return (
        
            <div style={postContainerStyle}>
                <a className='linkBox' href={post.link} style={linkStyle} target="_blank" rel="noreferrer"> 
                    <div>
                        <img style={imageStyle} src={post.image} alt=""/>
                        <div>
                            <p style={titleStyle}>{post.title}</p>
                        </div>
                    </div>
                </a>
                <div style={authorContainerStyle}>
                    <p style={authorStyle}>{post.author}</p>
                    <p style={dateStyle}>{post.date}</p>
                    <div style={authorImageContainerStyle}><img style={authorImageStyle} src={post.authorImage} alt=""/></div>
                    
                    <p style={categoryStyle}>• {post.category}</p>
                </div>
            </div>
        
    )
}

const imageStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight*3/4,
    boxShadow: '0px 0px 10px 0px'
},

postContainerStyle = {
    textAlign: 'center',
    zIndex: 1
},

titleStyle = {
    fontSize: 20,
    fontWeight: 'bold',  
    margin: 'auto',
    width: postWidth-20,
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: 'rgb(0, 0, 0, 0.3)',
    marginTop: 30,
    paddingBottom: 5
},

linkStyle = {
    textDecoration: 'none'
},

authorStyle = {
    gridArea: 'author',
    fontSize: fontSize,
    marginTop: 10,
    marginBottom: 3,
    marginLeft: 130,
},

dateStyle = {
    marginTop: 0,
    gridArea: 'date',
    fontSize: fontSize,
},

categoryStyle = {
    fontSize: fontSize,
    color: 'rgb(0, 0, 0, 0.5)',
    gridArea: 'category',
    position: 'relative',
    margin: 0,
    marginTop: -12,
    marginRight: '20%'
    
},

authorImageStyle = {
    width: fontSize*2 + 4*5,
    height: fontSize*2 + 3*5,
    objectFit: 'cover',
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 100,
},

authorImageContainerStyle = {
    gridArea: 'authorImage',
},

authorContainerStyle = {
    position: 'relative',
    margin: 'auto',
    display: 'grid',
    maxWidth: postWidth,
    gridTemplateAreas:
        '\'author authorImage\'  \'date authorImage\'  \'category category\'',
    textAlign: 'right'
}

ThumbPostThree.defaultProps = {
    category: 'Neutral'
}

export default ThumbPostThree
