import "./ContactItem.css";

function ContactItem({ id, name, phone, email, onDelete }) {
  return (
    <div className="contact-card">
      <h2>{name}</h2>
      <p>📞 {phone}</p>
      <p>📧 {email}</p>
      <div className="btns">
        <button>Editar</button>
        <button onClick={() => onDelete(id)}>Deletar</button>
      </div>
    </div>
  );
}

export default ContactItem;
