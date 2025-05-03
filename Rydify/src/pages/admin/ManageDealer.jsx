import axios from "axios";
import {server_url} from "../../utils/script.jsx";
import { useState,useEffect } from "react";
import {toast} from "react-toastify";

import React from 'react';
import { Popconfirm } from 'antd';
const confirm = e => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = e => {
//   console.log(e);
//   message.error('Click on No');
};

function ManageDealer(){

    const [contacts,setContacts]=useState([]);
    async function readAllDealers(){
        let url=`${server_url}fetch-dealer`;
        let response=await axios(url);

        const{error,message,records}=response.data;
        console.log(records);
        if(error){
            toast.error(message);
        }
        else{
            setContacts(records);
        }
    }
    useEffect(()=>{
        readAllDealers();
    },[]);
    async function deleteDealer(id){
        console.log(id);
        let url=`${server_url}delete-dealer/${id}`;
        let response=await axios.delete(url);

        const{error,message}=response.data;
        if(error)
        {
            toast.error(message);
        }
        else{
            readAllDealers();
            toast.success(message);
        }
    }

   
    return(
        <>
            <table className="table table-dark m-3">
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(x=>
                        <tr key={x.id}>
                            <td><button className="btn btn-primary">Edit</button></td>
                            <td>
                                <Popconfirm
                                    title="Delete the task"
                                    description="Are you sure to delete this task?"
                                    onConfirm={() => deleteDealer(x.id)}
                                    onCancel={cancel}
                                    okText="Delete"
                                    cancelText="Cancel"
                                >
                                    <button className="btn btn-danger">Delete</button>
                                </Popconfirm>
                                
                            </td>
                            <td>{x.name}</td>
                            <td>{x.status}</td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>

        </>
    )
}
export default ManageDealer;