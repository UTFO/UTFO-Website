import ThumbPost from './ThumbPostVertical.js';
import './styles/HorizontalContainer.css';
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const HorizontalContainer = ( { posts, isLoading }) => {    
    // For ROUTE LINKS for titles, use title but make sure it only has letters and spaces that are separated by dashes
    return (

        <div className="articleHorizontalContainer">
            <div className="articleHorizontalHorizontal">
                {isLoading ? <LinearProgress /> : 
                    <div className="articleHorizontalPost">
                        {posts.map((post) => {
                            return (
                                <Link
                                    to={`/articles/${post._id}`}
                                    target="_blank"
                                >
                                    <ThumbPost post={post} /> {/*For now using this until a new card component is made*/}
                                </Link>
                            );
                        })}
                    </div>
                }
            </div>

        </div>
    )


}

export default HorizontalContainer
