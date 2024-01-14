import { useRef, useEffect } from "react";
import React from "react";

function Test() {
    const ref = useRef(1);
    useEffect(() => {
      console.log(ref.current.getBoundingClientRect());
      console.log(ref.current);
      console.log(ref);
    }, []);
    return (
    <h1 ref={ref}>Hello</h1>
    )
  }
export default Test;