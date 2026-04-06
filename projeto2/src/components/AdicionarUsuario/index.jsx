import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[listaDeUsuarios, setListaDeUsuarios] = useState([])
   
    const handlerAdicionarUsuario = (event) => {
        event.preventDefault()
        if (mome && email) {
            //adicionando novo usuario
            setListaDeUsuarios([...listaDeUsuarios, {nome, email}])
            //definindo od campos como vazio
            setNome('')
            setEmail('')
        }
    }

    return(
        //criando html da página.
        <div className='formulario'>
            <h2>Adicionar usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input
                    type='text'
                    placeholder='Nome'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    />
                <input
                    type='email'
                    placeholder='E-mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button type='submit'>Adicionar</button>
            </form>

            <hr />

            <h2>Usuários Adicionados</h2>
            <ul>
                {/* {usando o map para mostrar cada usuario na lista} */}
                {listaDeUsuarios.map((usuario, index) => (
                    <li key = {index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>


        </div>
    )
}