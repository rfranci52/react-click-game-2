import React from "react";
import "./style.css";

function Title(props) {


  

  return   <div class="container">
  <div class="jumbotron">
  <h1 className="title">{props.children}</h1>
    {/* <h1>Bootstrap Tutorial</h1>  */}
    {/* <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing */}
    {/* responsive, mobile-first projects on the web.</p>  */}
  </div>
  {/* <p>This is some text.</p>  */}
  {/* <p>This is another text.</p>  */}
</div>;
}

export default Title;
