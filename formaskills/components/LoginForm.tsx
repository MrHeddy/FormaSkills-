import Link from "next/link";

export default function LoginForm() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
            <div className="bg-gray-900 bg-gradient-radial p-5 rounded-md shadow-lg max-w-sm mx-auto transition-opacity duration-300 border-2 border-white ">
                <p>Email or Pseudo</p>
                <input type="text" className="text-black" />
                <p>PassWord</p>
                <input type="text" />
                <button>Valider</button>
                <button>Close</button>
                <Link  className=' block text-center text-blue-500 hover:underline mt-2' href="/register">Pas encore de compte ? Inscrivez vous !</Link>
            </div>
        </div>);
}