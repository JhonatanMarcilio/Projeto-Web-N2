import { useState } from "react";
import "./ContactForm.css";

function ContactForm({ onAdd, onClose, initialData = {} }) {
  const [name, setName] = useState(initialData.name || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [email, setEmail] = useState(initialData.email || "");

  // Evita que a pagina seja recarregada.
  function handleSubmit(e) {
    e.preventDefault();

    const newContact = {
      id: initialData.id,
      name,
      phone,
      email,
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
