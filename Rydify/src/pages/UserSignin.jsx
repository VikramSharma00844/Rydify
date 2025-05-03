import axios from "axios";
import {server_url} from "../utils/script.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify"

function UserSignin(){
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
       let url=server_url+"user-signin";
        let response=await axios.post(url,data);

        let {error,message}=response.data;
        if(error){
          toast.error(message);
        }
        else{
          toast.success(message)
          setTimeout(()=>{
            navigate('/user/home');
          },2000);
        }
      }
      catch(error){
        toast.error(message);
      }
    }
    return(
        <>
            
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }} >
          <form onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%", maxWidth: "600px", minHeight: "600px" }}>

            <div className="rounded shadow border p-5 h-100 d-flex flex-column justify-content-between">
              <h1 className="text-center mb-4" style={{fontSize:"3.7rem",textShadow:"2px 2px 8px red"}}>Sign In</h1>

              <div className="mb-3">
                <label  className="fs-2">Email</label>
                <input type="email" className="form-control p-4 fs-3" id="email"  {...register('email',{required:true})} />
              </div>

              <div className="mb-4">
                <label  className=" fs-2">Password</label>
                <input type="password" className="form-control p-4 fs-3" id="password"  {...register('password',{required:true})} />
              </div>

              <div className="text-center mt-4">
                <button  className="btn btn-danger px-2 fs-2">Sign In</button>
              </div>
            </div>
          </form>
        </div>
        </>
    )
}
export default UserSignin;