import React, { useState, useEffect, useRef } from "react";
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

//     <BizTech></BizTech>
//
/*
 *     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    * */
const IndexPage = () => {
  const wholisticComponent = useRef(null);
  const [showBrand, setShowBrand] = useState(false);
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
		  } else {
			setShowBrand(false);
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
  return (
  <Layout style={{ height: `100%`}} showBrand={showBrand}>
    <SEO title="Wholistic Software, LLC" />
    <Wholistic id='wholistic1'></Wholistic>
    <Welcome style={{ scrollSnapType: `y mandatory` }}></Welcome>
    <Philosophy></Philosophy>
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
