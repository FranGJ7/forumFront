import { FormEvent, useContext, useEffect, useState } from "react"
import { UserContext } from "../App"
import TopicRoom from "./TopicRoom"
import TopicsList from "./TopicsList"


export type Topic = {
  _id: string,
  title: string
}

export default function Home() {


  const { user, logout } = useContext(UserContext)
  const [topics, setTopics] = useState<Topic[]>([])
  const [openTopic, setOpenTopic] = useState<Topic | null>(null)

   
  async function fetchTopics() {
    const data = await fetch ("http://localhost:3001/topics").then(res => res.json())
    setTopics(data)
  }

  useEffect(()=>{
    fetchTopics()
  },[])


  async function handleSubmit(ev:FormEvent<HTMLFormElement>){
      ev.preventDefault()
      const formData = new FormData(ev.currentTarget)
      const title = formData.get("title")!.toString()
      ev.currentTarget.reset()

      const data = await fetch("http://localhost:3001/topics",{
        method:"POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({ title })
      }).then(res => res.json())

      setTopics([...topics, data])
  }


  if (openTopic) return <TopicRoom topic={openTopic} setOpenTopic={setOpenTopic}/>

  return (
    <>
      <header>
        <h2>Olá, {user?.name}!</h2>
        <nav>
          <button onClick={logout}>Sair</button>
        </nav>
      </header>
      <h3 className="form-title">Crie um tópico para debater sobre</h3>
      <form className="inline-form" onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" required/>
        <button>Criar</button>
      </form>

      <TopicsList 
      topics={topics}
      setTopics={setTopics}
      setOpenTopic={setOpenTopic}
      />
    </>
  )
} 