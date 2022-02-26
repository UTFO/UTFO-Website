import HorizontalContainer from "./components/HorizontalContainer.js";
import FeaturedContainer from "./components/FeaturedContainer.js";
import Header from "./components/Header.js";
import VerticalContainer from "./components/VerticalContainer.js";

import { useState, useEffect } from "react";
import brain from "./components/images/brainImage.jpg";
import sleep from "./components/images/sleep.png";
import authorImage from "./components/images/authorImage.png";
import { getArticlePreviews } from "./api";
import axios from "axios";

import "./components/styles/CategorySelector.css";
import "./Article.css";

function Article() {
  //List of featured posts
  const featuredPosts = [
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      imageThumbnail: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      articleBlurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst.",
    },
    {
      title: "The Brain is NOT a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      imageThumbnail: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      articleBlurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst.",
    },
    {
      title: "The Brain is DEF a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      imageThumbnail: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      articleBlurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst.",
    },
  ];

  const [featuredNum, setFeaturedNum] = useState(0);

  

  //List of Recent Posts
  const [recentPosts, setRecentPosts] = useState([
    {
      title: "Test Test 1",
      date: "03/14/1592",
      author: "Author",
      image: sleep,
      type: "Announcement",
      authorImage: authorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Test Test 2 - I Needed a Longer Title to Test",
      date: "03/14/1592",
      author: "Author",
      image: brain,
      type: "Announcement",
      authorImage: authorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Test Test 3 - I Needed a Longer Title to Test",
      date: "03/14/1592",
      author: "Author",
      image: sleep,
      type: "Project",
      authorImage: authorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "Test Test 4 - I Needed a Longer Title to Test",
      date: "03/14/1592",
      author: "Author",
      image: brain,
      type: "Tutorial",
      authorImage: authorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ]);

  const [testAnnouncement, setTestAnnouncement] = useState([]);
  const [testProject, setTestProject] = useState([]);
  const [testTutorial, setTestTutorial] = useState([]);
  const [testRecent, setTestRecent] = useState([]);
  const [testFeatured, setTestFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

        setIsLoading(false);

        // let counter = 1;
        // let dummyArticle = data.data;
        // let maxDate = dummyArticle[0]["publishDate"];
        // let removeIndex = 0;
        // while (counter < 3) {
        //   let index = 0;
        //   for (let date of dummyArticle) {
        //     if (date["publishDate"] >= maxDate) {
        //       maxDate = date["publishDate"];
        //       removeIndex = index;
        //     }
        //     index++;
        //   }
        //   setTestRecentPosts([...testRecentPosts, dummyArticle.find((article) => article["publishDate"] === maxDate)]);
        //   console.log(
        //     dummyArticle.find((article) => article["publishDate"] === maxDate)
        //   );
        //   dummyArticle.splice(removeIndex, 1);
        //   counter++;
        // }

        // console.log(testRecentPosts);
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
        {/*featuredNum={featuredNum}
          nextFeaturedNum={nextFeaturedNum}
          testFeatured={testFeatured}*/}

        {/* Recent Posts */}
        <VerticalContainer
          recentPosts={recentPosts}
          category={"RECENT POSTS"}
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

//List of Announcements
// const [ announcements ] = useState([
//   {
//     title: "Announcement!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
// ])

// //List of projects
// const [ projects ] = useState([
//   {
//     title: "Project!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
// ])

// //List of tutorials
// const [ tutorials ] = useState([
//   {
//     title: "Tutorial!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
//   ,
//   {
//     title: "The Brain is a Tumor!",
//     date: "01/23/2025",
//     author: "Guy D",
//     image: brain,
//     authorImage: authorImage,
//     category: "Health & Science",
//     link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
//   }
// ])

export default Article;
