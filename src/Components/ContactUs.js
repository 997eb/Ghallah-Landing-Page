import React, { Component } from 'react';
import './Contact.css'
import Footer from './Footer/footer'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import Swal from 'sweetalert2'

 

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FullName : "",
      EmailAddress: "" , 
      PhoneNumber: "" , 
      Message:""
    }

    this.handleSubmit = this.handleSubmit.bind(this)

}

handleSubmit(e) {
  
  fetch('https://ghallahstagingapi.herokuapp.com/api/Lead', {
    method: "POST",
    headers: {
        "Content-Type": "application/json-patch+json"
    },
    body: JSON.stringify(this.state)

}).then((result) => {

    console.log(this.state.code)


    result.json().then((resp) => {
      console.log(resp)
      if (resp.success == true) {
          Swal.fire(
            'Success!',
            'send',
            'success'
        )
        } else {
          Swal.fire({
            title: 'Error!',
            text: resp.result.message,
            icon: 'error',
            confirmButtonText: 'Try Again!'
        })
     
        }

    })
})
e.preventDefault();

}

  render() {
    return (

<div>
<div className="wrapperContact">
    <div className="cr1c1">
    <form type="submit" onSubmit={this.handleSubmit}>
  <input 
  style={{marginTop:"0px"}} 
  type="text" 
  id="fname" 
  name="name" 
  placeholder="الاسم"
  value={this.state.FullName}
  onChange={(e) => { this.setState({ FullName: e.target.value }) }}
  />

<input 
  style={{marginTop:"20px"}} 
  type="text" 
  id="phone" 
  name="phone" 
  placeholder="البريد الالكتروني "
  value={this.state.EmailAddress}
  onChange={(e) => { this.setState({ EmailAddress: e.target.value }) }}
  />

  <input 
  style={{marginTop:"20px"}} 
  type="text" 
  id="lname" 
  name="subject" 
  placeholder="رقم الجوال"
  value={this.state.PhoneNumber}
  onChange={(e) => { this.setState({ PhoneNumber: e.target.value }) }}
  />

  <textarea 
  style={{marginTop:"20px"}} 
  placeholder="اترك رسالتك هنا"
  value={this.state.Message}
  onChange={(e) => { this.setState({ Message: e.target.value }) }}
  />

  <button class="sendButton">ارسال</button>

</form>
        </div>
        <div className="cr1c2">
            <h1> تواصل معنا</h1>
              <p className="contactDetails"> تواصل معنا عبر البريد الإلكتروني لأي اقتراحات، ملاحظات أو شكاوى. نود أن نسمع منك! </p>
              <h3 style={{marginTop:"50px"}}> موقعنا</h3>
              <p className="contactDetails"><span>المملكة العربية السعودية</span><span>المدينة المنورة</span></p>
             <div style={{marginTop:"10%"}}>
               <img src={phone} className="iconContact"/>  <p className="phoneDetails"> +966 56 555 6666 </p>
               <img src={email} className="iconContact"/>  <a href="#" className="phoneDetails"> info@ghallah.com </a>
    </div>
     </div>


</div>
<Footer/>
</div>
  
  );
};

}