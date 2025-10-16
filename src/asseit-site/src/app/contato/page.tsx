import Section from "../components/section";
import Button from "../components/button";

export default function ContatoPage() {
  return (
    <Section title="Contato">
      <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-md max-w-lg mx-auto">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="border rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="border rounded-lg p-3"
          />
          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="border rounded-lg p-3"
          ></textarea>
          <Button>Enviar mensagem</Button>
        </form>
      </div>
    </Section>
  );
}
