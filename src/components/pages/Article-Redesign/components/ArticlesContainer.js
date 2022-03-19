import './styles/ArticlesContainer.css';
import LinearProgress from "@mui/material/LinearProgress";
import ArticlePreviewCard from "./ArticlePreviewCard";

const ArticlesContainer = ( { posts, isLoading }) => {    
    return (

        <div className="articlesContainer">
            {isLoading ? <LinearProgress className='linear'/> : 
                <div className = 'articlePreviewAlign'>
                    <div className="articlePreviewDiv">
                        {posts.map((post) => {
                            return (
                                <ArticlePreviewCard key={post._id} post={post} />
                            );
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

export default ArticlesContainer