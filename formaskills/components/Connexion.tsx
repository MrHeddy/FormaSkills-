// import Link from "next/link";
"use client";
import { Modal } from "@/components/modal/Modal";
import { Modal_S } from "./modal/Modal_S";

import Link from "next/link";
import { useState } from "react";
import LoginForm from "./LoginForm";

//  void function Log() {

//     if (document.getElementById("LI").innerHTML == "Log In") {
//         document.getElementById("LI").innerHTML = "Log Out";
//         document.getElementById("SI").style.display = "none";
//     } else {
//         document.getElementById("LI").innerHTML = "Log In";
//         document.getElementById("SI").style.display = "block";
//     }
//  }

export const Connexion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [InsIsOpen, setInsIsOpen] = useState(false);
    return (
        <div id="connexion">
            <div id="login">
                {/* <a href="/connect/login"><button> Log in</button></a> */}
                {/* <button><Link href="/connect/login">Lofin</Link></button>
                <input type="button" onClick="href=/connect/login" /> */}
                 <button onClick={() => setIsOpen(true)}>Log in </button> 
    
                {/* <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>Connexion</Modal> */}
                
            </div>
            <div id="inscription">
                {/* <a href="/connect/signup"><button> Sign Up</button></a> */}
                 <button onClick={() => setInsIsOpen(true)}>Sign in </button> 
                 {/* <Modal_S isOpen={InsIsOpen} onClose={() => { setInsIsOpen(false) }}>Inscription</Modal_S>  */}
            </div>
        </div>
    );
}

