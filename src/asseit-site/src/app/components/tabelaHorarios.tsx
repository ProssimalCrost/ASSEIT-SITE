export default function TabelaHorarios() {
  return (
    <main className="mt-6 space-y-10">
      {/* ========================= NATAÇÃO ========================= */}
      <div className="bg-blue-100 overflow-x-auto rounded-2xl border border-slate-300  shadow-sm">
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

          <tbody>
            {/* 04 e 05 anos */}
            <tr className="odd:bg-slate-50">
              <td className="p-3">04 e 05 anos</td>
              <td className="p-3">KIDS 1</td>
              <td className="p-3">09:00 às 09:40</td>
              <td className="p-3">1</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">04 e 05 anos</td>
              <td className="p-3">KIDS 1</td>
              <td className="p-3">09:50 às 10:30</td>
              <td className="p-3">2</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">04 e 05 anos</td>
              <td className="p-3">KIDS 1</td>
              <td className="p-3">14:50 às 15:30</td>
              <td className="p-3">3</td>
              <td className="p-3">quarta e sexta</td>
            </tr>

            {/* 06 e 07 anos Nível 1 */}
            <tr className="odd:bg-slate-50">
              <td className="p-3">06 e 07 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">09:00 às 09:45</td>
              <td className="p-3">18</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">06 e 07 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">09:50 às 10:35</td>
              <td className="p-3">5</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">06 e 07 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">14:00 às 14:45</td>
              <td className="p-3">6</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">06 e 07 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">14:50 às 15:35</td>
              <td className="p-3">8</td>
              <td className="p-3">terça e quinta</td>
            </tr>

            {/* 06 e 07 anos Nível 2 */}
            <tr className="odd:bg-slate-50">
              <td className="p-3">06 e 07 anos</td>
              <td className="p-3">Nível 2</td>
              <td className="p-3">09:50 às 10:35</td>
              <td className="p-3">7</td>
              <td className="p-3">quarta e sexta</td>
            </tr>

            {/* 08 a 10 anos Nível 1 */}
            <tr className="odd:bg-slate-50">
              <td className="p-3">08 a 10 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">09:00 às 09:45</td>
              <td className="p-3">11</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">08 a 10 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">14:00 às 14:45</td>
              <td className="p-3">13</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">08 a 10 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">14:50 às 15:35</td>
              <td className="p-3">19</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">08 a 10 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">16:00 às 16:45</td>
              <td className="p-3">10</td>
              <td className="p-3">terça e quinta</td>
            </tr>

            {/* 08 a 10 anos Nível 2 */}
            <tr className="odd:bg-slate-50">
              <td className="p-3">08 a 10 anos</td>
              <td className="p-3">Nível 2</td>
              <td className="p-3">09:00 às 09:45</td>
              <td className="p-3">12</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">08 a 10 anos</td>
              <td className="p-3">Nível 2</td>
              <td className="p-3">16:00 às 16:45</td>
              <td className="p-3">4</td>
              <td className="p-3">quarta e sexta</td>
            </tr>

            {/* 11 anos */}
            <tr className="odd:bg-slate-50">
              <td className="p-3">11 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">07:00 às 07:45</td>
              <td className="p-3">22</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">11 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">07:50 às 08:35</td>
              <td className="p-3">23</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">11 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">09:00 às 09:45</td>
              <td className="p-3">9</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">11 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">14:00 às 14:45</td>
              <td className="p-3">15</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">11 anos</td>
              <td className="p-3">Nível 1</td>
              <td className="p-3">14:50 às 15:35</td>
              <td className="p-3">6</td>
              <td className="p-3">terça e quinta</td>
            </tr>

            {/* 11 anos Nível 2 */}
            <tr className="odd:bg-slate-50">
              <td className="p-3">11 anos</td>
              <td className="p-3">Nível 2</td>
              <td className="p-3">07:00 às 07:45</td>
              <td className="p-3">21</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">11 anos</td>
              <td className="p-3">Nível 2</td>
              <td className="p-3">14:50 às 15:35</td>
              <td className="p-3">16</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
            <tr className="odd:bg-slate-50">
              <td className="p-3">11 anos</td>
              <td className="p-3">Nível 2</td>
              <td className="p-3">16:50 às 17:35</td>
              <td className="p-3">17</td>
              <td className="p-3">quarta e sexta</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ========================= HIDROGINÁSTICA ========================= */}
      <div className="overflow-x-auto rounded-2xl border border-slate-300 bg-white shadow-sm">
        <table className="w-full min-w-[700px] border-collapse text-slate-800">
          <thead className="bg-violet-100 text-slate-900">
            <tr>
              <th className="p-3 text-left font-semibold">Turma</th>
              <th className="p-3 text-left font-semibold">Horário</th>
              <th className="p-3 text-left font-semibold">Código</th>
              <th className="p-3 text-left font-semibold">Dias</th>
            </tr>
          </thead>

          <tbody>
            <tr className="odd:bg-violet-50">
              <td className="p-3">Hidroginástica 4x</td>
              <td className="p-3">07:00 às 07:45</td>
              <td className="p-3">25</td>
              <td className="p-3">terça a sexta</td>
            </tr>
            <tr className="odd:bg-violet-50">
              <td className="p-3">Hidroginástica 4x</td>
              <td className="p-3">07:50 às 08:35</td>
              <td className="p-3">26</td>
              <td className="p-3">terça a sexta</td>
            </tr>
            <tr className="odd:bg-violet-50">
              <td className="p-3">Hidroginástica 4x</td>
              <td className="p-3">16:00 às 16:45</td>
              <td className="p-3">28</td>
              <td className="p-3">terça a sexta</td>
            </tr>
            <tr className="odd:bg-violet-50">
              <td className="p-3">Hidroginástica 2x</td>
              <td className="p-3">17:40 às 18:25</td>
              <td className="p-3">27</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-violet-50">
              <td className="p-3">Hidroginástica 2x</td>
              <td className="p-3">07:00 às 07:45</td>
              <td className="p-3">29</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-violet-50">
              <td className="p-3">Hidroginástica 2x</td>
              <td className="p-3">07:50 às 08:35</td>
              <td className="p-3">30</td>
              <td className="p-3">terça e quinta</td>
            </tr>
            <tr className="odd:bg-violet-50">
              <td className="p-3">Hidroginástica 2x</td>
              <td className="p-3">16:00 às 16:45</td>
              <td className="p-3">31</td>
              <td className="p-3">terça a sexta</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
