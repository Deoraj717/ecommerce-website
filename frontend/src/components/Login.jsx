import React from 'react'

function Login() {

  const [formValues,setFormValues] = React.useState({
    username :'',
    password :''
  })

  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className='login-form'>
        <form onSubmit = {handleSubmit}>
            <div className='input-field'>
              <label htmlFor="username">
                <input type="text" id="name" placeholder = "UserName" value={formValues.name} onChange={handleInputChange} />
              </label>
            </div>
            <div className='input-field'>
              <label htmlFor="password">
                <input type="text" id="password" placeholder = "Password" value={formValues.password} onChange={handleInputChange} />
              </label>
            </div>
            <div>
              forgot password
            </div>
            <div className='login-button'>
              <button type="submit">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login