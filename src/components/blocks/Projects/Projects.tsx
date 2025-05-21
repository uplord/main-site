import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import clsx from 'clsx'
import { projectsData } from '@/data/data'

export type ProjectsProps = {
  id?: string
}

export const Projects = ({ id }: ProjectsProps) => {
  const [mounted, setMounted] = useState(false)
  const data = projectsData()

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div id={id} className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={skeletonClass}>
            Projects I&rsquo;ve worked on
          </h2>
        </div>
        <div className={styles.grid}>
          {data.map((project, index) => (
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
                <h3 className={skeletonClass}>{project.title}</h3>
                <p className={skeletonClass}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
