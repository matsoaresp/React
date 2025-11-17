import { useCallback, useMemo, useRef, useState } from "react";

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);
    
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const emailLength = useMemo(() => {
        return email.length;
    }, [email]);

    const handleEntrar = useCallback(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    return (
        <div>
            <form>
                <label>
                    <p>Quantidade de caracteres: {emailLength}</p>
                    <span>Email</span>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                e.preventDefault(); 
                                inputPasswordRef.current?.focus();
                            }
                        }}
                    />
                </label>

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
