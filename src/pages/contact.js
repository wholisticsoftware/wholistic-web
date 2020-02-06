import React, { useState, useEffect, useRef } from "react";
//import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Card from 'react-bootstrap/Card'

import BackgroundImage from 'gatsby-background-image';
import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../patch/slick-theme.css"; // This is a work around for font in slick-theme.css causing forever-load

import "../components/layout.css";


import Welcome from "../components/welcome"
import Wholistic from "../components/wholistic"
import Philosophy from "../components/philosophy"

import stupa from "../images/stupa.jpg"
import creek from "../images/jane-palmer-creek.jpg" //jane-palmer-creek.jpg
import desk from "../images/laptop-desk.jpg"
import bixby from "../images/bixby2.jpg"

const Contact = () => {
  const [showBrand, setShowBrand] = useState(true);
  return (
    <StaticQuery
      query={graphql`query { desktop: file(relativePath: { eq: "yosemite.jpg" }) { childImageSharp { fluid(quality: 90, maxWidth: 1920) {
      ...GatsbyImageSharpFluid_withWebp } } } } `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <BackgroundImage className="philosophy" Tag="section" fluid={imageData} backgroundColor={`transparent`} 
              style={{ width: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
              backgroundSize: `cover`, backgroundAttachment:`fixed`, backgroundPosition: `top`, alignItems: `center`, textAlign:`center`, flexDirection:`column`}}>
            <Layout style={{ height: `100%`, backgroundColor:`transparent`}} showBrand={showBrand}>
              <SEO title="Wholistic Software, LLC" />
              <div className="contact" style={{backgroundColor:``, width:`100%`, margin:`0px 0px 0px 0px`}}>
                <Card style={{ }}>
                  <Card.Img variant="top" src={stupa} />
                  <Card.Body>
                    <Card.Title><a href="emailto:sales@wholisticsoftware.com">sales@wholisticsoftware.com</a></Card.Title>
                    <Card.Text>
                      <p>If you have questions about services or want a quote.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={desk} />
                  <Card.Body>
                    <Card.Title><a href="emailto:support@wholisticsoftware.com">support@wholisticsoftware.com</a></Card.Title>
                    <Card.Text>
                      <p>Got a support or service question?  Shoot an email to us here.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={creek} />
                  <Card.Body>
                    <Card.Title><a href="emailto:dev@wholisticsoftware.com">dev@wholisticsoftware.com</a></Card.Title>
                    <Card.Text>
                      <p>Hard-tech questions or ideas go here.  We'll also do a free high-level tech spec, if you request one.</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={bixby} />
                  <Card.Body>
                    <Card.Title><a href="emailto:work@wholisticosftware.com">work@wholisticosftware.com</a></Card.Title>
                    <Card.Text>
                      <p>Know about building software and want to work remotely with people who care about eachother?</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Layout>
          </BackgroundImage>
      )}}
  />
)}

export default Contact
//rgb(90, 0, 0) #8b4136
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


 /*<Button variant="primary">Go somewhere</Button>*/