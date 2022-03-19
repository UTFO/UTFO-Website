// COMPONENT NOT USED ANYMORE, LEAVING IT HERE FOR POSSIBLE FUTURE REFERENCE


// import {useEffect, useState} from "react"
// import { useParams } from "react-router-dom";
// import { Suspense, lazy, Fragment } from "react";
// import Box from "@mui/material/Box";
// import { getFullArticle } from "../api"
// import { renderer } from "./specialArticleData"
// import LinearProgress from "@mui/material/LinearProgress";


// function FullArticle() {
//     const { id } = useParams();
//     const [component, setComponent] = useState()

//     useEffect(() => {
//         getFullArticle(id)
//             .then(({ data }) => {
//                 console.log(data)
//                 if (data["specialArticle"]) {
//                     setComponent(renderer(data["specialArticle"]));
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }, [])

//     return (
//         <Box
//             sx={{
//             boxShadow: 20,
//             m: 1,
//             bgcolor: (theme) => theme.palette.mode === "#D3D3D3",
//             color: (theme) => theme.palette.mode === "#D3D3D3",
//             padding: 6.2,
//             borderRadius: 2,
//             fontSize: "0.875rem",
//             fontWeight: "700",
//             backgroundColor: "#f5f5f5",
//             minWidth: 500,
//             minHeight: 500,
//             verticalAlign: "center",
//             "margin": "auto",
//             }}
//         >
//             {component ? (
//             <Fragment>{component}</Fragment>
//             ) : (
//             <LinearProgress />
//             )}
//         </Box>
//     );
// }

// export default FullArticle;
