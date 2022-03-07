import {useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import MarkdownView from "react-showdown";
import Box from "@mui/material/Box";
import "./styles/FullArticle.css"
import TeamStructure from "./articleMarkdown/TeamStructure"


function FullArticle(props) {
    // const { title } = useParams();
    // const file_name = title + ".md";
    // const [markdown, setMarkdown] = useState("")

    // useEffect(() => {
    //     import(`./articleMarkdown/${file_name}`)
    //         .then((res) => {
    //             fetch(res.default)
    //                 .then((response) => {
    //                     return response.text();
    //                 })
    //                 .then((text) => {
    //                     setMarkdown(text)
    //                 });
    //         })
    //         .catch((err) => console.log(err));
    // });

    return (
        <div className="markdown">
            {/*<Box
            sx={{
                boxShadow: 20,
                m: 1,
                bgcolor: (theme) => theme.palette.mode === "#D3D3D3",
                color: (theme) => theme.palette.mode === "#D3D3D3",
                padding: 6.2,
                borderRadius: 2,
                fontSize: "1em",
                fontWeight: "400",
                backgroundColor: "#f5f5f5",
                width: '100%',
                minHeight: 500,
                verticalAlign: "center",
            }}
            >
            <MarkdownView
                markdown={markdown}
                options={{
                tables: true,
                emoji: true,
                parseImgDimensions: true,
                headerLevelStart: true,
                smoothLivePreview: true,
                simpleLineBreaks: true,
                ghMentions: true,
                openLinksInNewWindow: true,
                }}
            />
            </Box>*/}
            <TeamStructure />
        </div>
    );
}

export default FullArticle;
