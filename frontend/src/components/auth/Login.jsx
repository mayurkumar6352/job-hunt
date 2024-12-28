import React from 'react'
import Navbar from '../ui/shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

  const [input, setInput] = useState({
    email:"",
    password:"",
    role:""
  })

  const changeEventHandeler = (e) => {
    setInput({...input, [e.target.name]:e.target.value})
  }
  
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);

  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Sign In</h1>
          <div className='my-2'>
            <Label>Email</Label>
            <Input type="email" value={input.email} name='email' onChange={changeEventHandeler} placeholder="Enter your email ex: mayur@gmail.com" />
          </div>
          <div className='my-2'>
            <Label>Password</Label>
            <Input type="password" value={input.password} name='password' onChange={changeEventHandeler} placeholder="Enter your password" />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='student' value='student' checked={input.role=='student'} onChange={changeEventHandeler} className='cursor-pointer' />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input type='radio' name='role' checked={input.role=='student'} onChange={changeEventHandeler}  value='recruiter' className='cursor-pointer' />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type='submit' className='w-full my-4 bg-black text-white hover:bg-black hover:text-white'>Sign In</Button>
          <span className='flex gap-1 justify-center'>Don't have an account? <Link to='/login' className='text-blue-600'>Sign Up</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login