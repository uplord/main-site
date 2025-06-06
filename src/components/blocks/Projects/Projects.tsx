import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import styles from './style.module.scss'
import { projectsData } from '@/data/data'
import { useMounted } from '@/lib/useMounted'

export type ProjectsProps = {
  id?: string
}

export const Projects = ({ id }: ProjectsProps) => {
  const mounted = useMounted()
  const data = projectsData()

  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      id={id}
      className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={skeletonClass}>Projects I&rsquo;ve worked on</h2>
        </div>
        <div className={styles.grid}>
          {data.map((project, index) => (
            <div
              key={index}
              className={clsx(styles.item)}>
              {mounted ? (
                <div
                  className={styles.image}
                  style={{ backgroundColor: project.bgColor, color: project.textColor }}>
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
