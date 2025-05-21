import imageLogo from '../assets/Desktop/LogoBranca.png'
import locIcon from '../assets/Desktop/Icones/locIcon.png'
import iconSearch from '../assets/Desktop/Icones/iconSearch.png'
import downArrow from '../assets/Desktop/Icones/downArrow.png'

export default function Header() {
    return (
        <>
            <header className="h-20 bg-black flex justify-between items-center px-25 ">
                <img src={imageLogo} className='w-25' />
                <nav className="flex justify-between items-center w-[82%]">
                    <form action="">
                        <div className='flex justify-between items-center border-2 rounded-md border-white h-10 w-85'>
                            <input type="search" className=' w-full h-full text-white p-3 focus:outline-none focus:ring-0 focus:border-none' placeholder='O que você procura?' />
                            <img src={iconSearch} className='m-2 cursor-pointer'/>

                        </div>
                    </form>
                    <ul className='flex items-center gap-5 text-white'>
                        <li className='buttonHeader'>Programação</li>
                        <li className='buttonHeader'>Categorias</li>
                        <li className='buttonHeader flex justify-between items-center px-2'><span className='flex gap-2 items-center'><img src={locIcon} />Seu Local</span> <img src={downArrow}/></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}