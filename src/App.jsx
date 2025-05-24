import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactForm from "./components/contactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/contacts")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setContacts(data);
      })
      .catch(function (error) {
        console.error("Erro ao buscar contatos:", error);
      });
  }, []);

  function addContact(newContact) {
    fetch("http://localhost:3001/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setContacts([...contacts, data]);
        setShowForm(false); // Esconde o form depois de adicionar
      })
      .catch(function (error) {
        console.error("Erro ao adicionar um contato: ", error);
      });
  }

  return (
    <div className="container">
      <h1>Agenda de Contatos</h1>
      {/* Botão para mostrar o from */}
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Novo Contato</button>
      )}
      {/* Form visível apenas se showForm for true */}
      {showForm && (
        <ContactForm onAdd={addContact} onClose={() => setShowForm(true)} />
      )}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
