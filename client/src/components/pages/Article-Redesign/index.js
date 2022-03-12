//import HorizontalContainer from "./components/HorizontalContainer.js";
//import FeaturedContainer from "./components/FeaturedContainer.js";
import Header from "./components/Header.js";
//import VerticalContainer from "./components/VerticalContainer.js";

import { useState, useEffect } from "react";
import { getArticlePreviews } from "../api";
import HorizontalContainer from "./components/HorizontalContainer.js";

//import "./components/styles/CategorySelector.css";
//import "./Article.css";

function Article() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])

    useEffect(() => {
        /*const fetchData = async () => {
            let fetchedArticles = await getArticlePreviews();
            setArticles(fetchedArticles.data);
            setIsLoading(false);
        } 

        try{
            fetchData();    
        } catch (err) {
            setArticles(['1', '2'])
            console.err(err);
        }*/
        setArticles(['1', '2'])
    }, []);

    return (
        <div className="article-page">
            <Header />
            <HorizontalContainer posts={[]} isLoading={isLoading} />
          
        </div>
    );
}
export default Article;