import Section from "../components/section";
import Button from "../components/button";

  const Whatsapp = () => {
      const phone = "5531986584245";
      const link = `https://api.whatsapp.com/send/?phone=55319986584245&text=Ola+diga+o+assunto%21&type=phone_number&app_absent=0`
      window.open(link)
    }

export default function Contato() {
  return (
      <div className="bg-white rounded-2xl shadow-lg shadow-slate-300 shadow-blue-100 p-10 max-w-4xl mx-auto justify-center items-center">
        <div><h1 className="text-3xl font-bold text-slate-900 text-center">Contato</h1></div>
        <table className="w-full text-center border-separate border-spacing-y-3">
          <thead>
            <tr className="text-black border-b border-gray-200 text-lg">
              <th className="py-2 px-3 font-semibold">Empresa</th>
              <th className="py-2 px-3 font-semibold">Contato</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition-colors text-lg">
              <td className="py-2 px-3 text-gray-800">Secretaria do Clube</td>
              <td className="py-2 px-3 text-blue-600 font-medium">
                <a href="tel:+553138491774" className="hover:underline">
                  (31) 3849-1774
                </a>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 transition-colors text-lg">
              <td className="py-2 px-3 text-gray-800">Secretaria da Academia</td>
              <td className="py-2 px-3 text-blue-600 font-medium">
                <a href="tel:+553138491774" className="hover:underline">
                  (31) 3849-4692
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="text-center mt-6">
          <Button onClick={Whatsapp}>
            Enviar Mensagem
          </Button>
        </div>
      </div>

  );
}
