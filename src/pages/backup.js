import React, { useState, useEffect } from "react";
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

//import Scrollable from "../components/scrollable/scrollable";

import Welcome from "../components/welcome"
import Wholistic from "../components/wholistic"
//import BizTech from "../components/business-tech"
import Philosophy from "../components/philosophy"
import Questionaire from "../components/questionaire"

const Page2 = () => {
  const [showBrand, setShowBrand] = useState(true);
  const [brandClass, setBrandClass] = useState("");
  const [navBaseClass, setNavBaseClass] = useState("nav-link");

  useEffect(() => { 
    function handleScroll() {
      //setScrollPosition(getScroll())
      let scrollY = window.scrollY;
      //console.log("Scroll: " + scrollY);
      if (scrollY > 1){
		let wholisticOuter = document.getElementById("wholistic-outer");
		if (wholisticOuter){
		  let woHeight = wholisticOuter.scrollHeight;
		  //console.log("wholisticComponent: " + wholisticOuter.scrollHeight);
		  if (scrollY >= (woHeight - 100)){
	        setShowBrand(true);
	        setBrandClass("filter-white");
	        setNavBaseClass("nav-link-white");
		  } else {
			setShowBrand(true); // conditional show/hide of brand logo
			setBrandClass("");
			setNavBaseClass("nav-link");
		  }
		}
	  }
    }
	if (window){
	  console.log("window: " + window);
	  window.addEventListener('scroll', handleScroll);
	}
	return () => window.removeEventListener('scroll', handleScroll)
  }, []);
  
  let onWelcomeClick = () => {
    console.info("BEGIN onWelcomeClick()");
	let wholisticOuter = document.getElementById("wholistic-outer");
	if (wholisticOuter){
	  let woHeight = wholisticOuter.scrollHeight;
	  console.error("a woHeight: " + woHeight);
	  if (window)
	    console.info("woHeight: " + woHeight);
		window.scroll({
		  top: (woHeight), 
		  left: 0, 
		  behavior: 'smooth'
		});
	  }
  }
  return (
  <Layout style={{ height: `100%`}} showBrand={showBrand} brandClass={brandClass} navBaseClass={navBaseClass}>
    <SEO title="Wholistic Software, LLC" />
    <Wholistic id='wholistic1' onWelcomeClick={onWelcomeClick}></Wholistic>
    <Questionaire></Questionaire>
  </Layout>
)}

export default Page2

/* <Welcome style={{ scrollSnapType: `y mandatory` }} ></Welcome>
 * 
 * -componentDidMount() {
+useEffect(() => {
   axios
     .get(
       "https://gist.githubusercontent.com/witalewski/fc8f043d53a0d505f84c5ddb04ae76ea/raw/7c505bbc1675a0bc8a067f8b633b531c769bb64c/data.json"
     )
     .then(({ data }) => {
-      this.setState({ todos: data });
-      this.setState({ nextTodoId: data.length });
+      setTodos(data);
+      setNextTodoId(data.length);
     });
+}, []);
-}
* */
