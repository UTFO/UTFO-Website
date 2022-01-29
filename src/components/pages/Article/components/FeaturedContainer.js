import FeaturedPost from './FeaturedPost.js'
import './styles/FeaturedStyle.css'

const FeaturedContainer = ( { featuredPosts, featuredNum, nextFeaturedNum }) => {

    return (
        <div className="articleFeaturedContainer">
            <div className="articleFeaturedCategory">FEATURED ARTICLES</div>
            <div className="articleFeaturedFeaturedContainer">
                <FeaturedPost post={featuredPosts[featuredNum]}/>
                {/* <button className="articleFeaturedLeftButton" onClick={() => nextFeaturedNum(false)}>&#60;</button>
                <button className="articleFeaturedRightButton" onClick={() => nextFeaturedNum(true)}>&#62;</button> */}
            </div>
            
        </div>
    )
}

export default FeaturedContainer