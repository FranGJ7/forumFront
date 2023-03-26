import { FormEvent, useContext } from "react"
import { UserContext } from "../App"

export default function Login() {
  const { login } = useContext(UserContext)

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const formData = new FormData(ev.currentTarget)
    const name = formData.get("name")!.toString()
    login(name)
  }

  return (
    <>
      <h2>Crie o seu usuário para começar</h2>
      <form className="inline-form" onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" required />
        <button>Entrar</button>
      </form>
    </>
  )
}