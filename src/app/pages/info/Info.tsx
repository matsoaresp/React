import { useState, useRef, useEffect, useCallback } from "react"
import { InfoUser } from "./components/InfoUser";
import { useHistory } from "react-router-dom";



export const Info = () => {


    const inputCargoRef = useRef<HTMLInputElement>(null);
    const inputTelefoneRef = useRef<HTMLInputElement>(null);
    const inputCidadeRef = useRef<HTMLInputElement>(null);
    

    const history = useHistory();
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [telefone, setTelefone] = useState ('');
    const [cidade, setCidade] = useState('');

   const handleConfirm = useCallback(() => {
        history.push('/exibir', {
            name,
            position,
            telefone,
            cidade
        });
    }, [name, position, telefone, cidade, history]);


    useEffect (() => {

    }, []);

    return (
        <section className="flex justify-center items-center h-screen gap-4">
            <form className="flex flex-col shadow-xl shadow-black/20 p-4 rounded border-2">
                <InfoUser
                label = "Nome"
                value={name}
                onChange={setName}
                onEnter={() => inputCargoRef.current?.focus()}
                />


                <InfoUser
                label = "Cargo"
                value={position}
                onChange={setPosition}
                onEnter={() => inputTelefoneRef.current?.focus()}
                ref={inputCargoRef}
                />

                <InfoUser
                label = "Telefone"
                type = "number"
                value={telefone}
                onChange={setTelefone}
                onEnter={() => inputCidadeRef.current?.focus()}
                ref={inputTelefoneRef}
                />

                <InfoUser
                label = "Cidade"
                value={cidade}
                onChange={setCidade}
                ref = {inputCidadeRef}
                />
                <button  className='bg-blue-500 text-white px-4 py-2 rounded mt-6 ' type="button" onClick = {handleConfirm}>Confirmar</button>
            </form>
        </section>
    )
};