import { useEffect, useState } from "react";

export const Login = () => {

    const [password, setPassword] = useState ('');
    const [email, setEmail] = useState('');


    useEffect (() =>{

        if (window.confirm("Você é homem?")){
            console.log("Homem")
        }else {
            console.log("Mulher")
        }
     }, []);


     useEffect (() =>{

        console.log(email)
        console.log(password)
       
     }, [email ,password]);
    
    const handleEntrar = () => {

        console.log(email)
        console.log(password)


    }
    return (
        <div>
            <form>

                <label>
                    <span>Email</span>
                    <input value = {email} onChange={e => setEmail(e.target.value)}></input>
                </label>
                 <label>
                    <span>Senha</span>
                    <input value = {password} onChange={e => setPassword(e.target.value)} type="password"></input>
                </label>
                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    );
}