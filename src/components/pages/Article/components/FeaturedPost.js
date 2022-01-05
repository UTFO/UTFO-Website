const FeaturedPost = ( { post }) => {
    const hoverOver = (e) => {
      e.target.style.color = 'rgb(255, 255, 255, 0.8)';
      e.target.style.backgroundColor = 'rgb(255, 255, 255, 0.7)';
      e.target.style.borderColor = 'rgb(255, 255, 255, 0.3)';
    }

    const hoverOut = (e) => {
      e.target.style.color = 'rgb(255, 255, 255, 0.5)'
      e.target.style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
      e.target.style.borderColor = 'rgb(255, 255, 255, 0.5)';
    }
    
    return (
        <div style={containerStyle}>
            <img style={imageStyle} src={post.image} alt=""/>
            <div style={textContainerStyle}>
                <p style={titleStyle}>{post.title}</p>
                <p style={textStyle}>{post.text}</p>
                <form action={post.link} target="_blank" rel="noreferrer">
                  <input type="submit" style={buttonStyle} value="Read More" onMouseOver={hoverOver} onMouseOut={hoverOut}/>
                </form>
            </div>
        </div>
    )
}

const containerStyle = {
    position: 'relative',
    display: 'flex',
    transition: '2s'
},

postLinkStyle = {
    zIndex: 0,
},

imageStyle = {
    width: '60%',   
    height: 685,
    objectFit: 'cover',
    borderRadius: '40px 0px 0px 40px',
    margin: 'auto'
},

textContainerStyle = {
    width: '300%',
    height: 680,
    backgroundColor: '#5D33B5',
    borderRadius: '0 40px 40px 0',
    paddingTop: 5,
    paddingLeft: '3%',
    paddingRight: '9em'
},

titleStyle = {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Comic Sans MS',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%'
},

textStyle = {
    fontSize: 20,
    color: 'rgb(255, 255, 255, 0.8)',
    display: '-webkit-box',
    WebkitLineClamp: 14,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
},

buttonStyle = {
  float: 'center',
  fontSize: 30,
  marginLeft: '20%',
  cursor: 'pointer',
  marginTop: '10%',
  backgroundColor: 'rgb(255, 255, 255, 0.5)',
  borderColor: 'rgb(255, 255, 255, 0.5)',
  borderRadius: 20,
  border: 'none',
  padding: 10,
  fontFamily: "Comic Sans MS",
  fontWeight: 'bold',
  color: 'rgb(255, 255, 255, 0.5)',
  boxShadow: '5px 5px 0px 0px rgb(0, 0, 0, 0.5)'


}

export default FeaturedPost