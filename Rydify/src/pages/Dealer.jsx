import {useForm} from "react-hook-form";
import axios from "axios";
import {server_url,getCookie} from "./../utils/script.jsx";
import {toast} from "react-toastify";


function Dealer(){

    const{
        register,
        handleSubmit,
        formState:{Errors},
        reset
    }=useForm();

    async function onSubmit(data){
        console.log(data);
        const url=`${server_url}add-dealer`;
        let response=await axios.post(url,data);
        console.log(response);

        const {error,message}=response.data;
        if(error)
        {
            toast.error(message);
        }
        else{
            toast.success(message);
        }
    }
    return(
        <>
        <div className="container fs-4 m-5 border shadow mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                <h1 className="text-center text-primary fw-bold mb-3" style={{textShadow:'2px 2px 2px black',fontSize:'5rem'}}>Register Dealer</h1>
                <div className="row ">

                    <div className="col-md-6">
                    <label>Name</label>
                    <input type="text" className="form-control p-4 mb-3 fs-4" {...register('name')} />
                    </div> 
                    
                <div className="col-md-6">
                    <label>Email</label>
                    <input type="email" className="form-control p-4 fs-4 mb-3" {...register('email')} />
                </div>

                <div className="col-md-6">
                    <label>Password</label>
                    <input type="password" className="form-control p-4 fs-4 mb-3" {...register('password')} />
                </div>

                <div className="col-md-6">
                    <label>Adhar Card</label>
                    <input type="number" className="form-control p-4 fs-4 mb-3" {...register('adhar')} />
                </div>

                <div className="col-md-6">
                    <label>Pan Card</label>
                    <input type="text" className="form-control p-4 fs-4 mb-3" {...register('pan')} />
                </div>

                <div className="col-md-6">
                    <label>Mobile</label>
                    <input type="tel" className="form-control p-4 fs-4 mb-3" {...register('mobile')} />
                </div>

                <div className="col-md-6">
                    <label>Gender</label>
                    <select  className="form-select p-2 fs-4 mb-3" {...register('gender')}>
                        <option value="">--Select Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>

            

                <div className="col-md-6">
                    <label>City</label>
                    <input type="text" className="form-control p-4 fs-4 mb-3" {...register('city')} />
                </div>

                <div className="col-md-6">
                    <label>Status</label>
                    <input type="text" defaultValue="inactive" className="form-control p-4 fs-4 mb-3" {...register('status')} />
                </div>

                <div className="col-md-6">
                    <label>Photo</label>
                    <input type="file" className="form-control fs-4  mb-3" style={{height:"50px"}} {...register('photo')} />
                </div>

                <div className="col-md-12 col-2">
                    <label>Address</label>
                    <textarea type="address" style={{height:"100px"}} className="form-control p-4 fs-4 mb-3" {...register('address')}></textarea>
                </div>

                </div>
                <button className=" p-2  btn btn-primary btn-lg fs-3 ">Submit</button>
            </form>
        </div>
        </>
    )
}
export default Dealer;     