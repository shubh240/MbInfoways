import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TOAST_SUCCESS, TOAST_ERROR } from './utils/common.service';
import * as API from './utils/api.service';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [imageName, setImageName] = useState(''); // For displaying the image name
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset, 
    setValue, 
    clearErrors,
  } = useForm();

  console.log(errors);
  
  const onSubmit = async (body) => {
    try {
      body.image = imageName;
      
      const { code, message } = await API.signupApi(body);
      console.log(code,message);
      
      if (code === '1') {
        reset();
        setImageName('')
      }
    } catch (e) {
      console.log(e.message)
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name); // Set the file name for display
      setValue('image', file); // Update the form value
      clearErrors('image'); // Clear the image-related error
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                {...register('name', { required: 'Name is required' })}
                placeholder="Enter your name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="Enter your email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>

            {/* Password Field */}
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  placeholder="Enter your password"
                />
                <span
                  className="input-group-text"
                  style={{ cursor: 'pointer' }}
                  onClick={togglePasswordVisibility}
                >
                  <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                </span>
              </div>
              {errors.password && <div className="text-danger">{errors.password.message}</div>}
            </div>

            {/* Hobby Field */}
            <div className="mb-3">
              <label htmlFor="hobby" className="form-label">Hobby</label>
              <textarea
                className={`form-control ${errors.hobby ? 'is-invalid' : ''}`}
                id="hobby"
                {...register('hobby', { required: 'Hobby is required' })}
                placeholder="Enter your hobby"
              />
              {errors.hobby && <div className="text-danger">{errors.hobby.message}</div>}
            </div>

            {/* Image Upload Field */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Upload Image</label>
              <input
                type="file"
                className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {/* Display the file name */}
              {imageName && <small className="text-muted">Selected File: {imageName}</small>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;








