import { Level } from "../../helpers/imc";
import styles from "./Griditem.module.css";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = { item: Level };

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        {item.icon === "up" && <img src={upImage} alt="" width="30px"></img>}
        {item.icon === "down" && (
          <img src={downImage} alt="" width="30px"></img>
        )}
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {item.yourImc && (
        <div className={styles.imcResult}>
          Seu IMC e de é {item.yourImc} Kg/m²
        </div>
      )}
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
