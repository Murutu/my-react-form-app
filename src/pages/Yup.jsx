import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required()
}).required();

function Yup() {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        {...register("firstName")}
        placeholder="first name"
        />
        <p>{errors.firstName?.message}</p>

        <input 
        {...register("age")}
        placeholder="age"
        />
        <p>{errors.age?.message}</p>

        <input type="submit"/>
    </form>
    )
}

export default Yup