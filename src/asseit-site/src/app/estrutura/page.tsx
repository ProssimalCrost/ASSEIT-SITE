import Section from "../components/section";
import TabelaHorarios from "../components/tabelaHorarios";
import HorarioAcad from "../components/tabelaAcad"

export const metadata = {
  title: "Sobre | ASSEIT",
  description:
    "Conheça a estrutura completa da ASSEIT, as atividades de Natação e Hidroginástica e confira a tabela de horários.",
};

export default function SobrePage() {
  return (
    <Section>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <section className="mx-auto max-w-5xl px-4 pb-16 pt-10 md:pt-16">
          <header className="mb-8 md:mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Sobre a ASSEIT
            </h1>
            <p className="mt-3 md:mt-4 text-slate-600 max-w-2xl mx-auto">
              A ASSEIT conta com uma ampla estrutura que inclui sede administrativa, academia,
              piscinas, quadras, campo society e espaço para eventos. O local é utilizado tanto
              pelas empresas associadas quanto pela comunidade em diversas atividades esportivas,
              recreativas e culturais, incentivando bem-estar, saúde e integração entre as famílias.
            </p>
          </header>

          {/* Blocos de destaque */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Natação */}
            <article className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Natação</h2>
              <p className="mt-3 text-slate-600">
                A natação da ASSEIT é desenvolvida com metodologia progressiva que respeita o nível de
                cada aluno, desde crianças que estão tendo o primeiro contato com a água até
                praticantes mais avançados. Os treinos incentivam familiarização com a água,
                respiração e flutuação, técnicas dos estilos (crawl, costas, peito e borboleta),
                coordenação motora e disciplina, além do desenvolvimento físico geral.
              </p>
              <p className="mt-3 text-slate-600">
                As turmas são divididas por faixa etária e nível de aprendizado (Nível 1 e Nível 2),
                garantindo ambiente seguro e atenção individualizada ao progresso de cada aluno.
              </p>
            </article>

            {/* Hidroginástica */}
            <article className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Hidroginástica</h2>
              <p className="mt-3 text-slate-600">
                A hidroginástica é ideal para quem busca melhorar saúde, mobilidade e condicionamento
                de forma leve e prazerosa. Por ser realizada na água, reduz o impacto nas
                articulações, sendo recomendada para todas as idades — inclusive idosos, iniciantes e
                pessoas em retorno à atividade física.
              </p>
              <ul className="mt-3 space-y-1 text-slate-600 list-disc list-inside">
                <li>Melhora do condicionamento cardiovascular</li>
                <li>Fortalecimento muscular sem sobrecarga</li>
                <li>Aumento da flexibilidade e mobilidade</li>
                <li>Alívio de dores e estresse</li>
                <li>Convívio social e motivação</li>
              </ul>
            </article>
          </div>

          {/* Tabela de horários */}
          <section className="mt-10 md:mt-14">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900">Tabela de Horários – Natação e Hidroginástica</h3>
            <p className="mt-2 text-slate-600">
              Consulte abaixo os horários por faixa etária, nível e dias da semana.
            </p>

            <div className="mt-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-3 md:p-4">
              <div className="mt-2 text-xs text-slate-500 text-center">
                <TabelaHorarios />
              </div>
            </div>
          </section>

          {/* CTA opcional */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href="/contato"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Fale com a Secretaria
            </a>
            <p className="text-sm text-slate-500">Inscrições, dúvidas e mais informações.</p>
          </div>
        </section>

      {/*/////////////Seção Academia//////////////// */}

        <section>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 justify-items-center mx-auto max-w-6xl px-4 pb-16">
            <article className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">Academia</h2>
              <p className="mt-3 text-slate-600">
                Ajuda na melhora do condicionamento físico geral, fortalecimento muscular e
                promoção da saúde. A academia é equipada com aparelhos modernos e oferece um ambiente
                motivador para a prática de exercícios físicos.
              </p>
              <ul className="mt-3 space-y-1 text-slate-600 list-disc list-inside">
                <li>Melhora do condicionamento cardiovascular</li>
                <li>Fortalecimento muscular sem sobrecarga</li>
                <li>Aumento da flexibilidade e mobilidade</li>
                <li>Alívio de dores e estresse</li>
                <li>Convívio social e motivação</li>
              </ul>
            </article>
          </div>

          <div className="mt-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-3 md:p-4">
              <div className="mt-2 text-xs text-slate-500 text-center">
                <HorarioAcad/>
              </div>
            </div>
        </section>

      </main>
    </Section>
  );
}
