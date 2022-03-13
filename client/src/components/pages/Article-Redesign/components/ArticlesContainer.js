import ThumbPost from './ThumbPostVertical.js';
import './styles/ArticlesContainer.css';
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const ArticlesContainer = ( { posts, isLoading }) => {    
    // For ROUTE LINKS for titles, use title but make sure it only has letters and spaces that are separated by dashes
    return (

        <div className="articlesContainer"> {console.log(isLoading)}
            {isLoading ? <LinearProgress className='linear'/> : 
                <div className = 'articlesAlign'>
                    <div className="articleDiv">
                        {posts.map((post) => {
                            return (
                                <div className='child' key={post._id}>
                                    <Link
                                        to={`/articles/${post._id}`}
                                        target="_blank" 
                                    >
                                        <ThumbPost post={post} /> {/*For now using this until a new card component is made*/}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </div>
    )


}

export default ArticlesContainer
