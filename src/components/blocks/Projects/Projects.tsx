import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import clsx from 'clsx'

export type ProjectsProps = {
  id?: string
}

export const Projects = ({ id }: ProjectsProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: 'Brewdog Now',
      description:
        'BrewDog Now is BrewDog’s rapid beer delivery and ordering service, designed to bring fresh craft beer and food directly to your door or table.',
      img: '/images/brewdog.svg',
      alt: 'Brewdog',
      bgColor: '#008fbe',
      textColor: '#FFF',
      width: 173,
      height: 50,
    },
    {
      title: 'GDK',
      description:
        'German Doner Kebab is a modern fast-food chain serving fresh, gourmet kebabs made with lean meats, handmade bread, and signature sauces.',
      img: '/images/gdk.svg',
      alt: 'GDK',
      bgColor: '#ff7a00',
      textColor: '#000',
      width: 166,
      height: 50,
    },
    {
      title: 'Leaseloco',
      description:
        'LeaseLoco is the UK’s leading car lease comparison site, making it easy to find and compare top deals with real-time pricing and value scores.',
      img: '/images/leaseloco.svg',
      alt: 'Leaseloco',
      bgColor: '#3A0642',
      textColor: '#FFF',
      width: 268,
      height: 60,
    },
    {
      title: 'Macdonald Hotels & Resorts',
      description:
        'Macdonald Hotels & Resorts is a UK hotel group offering luxury stays, fine dining, and spa experiences in scenic locations.',
      img: '/images/macdonald.svg',
      alt: 'Macdonald Hotels & Resorts',
      bgColor: '#0F554A',
      textColor: '#FFF',
      width: 222,
      height: 60,
    },
    {
      title: 'Snappy Shopper',
      description:
        'Snappy Shopper is a rapid grocery delivery app connecting you with local convenience stores for same-day delivery in under 30 minutes.',
      img: '/images/snappy.svg',
      alt: 'Snappy Shopper',
      bgColor: '#14569e',
      textColor: '#FFF',
      width: 138,
      height: 50,
    },
    {
      title: 'Hungrrr',
      description:
        'Hungrrr is a UK-based platform enabling restaurants and takeaways to create branded ordering websites and apps with zero commission fees.',
      img: '/images/hungrrrr.svg',
      alt: 'Hungrrr',
      bgColor: '#F33E3E',
      textColor: '#FFF',
      width: 187,
      height: 60,
    },
  ]

  return (
    <div id={id} className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={!mounted ? styles.skeleton : ''}>
            Projects I&rsquo;ve worked on
          </h2>
        </div>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={clsx(styles.item)}>
              {mounted ? (
                <div
                  className={styles.image}
                  style={{ backgroundColor: project.bgColor, color: project.textColor }}
                >
                  <Image
                    src={project.img}
                    alt={project.alt}
                    width={project.width}
                    height={project.height}
                  />
                </div>
              ) : (
                <div className={styles.image}>
                  <div className={styles.skeleton}></div>
                </div>
              )}
              <div className={styles.text}>
                <h3 className={!mounted ? styles.skeleton : ''}>{project.title}</h3>
                <p className={!mounted ? styles.skeleton : ''}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
