export default function horarioAcad() {
    return (
    <div className="mt-6 space-y-10">
      {/* ========================= NATAÇÃO ========================= */}
      <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-sm">
        <table className="w-full min-w-[850px] border-collapse text-slate-800">
          <thead className="bg-slate-100 text-slate-900">
            <tr>
              <th className="p-3 text-left font-semibold">Faixa etária</th>
              <th className="p-3 text-left font-semibold">Nível</th>
              <th className="p-3 text-left font-semibold">Horário</th>
              <th className="p-3 text-left font-semibold">Turma</th>
              <th className="p-3 text-left font-semibold">Dias</th>
            </tr>
          </thead>
        </table>
     </div>
    </div> 
    )
}