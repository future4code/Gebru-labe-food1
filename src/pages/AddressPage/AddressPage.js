import React from "react"
import * as S from './SingUpStyle';
import {ButtonsContainer, Form, InputWrapper,ButtonWrapper} from './AdressStyle'
import useUnprotectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {addAdress } from './user'


export const AddressPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
   
    const { form, onChange } = useForm({
        street: "", 
        number: "",
        neighbourhood: "", 
        city: "",
        state: "",
        complement: ""
    })

    const onClickLogin = (e) => {
        e.preventDefault()
        addAdress(form, navigate)
    }

  
    return (
        <S.PageWrap>
         
            <p>Meu endereço</p>

            <Form onSubmit={onClickLogin}>
                 <InputWrapper
                    placeholder={"Rua / Av."}
                    type={"text"}
                    name={"rua"}
                    label="Logradouro"
                    value={form.street}
                    onChange={onChange}
                    pattern= {"[a-zA-Zà-úÀ-ú ]{3,}"}
                    title= "Logradouro aceita no mínimo 3 caracteres" 
                    required
                />
                 <InputWrapper
                    label= "Numero"
                    placeholder={"número"}
                    type={"number"}
                    name={"numero"}
                    value={form.number}
                    onChange={onChange}
                    required
                />
              
                   <InputWrapper
                    label="Bairro"
                    placeholder="Bairro"
                    type="text"
                    name="bairro"
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
                                    
                   />

                  <InputWrapper
                    label="Cidade"
                    placeholder={"cidade"}
                    type="text"
                    name={"cidade"}
                    value={form.city}
                    onChange={onChange}
                    required
                
                />

                <InputWrapper
                  label="Estado"
                  placeholder={"Estado"}
                  type="text"
                  name={"estado"}
                  value={form.state}
                  onChange={onChange}
                  required
                />

                <InputWrapper
                    label="Complemento"
                    placeholder={"Apto./Bloco/casa"}
                    type={"text"}
                    name={"complemento"}
                    value={form.complement}
                    onChange={onChange}
                    required
                />

                
                         
                   <ButtonsContainer>
                     <ButtonWrapper type={"submit"}>Salvar endereço</ButtonWrapper>
                  </ButtonsContainer>
            
            </Form>
                                          
        </S.PageWrap>
    )
};










