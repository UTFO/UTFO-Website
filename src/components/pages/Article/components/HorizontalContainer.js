import ThumbPost from './ThumbPostVertical.js';
import './styles/HorizontalContainer.css';
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const HorizontalContainer = ( { posts, category, isLoading }) => {

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
    
    // For ROUTE LINKS for titles, use title but make sure it only has letters and spaces that are separated by dashes
    return (

        <div className="articleHorizontalContainer">

            <div className="articleHorizontalCategory">
                {category}
            </div>

            <div className="articleHorizontalHorizontal">
                {isLoading ? <LinearProgress /> : null}
                <div className="articleHorizontalPost">
                    {posts.map((post) => {
                        return (
                            <Link
                                to={`/articles/${post._id}`}
                                target="_blank"
                            >
                                <ThumbPost post={post} />
                            </Link>
                        );
                    })}
                </div>
            </div>

        </div>
    )


}

export default HorizontalContainer
