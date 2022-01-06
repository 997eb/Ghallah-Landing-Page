import * as React from "react";
import './DownloadApp.css'
import amjad from '../assets/amjad2.png'
import abeer from '../assets/abeer.jpg'
import duaa from '../assets/duaa.jpg'
import moh from '../assets/moha.jpg'





const OurTeam = () => {



  return (

<div>
<h1 className="titleTeam"> فريق العمل </h1>
<div className="wrappeTeam">
<div className="r1c1">
    <img src={duaa} className="teamImage"/>
    <h5 className="memberName"> دعاء زياد </h5>
    <p className="memberTitle"> شريك مؤسس والرئيس التنفيذي</p>

    </div>
    <div className="r1c2">
    <img src={abeer} className="teamImage"/>

 <h5 className="memberName"> عبير الحربي</h5>
 <p className="memberTitle"> شريك مؤسس والتشغيل ومراقبة الجودة</p>
    </div>
    <div className="r1c3">
    <img src={moh} className="teamImage"/>

    <h5 className="memberName">مهند عالوه</h5>
    <p className="memberTitle"> العلاقات العامة وإدارة التدريب</p>

    </div>
    <div className="r1c4">
    <img src={amjad} className="teamImage"/>

    <h5 className="memberName">أمجد محمد </h5>
    <p className="memberTitle"> المطور التقني</p>

    </div>

    </div>
</div>
        

  
  );
};

export default OurTeam;