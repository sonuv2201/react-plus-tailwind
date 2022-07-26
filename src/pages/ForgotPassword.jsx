import React from 'react';
import {Link} from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className='relative h-[100vh]'>
        <div className='absolute w-full h-full grid md:grid-cols-2 gap-0'>
            <div className='relative h-full bg-[#ECBC76]'>
                <img src="assets/images/left-image.png" 
                className='md:inline-block hidden animate-[spin_15s_ease-in-out_infinite] absolute left-0 right-0 top-0 bottom-2 m-[auto] translate-x-[-40px]' alt="" width={269} height={256} />
            </div>
            <div className='relative h-full bg-[#eee] md:inline-block hidden'>
                <img src="assets/images/right-image.png" 
                className='animate-[wiggle_5s_ease-in-out_infinite] absolute left-0 right-0 top-0 bottom-2 m-[auto] translate-x-[50px]' alt="" width={450} height={450} />
            </div>
        </div>
        <div className='flex justify-center items-center relative w-full h-[100%] px-[10px] md:px-[0px]'>
            <div className='inline-block w-full rounded-[25px] p-[30px] shadow-black bg-white relative md:w-[539px] md:pt-[52px] md:pl-[44px] md:pr-[36px] md:pb-[51px]'>
                <div className='flex justify-between'>
                    <div>
                        <h4 className='md:text-[17px] text-[12px] color-black'>Welcome to Lorem</h4>
                        <h2 className='md:text-[45px] text-[30px] font-medium'>Forgot Password</h2>
                    </div>
                </div>

                <div className='md:pt-[25px] pt-[20px]'>
                <form>
                    <div className='md:pb-[36px] pb-[24px]'>
                        <p className='md:text-[16px] text-[14px] mb-[13px] text-[#000000a1]'>Enter your username</p>
                        <input type="text" placeholder="Username or email address" className='rounded-[9px] text-[12px] md:text-[16px] px-[15px] py-[11px] w-full md:py-[13px] md:px-[19px]  border-[1px] focus:border-[#4285F4] border-[#ADADAD] focus:outline-none' />
                    </div>
                    
                   <button className='md:pt-[15px] mf:pb-[15px] px-[15px] py-[11px]  text-[#fff] shadow-xl bg-[#E48700] rounded-[10px] w-full '>Reset Password</button>
                    
                   <p className='text-center text-[18px] text-[#AD3113] pt-[30px] pb-[32px]'><Link to="/">Login</Link></p>
                    
 
                    
                </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ForgotPassword;