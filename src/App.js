import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import FormLogo from "./asset/form-logo.png";
import "./App.css";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  emmail: yup.string().email().required("Email é obrigatório"),
  password: yup.string().min(6, "no mínimo 6 caracteres").required("Senha é obrigatória"),
  confirmpassword: yup.string().required("Senha tem que estar igual").oneOf([yup.ref("password")]),
}).required();

function App() {
  const {
    register,
    handleSubmit,
    watch,
   formState: { errors } }
   = useForm({
    resolver: yupResolver(schema)
  });


function onSubmit(userData){
  console.log(userData)
}



  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <img src={FormLogo}/>

    <label>
      Nome:
      <input type="text" {...register("name", { required: true })}/>
      {errors.name && <span>{errors.name?.message}</span>}
    </label>

    <label>
      Email:
      <input type="email" {...register("emmail")}/>
      {errors.emmail && <span>{errors.emmail?.message}</span>}
    </label>

    <label>
      Senha:
      <input type="password" {...register("password")}/>
      {errors.password && <span>{errors.password?.message}</span>}
    </label>

    <label>
      Confirmar senha:
      <input type="password" {...register("confirmPassword")}/>
      {errors.confirmpassword && <span>{errors.confirmpassword?.message}</span>}
    </label>

    <button type="submit">Cadastrar-se</button>

  </form>
  );
}

export default App;
