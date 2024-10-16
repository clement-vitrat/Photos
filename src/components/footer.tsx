import Link from "next/link";

export default function Footer() {
    return (
        <footer>

            <div className="container">
            
                <p className="user">
                    Clément VITRAT-GUTIERREZ
                </p>
            
                <p className="info">
                    Huitième arrondissement de Marseille
                </p>
            
                <div className="reseaux">
                    <Link href="https://www.instagram.com/clement_shutterbug/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/clement-vitrat-gutierrez-575444223/" target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="mailto:clementvitrat@gmail.com" target="_blank">
                        <i className="fa-brands fa-google"></i>
                    </Link>
                </div>

                <p className="copyright">
                    Copyright <i className="fa-regular fa-copyright"></i> 2024 - Tous droits réservés.
                </p>

                <p className="dev">
                    Développer et Designer par <Link href="https://clement-vitrat.github.io/MonPortfolio/">Clément VITRAT</Link>
                </p>

            </div>

        </footer>
    )
}