import "./ContactItem.css";

function ContactItem({ contacts }) {
  return (
    <div className="contact-card">
      <h2>Jhonatan Marcílio</h2>
      <p>📞 (69) 99310-0703</p>
      <p>📧 jhonatan.marcilio@alunos.afya.com.br</p>
      <div className="botao">
        <button>Editar</button>
        <button>Deletar</button>
      </div>
    </div>
  );
}

export default ContactItem;
