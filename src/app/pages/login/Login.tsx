import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { InputLogin } from "./components/inputLogin";

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
        <div>
            <form>
                <InputLogin
                    label="Email"
                    value={email}
                    emailLength={emailLength}
                    onChange={setEmail}
                    onEnter={() => inputPasswordRef.current?.focus()}
                />


                <label>
                    <span>Senha</span>
                    <input
                        ref={inputPasswordRef}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                handleEntrar();
                            }
                        }}
                    />
                </label>

                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
        </div>
    );
};
