import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';





function Authentication() {


    const [account, setAccount] = useState('login')
    const[formdata,setFormdata]=useState({})
    const[errormessage,setErrorMessage]=useState()

    const accountLogin=()=>{
      account === 'login' ? setAccount('signup') : setAccount('login')
    }

    const handleChange=(e)=>{
            setFormdata({...formdata,[e.target.id]:e.target.value})
    }
    console.log(formdata);

    // const handleSubmit= async(e)=>{
    //   e.preventDefault()
    //   if(!formdata.username||!formdata.emil||!formdata.password){
    //    return setErrorMessage('Please fill out all messages')
    //   }
    //   try{
    //    const res=await fetch('/api/auth/signup',{
    //      method:'POST',
    //      headers:{'content-Type':'application/json'},
    //      body:JSON.stringify(formdata),
    //    })
    //    const data=await res.json();
    //    if(data.success===false){
    //      return setErrorMessage(data.messege)
    //    }
    //    if(res.ok){
    //      navigate('/')
    //    }
    //  }catch(error){
 
    //  }
    //   }
 
 
 
    

    

  return (
    <>
   <div className='container'>
    <div className='row d-flex justify-content center align-items-center mt-5 '>
      <div className='col-md-6'>
      <img className='' src="https://cdn-icons-png.flaticon.com/512/60/60736.png" alt="" />

      </div>

      {
        account==='login'?

        <div className='col-md-6'>
        <Form className='border border-3 shadow rounded p-5 bg-light me-5 '>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link onClick={accountLogin} style={{'textDecoration':'none' ,'cursor':'pointer'}}  className='text-primary'>Create an account</Link>
  
        <Button style={{ marginLeft: "380px" }} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </div>

        :
        <div className='col-md-6'>

        <Form  className='border border-3 shadow rounded p-5 bg-light me-5 '>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={handleChange} id='username'  type="text" placeholder="Username" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={handleChange} id='email'  type="email" placeholder="user@company.com" />
        </Form.Group>
  
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleChange} id='password'  type="password" placeholder="Password" />
        </Form.Group>
        <Link onClick={accountLogin} style={{'textDecoration':'none' ,'cursor':'pointer'}} className='text-primary'>Already have an account?</Link>
        <Button  style={{ marginLeft: "380px" }} variant="primary" type="submit">
          Signup
        </Button>
      </Form>
      </div>

  
  
      }

 

             
    </div>
   </div>


    </>

    
  )
}

export default Authentication