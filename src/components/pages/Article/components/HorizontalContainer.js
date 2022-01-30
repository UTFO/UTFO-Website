import ThumbPost from './ThumbPostVertical.js';
import './styles/HorizontalContainer.css';

const HorizontalContainer = ( { posts, category }) => {

    //Draggable Function, too buggy atm
    /* const postContainer = document.querySelector('.articleHorizontalHorizontal');


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
    })
 */
    return (

        <div className="articleHorizontalContainer">

            <div className="articleHorizontalCategory">
                {category}
            </div>

            <div className="articleHorizontalHorizontal">
                <div className="articleHorizontalPost">
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

export default HorizontalContainer
