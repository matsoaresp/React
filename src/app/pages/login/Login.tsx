import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { InputLogin } from "./components/InputLogin";

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

        console.log(email)
        console.log(password)
       
     }, [email ,password]);
    
   
    return (
        <section className="flex justify-center items-center h-screen">
            <form className="flex flex-col border border-blue-500 p-4 rounded border-4">
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
                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </section>
    );
};
