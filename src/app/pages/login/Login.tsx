import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { InputLogin } from "./components/InputLogin";
import {Link} from 'react-router-dom'

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);
    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const emailLength = useMemo(() => email.length, [email]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

     useEffect (() =>{

        console.clear(); 
        console.log("Email",email)
        console.log("Senha", password)
       
     }, [email ,password]);
    
   
    return (
        <div>
            <form>
                <InputLogin
                    label="Email"
                    value={email}
                    emailLength={emailLength}
                    onChange={setEmail}
                    onEnter={() => inputPasswordRef.current?.focus()}
                />
               <InputLogin
                    label="Senha"
                    type = "password"
                    value={password}
                    onChange={setPassword}
                    ref = {inputPasswordRef}
               />
                <Link to="/entrar" onClick={handleEntrar}>Entrar</Link>
            </form>
        </div>
    );
};
