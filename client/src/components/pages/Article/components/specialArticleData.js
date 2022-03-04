import React from "react";
import {ArticleUTOPH, TeamStructure} from "./specialArticles/import.js";

export const articleData = [
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
    for (const data of articleData) {
        console.log(data)
        if (data["name"] === name) {
            return React.createElement(data["component"]);
        }
    }
    return React.createElement(
        () => <div>The component has not been created yet.</div>)
};
