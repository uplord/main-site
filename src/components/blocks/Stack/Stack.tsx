import React from 'react'

import styles from './style.module.scss'
import AwsIcon from '@/../public/icons/aws.svg'
import CssIcon from '@/../public/icons/css.svg'
import GitIcon from '@/../public/icons/git.svg'
import GithubIcon from '@/../public/icons/github.svg'
import Html5Icon from '@/../public/icons/html5.svg'
import JsIcon from '@/../public/icons/js.svg'
import NetlifyIcon from '@/../public/icons/netlify.svg'
import NextjsIcon from '@/../public/icons/nextjs.svg'
import ReactIcon from '@/../public/icons/react.svg'
import SassIcon from '@/../public/icons/sass.svg'
import TypescriptIcon from '@/../public/icons/typescript.svg'
import VscodeIcon from '@/../public/icons/vscode.svg'
import { useMounted } from '@/lib/useMounted'

export type StackProps = {
  id?: string
}

const stackIcons = [
  { name: 'HTML5', Icon: Html5Icon },
  { name: 'CSS3', Icon: CssIcon },
  { name: 'JavaScript', Icon: JsIcon },
  { name: 'Sass', Icon: SassIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextjsIcon },
  { name: 'TypeScript', Icon: TypescriptIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'GitHub', Icon: GithubIcon },
  { name: 'AWS', Icon: AwsIcon },
  { name: 'Netlify', Icon: NetlifyIcon },
  { name: 'VS Code', Icon: VscodeIcon },
]

export const Stack = ({ id }: StackProps) => {
  const mounted = useMounted()

  const skeletonClass = !mounted ? styles.skeleton : ''

  return (
    <div
      id={id}
      className={styles.stack}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={skeletonClass}>My current stack</h2>
        </div>
        <div className={styles.list}>
          {stackIcons.map(({ name, Icon }) => (
            <div
              key={name}
              className={styles.item}>
              {mounted ? (
                <div
                  className={styles.image}
                  data-tooltip={name}>
                  <Icon
                    width="60"
                    height="60"
                    alt={name}
                  />
                </div>
              ) : (
                <div className={styles.image}>
                  <div className={styles.skeleton}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
