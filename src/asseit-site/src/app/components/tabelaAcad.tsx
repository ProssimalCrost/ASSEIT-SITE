export default function HorarioAcad() {
  return (
    <div className="mt-6 space-y-10">
      {/* ASSOCIADOS */}
      <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-sm">
        <h2 className="text-xl font-bold text-center py-4 bg-slate-100 text-slate-900">
          Academia SESI Espaço Fitness 2025 — ASSOCIADOS
        </h2>
        <table className="w-full min-w-[850px] border-collapse text-slate-800">
          <thead className="bg-slate-200 text-slate-900">
            <tr>
              <th className="p-3 text-left font-semibold">Horário</th>
              <th className="p-3 text-left font-semibold">Plano</th>
              <th className="p-3 text-left font-semibold">Mensal</th>
              <th className="p-3 text-left font-semibold">Trimestral</th>
              <th className="p-3 text-left font-semibold">Semestral</th>
              <th className="p-3 text-left font-semibold">Anual</th>
            </tr>
          </thead>
          <tbody>
            {/* Horários Diferenciados */}
            <tr className="bg-slate-100">
              <td className="p-3 font-medium" colSpan={6}>
                Horários Diferenciados (09:00 às 12:00 / 14:00 às 16:00)
              </td>
            </tr>
            <tr>
              <td className="p-3">3x Semana</td>
              <td className="p-3">Musculação</td>
              <td className="p-3">109,00</td>
              <td className="p-3">98,10</td>
              <td className="p-3">92,65</td>
              <td className="p-3">81,75</td>
            </tr>
            <tr>
              <td className="p-3">5x Semana</td>
              <td className="p-3">Musculação</td>
              <td className="p-3">118,00</td>
              <td className="p-3">106,20</td>
              <td className="p-3">100,30</td>
              <td className="p-3">88,50</td>
            </tr>

            {/* Horários Normais */}
            <tr className="bg-slate-100">
              <td className="p-3 font-medium" colSpan={6}>
                Horários Normais (06:00 às 09:00 / 16:00 às 21:00)
              </td>
            </tr>
            <tr>
              <td className="p-3">3x Semana</td>
              <td className="p-3">Musculação</td>
              <td className="p-3">127,00</td>
              <td className="p-3">114,30</td>
              <td className="p-3">107,95</td>
              <td className="p-3">95,25</td>
            </tr>
            <tr>
              <td className="p-3">5x Semana</td>
              <td className="p-3">Musculação</td>
              <td className="p-3">135,00</td>
              <td className="p-3">121,50</td>
              <td className="p-3">114,75</td>
              <td className="p-3">101,25</td>
            </tr>

            {/* Extras */}
            <tr className="bg-slate-100">
              <td className="p-3" colSpan={2}>
                Avaliação
              </td>
              <td className="p-3" colSpan={4}>
                R$ 23,00
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td className="p-3" colSpan={2}>
                Reavaliação
              </td>
              <td className="p-3" colSpan={4}>
                R$ 18,00
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td className="p-3" colSpan={2}>
                Matrícula
              </td>
              <td className="p-3" colSpan={4}>
                R$ 18,00
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* NÃO ASSOCIADOS */}
      <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-sm">
        <h2 className="text-xl font-bold text-center py-4 bg-slate-100 text-slate-900">
          Academia SESI Espaço Fitness 2025 — NÃO ASSOCIADOS
        </h2>
        <table className="w-full min-w-[850px] border-collapse text-slate-800">
          <thead className="bg-slate-200 text-slate-900">
            <tr>
              <th className="p-3 text-left font-semibold">Horário</th>
              <th className="p-3 text-left font-semibold">Plano</th>
              <th className="p-3 text-left font-semibold">Mensal</th>
              <th className="p-3 text-left font-semibold">Trimestral</th>
              <th className="p-3 text-left font-semibold">Semestral</th>
              <th className="p-3 text-left font-semibold">Anual</th>
            </tr>
          </thead>
          <tbody>
            {/* Horários Diferenciados */}
            <tr className="bg-slate-100">
              <td className="p-3 font-medium" colSpan={6}>
                Horários Diferenciados (09:00 às 12:00 / 14:00 às 16:00)
              </td>
            </tr>
            <tr>
              <td className="p-3">3x Semana</td>
              <td className="p-3">Musculação</td>
              <td className="p-3">120,70</td>
              <td className="p-3">127,80</td>
              <td className="p-3">142,00</td>
              <td className="p-3">106,50</td>
            </tr>
            <tr>
              <td className="p-3">5x Semana</td>
              <td className="p-3">Musculação</td>
              <td className="p-3">136,80</td>
              <td className="p-3">129,20</td>
              <td className="p-3">152,00</td>
              <td className="p-3">114,00</td>
            </tr>

            {/* Horários Normais */}
            <tr className="bg-slate-100">
              <td className="p-3 font-medium" colSpan={6}>
                Horários Normais (06:00 às 09:00 / 16:00 às 21:00)
              </td>
            </tr>
            <tr>
              <td className="p-3">3x Semana</td>
              <td className="p-3">Musculação</td>
              <td className="p-3">127,00</td>
              <td className="p-3">114,30</td>
              <td className="p-3">107,95</td>
              <td className="p-3">95,25</td>
            </tr>
            <tr>
              <td className="p-3">5x Semana</td>
              <td className="p-3">Musculação</td>
              <td className="p-3">135,00</td>
              <td className="p-3">121,50</td>
              <td className="p-3">114,75</td>
              <td className="p-3">101,25</td>
            </tr>

            {/* Extras */}
            <tr className="bg-slate-100">
              <td className="p-3" colSpan={2}>
                Avaliação
              </td>
              <td className="p-3" colSpan={4}>
                R$ 23,00
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td className="p-3" colSpan={2}>
                Reavaliação
              </td>
              <td className="p-3" colSpan={4}>
                R$ 18,00
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td className="p-3" colSpan={2}>
                Matrícula
              </td>
              <td className="p-3" colSpan={4}>
                R$ 18,00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
