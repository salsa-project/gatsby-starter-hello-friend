import React, { useState } from 'react';
import logo from '../images/logo.svg'
import MailChimpForm from './MailChimpForm'
import ShowcaseAbout from './showcaseAbout'
import style from '../styles/showcase.module.css'


function ShowCase(){

  return(
    <div className={style.showcaseWrapper}>
      <ShowcaseAbout />
      <MailChimpForm />
    </div>
  )
}

export default(ShowCase)
