import React from 'react'
import REP from '../../assets/REP.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={REP} download className='btn'> Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA