import React from 'react';
import './Student.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Student() {
    const { register, handleSubmit } = useForm();

    
        async function saveData(data) {
        let formData = new FormData();
        formData.append("firstname", data.firstname);
        formData.append("lastname",data.lastname)
        formData.append("email", data.email);
        

        formData.append("phonenumber", data.phonenumber);

        formData.append("gender", data.gender);
        formData.append("adderss",data.adderss);

        // alert(JSON.stringify(data));


        let options = {
            headers: {
                "content-type": "multi-part/form-data",
            }
        }
        

         await axios.post("http://localhost:4001/savestudentform", formData, options);

    }

  return (
    <form className='registration-form'  onSubmit={handleSubmit((data)=>{
        saveData(data);
    })}>
        <h1>Student Registration Form</h1>
        <div className='form-group'>
            <label>
                First Name:
                <input type='text'
                name='firstname'
                {...register('firstname', { required: true })}
                required />
            </label>
            
        </div>
        <div className='form-group'>
            <label>
                Last Name:
                <input type='text' name='lastname'required 
                {...register('lastname', { required: true })}
                />

            </label>
        </div>
        <div className='form-group'>
            <label>
                Email:
                <input type='email' name='email' required
                {...register('email', { required: true })}
                />


            </label>
        </div>

        <div className='form-group'>
            <label>
                Phone Number:
                <input type='tel' name="phonenumber"
                {...register('phonenumber', { required: true })}
                required />
            </label>
        </div>
        <div className="form-group">
        <label>
          Gender:
          <select
            name="gender"
            
            required
            {...register('gender', { required: true })}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
        
        <div className='form-group'>
            <label>
                Adderss:
                <textarea type='text' name="adderss" required
                {...register('adderss', { required: true })}
                ></textarea>

            </label>

        </div>
        <button>Submit</button>

    </form>
  )
}

export default Student