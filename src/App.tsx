import React, { useState } from "react";
import styles from "./App.module.css";
import poweredImg from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";
import { levels, calculateImc, Level } from "./helpers/imc";
import { GridItem } from "./components/Griditem";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  function handleBackBtn() {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }
  function handleCalculator() {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Digite todos os campos !");
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} alt="" width={350} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          {" "}
          <h1>Calcule o seu IMC</h1>
          <p>
            O índice de massa corporal é uma medida internacional (IMC) usada
            para calcular se uma pessoa está no peso ideal.
          </p>
          <input
            type="number"
            placeholder="Digite a sua Altura Ex 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          ></input>
          <input
            type="number"
            placeholder="Digite o seu Peso Ex 65 (em quilos)"
            value={weightField > 0 ? weightField : ""}
            disabled={toShow ? true : false}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          ></input>
          <button onClick={handleCalculator} disabled={toShow ? true : false}>
            {" "}
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rigthArrow} onClick={handleBackBtn}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
