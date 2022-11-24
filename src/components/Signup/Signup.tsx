import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { LOGIN } from '../../utils/routes'

function Signup() {

  const [formValues, setFormValues] = useState({name: '', email: '', password: '', authCode:''}) 

  const onChange = (e:React.KeyboardEvent) => {
    e.persist();
    setFormValues(() => ({...formValues}))
  }

  const submitHandler = (e:React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <section className='background-image h-screen bg-blueishGreen flex items-center justify-center'>
      <div className='w-[80%] md:w-[60%] lg:w-[30%] bg-darkBackground rounded-lg py-5'>
        <div>
          <h1 className='text-lg md:text-3xl text-center py-6 text-white  font-bold uppercase'>Create a free account</h1>
          {/* form */}
          <div className='py-6 px-10'>
            <form onSubmit={submitHandler} className='flex flex-col items-center'>
              {/* name */}
              <div className="relative z-0 mb-8 w-full">
                <input type="text" name="name" className="@apply floating-input peer" placeholder=" " />
                <label className="@apply floating-label">Full Name</label>
              </div>
              {/* email */}
              <div className="relative z-0 mb-8 w-full">
                <input type="text" name="email" className="@apply floating-input peer" placeholder=" " />
                <label className="@apply floating-label">Email</label>
              </div>
              {/* password */}
              <div className="relative z-0 mb-8 w-full">
                <input type="password" name="password" className="@apply floating-input peer" placeholder=" " />
                <label className="@apply floating-label">Password</label>
              </div>
              {/* submit button */}
              <button type="submit" className="button-styles mt-6 w-full bg-orange flex justify-center transition uppercase font-bold group">
                  Sign UP
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              <p className='mt-3 text-sm text-white'>
                Already have an account? 
                <Link to={LOGIN}>
                  <span className='underline text-orange'> Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup