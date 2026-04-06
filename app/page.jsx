export default function TeatroDaVilaSite() {
  const agenda = [
    { data: 'Brevemente', titulo: 'O Sótão', local: 'Auditório Municipal do Pinhal Novo – Rui Guerreiro' },
    { data: 'Brevemente', titulo: 'A Pequena Sereia', local: 'Palmela' },
    { data: 'Brevemente', titulo: 'Confusão na Vizinhança', local: 'Pinhal Novo' },
  ];

  const projetos = [
    {
      titulo: 'Criação Artística',
      texto:
        'Criamos espetáculos originais, adaptações e criações próprias, com identidade artística, exigência e forte ligação ao público.',
    },
    {
      titulo: 'Formação',
      texto:
        'Trabalhamos com crianças, jovens e adultos, promovendo expressão, disciplina, criatividade, confiança e crescimento artístico.',
    },
    {
      titulo: 'Inclusão e Comunidade',
      texto:
        'Desenvolvemos projetos onde a arte é espaço de encontro, acessibilidade, participação cultural e transformação social.',
    },
  ];

  const espetaculos = [
    {
      titulo: 'O Sótão',
      tipo: 'Comédia',
      texto: 'Uma criação do Teatro da Vila, com humor, ritmo e personagens que surpreendem o público.',
    },
    {
      titulo: 'A Pequena Sereia',
      tipo: 'Musical',
      texto: 'Um espetáculo com imaginação, música e envolvimento de elenco jovem em palco.',
    },
    {
      titulo: 'Confusão na Vizinhança',
      tipo: 'Teatro',
      texto: 'Uma comédia onde ninguém se entende, todos se metem na vida uns dos outros e nada corre como esperado.',
    },
  ];

  const destaques = [
    'Associação cultural sem fins lucrativos sediada em Pinhal Novo',
    'Espetáculos, formação artística e projetos comunitários',
    'Trabalho com crianças, jovens e adultos',
    'Arte, inclusão e ligação ao território',
  ];

  const galeria = [
    {
      titulo: 'Espetáculos em palco',
      imagem:
        'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titulo: 'Ensaios e criação',
      imagem:
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titulo: 'Projetos com a comunidade',
      imagem:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80',
    },
    {
      titulo: 'Formação artística',
      imagem:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const parceiros = [
    'Câmara Municipal de Palmela',
    'Junta de Freguesia de Pinhal Novo',
    'Auditório Municipal do Pinhal Novo – Rui Guerreiro',
    'Parceiros culturais, educativos e comunitários',
  ];

  return (
    <div className="min-h-screen bg-[#f7f1ea] text-neutral-900">
      <header className="sticky top-0 z-30 border-b border-[#e9d9c6] bg-[#f7f1ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7a1f2a] to-[#b8863b] text-lg font-bold text-white shadow-lg shadow-[#d8c0a0]">
              TV
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-[#4b1f24]">Teatro da Vila</p>
              <p className="text-sm text-neutral-600">Arte, comunidade e inclusão</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#quem-somos" className="transition hover:text-[#7a1f2a]">Quem Somos</a>
            <a href="#espetaculos" className="transition hover:text-[#7a1f2a]">Espetáculos</a>
            <a href="#agenda" className="transition hover:text-[#7a1f2a]">Agenda</a>
            <a href="#inscricoes" className="transition hover:text-[#7a1f2a]">Inscrições</a>
            <a href="#contactos" className="transition hover:text-[#7a1f2a]">Contactos</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(28,16,17,0.65), rgba(28,16,17,0.72)), url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,134,59,0.15),_transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center text-white">
            <span className="w-fit rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#f6dfb6] shadow-sm backdrop-blur">
              Associação Cultural
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Um palco onde a arte encontra pessoas, território e transformação.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              O Teatro da Vila é uma associação cultural sem fins lucrativos sediada em Pinhal Novo. Desenvolvemos espetáculos, formação artística e projetos com a comunidade, envolvendo crianças, jovens e adultos numa prática criativa viva e próxima.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contactos"
                className="rounded-2xl bg-gradient-to-r from-[#7a1f2a] to-[#b8863b] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02]"
              >
                Falar connosco
              </a>
              <a
                href="#espetaculos"
                className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/15"
              >
                Ver espetáculos
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {destaques.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-medium leading-6 text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-gradient-to-br from-[#7a1f2a] via-[#632029] to-[#b8863b] p-7 text-white shadow-2xl shadow-[#d8c0a0]/40 sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f6dfb6]">Missão</p>
              <p className="mt-4 text-xl font-semibold leading-9">
                Levar o teatro a mais pessoas e afirmar a arte como lugar de expressão, educação, acessibilidade, pertença e encontro.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#eadbc9] bg-[#fffaf4]/95 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-[#7a1f2a]">Áreas</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-700">
                <li>Espetáculos</li>
                <li>Formação artística</li>
                <li>Projetos inclusivos</li>
                <li>Intervenção comunitária</li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#eadbc9] bg-[#fffaf4]/95 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-[#7a1f2a]">Atuação</p>
              <p className="mt-4 text-sm leading-6 text-neutral-700">
                Pinhal Novo, Palmela e outros contextos culturais, educativos e comunitários.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#eadbc9] bg-[#fffaf4]/95 p-6 shadow-sm backdrop-blur sm:col-span-2">
              <p className="text-sm font-semibold text-[#7a1f2a]">Nota</p>
              <p className="mt-4 text-sm leading-7 text-neutral-700">
                Substitui a imagem do topo por uma fotografia vossa em palco. Vai ficar muito mais forte e com identidade real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="border-t border-[#eadbc9] bg-[#fffaf4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a1f2a]">Quem Somos</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4b1f24] sm:text-4xl">
              Uma associação artística com raízes no território e vontade de chegar mais longe.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-700">
              O Teatro da Vila apresenta-se publicamente como uma associação cultural sem fins lucrativos sediada em Pinhal Novo, dedicada ao desenvolvimento de espetáculos, formação artística e projetos com a comunidade. Esta base está alinhada com a forma como se descreve nas redes sociais e dá ao site uma voz mais real e coerente.
            </p>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              Ao longo do seu percurso, o Teatro da Vila tem afirmado um trabalho próximo das pessoas, do território e da criação artística, envolvendo crianças, jovens e adultos em processos de aprendizagem, palco, encontro e participação cultural.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-[#eadbc9] bg-[#f8efe4] p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#7a1f2a]">Visão</p>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                Fazer do teatro um espaço vivo, acessível e relevante, onde a criação artística e a participação cultural caminham juntas.
              </p>
            </div>
            <div className="rounded-[28px] border border-[#eadbc9] bg-[#f8efe4] p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#7a1f2a]">Valores</p>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                Rigor, sensibilidade, inclusão, trabalho coletivo, ligação à comunidade e compromisso com a qualidade artística.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="border-t border-[#eadbc9] bg-[#f7f1ea]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a1f2a]">Projetos</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4b1f24] sm:text-4xl">O que fazemos</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Trabalhamos o teatro em várias dimensões, da criação cénica à formação e à inclusão cultural.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projetos.map((item) => (
              <div
                key={item.titulo}
                className="rounded-[28px] border border-[#eadbc9] bg-[#fffaf4] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#7a1f2a] to-[#b8863b]" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#4b1f24]">{item.titulo}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-700">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="espetaculos" className="border-t border-[#eadbc9] bg-[#fffaf4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a1f2a]">Em destaque</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4b1f24] sm:text-4xl">Espetáculos</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Uma secção pensada para dar destaque às produções que melhor representam o vosso trabalho.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {espetaculos.map((item) => (
              <div key={item.titulo} className="overflow-hidden rounded-[30px] border border-[#eadbc9] bg-white shadow-sm">
                <div className="h-48 bg-[linear-gradient(135deg,#7a1f2a,#b8863b)]" />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8863b]">{item.tipo}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#4b1f24]">{item.titulo}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item.texto}</p>
                  <button className="mt-6 rounded-2xl bg-[#7a1f2a] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
                    Saber mais
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="border-t border-[#eadbc9] bg-[#f7f1ea]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a1f2a]">Agenda</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4b1f24] sm:text-4xl">Próximos momentos</h2>
              <p className="mt-4 text-base leading-8 text-neutral-600">
                Espaço para divulgar espetáculos, ensaios abertos, formações e eventos da associação.
              </p>
            </div>
            <p className="text-sm text-neutral-500">Atualiza estas datas sempre que precisares</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[30px] border border-[#eadbc9] bg-[#fffaf4] shadow-sm">
            {agenda.map((evento, index) => (
              <div
                key={`${evento.titulo}-${index}`}
                className={`grid gap-2 px-6 py-6 md:grid-cols-3 ${index !== agenda.length - 1 ? 'border-b border-[#efe3d5]' : ''}`}
              >
                <p className="text-sm font-semibold text-[#7a1f2a]">{evento.data}</p>
                <p className="text-base font-semibold text-[#4b1f24]">{evento.titulo}</p>
                <p className="text-sm text-neutral-700">{evento.local}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadbc9] bg-[#fffaf4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a1f2a]">Galeria</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4b1f24] sm:text-4xl">Fotografias</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Nesta versão usei imagens de referência para te mostrar a estrutura. O ideal é trocar todas por fotografias reais do Teatro da Vila.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galeria.map((item) => (
              <div key={item.titulo} className="overflow-hidden rounded-[30px] border border-[#eadbc9] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${item.imagem})` }} />
                <div className="p-5">
                  <p className="text-sm font-medium leading-6 text-neutral-700">{item.titulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inscricoes" className="border-t border-[#eadbc9] bg-[#f7f1ea]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a1f2a]">Inscrições</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4b1f24] sm:text-4xl">Queres fazer parte?</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              Cria aqui uma área para inscrições de novos alunos, participantes, projetos ou atividades sazonais. Esta secção pode servir para organizar o primeiro contacto com famílias, jovens e interessados.
            </p>
            <div className="mt-8 rounded-[28px] border border-[#eadbc9] bg-[#fffaf4] p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#7a1f2a]">Sugestões de uso</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-neutral-700">
                <li>Inscrição em aulas e grupos</li>
                <li>Inscrição em workshops</li>
                <li>Pré-inscrição em espetáculos e projetos</li>
                <li>Pedidos de informação</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#eadbc9] bg-[#fffaf4] p-7 shadow-xl">
            <h3 className="text-lg font-semibold text-[#4b1f24]">Formulário de inscrição</h3>
            <div className="mt-5 grid gap-4">
              <input className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#b8863b]" placeholder="Nome" />
              <input className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#b8863b]" placeholder="Email" />
              <input className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#b8863b]" placeholder="Telefone" />
              <select className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#b8863b]">
                <option>Tipo de inscrição</option>
                <option>Aulas</option>
                <option>Workshop</option>
                <option>Projeto</option>
                <option>Pedido de informação</option>
              </select>
              <textarea className="min-h-32 rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#b8863b]" placeholder="Mensagem" />
              <button className="rounded-2xl bg-gradient-to-r from-[#7a1f2a] to-[#b8863b] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90">
                Enviar inscrição
              </button>
            </div>
            <p className="mt-3 text-xs leading-5 text-neutral-500">
              Este formulário é visual. Para receber inscrições reais, mais tarde será preciso ligá-lo a um serviço como Formspree, Tally ou Google Forms.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eadbc9] bg-[#fffaf4]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a1f2a]">Parceiros e apoios</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4b1f24] sm:text-4xl">Quem caminha connosco</h2>
            <p className="mt-4 text-base leading-8 text-neutral-600">
              Esta secção serve para mostrar confiança, rede e presença institucional. Podes trocar estes blocos por logótipos reais.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {parceiros.map((item) => (
              <div key={item} className="flex min-h-28 items-center justify-center rounded-[24px] border border-[#eadbc9] bg-[#f8efe4] p-5 text-center text-sm font-medium text-[#4b1f24] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contactos" className="border-t border-[#eadbc9] bg-[#f7f1ea]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a1f2a]">Contactos</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4b1f24] sm:text-4xl">Vamos falar?</h2>
            <p className="mt-4 text-base leading-8 text-neutral-700">
              Este espaço pode servir para receber contactos de entidades, público, famílias, parceiros e convites para colaboração.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-neutral-700">
              <div className="rounded-2xl border border-[#eadbc9] bg-[#fffaf4] p-4 shadow-sm">
                <span className="font-semibold">Email:</span> teatrodavila@outlook.pt
              </div>
              <div className="rounded-2xl border border-[#eadbc9] bg-[#fffaf4] p-4 shadow-sm">
                <span className="font-semibold">Localização:</span> Pinhal Novo, Palmela
              </div>
              <div className="rounded-2xl border border-[#eadbc9] bg-[#fffaf4] p-4 shadow-sm">
                <span className="font-semibold">Redes sociais:</span> Facebook e Instagram do Teatro da Vila
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#eadbc9] bg-[#fffaf4] p-7 shadow-xl">
            <h3 className="text-lg font-semibold text-[#4b1f24]">Mensagem rápida</h3>
            <div className="mt-5 grid gap-4">
              <input className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#b8863b]" placeholder="Nome" />
              <input className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#b8863b]" placeholder="Email" />
              <textarea className="min-h-32 rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-neutral-400 focus:border-[#b8863b]" placeholder="Mensagem" />
              <button className="rounded-2xl bg-gradient-to-r from-[#7a1f2a] to-[#b8863b] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90">
                Enviar
              </button>
            </div>
            <p className="mt-3 text-xs leading-5 text-neutral-500">
              Este formulário é ilustrativo. Para receber mensagens reais, será preciso ligá-lo a um serviço de envio.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#4b1f24] bg-[#2e1619] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold">Teatro da Vila</p>
            <p className="mt-1 text-sm text-white/65">Arte, comunidade e inclusão.</p>
          </div>
          <p className="text-sm text-white/55">© {new Date().getFullYear()} Teatro da Vila. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
