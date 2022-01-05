
const postWidth = 250, postHeight = postWidth*4/3;
const fontSize = 30;
const darkPurple = '#9142ff';
const lightPurple = '#BB8CFF';

const ThumbPostTwo = ( { title, date, text, author, image } ) => {
    require('./styles/ThumbPost.css');
    return (
        <div className='thumbPost' style={thumbPostStyle}>

            <div className='postTitle' style={postTitleStyle}>
                <p style={titleStyle}>{title}</p>
            </div>

            <div style={purpleBackground}></div>

            <div className='postText' style={postTextStyle}>
                <p style={textStyle}>{text}</p>
            </div>
            
            <img src={image} alt="" style={imageStyle}/>
        </div>
    )
}

const thumbPostStyle = {
    position: 'relative',
    width: postWidth,
    height: postHeight,
    maxHeight: postHeight,
    backgroundColor: darkPurple,
    zIndex: 0,
    margin: 10
}

const purpleBackground = {
    position: 'relative',
    width: '100%',
    height: postHeight-postHeight/4,
    backgroundColor: lightPurple,
    zIndex: 1,
    marginTop: -fontSize-20
}

const imageStyle = {
    position: 'relative',
    width: '100%',
    height: postHeight-postHeight/4,
    objectFit: 'cover',
    borderRadius: '0 50px 0 0',
    marginTop: -10000,
    top: -15,
    zIndex: 4
}

const postTitleStyle = {
    position: 'relative',
    width: '100%',
    height: postHeight/4+50,
    backgroundColor: darkPurple,
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
}

const postTextStyle = {
    position: 'relative',
    width: '100%',
    height: postHeight-postHeight/4,
    borderRadius: '0 50px 0 0',
    backgroundColor: lightPurple,
    fontSize: fontSize,
    marginTop: -postHeight+postHeight/4-fontSize,
    zIndex: 2
}

const textStyle = {
    paddingLeft: 40,
    paddingTop: 40
}

const titleStyle = {
    paddingBottom: 40
}

export default ThumbPostTwo
