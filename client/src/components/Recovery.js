import React from 'react';
import { Toaster } from 'react-hot-toast';


import styles from '../styles/username.module.css';

function Recovery() {

  


  return (
    <div className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{ width:"50%"}}>

          <div className='title flex flex-col items-center'>
            <h1 className='text-5xl font-bold'>Recovery</h1>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password
            </span>
          </div>

          <form className='py-20'>
            
            <div className='textbox flex flex-col items-center gap-6'>

              <div className='input text-center'>
              <span className='py-4 text-sm text-left text-gray-500'>
                Enter 6 digit OTP sent to your email address
              </span>
              <input type='Text' className={styles.textbox} placeholder='OTP'  />
              </div>

              <button type='submit' className={styles.btn}>Let's go</button>
            
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-500'>Can't get OTP <button className='text-red-500'>Resend</button></span>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Recovery;
