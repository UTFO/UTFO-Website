
import HorizontalContainer from './components/HorizontalContainer.js';
import FeaturedContainer from './components/FeaturedContainer.js';
import Header from './components/Header.js';
import VerticalContainer from './components/VerticalContainer.js';
import CategorySelector from './components/CategorySelector.js';
import SearchedPostsContainer from './components/SearchedPostsContainer.js';

import { useState } from 'react';
import brain from './components/images/brainImage.jpg';
import sleep from './components/images/sleep.png';
import authorImage from './components/images/authorImage.png';

import './components/styles/CategorySelector.css';
import './Article.css';

function Article() {

  //List of Posts
  const [ posts, setPosts ] = useState([
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }
    ,
    {
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI"
    }

  ])

  const featuredPosts = [{
      title: "The Brain is a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst."
    }
    ,
    {
      title: "The Brain is NOT a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst."
    }
    ,
    {
      title: "The Brain is DEF a Tumor!",
      date: "01/23/2025",
      author: "Guy D",
      image: brain,
      authorImage: authorImage,
      category: "Health & Science",
      link: "https://www.youtube.com/watch?v=jvGnekdMOhI",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel. Libero enim sed faucibus turpis. Aenean vel elit scelerisque mauris. Volutpat sed cras ornare arcu dui vivamus. Vitae ultricies leo integer malesuada nunc. Gravida in fermentum et sollicitudin ac orci phasellus. Porttitor eget dolor morbi non arcu risus. Nunc non blandit massa enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh. Urna nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing. Viverra tellus in hac habitasse platea dictumst."
    }
  ]

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
  const [ recentPosts, setRecentPosts ] = useState([
    {
      title: "Test Test 1",
      date: "03/14/1592",
      author: "Author",
      image: sleep,
      type: "Announcement",
      authorImage: authorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 2 - I Needed a Longer Title to Test",
      date: "03/14/1592",
      author: "Author",
      image: brain,
      type: "Announcement",
      authorImage: authorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 3 - I Needed a Longer Title to Test",
      date: "03/14/1592",
      author: "Author",
      image: sleep,
      type: "Project",
      authorImage: authorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 4 - I Needed a Longer Title to Test",
      date: "03/14/1592",
      author: "Author",
      image: brain,
      type: "Tutorial",
      authorImage: authorImage,
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ])

  let categories = [
    {
      category: "ANNOUNCEMENTS",
      posts: posts,
    },
    {
      category: "PROJECTS",
      posts: posts,
    },
    {
      category: "TUTORIALS",
      posts: posts,
    }
  ]
  
  //All = 0, Tutorials = 1, Projects = 2
  const [ categorySelected, selectCategory ] = useState(0);


  const resetCategory = (className) => {
    document.querySelector(className).style.color = "black";
    document.querySelector(className).style.fontWeight = "";
  }

  const activeCategory = (className) => {
    document.querySelector(className).style.color = "#6390C3";
    document.querySelector(className).style.fontWeight = "bold";
  }

  const selectNewCategory = (number) => {
    selectCategory(number)
    resetCategory(".articleCategoryAll");
    resetCategory(".articleCategoryTutorials");
    resetCategory(".articleCategoryProjects");

    switch(number) {
      case 0:
        activeCategory(".articleCategoryAll");
        break;

      case 1:
        activeCategory(".articleCategoryTutorials");
        break;

      case 2:
        activeCategory(".articleCategoryProjects");
        break;

      default:
    }
  }

  const [searchTitle, setSearchTitle] = useState("")
  const [emptySearch, setEmptySearch] = useState(false)

  return (
    <>
      {/* Header */}
      <Header/>

      <div className="articleTopContainer">
        {/* Featured & Recent Container */}
        <FeaturedContainer featuredPosts={featuredPosts} featuredNum={featuredNum} nextFeaturedNum={nextFeaturedNum}/>

        {/* Recent Posts */}
        <VerticalContainer recentPosts={recentPosts} category={"RECENT POSTS"}/>
      </div>

      <div className='text'>Check out all the articles written by our members by navigating the different categories below!</div>

       {/* Category Selector Container 
      <div className="articleMiddleContainer">
        <CategorySelector categories={categories} categorySelected={categorySelected} selectCategory={selectNewCategory}/>
      </div> */}



      {/* Thumb Posts */}
      {!emptySearch ? (categorySelected === 0 ? categories.map((category) => {
            return <HorizontalContainer posts={category.posts} category={category.category}/>
          }) : <HorizontalContainer posts={categories[categorySelected-1].posts} category={categories[categorySelected-1].category}/>
        ) : <SearchedPostsContainer posts={posts} searchTitle={searchTitle}/>}

    </>
  );
}


export default Article;