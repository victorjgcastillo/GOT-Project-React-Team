import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { MyContext } from '../../context/MyContext';
import "./Search.scss";

export default function Search({ onSubmit }) {

    const { register, handleSubmit } = useForm();
    const {t} = useContext(MyContext)


    const submit = ({ text }) => {
        console.log(text)
        onSubmit(text);
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <input placeholder={t("buscar")} type="text" {...register("text")} className='form--buscador'></input>
    </form>
  )
}

