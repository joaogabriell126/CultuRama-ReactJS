import footerLogo from '../assets/Desktop/LogoBranca.png'

export default function Footer(){
    return(
        <>
            <footer className="flex justify-center items-center h-85 w-full bg-black text-[#C2C2C2]">
                <article className=" w-280 grid grid-cols-6 border-amber-300 //border">
                    <nav>
                        <h2>Encontre Eventos</h2>
                        <ul>
                            <li>Esta semana</li>
                            <li>Este fim de semana</li>
                            <li>Este mês</li>
                            <li>Este trimestre</li>
                        </ul>
                    </nav>
                    <nav>
                        <h2>Cidades</h2>
                        <ul>
                            <li>São Paulo</li>
                            <li>Rio de Janeiro</li>
                            <li>Porto Alegre</li>
                            <li>Salvador</li>
                        </ul>
                    </nav>
                    <nav>
                        <h2>Categorias</h2>
                        <ul>
                            <li>Shows</li>
                            <li>Arte</li>
                            <li>Teatro</li>
                            <li>Fotografia</li>
                            <li>Festivais</li>
                            <li>Design</li>
                            <li>Cinema</li>
                            <li>Tecnologia</li>
                        </ul>
                    </nav>
                    <nav>
                        <h2>Sobre nós</h2>
                        <ul>
                            <li>Carreira</li>
                            <li>História</li>
                            <li>Contato</li>
                            <li>Localização</li>
                        </ul>
                    </nav>
                    <nav>
                        <h2>Anuncie seu evento</h2>
                        <ul>
                            <li>Música e festas</li>
                            <li>Cursos e workshops</li>
                            <li>Esportivo</li>
                            <li>Congresspo</li>
                            <li>Religioso</li>
                            <li>Online</li>
                        </ul>
                    </nav>
                    <div className='flex flex-col-reverse items-center h-75'>
                        <img src={footerLogo} className='w-20'/>
                    </div>
                </article>
            </footer>
        </>
    )
}