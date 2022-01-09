
import SearchContainer from './components/SearchContainer.js'
import HorizontalContainer from './components/HorizontalContainer.js'
import FeaturedContainer from './components/FeaturedContainer.js'
import Header from './components/Header.js'
import VerticalContainer from './components/VerticalContainer.js'
import CategorySelector from './components/CategorySelector.js'

import { useState } from 'react'
import brain from './components/images/brainImage.jpg'
import sleep from './components/images/sleep.png'
import authorImage from './components/images/authorImage.png'

import './Article.css';

function Article() {

  //Boolean variable for toggling search textfield on/off
  const [ searchToggle, setSearchToggle ] = useState(false);

  //Toggles search textfield boolean true/false
  const toggleSearch = () => {
    setSearchToggle(!searchToggle);
    console.log(searchToggle);
  }

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
      authorImage: authorImage,
      category: "Sleepy Time",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 2",
      date: "03/14/1592",
      author: "Author",
      image: brain,
      authorImage: authorImage,
      category: "Sleepy Time",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 3",
      date: "03/14/1592",
      author: "Author",
      image: sleep,
      authorImage: authorImage,
      category: "Sleepy Time",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
    ,
    {
      title: "Test Test 4",
      date: "03/14/1592",
      author: "Author",
      image: brain,
      authorImage: authorImage,
      category: "Sleepy Time",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ])

  let categories = [
    <>
      <HorizontalContainer posts={posts} category={"Tutorials"}/>
      <HorizontalContainer posts={posts} category={"Projects"}/>
    </>
    ,
    <HorizontalContainer posts={posts} category={"Tutorials"}/>
    ,
    <HorizontalContainer posts={posts} category={"Projects"}/>
  ]

  const [ categorySelected, selectCategory ] = useState(0);
  
  return (
    <>
      {/* Header */}
      <Header/>

      <div style={topContainerStyle}>
        {/* Featured & Recent Container */}
        <FeaturedContainer featuredPosts={featuredPosts} featuredNum={featuredNum} nextFeaturedNum={nextFeaturedNum}/>

        {/* Recent Posts */} 
        <VerticalContainer recentPosts={recentPosts} category={"Recent Posts"}/>
      </div>

      <div style={middleContainerStyle}>
        {/* Search Container */}
        <SearchContainer searchToggle={searchToggle} toggleSearch={toggleSearch}/>

        {/* Category Selector Container */}
        <CategorySelector categories={categories} categorySelected={categorySelected} selectCategory={selectCategory}/>
      </div>

      

      {/* Thumb Posts */} 
      {categories[categorySelected]}

    </>
  );
}

const topContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  position: 'relative',
  margin: 'auto',
  textAlign: 'center',
  gap: 10
},

middleContainerStyle = {
  display: 'flex',
  width: 'fit-content',
  gap: '10%'
}



export default Article;