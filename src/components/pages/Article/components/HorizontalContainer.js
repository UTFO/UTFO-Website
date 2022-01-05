import ThumbPost from './ThumbPostThree.js'
import './styles/ThumbPostThree.css'


const HorizontalContainer = ( { posts, category }) => {
    console.log(window.getComputedStyle(document.body).backgroundColor)
    require('./styles/ThumbPostThree.css')
    //Draggable Function, too buggy atm
    /* const postContainer = document.querySelector('.postContainer');

      
    let isDown;
    let scrollLeft;
    let startX;
  
    postContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        postContainer.style.cursor = 'grabbing';
        
        startX = e.pageX - postContainer.offsetLeft;
        scrollLeft = postContainer.scrollLeft;
    })
  
    postContainer.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        const x = e.pageX - postContainer.offsetLeft;
        postContainer.scrollLeft = scrollLeft - x + startX;
    })
  
    postContainer.addEventListener('mouseup', () => {
        isDown = false;
        postContainer.style.cursor = 'grab';
    }) */

    return (
        
        <div style={containerStyle}>
            
            <div style={categoryStyle}>
                {category}
            </div>
            
            <div style={horizStyle}>
                <div className="postContainer" style={postContainerStyle}>
                    {posts.map((post) => {
                        return <ThumbPost 
                                post={post}
                                />
                    })}
                </div>
            </div>
            
        </div>
    )

    
}




const containerStyle = {
    marginLeft: '5%',
    marginBottom: '5%'
},

postContainerStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    gridColumnGap: 20,
    overflowX: 'auto',
    paddingBottom: 10,
    cursor: 'grab',
    zIndex: 3
},

categoryStyle = {
    position: 'relative',
    fontSize: 35,
    fontWeight: 'bold',
    top: 35/2+5,
    zIndex: 1,
    backgroundColor: window.getComputedStyle(document.body).backgroundColor,
    width: 'fit-content',
    left: '5%',
    padding: '0px 10px 0px 10px',
    color: '#7960AE',
},

horizStyle = {
    position: 'relative',
    borderStyle: 'solid',
    borderWidth: 10,
    borderRadius: 40,
    borderColor: '#9E81DD',
    width: '90%',
    zIndex: 0,
    padding: '40px 20px 10px 20px',

}

export default HorizontalContainer
