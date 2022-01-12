import ThumbPost from './ThumbPostHorizontal.js'
import './styles/VerticalContainer.css'

const VerticalContainer = ( { recentPosts, category }) => {

    return (
      <>
      <div style={containerStyle}>
            
        <div style={categoryStyle}>
          {category}
        </div>
            
        <div style={vertiStyle}>
            <div style={postContainerStyle}>
                {recentPosts.slice(recentPosts.length-3).map((recentPost) => {
                    return <ThumbPost post={recentPost}/>
                })}
            </div> 
        </div>  
      </div>
      </>
  )

    
}


const containerStyle = {
    position: 'relative',
    marginLeft: '5%',
    marginBottom: '5%',
    marginRight: '-10%',
    width: '100%'
},

postContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '30px'
},

categoryStyle = {
    position: 'relative',
    fontSize: 35,
    fontWeight: 'bold',
    top: 35/2+5,
    zIndex: 1,
    backgroundColor: 'white',
    width: 'fit-content',
    left: '5%',
    padding: '0px 10px 0px 10px',
    color: '#7960AE',
},

vertiStyle = {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 10,
    borderRadius: 40,
    borderColor: '#7D5DC3',
    width: 'fit-content',
    padding: '40px 20px 30px 20px',
  display: 'flex',
  flexDirection: 'column'
}

export default VerticalContainer
