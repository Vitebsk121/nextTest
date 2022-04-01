import styles from "../styles/NavLink.module.scss"
import Link from "next/link";

export default ({href, text}) => {
  return (
    <Link  href={href}>
      <a className={styles.link}>{text}</a>
    </Link>
  )
}
