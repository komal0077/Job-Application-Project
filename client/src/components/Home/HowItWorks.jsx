import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { MdFindInPage } from 'react-icons/md'
import {IoMdSend} from 'react-icons/io'

const HowItWorks = () => {
  return (
    <div className='howitworks'>
      <div className='container'>
      <h3> How JobHere works</h3>
      <div className="banner">
        <div className="card">
<FaUserPlus/>
          <p>Create Account</p>
          <p>As you have filled all the details correctly thus your account has been created.</p>
        </div>

        <div className="card">
<MdFindInPage/>
          <p>Find a job/Post a job</p>
          <p>As you have filled all the details correctly thus your account has been created.</p>
        </div>

        <div className="card">
<IoMdSend/>
          <p>Find a job/Post a job</p>
          <p>As you have filled all the details correctly thus your account has been created.</p>
        </div>


        </div>
      </div>
    </div>
  )
}

export default HowItWorks
