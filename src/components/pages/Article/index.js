
import HorizontalContainer from './components/HorizontalContainer.js';
import FeaturedContainer from './components/FeaturedContainer.js';
import Header from './components/Header.js';
import VerticalContainer from './components/VerticalContainer.js';

import { useState } from 'react';
import brain from './components/images/brainImage.jpg';
import sleep from './components/images/sleep.png';
import authorImage from './components/images/authorImage.png';

import { projectsInfo } from './ProjectsInfo.js'
import { featuredPostsInfo } from './FeaturedPostsInfo.js'

import './components/styles/CategorySelector.css';
import './Article.css';

function Article() {

  //List of Announcements
  const announcements = projectsInfo

  //List of projects
  const projects = projectsInfo

  //List of tutorials
  const tutorials  = projectsInfo

  //List of featured posts
  const featuredPosts = featuredPostsInfo

  const [ featuredNum , setFeaturedNum] = useState(0);

  const nextFeaturedNum = (next) => {
    if(next) {
      if(featuredNum < featuredPosts.length-1)
        setFeaturedNum(featuredNum+1);
      else
        setFeaturedNum(0);
    } else {
      if(featuredNum > 0)
        setFeaturedNum(featuredNum-1);
      else
        setFeaturedNum(featuredPosts.length-1);
    }
  }

 //List of Recent Posts
  const recentPosts = projectsInfo;

  let categories = [
    {
      category: "ANNOUNCEMENTS",
      posts: announcements,
    },
    {
      category: "PROJECTS",
      posts: projects,
    },
    {
      category: "TUTORIALS",
      posts: tutorials,
    }
  ]

  return (
    <div className="article-page">
      {/* Header */}
      <Header/>

      <div className="articleTopContainer">
        {/* Featured & Recent Container */}
        <FeaturedContainer featuredPosts={featuredPosts} featuredNum={featuredNum} nextFeaturedNum={nextFeaturedNum}/>

        {/* Recent Posts */}
        <VerticalContainer recentPosts={recentPosts} category={"RECENT POSTS"}/>
      </div>

      <div className='text'>Check out all the articles written by our members by navigating the different categories below!</div>

      {/* Thumb Posts */}
      {categories.map((category) => {
        return <HorizontalContainer posts={category.posts} category={category.category}/>
      })}
    </div>
  );
}


export default Article;