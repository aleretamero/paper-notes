import styles from './styles.module.css';

export const MenuBurger = () => {
  return (
    <label htmlFor="burger" className={styles.menuBurger}>
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};
