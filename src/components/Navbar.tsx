export default function Navbar() {
return (
<nav className="w-full flex justify-between items-center px-6 py-4 bg-[#ec008c] text-white fixed top-0 z-50">
<div className="flex items-center gap-2">
<img
src="https://www.serasa.com.br/lno/static-webfiles/common/products/limpa-nome-white.svg"
alt="Serasa Logo"
className="h-6"
/>
<span className="font-semibold hidden sm:inline">Serasa Limpa Nome</span>
</div>
<div className="text-sm sm:text-base cursor-pointer">Entrar</div>
</nav>
);
}