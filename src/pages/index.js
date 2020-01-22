import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
//import "../../node_modules/slick-carousel/slick/slick.css";
//import "../patch/slick-theme.css"; // This is a work around for font in slick-theme.css causing forever-load

import Welcome from "../components/welcome"
import Wholistic from "../components/wholistic"
//import BizTech from "../components/business-tech"
import Philosophy from "../components/philosophy"
//import Questionaire from "../components/questionaire"
import Flow from "../components/flow"

const IndexPage = () => {
  const [showBrand, setShowBrand] = useState(true);
  const [brandClass, setBrandClass] = useState("");
  const [navBaseClass, setNavBaseClass] = useState("nav-link");
  useEffect(() => { 
    function handleScroll() {
      let scrollY = window.scrollY;
      console.log("Scroll: " + scrollY);
      if (scrollY > 1){
		let firstComponent = document.getElementById("index-welcome");
		if (firstComponent){
		  let fcHeight = firstComponent.scrollHeight;
		  console.log("wholisticComponent: " + fcHeight.scrollHeight);
		  if (scrollY >= (fcHeight - 100)){
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
  
  let onWelcomeClick = (e) => {
    //console.info("BEGIN onWelcomeClick(): " + e.target);
	let firstComponent = document.getElementById("index-welcome");
	console.info("BEGIN onWelcomeClick(): " + firstComponent);
	if (firstComponent){
	  let fcHeight = firstComponent.scrollHeight;
	  console.error("a woHeight: " + fcHeight);
	  if (window)
	    console.info("woHeight: " + fcHeight);
		window.scroll({
		  top: (fcHeight), 
		  left: 0, 
		  behavior: 'smooth'
		});
	  }
  }
  return (
  <Layout style={{ height: `100%`}} showBrand={showBrand} brandClass={brandClass} navBaseClass={navBaseClass}>
    <SEO title="Wholistic Software, LLC" />
    <Welcome id='index-welcome' onWelcomeClick={onWelcomeClick}></Welcome>
    <Flow style={{ scrollSnapType: `y mandatory` }} ></Flow>
  </Layout>
)}

export default IndexPage

/*
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
