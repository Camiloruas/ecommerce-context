export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-amber-100">
      <h1 className="font-medium text-2xl text-center my-4">
        Pagina Carrinho de Compras
      </h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300 ">
        <img
          className="w-28"
          src="https://images1.kabum.com.br/produtos/fotos/sync_mirakl/566681/xlarge/PC-Gamer-Cpu-Intel-i7-3-4ghz-SSD-480GB-Memoria-Ram-16gb-500w_1776883172.jpg"
          alt="Logo Produto"
        />

        <strong>Preço: R$ 1.000,00</strong>
        <div className="flex items-center justify-center gap-2">
          <button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2 ">
            -
          </button>
          2
          <button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2 ">
            +
          </button>
        </div>
        <section>
          <strong className="float-right">Subtotal: R$1.000,00</strong>
        </section>
      </section>

      <p className="font-bold mt-4"> Total: R$ 1.000,00</p>
    </div>
  );
}
