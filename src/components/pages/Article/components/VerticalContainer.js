import LinearProgress from "@mui/material/LinearProgress";
import ThumbPost from './ThumbPostHorizontal.js';
import './styles/VerticalContainer.css';

const VerticalContainer = ( { recentPosts, category, isLoading }) => {

    return (
      <>
        <div className="articleVerticalContainerContainer">
          <div className="articleVerticalContainerCategory">{category}</div>
          <div className="articleVerticalContainerVerti">
            <div className="articleVerticalContainerProgressBar">
              {isLoading ? <LinearProgress /> : null}
            </div>
            <div className="articleVerticalContainerPost">
              {recentPosts.slice(recentPosts.length - 3).map((recentPost) => {
                return <ThumbPost post={recentPost} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
}

export default VerticalContainer
