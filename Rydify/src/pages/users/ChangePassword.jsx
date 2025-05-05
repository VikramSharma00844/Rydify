import {useForm} from "react-hook-form";
import axios from "axios";
import {server_url} from "../../utils/script.jsx";

function ChangePassword(){
    const{
        register,
        handleSubmit,
        formState:{errors},
        reset
    }=useForm();

    async function onSubmit(data){
        console.log(data);
        const url=`${server_url}user-change-password`;
        let response=await axios.post(url,data);
        console.log(response.data);
    }
    return(
        <>
        <div className="container shadow border m-5 mx-auto" >
            <h1 className="text-center">Change Password Form</h1>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <label className="fs-4">Current Password</label>
                    <input type="password" className="form-control mb-3 fs-4 p-4" {...register('current-password')}></input>

                    <label className="fs-4">New Password</label>
                    <input type="password" className="form-control mb-3 fs-4 p-4" {...register('new-password')}></input>

                    <label className="fs-4">Confirm Password</label>
                    <input type="password" className="form-control mb-3 fs-4 p-4" {...register('confirm-password')}></input>

                    <button className="btn btn-primary fs-4">Change Password</button>

                </div>
            </form>
        </div>
        </>
    )
}
export default ChangePassword;