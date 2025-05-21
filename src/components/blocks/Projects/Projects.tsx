import Image from 'next/image'
import styles from './style.module.scss'
import clsx from 'clsx'

export type ProjectsProps = {
  id?: string
}

export const Projects = ({ id }: ProjectsProps) => {
  return (
    <div id={id} className={styles.projects}>
      <div className={styles.container}>
        <div>
          <h2>Projects I&lsquo;ve worked on</h2>
        </div>
        <div className={styles.grid}>
          <div className={clsx(styles.item, styles['item-2'])}>
            <div className={styles.image} style={{ backgroundColor: '#008fbe', color: '#FFF' }}>
              <Image
                src="/images/brewdog.svg"
                alt="Brewdog"
                width={173}
                height={50}
              />
            </div>
            <div className={styles.text}>
              <h3>Brewdog Now</h3>
              <p>BrewDog Now is BrewDog&lsquo;s rapid beer delivery and ordering service, designed to bring fresh craft beer and food directly to your door or table.</p>
            </div>
          </div>
          <div className={clsx(styles.item, styles['item-2'])}>
            <div className={styles.image} style={{ backgroundColor: '#ff7a00', color: '#000' }}>
              <Image
                src="/images/gdk.svg"
                alt="GDK"
                width={166}
                height={50}
              />
            </div>
            <div className={styles.text}>
              <h3>GDK</h3>
              <p>German Doner Kebab is a modern fast-food chain serving fresh, gourmet kebabs made with lean meats, handmade bread, and signature sauces.</p>
            </div>
          </div>
          <div className={clsx(styles.item, styles['item-2'])}>
            <div className={styles.image} style={{ backgroundColor: '#3A0642', color: '#FFF' }}>
              <Image
                src="/images/leaseloco.svg"
                alt="Leaseloco"
                width={268}
                height={60}
              />
            </div>
            <div className={styles.text}>
              <h3>Leaselcoo</h3>
              <p>LeaseLoco is the UK&lsquo;s leading car lease comparison site, making it easy to find and compare top deals with real-time pricing and value scores.</p>
            </div>
          </div>
          <div className={clsx(styles.item, styles['item-2'])}>
            <div className={styles.image} style={{ backgroundColor: '#0F554A', color: '#FFF' }}>
              <Image
                src="/images/macdonald.svg"
                alt="Macdonald Hotels & Resorts"
                width={222}
                height={60}
              />
            </div>
            <div className={styles.text}>
              <h3>Macdonald Hotels & Resorts</h3>
              <p>Macdonald Hotels & Resorts is a UK hotel group offering luxury stays, fine dining, and spa experiences in scenic locations.</p>
            </div>
          </div>
          <div className={clsx(styles.item, styles['item-2'])}>
            <div className={styles.image} style={{ backgroundColor: '#14569e', color: '#FFF' }}>
              <Image
                src="/images/snappy.svg"
                alt="Snappy Shopper"
                width={138}
                height={50}
              />
            </div>
            <div className={styles.text}>
              <h3>Snappy Shopper</h3>
              <p>Snappy Shopper is a rapid grocery delivery app connecting you with local convenience stores for same-day delivery in under 30 minutes.</p>
            </div>
          </div>
          <div className={clsx(styles.item, styles['item-2'])}>
            <div className={styles.image} style={{ backgroundColor: '#F33E3E', color: '#FFF' }}>
              <Image
                src="/images/hungrrrr.svg"
                alt="Hungrrr"
                width={187}
                height={60}
              />
            </div>
            <div className={styles.text}>
              <h3>Hungrrr</h3>
              <p>Hungrrr is a UK-based platform enabling restaurants and takeaways to create branded ordering websites and apps with zero commission fees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
