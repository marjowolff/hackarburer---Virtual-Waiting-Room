import React from 'react'
import { Link } from 'react-router-dom'
import './FrontPage.css'
import './Office.css'

const FrontPage = () => {
  return (
    <div className='FrontPage'>

      <div className='FrontPage__card'>
        <div className='FrontPage__head'>
          <p>Your appointment</p>
          <span>
            <svg class="dl-date-header-icon dl-date-header-icon-calendar" fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M17.78 2.22c.62 0 1.15.22 1.58.65.43.43.64.95.64 1.57v13.34c0 .6-.2 1.1-.64 1.55a2.1 2.1 0 01-1.58.67H2.22c-.6 0-1.1-.22-1.55-.67A2.1 2.1 0 010 17.78V4.44c0-.62.22-1.14.67-1.57.44-.43.96-.65 1.55-.65h1.02v2.22H6.8V2.22h6.44v2.22h3.56V2.22h.98M18 18V8H2v10h16M5.78 0v3.78H4.22V0h1.56m10 0v3.78h-1.56V0h1.56"></path>
            </svg> Vendredi 29 juin 2020
            <svg class="dl-date-header-icon dl-date-header-icon-clock" fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
              <path d="M10 0c2.8 0 5 1 7 3s3 4.2 3 7-1 5-3 7-4.2 3-7 3-5-1-7-3-3-4.2-3-7 1-5 3-7 4-3 7-3m0 17.8c2.2 0 4-.7 5.5-2.3a7.8 7.8 0 002.3-5.5c0-2.2-.7-4-2.3-5.5A7.47 7.47 0 0010 2.2c-2 0-4 .7-5.5 2.3A7.47 7.47 0 002.2 10c0 2 .7 4 2.3 5.5a7.8 7.8 0 005.5 2.3m.8-13.5v5.4L14 13l-1 1-3.7-3.7v-6h1.5"></path>
            </svg> 15:30
          </span>
        </div>

        <div className='FrontPage__doctor'>
        <img className='FrontPage__doctor__avatar' src={require('../images/1.png')} alt='doctor avatar' />
          <div className='FrontPage__doctor__info'>
            <h2>Dr James White</h2>
            <p>General practitioner</p>
          </div>
        </div>
      </div>

      <div className='FrontPage__card'>
        <Link to="/waitingroom">
          <button className='FrontPage__enterbutton'>
            <span>
              <svg fill="currentColor" class="dl-margin-r" width="24px" height="24px" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path></svg>
              Join the video consultation
            </span>
          </button>
        </Link>
        <img className='FrontPage__image' src='/images/frontpage.svg' alt='Patient doctor illustration' />
      </div>

    </div >
  )
}

export default FrontPage
