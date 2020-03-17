import React, { useState, useEffect, useRef } from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
//import "../../node_modules/slick-carousel/slick/slick.css";
//import "../patch/slick-theme.css"; // This is a work around for font in slick-theme.css causing forever-load

import dividerImg from "../images/guitar4.jpg";

import Welcome from "../components/welcome";
import Hero from "../components/hero";
//import Flow from "../components/flow";
import Technology from "../components/technology";
import Companies from "../components/companies";
import Services from "../components/services";
//guitar4.jpg
export const query = graphql`
  query {
    logo: file(relativePath: { eq: "wholistic-linkedin.png" }) {
      childImageSharp {
        fluid(maxWidth:1920){
          ...GatsbyImageSharpFluid
        }
      }
    },
    strategy: file(relativePath: { eq: "SunTzu.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1920){
          ...GatsbyImageSharpFluid
        }
      }
    },
    guitar: file(relativePath: { eq: "guitar4.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1920){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

  const IndexPage = ({data}) => {
  const [showBrand, setShowBrand] = useState(true);
  const [brandClass, setBrandClass] = useState("");
  const [navBaseClass, setNavBaseClass] = useState("nav-link");
  
  const [expandState, setExpandState] = useState(false);

  useEffect(() => {
    function handleScroll() {
      let scrollY = window.scrollY;
      //console.log("Scroll: " + scrollY);
      if (scrollY > 1){
		    let firstComponent = document.getElementById("index-welcome");
		    if (firstComponent){
		      let fcHeight = firstComponent.scrollHeight;
		      //console.log("wholisticComponent: " + fcHeight.scrollHeight);
		      if (scrollY >= (fcHeight - 100)){
            setShowBrand(true);
            //setBrandClass("filter-white");
            //setNavBaseClass("nav-link-white");
		      } else {
            setShowBrand(true); // conditional show/hide of brand logo
            //setBrandClass("");
            //setNavBaseClass("nav-link");
          }
        }
      }
    }
    if (window){
      //console.log("window: " + window);
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
	    if (window) console.info("woHeight: " + fcHeight);
		  window.scroll({ top: (fcHeight), left: 0, behavior: 'smooth' });
    }
    
  }
  const onLogoClick = () => {
    setExpandState(true);
  }
  return (
  <Layout style={{ height: `100%`}} showBrand={showBrand} brandClass={brandClass} navBaseClass={navBaseClass} parentData={data} 
      onLogoClick={onLogoClick}>
    <SEO title="Wholistic Software, LLC" />
    <div className="spacer" style={{backgroundColor:"#0f4c75", height:`3px`, width:'100%'}}></div>
    <Hero data={data} expandState={expandState}/>
    <div className="spacer" style={{backgroundColor:"#0f4c75", height:`3px`, width:'100%'}}></div>
    <Services />
    <Welcome id='index-welcome' data={data} onWelcomeClick={onWelcomeClick}></Welcome>

    {/*<Flow style={{ scrollSnapType: `y mandatory` }} ></Flow>*/}

    <Technology />

    <Companies />
  </Layout>
)}

export default IndexPage
//<div style={{backgroundColor:'#0f4c75', textAlign:"center"}}>Wholistic Software is your trusted partner for software development.</div>

//  backgroundImage:"url("+dividerImg+")",
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

/*
Bixby Picture palette
#89908F
#BAB6A4
#46321B
#5D6564
#905A1B
#C38948
*/

/*
Bixby selection
#AFAEA1
#D2CDB2
#A3856A
#D5B27B
#7A5536
#DA9641
*/
