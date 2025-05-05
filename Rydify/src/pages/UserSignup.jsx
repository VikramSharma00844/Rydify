import {useForm} from "react-hook-form";
import axios from "axios";
import {server_url} from "../utils/script.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

function UserSignup(){
const{
    register,
    handleSubmit,
    formState:{errors},
    reset
}=useForm();

const navigate=useNavigate();

async function onSubmit(data){
   try{
    console.log(data);
    let url=server_url+"user-signup";
    let response=await axios.post(url,data);

    let {error,message}=response.data;

    if(error)
    {
        toast.error(message);
    }
    else{
        reset();
        toast.success(message);
        setTimeout(()=>{
            navigate('/user-signin')
        },2000);
    }
   }
   catch(error){

   }

} 



    return(
        <>

        <div className="container m-5 shadow border m-5 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="m-5">
                <h1 className="text-center mb-5 ">User Sign Up</h1>
                <div className="row ">


                    <div className="col-md-6 mb-3 fs-4">
                        <label>Fullname</label>
                        <input type="text" id="fullname" className="form-control p-4 fs-4 " {...register('fullname',{required:true})} />
                    </div>
                    

                    <div className="col-md-6  mb-3 fs-4">
                        <label>Email</label>
                        <input type="email" id="email" className="form-control p-4 fs-4" {...register('email',{required:true})} />
                    </div>

                    <div className="col-md-6  mb-3 fs-4">
                        <label>Mobile</label>
                        <input type="tel" id="mobile" className="form-control p-4 fs-4" {...register('mobile',{required:true})}  />
                    </div>
                    
                    <div className="col-md-6 mb-3 fs-4">
                        <label>Password</label>
                        <input type="password" id="password" className="form-control p-4 fs-4" {...register('password',{required:true})} />
                    </div>
                    

                    <div className="col-md-6 mb-3 fs-4">
                        <label>Confirm Password</label>
                        <input type="password" id="confirm-password" className="form-control p-4 fs-4" {...register('confirm-password',{required:true})}  />
                    </div>
                    

                    <div className="col-md-6 mb-3 fs-4">
                        <label>Date of Birth</label>
                        <input type="date" id="dob" className="form-control p-4 fs-4" {...register('dob',{required:true})} />

                    </div>
                    

                    <div className="col-md-6 mb-3 fs-4">
                        <label>Gender</label>
                        <select  id="gender" className="form-select p-2 fs-4" {...register('gender',{required:true})} >
                        <option value="">--Select Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </div>
                    

                    <div className="col-md-6 mb-3 fs-4">
                        <label>City</label>
                        <input type="text" id="city" className="form-control p-4 fs-4" {...register('city',{required:true})} />
                    </div>
                    

                    <div className="col-md-6 mb-3 fs-4">
                        <label>State</label>
                        <input type="text" id="state" className="form-control p-4 fs-4" {...register('state',{required:true})} />
                    </div>
                

                    <div className="col-md-6 mb-3 fs-4">
                        <label>Zip Code</label>
                        <input type="int" id="zipcode" className="form-control p-4 fs-4" {...register('zipcode',{required:true})} />
                    </div>
                    

                    <div className="col-md-12 mb-3 fs-4">
                        <label>Profile Photo</label>
                        <input type="file" id="profile-photo" className="form-control p-3 fs-4" style={{height:"70px"}} />
                    </div>
                    

                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default UserSignup;