import './style.css'

function Footer() {
    return (
        <footer className='footer'>
            <p>
                {/* {sempre mostra o ano atualizado} */}
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br />
                SENAI - Bahia
            </p>
        </footer>
    )
}