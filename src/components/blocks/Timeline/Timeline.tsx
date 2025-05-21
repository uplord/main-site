import styles from './style.module.scss'

export type TimelineProps = {
  id?: string
}

export const Timeline = ({ id }: TimelineProps) => {
  return (
    <div id={id} className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h3>My timeline</h3>
          <h2>Explore key roles and milestones over the years</h2>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <h4>Jan 2025 - Present</h4>
            <h3>Software Engineer</h3>
            <div className={styles.info}>
            <p>At LeaseLoco, I help build and maintain a high-performance, user-focused website. I work across the full development lifecycle, focusing on key features like our scoring algorithm, vehicle configurator, and price alerts. Collaborating with engineers and designers, I write clean, scalable code that meets Core Web Vitals and accessibility standards, ensuring a fast, inclusive experience across all devices.</p>
            </div>
          </div>
          <div className={styles.item}>
            <h4>Sept 2021 - Jan 2025</h4>
            <h3>Senior Front End Developer</h3>
            <div className={styles.info}>
              <p>Returning to Hungrrr full time just in time for the merger with Snappy Shopper and continuing to lead the front end of the Hungrrr platform while also assisting the Snappy Shopper team. Updating and improving the ordering platform to keep up with style trends and work better for clients and members in the team.</p>
              <p>Maintaining hundreds of clients websites and making periodic changes to improve their performance and help pull through more sales. Increasing the amount of client enquiries to join the platforms through updates to the B2B websites making it easier to sign up and to keep a track of these leads.</p>
            </div>
          </div>
          <div className={styles.item}>
            <h4>May 2020 - July 2020</h4>
            <h3>Front End Developer</h3>
            <div className={styles.info}>
              <p>Leading front end in the company at the beginning of the pandemic. Integrating a table ordering system for businesses reopening to make the users journey easier and opening up this feature to all the client on this platform.</p>
              <p>Developing an internal business setup tool to make it easier for our team to add businesses to our system and also maintain clients. Continuing to do work for them while back at mtc due to the impact I made in the company even in just a short period of time.</p>
            </div>
          </div>
          <div className={styles.item}>
            <h4>Sept 2015 - Sept 2021</h4>
            <h3>Front End Developer</h3>
            <div className={styles.info}>
              <p>While in mtc I have worked in many areas of the company from leading projects to dealing with aftercare for clients. I was able to work on complex projects early into joining the company without needing much assistance to mentoring newer members of staff.</p>
              <p>I have dealt with hundreds of different websites and have the ability to work to tight deadlines without lowering quality. I have been able to work across multiple teams in the company and am quick to adapt to new situations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
