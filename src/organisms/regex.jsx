import React, { useState } from "react";

function Regex (){
const [email, setEmail]= useState('')
const [error, setError]= useState('')

const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

// Ejemplo de correo electronico: participacion.ciudadana@ecopetrol.com.co 
// /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,})(\.[a-z]{2,8})?$/i
const emailRegex= /([a-zA-Z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,})(\.[a-z]{2,8})?$/

if (!emailRegex.test(email)) {
    setError('Dirección de correo electrónico no válida');
    return;
  }

  alert('Formulario enviado correctamente');
};


    return (
        <form onSubmit={handleSubmit}>
            <h1>Regex</h1>
            <label>
                Correo electrónico
                <input type="email" value={email} onChange={handleChange}/>
            </label>
            <button type="submit">Enviar</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default Regex;