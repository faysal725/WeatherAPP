import React, { useState } from 'react';
import './Authentication.css'
import axios from 'axios';
import { useForm } from "react-hook-form";

const Authentication = () => {

        
        const [loggedInUser, setLoggedInUser] = useState()
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data =>{
            console.log(data)
            let user = {
                email: data.email,
                data: data.password
            }

            createUser(user)
            // getUsers()
        };


        function getUsers() {
            axios.get(`https://reqres.in/api/users?page=2`)
            .then(data => {
                console.log(data.data.data)
      })
        }

        function createUser(user) {
            axios.post(`https://reqres.in/api/users`, { user })
            .then(res => {
              console.log(res.data);
              console.log(res.data.id, res.data.user.email);
              
              setLoggedInUser({id: res.data.id, email: res.data.user.email})
            })
        }
        console.log(loggedInUser)

    return (
        <div className="pt-5">
            <h1>authenticate yourself</h1>

        {
            !loggedInUser ? 
            <>
            <div className="pt-3 text-white">
            <h3>SIGN UP</h3>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
            <label></label>
            <input className="auth_Input" {...register("name")} placeholder="Your Name"/>
            <br /><br />
            <input className="auth_Input" {...register("email", { required: true })} placeholder="Your Email"/>
            {errors.exampleRequired && <span>This field is required</span>}
            <br /><br />
            <input className="auth_Input" {...register("password", { required: true })} placeholder="password"/>
            <br /><br />
            <input className="auth_submit" type="submit" />
            </form>
            </div>
            </>:<>
            <div className="pt-3">
                <h2 className=" text-danger"><b>Successfully Registered</b></h2>
            </div>
            </>
        }

        </div>
    );
};

export default Authentication;