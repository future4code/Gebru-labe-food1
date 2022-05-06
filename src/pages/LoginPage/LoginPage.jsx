import React from 'react';
import {Loading} from '../../components/Loading/index'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {goToSingUpPage} from '../../routes/Coordinator'
import * as S from './LoginStyle';
import {login } from './user'
import {ButtonsContainer, Form, InputWrapper,ButtonWrapper} from './LoginStyle'

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
      
   

            <h1>Login</h1>
            <Form onSubmit={onClickLogin}>
                <InputWrapper
                    placeholder={"lucy@email.com"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <InputWrapper
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <ButtonsContainer>
                     <ButtonWrapper type={"submit"}>Entrar</ButtonWrapper>
                </ButtonsContainer>

            </Form>


        <S.Text>
          <span>Não possui cadastro? <span onClick={() =>goToSingUpPage(navigate)}><a href=''>Clique aqui</a> </span></span>
         </S.Text>

        </S.PageWrap >
    )
};



