import React, { useEffect } from "react";
import { useState } from "react";
import { postApi } from "./Api";

const Forms = () => {
    const  [formData, setFormData] = useState({
        userId: '',
        id: '',
        title: '',
        body: '',
   });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
        userId: '',
        id: '',
        title: '',
        body: '',
        });
        console.log(formData);
        try{
            postApi({...formData}).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.error(error);
            });

        }catch(error){
            console.error(error);
        }
    };
    
    const onChangeHandler = (event) =>{
        setFormData({...formData, [event.target.name]: event.target.value});
    }
   useEffect(()=>{
    postApi()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
   }, [])
 
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                userId:
                <input type="number" name="userId"  onChange={onChangeHandler} value={formData.userId} />
            </label>
            <label>
                id:
                <input type="number" name="id"  onChange={onChangeHandler} value={formData.id} />
            </label>
            <label>
                Title:
                <input type="text" name="title"  onChange={onChangeHandler} value={formData.title} />
            </label>
            <label>
                body:
                <input type="text" name="body"  onChange={onChangeHandler} value={formData.body} />
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Forms;
