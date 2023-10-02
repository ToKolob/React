import styles from './styles.module.css';
export function Title(props) {
  return <h1 className={styles.wrapper}>{props.title}</h1>;
}
