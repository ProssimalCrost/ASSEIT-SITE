export default function HorarioAcad() {

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
          Planos Academia Asseit Espaço Fitness - 2026
        </h2>

        {/* NÃO ASSOCIADOS */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            Não Associados
          </h3>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
            <table className="min-w-full text-sm text-center">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="py-3 px-4">Plano</th>
                  <th className="py-3 px-4">3x Semana</th>
                  <th className="py-3 px-4">5x Semana</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 font-medium">Mensal</td>
                  <td>R$ 142,00</td>
                  <td>R$ 152,00</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Trimestral</td>
                  <td>R$ 127,80</td>
                  <td>R$ 136,80</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Semestral</td>
                  <td>R$ 120,70</td>
                  <td>R$ 129,20</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Anual</td>
                  <td>R$ 106,50</td>
                  <td>R$ 114,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ASSOCIADOS */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            Associados
          </h3>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
            <table className="min-w-full text-sm text-center">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-4">Plano</th>
                  <th className="py-3 px-4">3x Semana</th>
                  <th className="py-3 px-4">5x Semana</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 font-medium">Mensal</td>
                  <td>R$ 127,00</td>
                  <td>R$ 135,00</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Trimestral</td>
                  <td>R$ 114,30</td>
                  <td>R$ 121,50</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Semestral</td>
                  <td>R$ 107,95</td>
                  <td>R$ 114,75</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Anual</td>
                  <td>R$ 95,25</td>
                  <td>R$ 101,25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Informações Extras */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow-md text-sm space-y-2">
          <p><strong>Avaliação:</strong> R$ 23,00</p>
          <p><strong>Reavaliação:</strong> R$ 18,00</p>
          <p><strong>Matrícula:</strong> R$ 18,00</p>

          <div className="pt-4 border-t mt-4">
            <p><strong>Horário de Funcionamento:</strong></p>
            <p>Segunda à Sexta: 06h às 12h | 14h às 21h</p>
            <p>Sábado: 08h às 11h</p>
            <p className="mt-2 text-green-600 font-medium">
              Plano Família: 6% de desconto
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
