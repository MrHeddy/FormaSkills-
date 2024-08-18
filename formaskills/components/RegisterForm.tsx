'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterForm() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('bite');
    const [isClose, setIsOpen] = useState(false);
    return (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-100 flex justify-center items-center transition-opacity duration-300">
            <div className="bg-gray-900 bg-gradient-radial p-5 rounded-md shadow-lg max-w-sm mx-auto transition-opacity duration-300 border-2 border-white ">
               <Link href="/"><button>Close</button></Link>
                <form>
                    <p>Email</p>
                    <input type="text"/>
                    <p>Pseudo</p>
                    <input type="text"/>
                    <p>Password</p>
                    <input type="password" />
                    <p>Confirm Password</p>
                    <input type="password" />
                    <input type="submit" value="Valider"/>
                    {error && (
                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                    )
                    }
                </form>
                <Link className=' block text-center text-blue-500 hover:underline mt-2' href="/login">Vous avez déja un compte ? Connectez-vous ? </Link>
            </div>
        </div>);
}
