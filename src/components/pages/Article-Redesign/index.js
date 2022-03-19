import Header from "./components/Header.js";
import { useState, useEffect } from "react";
import { getArticlePreviews } from "../api";
import ArticlesContainer from "./components/ArticlesContainer.js";
import "./Article.css";

function Article() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticlePreviews()
            .then(({ data: { data } }) => {
                setArticles(data)
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Header />
            <ArticlesContainer className="postContainer" posts={articles} isLoading={isLoading} />          
        </div>
    );
}
export default Article;