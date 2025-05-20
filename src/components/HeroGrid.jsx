import bannerOne from '../assets/Desktop/Banners/Banner1.png'
import bannerTwo from '../assets/Desktop/Banners/Banner2.png'
import bannerThree from '../assets/Desktop/Banners/Banner3.png'
import bannerFour from '../assets/Desktop/Banners/Banner4.png'

export default function HeroGrid() {
    return (
        <>
            <section>
                <div className='w-270 mx-auto grid grid-cols-[2.5fr_1.212fr_1.2fr] gap-5'>
                    <div className=''>
                        <img src={bannerOne} />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className=''>
                            <img src={bannerTwo} />
                        </div>
                        <div className=''>
                            <img src={bannerThree} />
                        </div>
                    </div>
                    <div className=''>
                        <img src={bannerFour} />
                    </div>
                </div>
            </section>
        </>
    )
}