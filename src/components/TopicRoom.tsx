import { Dispatch, SetStateAction } from "react"
import { Topic } from "./Home"

type TopicRoomProps = {
  topic: Topic
  setOpenTopic: Dispatch<SetStateAction<Topic | null>>
}

export default function TopicRoom({ topic, setOpenTopic }: TopicRoomProps) {
  return (
    <main className="room">
      <header>
        <h2>{topic.title}</h2>
        <button onClick={() => setOpenTopic(null)}>Voltar</button>
      </header>

      <section className="messages">
      </section>

      <form className="send-message-form inline-form">
        <input type="text" name="message" id="message" />
        <button>Enviar</button>
      </form>
    </main>
  )
}