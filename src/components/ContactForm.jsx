import { useState } from "react";
import "./ContactForm.css";

function ContactForm({ onAdd, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Evita que a pagina seja recarregada.
  function handleSubmit(event) {
    event.preventDefault();

    const newContact = {
      name: name,
      phone: phone,
      email: email,
    };

    onAdd(newContact);

    // Limpa os inputs
    setName("");
    setPhone("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Fone"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-Mail"
        required
      />
      <div className="btn">
        <button type="submit">Adicionar</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
