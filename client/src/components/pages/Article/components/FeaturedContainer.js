import FeaturedPost from './FeaturedPost.js';
import './styles/FeaturedStyle.css';
import LinearProgress from "@mui/material/LinearProgress";

const FeaturedContainer = ( { featuredPosts, featuredNum, nextFeaturedNum, isLoading }) => {

    return (

        <div className="articleFeaturedContainer">
            <div className="articleFeaturedCategory">FEATURED ARTICLES</div>
            <div className="articleFeaturedFeaturedContainer">
            {isLoading ? <LinearProgress /> : <FeaturedPost post={featuredPosts[featuredNum]} />}
            <div className="buttons">
                    <button className="articleFeaturedLeftButton" onClick={() => nextFeaturedNum(false)}>&#60;</button>
                    <button className="articleFeaturedRightButton" onClick={() => nextFeaturedNum(true)}>&#62;</button> 
                </div>
            </div>
        </div>
    );
}

export default FeaturedContainer