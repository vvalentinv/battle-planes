import { useState } from 'react';
const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Register</h4>
        {/* username */}
        <div className='form-row'>
          <label htmlFor='username' className='form-label'>
            username
          </label>
          <input
            type='text'
            className='form-input'
            id='username'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
