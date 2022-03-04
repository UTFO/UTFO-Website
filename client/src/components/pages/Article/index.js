import HorizontalContainer from "./components/HorizontalContainer.js";
import FeaturedContainer from "./components/FeaturedContainer.js";
import Header from "./components/Header.js";
import VerticalContainer from "./components/VerticalContainer.js";

import { useState, useEffect } from "react";
import { getArticlePreviews } from "./api";

import "./components/styles/CategorySelector.css";
import "./Article.css";

function Article() {
  const [testAnnouncement, setTestAnnouncement] = useState([]);
  const [testProject, setTestProject] = useState([]);
  const [testTutorial, setTestTutorial] = useState([]);
  const [testRecent, setTestRecent] = useState([]);
  const [testFeatured, setTestFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredNum, setFeaturedNum] = useState(0);

  useEffect(() => {
    getArticlePreviews()
      .then(({ data }) => {
        setTestAnnouncement(
          data.data.filter(
            (article) => article["articleType"] === "Announcement"
          )
        );
        setTestProject(
          data.data.filter((article) => article["articleType"] === "Project")
        );
        setTestTutorial(
          data.data.filter((article) => article["articleType"] === "Tutorial")
        );
        setTestFeatured(
          data.data.filter((article) => article["articleType"] === "Featured")
        );

        let dummyArray = data.data
        dummyArray.sort(function (a, b) {
          return new Date(b["publishDate"]) - new Date(a["publishDate"]);
        });
        setTestRecent([dummyArray[0], dummyArray[1], dummyArray[2]])

        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let categories = [
    {
      category: "ANNOUNCEMENTS",
      posts: testAnnouncement,
    },
    {
      category: "PROJECTS",
      posts: testProject,
    },
    {
      category: "TUTORIALS",
      posts: testTutorial,
    },
  ];

  const nextFeaturedNum = (next) => {
    if (next) {
      if (featuredNum < testFeatured.length - 1)
        setFeaturedNum(featuredNum + 1);
      else setFeaturedNum(0);
    } else {
      if (featuredNum > 0) setFeaturedNum(featuredNum - 1);
      else setFeaturedNum(testFeatured.length - 1);
    }
  };

  return (
    <div className="article-page">
      {/* Header */}
      <Header />

      <div className="articleTopContainer">
        {/* Featured & Recent Container */}
        <FeaturedContainer
          featuredPosts={testFeatured}
          featuredNum={featuredNum}
          nextFeaturedNum={nextFeaturedNum}
          isLoading={isLoading}
        />

        {/* Recent Posts */}
        <VerticalContainer
          recentPosts={testRecent}
          category={"RECENT POSTS"}
          isLoading={isLoading}
        />
      </div>

      <div className="text">
        Check out all the articles written by our members by navigating the
        different categories below!
      </div>

      {/* Thumb Posts */}
      {categories.map((category) => {
        return (
          <HorizontalContainer
            posts={category.posts}
            category={category.category}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
}
export default Article;