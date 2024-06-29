import Link from "next/link";
import { Connexion } from "./Connexion";
export const Menu = () => {
    return (
        <div id="menu">
            <div id="bar">
        
                <div id="A"><Link href="/">Acceuil</Link></div>
                <div id="F"><Link href="/formations">Formations</Link></div>
                <div id="F">Formations</div>
                <div id="E">Equipe</div>
                <div id="C">Contact</div>
            </div>

            <div id="connect">
                <Connexion/>
            </div>
        </div>
    );
    }