import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Link } from 'react-router-dom'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
export function NewRoom() {
    const {user} = useContext(AuthContext)
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração perguntas e respostas"></img>
                <strong> Crie salas de Q&amp;A ao-vivo</strong>
                <p> Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    
                    <form action="">
                        <input type="text" placeholder="Nome da sala"/>
                        <Button type="submit">Criar sala</Button>
                        <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui!</Link></p>
                    </form>
                </div>
            </main>
    
        </div>
    )
}