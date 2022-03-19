import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Typography,
  Select,
  Alert,
  IconButton,
  Dialog,
  DialogActions,
  Checkbox,
  FormControlLabel,
  OutlinedInput,
  ListItemText,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CloseIcon from "@mui/icons-material/Close";
import {
  createArticle,
  getFullArticle,
  updateArticle,
  deleteArticlePermanently,
} from "../../api";
import { specialArticleData } from "./specialArticles/specialArticleData";
import "./styles/ArticleEditor.css";

const articleTypes = ["Featured", "Announcements", "Tutorials", "Projects"];

const ArticleEditor = () => {
  const { id } = useParams();
  const [specialArticle, setSpecialArticle] = useState(false);
  const [articleContent, setArticleContent] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const [publishDate, setPublishDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [articleType, setArticleType] = useState([]);
  const [articleBlurb, setArticleBlurb] = useState("");
  const [imageThumbnail, setImageThumbnail] = useState("");
  const [thumbnailCaption, setThumbnailCaption] = useState("");
  const [error, setError] = useState(false);
  const [deleteArticle, setDeleteArticle] = useState(false);
  const [whichSpecialArticle, setWhichSpecialArticle] = useState("");
  const editorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getFullArticle(id)
        .then(({ data }) => {
          setTitle(data["title"]);
          setPublishDate(new Date(data["publishDate"]));
          setAuthorName(data["authorName"]);
          setAuthorImage(data["authorImage"]);
          setImageThumbnail(data["imageThumbnail"]);
          setArticleType(data["articleType"]);
          setArticleBlurb(data["articleBlurb"]);
          setThumbnailCaption(data["thumbnailCaption"])
          if (data["specialArticle"]) {
            setSpecialArticle(true)
            setWhichSpecialArticle(data["specialArticle"]);
          } else {
            setArticleContent(data["articleContent"]); 
          }
          setIsUpdating(true);
        })
        .catch(function (error) {
          console.log(error);
          setIsUpdating(false);
          navigate("/article-editor");
        });
    }
  }, []);

  const handleSubmit = () => {
    if (
      publishDate &&
      articleType.length != 0 &&
      title &&
      authorName &&
      articleBlurb &&
      thumbnailCaption &&
      imageThumbnail &&
      ((specialArticle && whichSpecialArticle) || articleContent)
    ) {

      let articleData = {
        title: title,
        authorName: authorName,
        authorImage: authorImage,
        publishDate: formatDate(publishDate),
        articleType: articleType,
        imageThumbnail: imageThumbnail,
        thumbnailCaption: thumbnailCaption,
        articleBlurb: articleBlurb,
      };
      console.log(articleData);
      if (specialArticle) {
        articleData["specialArticle"] = whichSpecialArticle;
      } else {
        articleData["articleContent"] = articleContent;
      }
      
      console.log(articleData)
      console.log(articleContent)
      console.log(whichSpecialArticle)

      if (!isUpdating) {
        createArticle(articleData);
        window.location.reload(false);
      } else {
        updateArticle(id, articleData);
        navigate("/article-editor");
        window.location.reload(false);
      }
    } else {
      console.log("Error");
      setError(true);
    }
  };

  const handleDeleteArticle = () => {
    if (id) {
      deleteArticlePermanently(id);
      navigate("/article-editor");
      window.location.reload(false);
    }
  };

  const handlePreview = () => {
    if (editorRef.current) {
      setPreviewHtml(editorRef.current.getContent());
    }
  };

  const handleEditor = () => {
    if (editorRef.current) {
      setArticleContent(editorRef.current.getContent());
    }
  };

  const handleImageCapture = ({ target }) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      setAuthorImage(e.target.result);
    };
  };

  const handleImageThumbnailChange = (e) => {
    setImageThumbnail(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleArticleBlurbChange = (e) => {
    setArticleBlurb(e.target.value);
  };

  const handleDateChange = (date) => {
    let formattedDate = formatDate(date);
    setPublishDate(formattedDate);
  };

  const handleThumbailCaptionChange = (e) => {
    setThumbnailCaption(e.target.value);
  }

  const handleSpecialArticleChange = () => {
    setSpecialArticle(!specialArticle);
    setArticleContent("");
    setWhichSpecialArticle("");
  };

  const handleWhichSpecialArticleChange = (e) => {
    setWhichSpecialArticle(e.target.value);
    console.log(e.target.value);
  };

  const handleDelete = () => {
    setDeleteArticle(true);
  };

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [month, day, year].join("/");
  };

  const handleArticleTypeChange = (e) => {
    setArticleType(
      typeof e.target.value === "string"
        ? e.target.value.split(",")
        : e.target.value
    );
  };


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 0;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <>
      <Dialog
        open={error}
        onClose={() => {
          setError(false);
        }}
      >
        <Alert
          severity="error"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Please enter all required fields before publishing article
        </Alert>
      </Dialog>

      <Dialog
        open={deleteArticle}
        onClose={() => {
          setDeleteArticle(false);
        }}
      >
        <Alert
          severity="error"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setDeleteArticle(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Are you sure you want to delete this article?
        </Alert>
        <DialogActions>
          <Button onClick={handleDeleteArticle}>DELETE</Button>
          <Button
            onClick={() => {
              setDeleteArticle(false);
            }}
          >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          boxShadow: 20,
          m: 1,
          bgcolor: (theme) => theme.palette.mode === "#D3D3D3",
          color: (theme) => theme.palette.mode === "#D3D3D3",
          padding: 6.2,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          backgroundColor: "#f5f5f5",
          minWidth: 500,
          minHeight: 500,
          verticalAlign: "center",
        }}
      >
        <h1 className="title">Article Editor and Publisher</h1>
        <Typography variant="h6">Required Fields</Typography>
        <div className="articleRequirements">
          <TextField
            required
            id="outlined-required"
            label="Article Title"
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Author Name"
            value={authorName}
            onChange={handleAuthorNameChange}
          />
          <Button variant="outlined" component="label">
            Upload Author Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageCapture}
            />
          </Button>
          <TextField
            required
            value={imageThumbnail}
            id="outlined-required"
            label="Thumbnail Link"
            onChange={handleImageThumbnailChange}
          />
          <TextField
            required
            value={thumbnailCaption}
            id="outlined-required"
            label="Thumbnail Caption"
            onChange={handleThumbailCaptionChange}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Publish Date"
              value={publishDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl sx={{ width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">
              Article Types
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={articleType}
              onChange={handleArticleTypeChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {articleTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  <Checkbox checked={articleType.indexOf(type) > -1} />
                  <ListItemText primary={type} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            required
            style={{ width: 500 }}
            label="Article Blurb"
            multiline
            rows={3}
            value={articleBlurb}
            onChange={handleArticleBlurbChange}
          />
          <FormControlLabel
            value="start"
            control={
              <Checkbox
                checked={specialArticle}
                onClick={handleSpecialArticleChange}
              />
            }
            label="Special Article"
            labelPlacement="start"
            value={specialArticle}
          />
          {specialArticle ? (
            <FormControl sx={{ minWidth: 200, marginLeft: 9 }}>
              <InputLabel>Which Special Article</InputLabel>
              <Select
                label="Which Special Article"
                autoWidth
                value={whichSpecialArticle}
                onChange={handleWhichSpecialArticleChange}
              >
                {specialArticleData.map((article) => {
                  return (
                    <MenuItem value={article.name}>{article.name}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          ) : null}
        </div>
        <div className="editor">
          {!specialArticle ? (
            <Editor
              onInit={(evt, editor) => {
                editorRef.current = editor;
                editorRef.current.setContent(articleContent);
              }}
              value={articleContent}
              onEditorChange={handleEditor}
              init={{
                forced_root_block: false,
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor ",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | code ",
                automatic_uploads: true,
                file_picker_types: "image",
                extended_valid_elements:
                  "a[class|name|href|target|title|onclick|rel],script[type|src],iframe[src|style|width|height|scrolling|marginwidth|marginheight|frameborder],img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name]",
              }}
            />
          ) : null}
        </div>
        <div className="submit">
          {!specialArticle ? (
            <Button variant="outlined" onClick={handlePreview}>
              Log editor content
            </Button>
          ) : null}
          <Button variant="outlined" onClick={handleSubmit} color="success">
            {isUpdating ? "Update Article" : "Submit Article"}
          </Button>
        </div>
        {isUpdating ? (
          <div className="delete">
            <Button variant="contained" color="error" onClick={handleDelete}>
              DELETE ARTICLE!
            </Button>
          </div>
        ) : null}
        <div></div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: previewHtml }}
        />
      </Box>
    </>
  );
};

export default ArticleEditor;
