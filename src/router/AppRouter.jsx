import React from 'react'
import { Navbar } from '../Navbar'
import { Homepage } from '../home/Homepage'
import { Loginpage } from '../login/Loginpage'
import { Registerpage } from '../register/Registerpage'
import { Contactpage } from '../contact/Contactpage'
import { Mypasses } from '../mypasses/Mypasses'
import { Route, Routes } from 'react-router-dom'
import { Rutaqr } from '../rutaqr/Rutaqr';
import { Pago } from '../Pagos/Pago';
import { PagoExitoso } from '../Pagos/pagoExitoso';
import { PagoFallido } from '../Pagos/pagoFallido';

export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element= {<Homepage/>} />
            <Route path='login' element= {<Loginpage/>} />
            <Route path='register' element= {<Registerpage/>} />
            <Route path='contact' element= {<Contactpage/>} />
            <Route path='mypasses' element= {<Mypasses/>} />
            <Route path='pago' element= {<Pago/>} />
            <Route path=':folio' element={<Rutaqr />} />
            <Route path='PagoExitoso' element={<PagoExitoso />} />
            <Route path='PagoFallido' element={<PagoFallido />} />

        </Routes>
    </>
  )
}
