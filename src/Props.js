import React from "react";
import "./Props.css";
import Card from "./Cards";
import Sdata from "./Sdata";

function Props() {
  return (
    <>
      <header>
        <div className="header">
          <h1 className="main-heading">Netflix Special Series</h1>
        </div>
      </header>
      <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        btn={Sdata[0].btn}
        link={Sdata[0].link}
      />
      <Card
       imgsrc={Sdata[1].imgsrc}
       title={Sdata[1].title}
       sname={Sdata[1].sname}
       btn={Sdata[1].btn}
       link={Sdata[1].link}
      />
      <Card
       imgsrc={Sdata[2].imgsrc}
       title={Sdata[2].title}
       sname={Sdata[2].sname}
       btn={Sdata[2].btn}
       link={Sdata[2].link}
      />
      <Card
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        btn={Sdata[3].btn}
        link={Sdata[3].link}
      />
      <Card
       imgsrc={Sdata[4].imgsrc}
       title={Sdata[4].title}
       sname={Sdata[4].sname}
       btn={Sdata[4].btn}
       link={Sdata[4].link}
      />
      <Card
       imgsrc={Sdata[5].imgsrc}
       title={Sdata[5].title}
       sname={Sdata[5].sname}
       btn={Sdata[5].btn}
       link={Sdata[5].link}
      />

      {/* <Card imgsrc="/images/download.jpeg" title="A Netflix Orignal Series" sname="Lucifer" btn="Watch Now" link="https://www.netflix.com/pk/title/80057918" />
     <Card imgsrc="/images/FameGame.jpg" title="A Netflix Orignal Series" sname="Fame Game" btn="Watch Now" link="https://www.netflix.com/pk/title/81133092" />
     <Card imgsrc="/images/downloads.jpeg" title="A Netflix Orignal Series" sname="Series" btn="Watch Now" link="https://www.netflix.com/pk/" />
     <Card imgsrc="/images/images.jpeg" title="A Netflix Orignal Series" sname="End Less Night" btn="Watch Now" link="https://www.netflix.com/pk/title/81293388" />
     <Card imgsrc="/images/nacosKopie.jpeg" title="A Netflix Orignal Series" sname="La casa of papel" btn="Watch Now" link="https://www.netflix.com/pk/title/80192098" />
     <Card imgsrc="/images/Netflix.jpg" title="A Netflix Orignal Series" sname="Dark" btn="Watch Now" link="https://www.netflix.com/pk/" />
       */}
    </>
  );
}

export default Props;
