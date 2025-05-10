import "./App.css";
import ContactItem from "./components/ContactItem";

function App() {
  const contacts = [
    {
      id: 1,
      nome: "João",
      phone: "(69) 99310-0703",
      mail: "exemplo@exemplo.com.br",
    },
    {
      id: 2,
      nome: "Maria",
      phone: "(69) 22222-2222",
      mail: "exemplo2@exemplo.com.br",
    },
    {
      id: 3,
      nome: "José",
      phone: "(69) 33333-3333",
      mail: "exemplo3@exemplo.com.br",
    },
  ];

  return (
    <>
      <h1>Agenda de Contatos</h1>
      <ContactItem></ContactItem>
      <ContactItem></ContactItem>
    </>
  );
}

export default App;
