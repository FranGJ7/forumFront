import { createContext, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'

export type User={
   _id:string
   name: string
}

type UserContextData = {
    user: User | null
    login: (name: string) => Promise<void>
    logout: () => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)


function App() {
  const [user, setUser] = useState<User | null>(null)


  async function login(name:string) {
       const data = await fetch("http://localhost:3001/users",{
        method:"POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({ name })
       }).then(res => res.json())

       setUser(data)
  }


  function logout(){
    setUser(null)
  }



  return (
    <div className="App">
       <h1>WebSocket</h1>
       <UserContext.Provider value={{user, login, logout}}> 
            {user ? <Home/> : <Login/>}
        </UserContext.Provider>
    </div>
  )
}


export default App