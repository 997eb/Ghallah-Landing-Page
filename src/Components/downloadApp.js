import * as React from "react";
import './DownloadApp.css'
import downloadIphone from '../../src/assets/downloadIphone.png'
import downloadAndroid from '../../src/assets/downloadAndroid.png'
import OurTeam from './ourTeam.js'

//downloadAndroid
import { useDencrypt } from "use-dencrypt-effect";
import mockup from '../../src/assets/mockup.png'
import playButton from '../../src/assets/playButton.png'


const Home = () => {



  return (

<div>
<h1 className="titleDownload">! حمل تطبيق غلّة</h1>
<p className="details">
النظام الذي تحتاجه لإدارة مزرعتك   </p>
  <button type="submit" style={{border: "0", background: "transparent" , marginTop: "2%"}}>
    <img src={downloadIphone} width="160" height="50" alt="submit" />
</button>
<button type="submit" style={{border: "0", background: "transparent" , marginTop: "2%"}}>
    <img src={downloadAndroid} width="160" height="50" alt="submit" />
</button>
<OurTeam/>
</div>
        

  
  );
};

export default Home;