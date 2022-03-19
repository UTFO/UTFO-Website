import './ArticleBlurb.css';
import ArticlePreviewCard from "../../Article-Redesign/components/ArticlePreviewCard"
import { useEffect, useState } from 'react'
import LinearProgress from "@mui/material/LinearProgress";
import {getArticlePreviews} from "../../api"
//Check mans' drawings here!... https://void0.fanbox.cc/ (I was forced to pls--)

function ArticleBlurb() {
	const [recommendedArticles, setRecommendedArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getArticlePreviews()
			.then(({ data: { data } }) => {
				let dummyArray = data.filter((article) => article.articleType.includes("Featured"))
				dummyArray.sort(function (a, b) {
					return new Date(a["publishDate"]) - new Date(b["publishDate"]);
				});
				console.log(dummyArray)
				setRecommendedArticles([dummyArray[0], dummyArray[1]]);
				setIsLoading(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [])
	return (
		<>
			<h2>Recommended Articles</h2>
			<p>Check out some articles you might like to read to learn more about the club!</p>
			<div className="homeArticleBlurbPostContainer">
				{isLoading ? <LinearProgress/> :
					recommendedArticles.map((article) => {
						return <ArticlePreviewCard key={article._id} post={article} />;
					})
				}
			</div>

		</>
	);
}

export default ArticleBlurb;
