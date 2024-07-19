import React from 'react';
import './Student.css';
import { useForm } from 'react-hook-form';

import axios from "axios";

function Teacher() {
    const { register, handleSubmit } = useForm();

    
        async function saveData(data) {
        let formData = new FormData();
        formData.append("firstname", data.firstname);
        formData.append("lastname",data.lastname)
        formData.append("email", data.email);
        
        
        formData.append("phonenumber", data.phonenumber);
        formData.append("gender", data.gender);

        formData.append("address", data.city);
        formData.append("subject",data.subject);
        formData.append("experience",data.experience);

        // alert(JSON.stringify(data));


        let options = {
            headers: {
                "content-type": "multi-part/form-data",
            }
        }
        

         await axios.post("http://localhost:4001/saveteacherform", formData, options);

    }
  return (
    <form className='registration-form'onSubmit={handleSubmit((data)=>{
        saveData(data);
    })}>
        <h1>Teacher Registration Form</h1>
        <div className='form-group'>
            <label>
                First Name:
                <input type='text'
                name='firstname'
                required  {...register('firstname', { required: true })} />
            </label>
            
        </div>
        <div className='form-group'>
            <label>
                Last Name:
                <input type='text' name='lastname'required  {...register('lastname', { required: true })}/>

            </label>
        </div>
        <div className='form-group'>
            <label>
                Email:
                <input type='email' name='email' required  {...register('email', { required: true })}/>


            </label>
        </div>

        <div className='form-group'>
            <label>
                Phone Number:
                <input type='tel' name="phonenumber" required  {...register('phonenumber', { required: true })} />
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
                <textarea type='text' name="address" required  {...register('address', { required: true })} ></textarea>

            </label>

        </div>
        <div className='form-group'>
            <label>
                Subject:
                <input type='text' name="subject"  {...register('subject', { required: true })}/>
            </label>
        </div>
        <div className='form-group'>
            <label>
                Experience:
                <input type='tel' name="subject"  {...register('experience', { required: true })}/>
            </label>
        </div>
        <button>Submit</button>

    </form>
  )
}

export default Teacher 