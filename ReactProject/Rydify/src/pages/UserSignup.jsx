import {useForm} from "react-hook-form";
import axios from "axios";
import {server_url} from "../utils/script.jsx";

function UserSignup(){
const{
    register,
    handleSubmit,
    formState:{errors},
    reset
}=useForm();

async function onSubmit(data){
    console.log(data);
    let url=server_url+"user-signup";
    let response=await axios.post(url,data);

    let {error,message}=response.data;

    if(error)
    {
        console.log("error");
    }
    else{
        console.log("Record inserted")
    }

} 



    return(
        <>

        <div className="container m-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center mb-5">User Sign Up</h1>
                <div className="row mt-3 d-flex justify-content-center align-items-center">


                    <div className="col-md-4 mb-3">
                        <label>Fullname</label>
                    </div>
                    <div className="col-md-8  mb-3">
                        <input type="text" id="fullname" className="form-control" {...register('fullname',{required:true})} />
                    </div>

                    <div className="col-md-4  mb-3">
                        <label>Email</label>
                    </div>
                    <div className="col-md-8  mb-3">
                        <input type="email" id="email" className="form-control" {...register('email',{required:true})} />
                    </div>

                    <div className="col-md-4  mb-3">
                        <label>Mobile</label>
                    </div>
                    <div className="col-md-8  mb-3">
                        <input type="tel" id="mobile" className="form-control" {...register('mobile',{required:true})}  />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Password</label>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input type="password" id="password" className="form-control" {...register('password',{required:true})} />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Confirm Password</label>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input type="password" id="confirm-password" className="form-control" {...register('confirm-password',{required:true})}  />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Date of Birth</label>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input type="date" id="dob" className="form-control" {...register('dob',{required:true})} />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Gender</label>
                    </div>
                    <div className="col-md-8 mb-3">
                    <select  id="gender" classname="form-control" {...register('gender',{required:true})} >
                        <option value="">--Select Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>City</label>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input type="text" id="city" className="form-control" {...register('city',{required:true})} />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>State</label>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input type="text" id="state" className="form-control" {...register('state',{required:true})} />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Zip Code</label>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input type="int" id="zipcode" className="form-control" {...register('zipcode',{required:true})} />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Profile Photo</label>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input type="file" id="profile-photo" className="form-control"  />
                    </div>

                    <button>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default UserSignup;