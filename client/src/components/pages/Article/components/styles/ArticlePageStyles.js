import { styled } from "@mui/system";

export const HeaderContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));

export const AuthorContainer = styled("div")(({ theme }) => ({
    display: "flex",
    margin: `${theme.spacing(1.5)} 0 ${theme.spacing(3)} 0`,
    alignItems: "center",
}));

export const ShortDivider = styled("div")(({ theme }) => ({
    width: "8em",
    height: "8px",
    backgroundColor: "rgb(170,170,170)",
    margin: "8px 0"
}));

export const Title = styled("p")(({ theme }) => ({
    fontSize: "2em",
    fontWeight: "bold",
    margin: "`${theme.spacing(2)} 0 ${theme.spacing(1)} 0`",
}));

export const Tag = styled("button")(({ theme }) => ({
    color: "white",
    backgroundColor: "black",
    padding: "4px",
    fontSize: "1vw",
    borderRadius: 7,
    border: "none",
    width: "fit-content",
}));
