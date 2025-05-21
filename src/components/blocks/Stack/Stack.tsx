import styles from './style.module.scss'

import Html5Icon from '@/../public/icons/html5.svg'
import CssIcon from '@/../public/icons/css.svg'
import JsIcon from '@/../public/icons/js.svg'
import SassIcon from '@/../public/icons/sass.svg'
import ReactIcon from '@/../public/icons/react.svg'
import NextjsIcon from '@/../public/icons/nextjs.svg'
import TypescriptIcon from '@/../public/icons/typescript.svg'
import GitIcon from '@/../public/icons/git.svg'
import GithubIcon from '@/../public/icons/github.svg'
import AwsIcon from '@/../public/icons/aws.svg'
import NetlifyIcon from '@/../public/icons/netlify.svg'
import VscodeIcon from '@/../public/icons/vscode.svg'

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
  return (
    <div id={id} className={styles.stack}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>My current stack</h2>
        </div>
        <div className={styles.list}>
          {stackIcons.map(({ name, Icon }) => (
            <div key={name} className={styles.item}>
              <div className={styles.image} data-tooltip={name}>
                <Icon width="60" height="60" alt={name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
