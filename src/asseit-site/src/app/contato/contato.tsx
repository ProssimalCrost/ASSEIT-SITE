import Section from "../components/section";
import Button from "../components/button";

export default function Contato() {
  return (

      <main>
      <div className="bg-green-50 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-lg mx-auto m-10">
        <div><h1 className="text-2xl font-bold text-slate-900 text-center">Contato</h1></div>
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-gray-700 border-b border-gray-200">
              <th className="py-2 px-3 font-semibold">Empresa</th>
              <th className="py-2 px-3 font-semibold">Contato</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition-colors">
              <td className="py-2 px-3 text-gray-800">Secretaria do Clube</td>
              <td className="py-2 px-3 text-blue-600 font-medium">
                <a href="tel:+553138491774" className="hover:underline">
                  (31) 3849-1774
                </a>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 transition-colors">
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
          <Button>Enviar Mensagem</Button>
        </div>
      </div>
      </main>

  );
}
