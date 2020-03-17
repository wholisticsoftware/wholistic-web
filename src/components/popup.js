import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"

//https://www.framer.com/api/motion/examples/

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
//https://www.npmjs.com/package/reactjs-popup
export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{position: 'fixed', left: '5px', bottom: '5px', backgroundColor:'white'}}>Services</div>
  )
}

export default MyComponent;