import { useLocation } from "react-router-dom";

interface UserData {
  name: string;
  position: string;
  telefone: string;
  cidade: string;
}

export const ExibirDados = () => {
  const location = useLocation();
  const state = location.state as UserData | undefined;

  const { name, position, telefone, cidade } = state || {};

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="shadow-xl shadow-black/20 p-6 border-2 rounded w-80">
        <h2 className="text-xl font-bold mb-4">Informações do Usuário</h2>

        {!state ? (
          <p className="text-red-600 font-semibold">
            Nenhum dado foi enviado para esta página.
          </p>
        ) : (
          <>
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>Cargo:</strong> {position}</p>
            <p><strong>Telefone:</strong> {telefone}</p>
            <p><strong>Cidade:</strong> {cidade}</p>
          </>
        )}
      </div>
    </section>
  );
};
