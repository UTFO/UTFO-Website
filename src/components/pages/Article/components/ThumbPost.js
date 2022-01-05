

const postWidth = 250, postHeight = postWidth*4/3;
const fontSize = 15;
const darkPurple = '#9142ff';
const lightPurple = '#BB8CFF';

const ThumbPost = ( { title, date, text, author, image }) => {
    require('./styles/ThumbPost.css');
    return (
        <div className='thumbPost' style={thumbPostStyle}>
            
            <img src={image} alt="" style={imageStyle}/>

            <div style={purpleBackgroundStyle}></div>

            <div className='postTitle' style={postTitleStyle}>
                <p style={titleStyle}>{title}</p>
            </div>

            <div className='postText' style={postTextStyle}>
                <p style={textStyle}>{text}</p>
            </div>
            
        </div>
    )
}

const thumbPostStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight,
    backgroundColor: darkPurple,
    zIndex: 0,
    margin: 10
}

const purpleBackgroundStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight-postHeight/4-5,
    backgroundColor: lightPurple,
    zIndex: 1,
    marginTop: -3*postHeight/4,
}

const imageStyle = {
    position: 'relative',
    width: '100%',
    height: postHeight-postHeight/4,
    objectFit: 'cover',
    zIndex: 4,
    borderRadius: '0 0 50px 0'
}

const postTitleStyle = {
    position: 'relative',
    margin: 'auto',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 2,
    width: '100%',
    height: postHeight/4+50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkPurple,
    marginTop: -50,
}

const postTextStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight-postHeight/4,
    top: -postHeight-fontSize,
    backgroundColor: lightPurple,
    zIndex: 3,
    fontSize: fontSize,
    borderRadius: '0 0 50px 0'
}

const textStyle = {
    paddingLeft: 40,
    paddingTop: 40
}

const titleStyle = {
    paddingTop: 40
}

export default ThumbPost
