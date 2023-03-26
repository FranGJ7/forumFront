import { useContext } from "react"
import { UserContext } from "../App"

export default function Home (){
    const { user, logout } = useContext(UserContext)

    return(
        <>
        <header>
            <h2>Olá, {user?.name}!</h2>
            <nav>
                <button onClick={logout}>Sair</button>
            </nav>
        </header>
          <h3 className="form-title">Crie um tópico para debater sobre</h3>
          <form className="inline-form">
            <input type="text" name="title" id="title"/>
            <button>Criar</button>
          </form>
        </>
    )
} 