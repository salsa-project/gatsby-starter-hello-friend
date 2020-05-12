import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <p className='footerCopyrightsPTag'>
      <span className="footerCopyrights" style={{padding: '0px'}}>
      <a href="https://developtip.com"> MrSalsa </a>التعديل من قبل
      </span>
        <span className="footerCopyrights">
          <a href="https://www.gatsbyjs.org"> Gatsby </a> بإستخدام
        </span>
        <span className="footerCopyrights" style={{padding: '0px'}}>
          <a href="https://radoslawkoziel.pl"> panr </a> صنع من طرف
        </span>
      </p>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
