import styles from './styles.module.css';
export function Title({children}) {
  return <h1 className={styles.wrapper}>{children}</h1>;
}
