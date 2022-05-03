import React,{useState} from "react"
import * as S from './SingUpStyle';
import {ButtonsContainer, Form, InputWrapper,ButtonWrapper} from './SingUpStyle'
import useUnprotectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {signup } from './user'


export const SingUpPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const {hidenPassword,setHidenPassword}=useState(false)
    const {hidenConfirm,setHidenConfirm}=useState(false)
    const { form, onChange } = useForm({name: "", email: "",cpf: "", password: "", confirm: ""})

    const onClickLogin = (e) => {
        e.preventDefault()
        const { name, email, cpf, password, confirm } =form
        const signupData = {
          name: name,
          email: email,
          cpf: cpf,
          password: password
        }
        if (password !== confirm) {
            alert('Senhas não conferem')
          } else {
        signup(signupData, navigate)
        }
    }

    const goHidenPassword = () => {
        setHidenPassword({
          hidenPassword: !hidenPassword
        })
      }
    
     const goHidenConfirm = () => {
        setHidenConfirm({
          hidenConfirm: !hidenConfirm
        })
      }



    return (
        <S.PageWrap>
              <S.LogoWrapper>
             <img src={require('../../assets/logo-future-eats-invert.png')} alt='Logo'/>
           </S.LogoWrapper>
            <p>Cadastrar</p>

            <Form onSubmit={onClickLogin}>
            <InputWrapper
                    placeholder={"Nome"}
                    type={"name"}
                    name={"nome"}
                    value={form.name}
                    onChange={onChange}
                    pattern= "[a-zA-Zà-úÀ-ú ]{3,}"
                    required
                />
                   <InputWrapper
                    placeholder={"email@email.com"}
                    type={"email"}
                    name={"e-mail"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                   <InputWrapper
                    placeholder={"000.000.000-00"}
                    type={"text"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    pattern= "[0-9]{3,}[.]{1,}[0-9]{3,}[.]{1,}[0-9]{3,}[-]{1,}[0-9]{2,}"
                    required
                />
                   <InputWrapper
                    placeholder={"Mínimo 6 caracteres"}
                    type={hidenPassword ? 'text' : 'password'}
                    name={"senha"}
                    value={form.password}
                    onChange={onChange}
                    pattern= ".{6,}"
                    required
                    endAdornment= {<input position="end">
                    <img
                      onClick={goHidenPassword}
                      src={hidenPassword ? require('../../assets/olho.png') : require('../../assets/senha.png')} 
                      alt='password'/>
                  </input>}
                />
                  <InputWrapper
                    placeholder={"Mínimo 6 caracteres"}
                    type={hidenConfirm ? 'text' : 'password'}
                    name={"confirm"}
                    value={form.confirm}
                    onChange={onChange}
                    pattern= ".{6,}"
                    required
                    endAdornment= {<input position="end">
                    <img
                      onClick={goHidenConfirm}
                      src={hidenConfirm ? require('../../assets/olho.png') : require('../../assets/senha.png')} 
                      alt='password'/>
                  </input>}
                />
           
                   <ButtonsContainer>
                     <ButtonWrapper type={"submit"}>Criar conta</ButtonWrapper>
                  </ButtonsContainer>
            

            </Form>
        </S.PageWrap>
    )
};









