import React from "react";
import ArticleUTOPH from "./ArticleUTOPH";
import TeamStructure from "./TeamStructure/TeamStructure";

export const specialArticleData = [
    {
        name: "utoph",
        component: ArticleUTOPH
    },
    {
        name: "team-structure",
        component: TeamStructure
    }
];

export const renderer = (name) => {
    for (const data of specialArticleData) {
        console.log(data)
        if (data["name"] === name) {
            return React.createElement(data["component"]);
        }
    }
    return React.createElement(
        () => <div>The component has not been created yet.</div>)
};
