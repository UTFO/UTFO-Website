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
  Collapse,
  Dialog,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CloseIcon from "@mui/icons-material/Close";
import { createArticle, getFullArticle, updateArticle } from "../api";
import "./styles/ArticleEditor.css"

const ArticleEditor = () => {
  const { id } = useParams();
  const [articleContent, setArticleContent] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const [publishDate, setPublishDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [imageThumbnail, setImageThumbnail] = useState("");
  const [articleType, setArticleType] = useState("");
  const [articleBlurb, setArticleBlurb] = useState("");
  const [error, setError] = useState(false);
  const editorRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // console.log(id);
      getFullArticle(id)
        .then(({ data }) => {
          setTitle(data["title"]);
          setPublishDate(new Date(data["publishDate"]));
          setAuthorName(data["authorName"]);
          setAuthorImage(data["authorImage"]);
          setImageThumbnail(data["imageThumbnail"]);
          setArticleType(data["articleType"]);
          setArticleBlurb(data["articleBlurb"]);
          setArticleContent(data["articleContent"]);
          setIsUpdating(true);
        })
        .catch(function (error) {
          console.log(error);
          setIsUpdating(false);
          navigate("/article-editor");
        });
    }
  }, [])

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join("/");
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

  const handleSubmit = () => {
    if (
      articleContent &&
      publishDate &&
      articleType &&
      title &&
      authorName &&
      articleBlurb &&
      imageThumbnail
    ) {
      console.log("Correct Input");
      console.log(formatDate(publishDate));
      console.log(articleType);
      console.log(title);
      console.log(authorName);
      console.log(articleBlurb);
      console.log(imageThumbnail);

      let articleData = {
        title: title,
        authorName: authorName,
        authorImage: authorImage,
        publishDate: formatDate(publishDate),
        articleType: articleType,
        imageThumbnail: imageThumbnail,
        articleBlurb: articleBlurb,
        articleContent: articleContent,
      };  
      if (!isUpdating) {
        console.log("here")
        createArticle(articleData);
        window.location.reload(false);
      } else {
        updateArticle(id, articleData);
        navigate("/article-editor");
      }
    } else {
      console.log("Error");
      setError(true);
    }
  };

  const handleArticleTypeChange = (e) => {
    setArticleType(e.target.value);
  };

  const handleImageCapture = ({ target }) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      setAuthorImage(e.target.result);
    };
  };
  const handleThumbnailChange = ({ target }) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      setImageThumbnail(e.target.result);
    };
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
    // let formattedDate = formatDate(date);
    console.log(date);
    setPublishDate(date);
  }
  

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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Publish Date"
              format="DD-MM-YYYY"
              value={publishDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel>Article Type</InputLabel>
            <Select
              label="Article Type"
              autoWidth
              value={articleType}
              onChange={handleArticleTypeChange}
            >
              <MenuItem value={"Project"}>Project</MenuItem>
              <MenuItem value={"Announcement"}>Announcement</MenuItem>
              <MenuItem value={"Tutorial"}>Tutorial</MenuItem>
              <MenuItem value={"Featured"}>Featured</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" component="label">
            Upload Thumbnail
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleThumbnailChange}
            />
          </Button>
        </div>
        <TextField
          required
          style={{ width: 500 }}
          label="Article Blurb"
          multiline
          rows={3}
          value={articleBlurb}
          onChange={handleArticleBlurbChange}
        />
        <div className="editor">
          <Editor
            onInit={(evt, editor) => {
              editorRef.current = editor;
              editorRef.current.setContent(articleContent);
            }}
            value={articleContent}
            onEditorChange={handleEditor}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment | code ",
              automatic_uploads: true,
              file_picker_types: "image",
            }}
          />
        </div>
        <div className="submit">
          <Button variant="outlined" onClick={handlePreview}>
            Log editor content
          </Button>
          <Button variant="outlined" onClick={handleSubmit}>
            {isUpdating ? "Update Article" : "Submit Article"}
          </Button>
        </div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: previewHtml }}
        />
      </Box>
    </>
  );
};

export default ArticleEditor;
