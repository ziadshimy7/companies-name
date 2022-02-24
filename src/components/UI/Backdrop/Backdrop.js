import styles from "./Backdrop.module.css";
const BackdropOverlay = ({ onClickHandler }) => {
  return (
    <div
      onClick={() => {
        onClickHandler(false);
      }}
      className={styles.backdrop}
    ></div>
  );
};
export default BackdropOverlay;
