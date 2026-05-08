import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto mt-4 pt-4">
        <h1 className="font-bold text-2xl mb-4 text-center">
          Produtos em alta
        </h1>

        <div>
          <section className="w-full">
            <div className="w-full h-40 bg-white rounded-lg mb-2 p-2">
              <img
                className="max-w-full max-h-full object-contain"
                src="https://lojagoldentec.vteximg.com.br/arquivos/ids/167785-1000-1000/monitor-gamer-goldentec-24-led-full-hd-curvo-144hz-01-min--2-.jpg?v=638762521847000000"
                alt="Logo do Produto"
              />
            </div>
            <p className="font-medium mt-1 mb-2">Monitor DELL</p>
            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">R$ 1000</strong>
              <button className="cursor-pointer">
                <BsCartPlus size={20} color="#121212" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
