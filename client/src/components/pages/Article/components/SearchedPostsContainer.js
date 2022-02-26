import './styles/SearchedPostsContainer.css';
import ThumbPost from './ThumbPostVertical.js';



const SearchedPostsContainer = ( { posts, searchTitle } ) => {


    return (
        <div className="articleSearchedPostsContainer">
            <p className="articleSearchedPostsResult"><strong>Search Result — </strong>{searchTitle}</p>

            <div className="articleSearchedPostsContainerPostsContainer">
                {posts.map((post) => {
                    if(post.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                        return <ThumbPost post={post}/>
                    }
                    else
                        return <></>
                })}
            </div>

        </div>
    )
}

export default SearchedPostsContainer
