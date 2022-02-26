import ThumbPost from './ThumbPostHorizontal.js';
import './styles/VerticalContainer.css';

const VerticalContainer = ( { recentPosts, category }) => {

    return (
      <>
      <div className="articleVerticalContainerContainer">

        <div className="articleVerticalContainerCategory">
          {category}
        </div>

        <div className="articleVerticalContainerVerti">
            <div className="articleVerticalContainerPost">
                {recentPosts.slice(recentPosts.length-3).map((recentPost) => {
                    return <ThumbPost post={recentPost}/>
                })}
            </div>
        </div>
      </div>
      </>
  )
}

export default VerticalContainer
