"use client" ;
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [InsIsOpen, setInsIsOpen] = useState(false);
    return (
        <div id="menu">
            <div id="bar">
        
                <div id="A"><Link href="/">Acceuil</Link></div>
                <div id="F"><Link href="/formations"> Liste de formations</Link></div>
                <div id="E">Formations</div>
                <div id="C">Contact</div>
            </div>

            <div id="connect">
                <Link href={"/login"}><button>Log in</button></Link>
                <Link href={"/register"}><button>Sign in</button></Link>
            </div>
        </div>
    );
    }