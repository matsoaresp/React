import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const history = useHistory();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const emailLength = useMemo(() => email.length, [email]);

    const handleEntrar = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        if (!email.trim() || !password.trim()) {
            setError("Preencha todos os campos.");
            return;
        }

        const emailValido = /\S+@\S+\.\S+/.test(email);
        if (!emailValido) {
            setError("Digite um e-mail válido.");
            return;
        }

        if (password.length < 4) {
            setError("A senha deve ter mais de 4 caracteres.");
            return;
        }

        setError("");
        history.push("/entrar");
    },
    [email, password]
);


    return (
        <section className="flex justify-center items-center h-screen">
            <form 
                className="flex flex-col shadow-xl shadow-black/20 p-4 rounded border-2 w-80"
                onSubmit={handleEntrar}
            >

                {/* ALERTA */}
                {error && (
                    <div
                        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-4"
                        role="alert"
                    >
                        <p className="font-bold">Atenção</p>
                        <p>{error}</p>
                    </div>
                )}

                <InputLogin
                    label="Email"
                    value={email}
                    emailLength={emailLength}
                    onChange={setEmail}
                    onEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    ref={inputPasswordRef}
                />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-4"
                >
                    Entrar
                </button>

            </form>
        </section>
    );
};
