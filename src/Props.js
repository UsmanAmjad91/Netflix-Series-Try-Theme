import React from "react";
import "./Props.css";
import Card from "./Cards";


function Props() {
  return (
    <>
    <header>
        <div className="header">
        <h1 className="main-heading">Netflix Series</h1>
        </div>
        </header>
     <Card imgsrc="/images/download.jpeg" title="A Netflix Orignal Series" sname="Lucifer" btn="Watch Now" link="https://www.netflix.com/pk/title/80057918" />
     <Card imgsrc="/images/FameGame.jpg" title="A Netflix Orignal Series" sname="Fame Game" btn="Watch Now" link="https://www.netflix.com/pk/title/81133092" />
     <Card imgsrc="/images/downloads.jpeg" title="A Netflix Orignal Series" sname="Series" btn="Watch Now" link="https://www.netflix.com/pk/" />
     <Card imgsrc="/images/images.jpeg" title="A Netflix Orignal Series" sname="End Less Night" btn="Watch Now" link="https://www.netflix.com/pk/title/81293388" />
     <Card imgsrc="/images/nacosKopie.jpeg" title="A Netflix Orignal Series" sname="La casa of papel" btn="Watch Now" link="https://www.netflix.com/pk/title/80192098" />
     <Card imgsrc="/images/Netflix.jpg" title="A Netflix Orignal Series" sname="Dark" btn="Watch Now" link="https://www.netflix.com/pk/" />
      
    </>
  );
}

export default Props;
