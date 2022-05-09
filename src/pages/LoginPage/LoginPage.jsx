import React from 'react';
import {Loading} from '../../components/Loading/index'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {goToSingUpPage} from '../../routes/Coordinator'
import * as S from './LoginStyle';
import {login } from './user'
import {ButtonsContainer, Form,ButtonWrapper} from './LoginStyle'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginPage = () => {
      const navigate = useNavigate()
    const { form, onChange} = useForm({ email: "", password: "" })

    const onClickLogin = (e) => {
        e.preventDefault()
        login(form, navigate)
    }





    return (
        <S.PageWrap >
            <Loading/>
  
           <S.LogoWrapper>
             <img src={require('../../assets/logo-future-eats-invert.png')} alt='Logo'/>
           </S.LogoWrapper>
      
   

            <h2>Login</h2>
            <Form onSubmit={onClickLogin}>
                <TextField fullWidth label={"E-mail"} id="emai"
                    placeholder={"lucy@email.com"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    variant={"outlined"}                   
                    required
                />
                <TextField fullWidth  label={"senha"} id="Senha"
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}                   
                    value={form.password}
                    onChange={onChange}
                    variant={"outlined"}                   
                    required
                />
                <ButtonsContainer>
                     <ButtonWrapper type={"submit"}>Entrar</ButtonWrapper>
                </ButtonsContainer>

            </Form>


        <S.Text>
          <span >Não possui cadastro ? <Button onClick={() =>goToSingUpPage(navigate)} variant="text">Clique aqui</Button> </span>
          
         </S.Text>

        </S.PageWrap >
    )
};



