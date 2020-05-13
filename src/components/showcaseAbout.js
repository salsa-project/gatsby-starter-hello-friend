import React, {useState} from 'react'

import style from '../styles/showcaseAbout.module.css'



function ShowcaseAbout(){

  return(
    <div className={style.showcaseAbout}>
      <h2>تلميحات مطور</h2>
      <p>بفضل الله تم إطلاق المدونة (<a style={{color: '#52c472'}} href="https://github.com/salsa-project/gatsby-starter-hello-friend/tree/pages">مفتوحة المصدر</a>) .. تجارب و خلاصات و مشاريع و دروس مقدمة إليكم لرفع الوعي البرمجي العربي .. نعلم ونتعلم</p>
    </div>
  )
}

export default(ShowcaseAbout)
