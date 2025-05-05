import axios from "axios";
import {useForm} from "react-hook-form";
import {server_url,getCookie} from "../utils/script.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
function AdminLogin(){
    const{
        register,
        handleSubmit,
        formState:{errors},
        reset
    }=useForm();

    const navigate=useNavigate();

    async function onSubmit(data){
         console.log(data);
         let url=server_url+"admin-login"
         let response=await axios.post(url,data);
       
        
        const {error,message,token}=response.data;
        //document.cookie=`AdminToken=${token}; path=/ max-a`

        let duration=86000;
        document.cookie=`AdminToken=${token}; path=/ ; max-age=${duration}`

         console.log(token);
        if(error)
        {
           toast.error(message);
        }
        else{
            toast.success(message)
            setTimeout(()=>{
                navigate('/admin/admin-home')
            },2000);
        }
    }

    return(
        <>
        
        <div className="container  shadow m-5 p-2 mx-auto " style={{width:"600px"}}>
            <form onSubmit={handleSubmit(onSubmit)} className="p-3">
                <h1 className="text-center" style={{fontSize:"3.7rem",textShadow:"2px 2px 5px red"}}>Admin Login</h1>
            <div className="row">
                    <div className="col-12 mb-3">
                        <label className="fs-2">Email</label>
                        <input type="email" id="email" className="form-control fs-3 p-4" {...register('email')} />
                    </div>

                    <div className="col-12 mb-3">
                        <label className="fs-2">Password</label>
                        <input type="password" id="password" className="form-control fs-3 p-4" {...register('password')} />
                    </div>

                </div>
                <div className="text-center">
                <button className="btn btn-primary p-2 fs-3">Submit</button>

                </div>
            </form>
        </div>


        </>
    )
}
export default AdminLogin ;