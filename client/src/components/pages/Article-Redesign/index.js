//import HorizontalContainer from "./components/HorizontalContainer.js";
//import FeaturedContainer from "./components/FeaturedContainer.js";
import Header from "./components/Header.js";
//import VerticalContainer from "./components/VerticalContainer.js";

import { useState, useEffect } from "react";
import { getArticlePreviews } from "../api";
import ArticlesContainer from "./components/ArticlesContainer.js";

//import "./components/styles/CategorySelector.css";
//import "./Article.css";

function Article() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchedArticles = await getArticlePreviews();
            setArticles(fetchedArticles.data.data); //For some reason have this really weird format for the JSON
            setIsLoading(false);
        } 

        try{
            fetchData();    
        } catch (err) {
            console.err(err);
        }
    }, []);

    return (
        <div className="article-page">
            <Header />
            <ArticlesContainer posts={articles} isLoading={isLoading} />          
        </div>
    );
}
export default Article;