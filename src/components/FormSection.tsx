import { motion } from "framer-motion";
import { useState } from "react";

export default function FormSection() {
const [cpf, setCpf] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [agreed, setAgreed] = useState(false);

return (
<motion.form
id="formulario"
initial={{ y: 40, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5, delay: 0.5 }}
className="bg-white p-4 rounded-lg shadow-md w-full max-w-md"
>
<label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Seu nome"
className="w-full px-3 py-2 border border-gray-300 rounded mb-3"
/>
<label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
<input
type="tel"
value={phone}
onChange={(e) => setPhone(e.target.value)}
placeholder="(00) 00000-0000"
className="w-full px-3 py-2 border border-gray-300 rounded mb-3"
/>
<label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="email@exemplo.com"
className="w-full px-3 py-2 border border-gray-300 rounded mb-3"
/>
<label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
<input
type="text"
value={cpf}
onChange={(e) => setCpf(e.target.value)}
placeholder="000.000.000-00"
className="w-full px-3 py-2 border border-gray-300 rounded mb-3"
/>
<label className="flex items-start gap-2 text-xs text-gray-600 mb-3">
<input
type="checkbox"
checked={agreed}
onChange={(e) => setAgreed(e.target.checked)}
/>
Li e concordo com os termos de uso
</label>
<button
type="submit"
disabled={!cpf || !name || !email || !phone || !agreed}
className="w-full bg-pink-600 text-white py-2 rounded disabled:opacity-50 text-sm font-semibold"
>
Veja Seus Descontos
</button>
</motion.form>
);
}