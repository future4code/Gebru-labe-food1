import React, {useState, useEffect} from 'react'
import * as S from './styles'
// import { useNavigate } from 'react-router-dom';
// import {goToLoginPage} from '../../routes/Coordinator'

export const  Loading =() =>{
  // const navigate = useNavigate()

    const [open, setOpen] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
          setOpen(false);
        }, 2000);
        return () => clearTimeout(timer) ;
        
      }, []);

    return(
      
        open &&
   
        <S.PageWrap>
            <img src={require('../../assets/white-logo.png')} alt="logo" />
        </S.PageWrap> 
        
     
     
    )
}


 /* <>{goToLoginPage(navigate) } </> */
