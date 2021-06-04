import * as React from "react";
import './About.css'
import qrcode from '../../src/assets/qr-code.png'
import picture from '../../src/assets/image-gallery.png'
import analytics from '../../src/assets/analytics.png'
import iphone from '../../src/assets/iphone.png'


import dataAnalytics from '../../src/assets/statistics.png'
import eng from '../../src/assets/engineer.png'
import location from '../../src/assets/location-2.png'
import register from '../../src/assets/log-in.png'


import { useDencrypt } from "use-dencrypt-effect";
import mockup from '../../src/assets/mockup.png'
import playButton from '../../src/assets/playButton.png'

const values = ["Hello!", "مرحباً", "Hola !"];

const Home = () => {


  return (

<div>
  <div style={{backgroundColor: "#F8FAFC"}}>
    <div className="wrapperAbout">
<div className="row1">
خصائص نظام غلّة  </div>
      
  <div className="row2coloum1">
<img src={qrcode} className="featureIcon"/>
<h3 style={{marginBottom: "1rem" , marginTop: "0px"}}> مسح رمز التتبع </h3>
<p className="details">
سهولة صنع وعرض المهام اليومية لكل نخلة باستخدام مسح رمز الـ QR الخاص بكل نخلة.</p>
    </div>


  <div className="row2coloum2">
<img src={picture} className="featureIcon"/>
<h3 style={{marginBottom: "1rem" , marginTop: "0px"}}> معالجة الصور وتصميم المهام للمزارعين </h3>
<p className="details">
نظام غلّة يصمم المهام اليومية التي يقوم بها المزارع بناءً على الموسم، نوع النخلة الخاص، والمشاكل التي تعاني منها النخلة.   </p>
  </div>
  <div className="row2coloum3">
  <img src={analytics} className="featureIcon"/>
<h3 style={{marginBottom: "1rem" , marginTop: "0px"}}> 	المراقبة في الوقت الحقيقي
 </h3>
 <p className="details">
 تقدم تقنية المراقبة في الوقت الحقيقي مراقبة ومتابعة فورية لمالك المزرعة لعرض وتتبع حالة النخيل، أداء المزارعين في مهامهم، الإنتاج الإجمالي للمزرعة والمزيد.   </p>
  </div>
  </div>
<div className="wrapperAbout2">
  <div className="row3coloum1">
  <img src={dataAnalytics} className="featureIcon" style={{marginTop: "30%"}}/>
<h3 style={{marginBottom: "1rem" , marginTop: "0px"}}>تحليل البيانات
 </h3>
 <p className="details2">
 نظام غلّة يجمع ويحلل البيانات من المزرعة بشكل دوري ويبني تنبؤات دقيقة لإنتاجية المزرعة في المستقبل.  </p>
  </div>

  <div className="row3coloum2">
  <img src={iphone} className="iphoneMocup"/>
  </div>

  <div className="row3coloum3">
  <img src={location} className="featureIcon" style={{marginTop: "30%"}}/>
<h3 style={{marginBottom: "1rem" , marginTop: "0px"}}> تحديد موقع النخيل على الخارطة 
 </h3>
 <p className="details2">
 نظام غله يتيح للمستخدم سهولة الوصول لمواقع وبيانات النخيل ومعرفة حالتها وتحديثها في أي وقت   </p>
  </div>

  <div className="row4coloum1">
  <img src={register} className="featureIcon"/>
<h3 style={{marginBottom: "1rem" , marginTop: "0px"}}> تسجيل كامل فروع المزرعة  
 </h3>
 <p className="details2" style={{marginBottom: "30%"}}>
 نظام غله مناسب للمزارع الصغيرة والمزارع الكبيرة حيث يمكنهم من إضافة جميع فروع المزرعة تحت مظلة واحدة.   </p>
  </div>

  <div className="row4coloum3">
  <img src={eng} className="featureIcon"/>
<h3 style={{marginBottom: "1rem" , marginTop: "0px"}}> توظيف أفضل مهندسي الزراعة 
 </h3>
 <p className="details2" style={{marginBottom: "30%"}}>
 احصل على استشارة أفضل المهندسين الزراعين عبر نظام غلة   </p>
  </div>

   </div>
</div>
<svg id="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 C 50 100 80 100 100 0 Z" style={{fill: "#F8FAFC"}}></path></svg>
</div>
        

  
  );
};

export default Home;