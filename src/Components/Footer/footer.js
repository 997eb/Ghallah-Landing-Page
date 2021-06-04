import React, { Component } from 'react';
import '../Footer/footer.css'
import upArrow from '../../assets/upArrow2.png'
import twitter from '../../assets/twitter.png'
import twitterC from '../../assets/twitterC.png'
import instagram from '../../assets/instagram.png'
import instagramC from '../../assets/instagramC.png'
import linkedInC from '../../assets/linkedinC.png'
import linkedIn from '../../assets/linkedin.png'
import GhallahB from '../../assets/GhallahB.png'
import { animateScroll as scroll } from 'react-scroll'



class Footer extends Component {


    constructor(props) {
        super(props);
    this.state = {
      twitter: twitter,
      linkedIn:linkedIn,
      instagram: instagram
    }

    this.handleTwitterOver = this.handleTwitterOver.bind(this);
    this.handleTwitterOut = this.handleTwitterOut.bind(this);

    this.handleLinkedInOver = this.handleLinkedInOver.bind(this);
    this.handleLinkedInOut = this.handleLinkedInOut.bind(this);

    this.handleInstagramOver = this.handleInstagramOver.bind(this);
    this.handleInstagramOut = this.handleInstagramOut.bind(this);
}

    handleTwitterOver() {
        this.setState({
            twitter: twitterC,


        });
    }

        scrollToTop() {
            scroll.scrollToTop();
         }

    handleLinkedInOver() {
        this.setState({
            linkedIn:linkedInC,


        });
    }

    handleInstagramOver() {
        this.setState({
    
            instagram: instagramC

        });
    }


    handleLinkedInOut() {
        this.setState({
            linkedIn:linkedIn,
          

        });
    }

    handleInstagramOut() {
        this.setState({
 
            instagram: instagram

        });
    }

    handleTwitterOut() {
        this.setState({
            twitter: twitter,
 

        });
    }
    render() {

  
        return (  
<div>
<svg id="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{fill: "#F8FAFC" , marginTop: "5%", marginBottom: "0%"}} viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="65">
        <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
    </svg>
<div className="bac">
  <a className="up" onClick={this.scrollToTop}>
<img src={upArrow} alt="HTML tutorial" style={{width:"22px" ,height:"22px"}}/>
</a>


    <div className="wrapperSocialMedia">
               <div className="socialR1C1" onMouseOver={this.handleTwitterOver} onMouseOut={this.handleTwitterOut}>
               <a className="up" href="https://twitter.com/Ghallah_Sys" >
               <img
                src={this.state.twitter}
                 style={{width:"32px" }}/>
                </a>
               </div>
                <div className="socialR1C2" onMouseOver={this.handleLinkedInOver} onMouseOut={this.handleLinkedInOut}>
               <a className="up" href="https://www.linkedin.com/company/ghallah/about/" >
               <img
                src={this.state.linkedIn}
                 style={{width:"32px" }}/>
                </a>
               </div>

               <div className="socialR1C3" onMouseOver={this.handleInstagramOver} onMouseOut={this.handleInstagramOut}>
               <a className="up" href="https://www.instagram.com/ghallah_sys/" >
               <img
                src={this.state.instagram}
                 style={{width:"32px" }}/>
                </a>
               </div>
            </div>

            <div className="copyRight">
                CopyRight 2021 ©
                </div>
    </div>
</div>

    );
}
}

export default Footer;

