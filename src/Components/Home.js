import * as React from "react";
import './Home.css'
import mockup from '../../src/assets/mockup.png'
import playButton from '../../src/assets/playButton.png'
import { animateScroll as scroll } from 'react-scroll'



const Home = () => {

  function ScrollToDownload() {
    scroll.scrollTo(2150);

}


  return (
<div>
    <div className="wrapper">
      <div className="row1coloum1">

<img className="mockup" src={mockup}/>
      </div>


      <div className="row1coloum2">
<h2 className="title"> غلّة شريكك في ادارة مزرعتك </h2>
<p className="subtitle" >مهمة غلّة هي تحسين العمليات الزراعية باستخدام التقنيات التي تساعد 
على توفير الوقت والجهد وتساعد في زيادة نسبة إنتاجية التمور</p>
<div className="downloadDiv"> 
<span className="knowUs"><a href="https://www.youtube.com/watch?v=5MgHiTKDPwM" className = "videoLink" ><span >تعرف على نظام غلة
</span>
</a> <img src={playButton} alt="play button" class="playBtn"/></span>
<button className="download" onClick={ScrollToDownload} type="button">حمل التطبيق</button> 
</div> 

</div></div>

<svg preserveAspectRatio="xMidYMax meet" className="svg-separator sep12 marginTop50" viewBox="0 0 1600 200" style={{display: "block"}} data-height="200">
<polygon style={{fill: "#f8fafc"}} points="-4,24 800,198 1604,24 1604,204 -4,204 "></polygon> 
<polygon style={{opacity: 1, fill: "#95a5a6"}} points="-4,0 800,198 1604,0 1604,11.833 800,198 -4,12 "></polygon> 
<polygon style={{fopacity: 1,fill: "#dae1e7" }} points="-4,12 -4,24 800,198 1604,24 1604,11.833 800,198 "></polygon>
</svg>

</div>
  );
};

export default Home;