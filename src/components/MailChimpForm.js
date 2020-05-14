import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import style from '../styles/EmailListForm.module.css';
import logo from '../images/logo.svg'

function MailChimpForm(){
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email).then(data => {
      console.log(data)
    })
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
    console.log(email);
  };

  const handleNameChange = (event) => {
    setName(event.currentTarget.value);
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit} className={style.mailchimpForm}>
      <img src={logo} className={style.mailchimpFormLogo} alt="logo"/>
      <h2>سجل في نشرتنا البريدية</h2>
      <p>سجل لتتوصل بجديدنا أولا بأول و أيضا نشرة بريدية خاصة لما يحصل خلف الستار من مواضيع لا أنشرها على المدونة</p>
      <div>
        <input
        placeholder="البريد الإلكتروني"
        name="email"
        type="text"
        onChange={handleEmailChange}
        />
        <input
        placeholder="الإسم الكامل"
        name="fullName"
        type="text"
        onChange={handleNameChange}
        />
        <button type="submit">أشترك</button>
      </div>
    </form>
  );
}


export default MailChimpForm;
