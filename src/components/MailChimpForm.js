import React, { useState, useRef } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import style from '../styles/EmailListForm.module.css';
import logo from '../images/logo.svg'

function MailChimpForm(){
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mailState, setMailState] = useState('نشكرك ﻹشتراك في نشرتنا البريدية');

  const mailStateRef = useRef(null);
  const mailInputsRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[a-zA-Z0-9].+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
      addToMailchimp(email, {name: name}).then(data => {
        console.log(data)
        if(data.result = 'success'){
          mailInputsRef.current.classList.toggle(`${style.inputWraperOff}`);
          mailStateRef.current.classList.toggle(`${style.mailchimpStateOff}`);
        }
      })
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={style.mailchimpForm}>
      <img src={logo} className={style.mailchimpFormLogo} alt="logo"/>
      <h2>سجل في نشرتنا البريدية</h2>
      <p>سجل لتتوصل بجديدنا أولا بأول و أيضا نشرة بريدية خاصة لما يحصل خلف الستار من مواضيع لا أنشرها على المدونة</p>
      <div className={`${style.mailchimpState}`} ref={mailStateRef}>
        <p>نشكرك على إشتراكك بالنشرة البريدية</p>
      </div>
      <div className={`${style.inputWraper}`} ref={mailInputsRef}>
        <input
        placeholder="البريد الإلكتروني"
        name="email"
        type="text"
        onChange={handleEmailChange}
        value={email}
        />
        <input
        placeholder="الإسم الكامل"
        name="First Name"
        type="text"
        onChange={handleNameChange}
        value={name}
        />
        <button type="submit">أشترك</button>
      </div>
    </form>
  );
}


export default MailChimpForm;
