import Link from "next/link";

export const Menu = () => {
    return (
        <div id="menu">
            {/* Youpi */}
            <div id="A"><Link href="/">Accueil</Link></div>
            <div id="S"><Link href="/test">Services</Link></div>
            <div id="P">Portfolio</div>
            <div id="E">Equipe</div>
            <div id="C">Contact</div>

        </div>
    );
    }