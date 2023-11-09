import styles from './hero.module.css';

export default function Hero() {
    return <section className={styles.hero}>
        <div className={styles.hero_bubble + ' bg-light-pink'}>
            <h1 className='font-bold text-lg sm:text-2xl md:text-4xl lg:text-5xl'>Sweet Treats never felt so <span className='text-dark-pink'>indulgent</span></h1>
            <p className='text-gray w-4/5 text-sm mt-1 sm:text-sm md:text-lg lg:text-xl lg:mt-5'>Discover why baked goods never tasted so good</p>
            <button className='rounded-full bg-dark-pink p-2 text-white text-sm sm:text-lg md:text-xl'> ORDER NOW</button>
        </div>
        <div className={styles.hero_image}>
            <img src='shapes/behind-brownies.svg' className={styles.hero_shape}/>
            <img src='products/brownies.png'
                className={styles.hero_photo + ' rounded-4xl'} />
        </div>
    </section>
}