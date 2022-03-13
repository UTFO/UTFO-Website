import ThumbPost from './ThumbPostVertical.js';
import './styles/ArticlesContainer.css';
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const ArticlesContainer = ( { posts, isLoading }) => {    
    // For ROUTE LINKS for titles, use title but make sure it only has letters and spaces that are separated by dashes
    return (

        <div className="articlesContainer">
            {isLoading ? <LinearProgress /> : 
                <div className="articleDiv">
                    {posts.map((post) => {
                        return (
                            <Link
                                to={`/articles/${post._id}`}
                                target="_blank" key={post._id}
                            >
                                <ThumbPost post={post} /> {/*For now using this until a new card component is made*/}
                            </Link>
                        );
                    })}
                </div>
            }
        </div>
    )


}

export default ArticlesContainer
