export default function Categories (){
    return(
        <>
        <section className="w-132.5">
            <h2 className="my-3 text-bold text-xl">CATEGORIAS</h2>
            <nav className="grid grid-cols-2 gap-5 text-white text-xl">
                <div className="flex flex-col gap-4">
                    <button className="button buttonYellow">SHOWS</button>
                    <button className="button buttonRed">TEATRO</button>
                    <button className="button buttonBlue">FESTIVAIS</button>
                    <button className="button buttonGreen">CINEMA</button>
                </div>
                <div className="flex flex-col gap-4">
                    <button className="button buttonYellow">ARTE</button>
                    <button className="button buttonRed">FOTOGRAFIA</button>
                    <button className="button buttonBlue">TECNOLOGIA</button>
                    <button className="button buttonGreen">DESIGN</button>
                </div>
            </nav>
        </section>
        </>
    )
}