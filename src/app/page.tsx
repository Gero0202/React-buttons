'use client'

import styles from "./page.module.css";
import { Michroma } from 'next/font/google'
import { CardsButton } from "./component/CardButton";
import Button from "./component/buttons/Button";
import { useState } from "react";
import button1 from "@/app/css/buttons/buttonone.module.css"
import { FaReact } from "react-icons/fa";

const pacifico = Michroma({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const [cssCode, setCssCode] = useState("")

  const closeModal = () => setCssCode("");

  return (
    <>
      <div className={styles["div-home"]}>
        <div className={styles["div-first-title"]}>
          <p className={`${styles["first-title"]} ${pacifico.className}`}>React Buttons</p>
          <button className={styles["react-icons"]}>
            <FaReact color="#58C4DC" size={"44px"} />
          </button>
        </div>
        <p className={`${styles["second-title"]} ${pacifico.className}`}>by <a href="https://github.com/Gero0202">Gero Tortosa</a></p>

        <a href="https://github.com/Gero0202/React-buttons" target="_blank" className={styles["fork-btn"]} title="Fork me on GitHub">
          <p>Fork me on GitHub</p>
        </a>

      </div>

      <div className={styles["div-first-container"]}>
        <div className={styles["div-container"]}>
          <CardsButton title="Clasic">
            <Button
              text="Click me"
              className={button1["button-clasic"]}
              cssCode={`
.boton1 {
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.boton1:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
              `}
              onClick={setCssCode}
            />
          </CardsButton>

          <CardsButton title="Ghost">
            <Button
              text="Click me"
              className={button1["btn-outline"]}
              onClick={setCssCode}
              cssCode={`
  .btn-outline {
  background: transparent;       
  color: #777777;               
  border: 2px solid #333;         
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;       
}

.btn-outline:hover {
  background: #333;               
  color: white;                   
}
                `}
            />
          </CardsButton>

          <CardsButton title="Fill Up">
            <Button
              text="Click me"
              className={button1["btn-fill-center"]}
              onClick={setCssCode}
              cssCode={`
  .btn-fill-center {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  border: 2px solid #007bff;
  border-radius: 2px;
  background: transparent;
  color: #007bff;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 1;
}

.btn-fill-center::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: #007bff;
  transition: all 0.7s ease;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: -1; 
}

.btn-fill-center:hover {
  color: white; 
}

.btn-fill-center:hover::before {
  width: 300%;
  height: 300%;
}
                `}
            />
          </CardsButton>

          <CardsButton title="Shadow">
            <Button
              text="Click me"
              className={button1["btn-shadows"]}
              onClick={setCssCode}
              cssCode={`
  .btn-shadows {
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  background: #ffffff;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow:
    2px 2px 6px rgba(0, 0, 0, 0.2),    
    -2px -2px 6px rgba(255, 255, 255, 0.6), 
    inset 0 0 0 rgba(0,0,0,0);       
}

.btn-shadows:hover {
  box-shadow:
    4px 4px 12px rgba(0, 0, 0, 0.25),
    -4px -4px 12px rgba(255, 255, 255, 0.8),
    inset 2px 2px 6px rgba(0,0,0,0.1);  
  transform: translateY(-3px); 
  color: #111;
}
                `}
            />
          </CardsButton>

          <CardsButton title="Rainbow">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-liquido"]}
              cssCode={`
  .btn-liquido {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background: #111;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  letter-spacing: 2px;
  font-family: sans-serif;
  z-index: 1;
  transition: color 0.3s ease;
}

.btn-liquido::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg,
      #ff007c,
      #ffdd00,
      #00ffe5,
      #ff007c);
  animation: spin 4s linear infinite;
  z-index: -2;
}

.btn-liquido::after {
  content: "";
  position: absolute;
  inset: 3px;
  background: #0d0d0d;
  border-radius: 10px;
  z-index: -1;
}

.btn-liquido:hover {
  color: #00ffe5;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
                `}
            />
          </CardsButton>

          <CardsButton title="Neon">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-neon"]}
              cssCode={`
.btn-neon {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  color: #0ff;
  background: #111;
  border: 2px solid #0ff;
  border-radius: 8px;
  font-family: monospace;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
}

.btn-neon:hover {
  color: #fff;
  transform: translateY(-6px) scale(1.02);
  box-shadow:
    0 0 10px #0ff,
    0 0 20px #0ff,
    0 0 40px #0ff,
    0 0 60px #0ff inset;
}
                `}
            />
          </CardsButton>

          <CardsButton title="Crystal">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-cristal"]}
              cssCode={`
.btn-cristal {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(6px) saturate(180%);
  font-family: 'Arial', sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
}

.btn-cristal:hover {
  color: #ffffff;
  transform: scale(1.05);
}

.btn-cristal::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255,255,255,0.3), rgba(0,0,0,0));
  mix-blend-mode: overlay;
  border-radius: 1px;
  z-index: 0;
  transition: all 0.6s ease;
}

.btn-cristal:hover::before {
  transform: rotate(20deg) scale(1.2);
}
                `}
            />
          </CardsButton>

          <CardsButton title="Holo">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-holo"]}
              cssCode={`
.btn-holo {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Verdana', sans-serif;
  font-weight: bold;
  color: #000000;
  background: #111;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  perspective: 500px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
}

.btn-holo::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffdd00, #ff00ff);
  background-size: 200% 200%;
  z-index: -1;
  filter: blur(10px);
  transition: all 0.5s ease;
}

.btn-holo:hover {
  transform: rotateX(5deg) rotateY(5deg) scale(1.05);
  box-shadow: 0 8px 25px rgba(0,0,0,0.6);
}

.btn-holo:hover::before {
  background-position: 100% 100%;

                `}
            />
          </CardsButton>

          <CardsButton title="Submit">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-serio"]}
              cssCode={`
.btn-serio {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Helvetica', sans-serif;
  font-weight: 600;
  color: #fff;
  background: #4b6b8a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.btn-serio:hover {
  background: #4c5967; 
  box-shadow: 0 8px 15px rgba(0,0,0,0.3);
  transform: translateY(-2px);
}

.btn-serio::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: linear-gradient(120deg, rgba(255,255,255,0.15), transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.btn-serio:hover::after {
  opacity: 1; 
}

                `}
            />
          </CardsButton>

          <CardsButton title="Modern">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-gradient"]}
              cssCode={`
.btn-gradient {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  background-size: 200% 200%;
  transition: all 0.5s ease;
  overflow: hidden;
}

.btn-gradient:hover {
  background: linear-gradient(90deg, #ff416c, #ff4b2b);
  background-position: right center;
  transform: scale(1.05);
}

                `}
            />
          </CardsButton>

          <CardsButton title="Splash">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-border-expand"]}
              cssCode={`
.btn-border-expand {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #ffffff;
  background: transparent;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 0;
}

.btn-border-expand::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 8px;
  transform: scale(0);
  transition: transform 0.4s ease;
  z-index: -1;
}

.btn-border-expand:hover {
  color: rgb(0, 0, 0);
}

.btn-border-expand:hover::before {
  transform: scale(1.2);
}

                `}
            />
          </CardsButton>

          <CardsButton title="Magic">
            <Button
              text="⭐"
              onClick={setCssCode}
              className={button1["btn-icono"]}
              cssCode={`
.btn-icono {
  position: relative;
  width: 50px;
  height: 50px;
  background: #111;
  color: #ffdd00;
  border: 2px solid #ffdd00;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 24px;
  line-height: 1; 
  padding: 0; 
  transition: transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.btn-icono:hover {
  color: #ff416c;
  transform: rotate(141deg) scale(1.2);
  box-shadow: 0 0 15px #ff416c, 0 0 25px #ffdd00;
}

.btn-icono::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: 0;
  left: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-icono:hover::after {
  opacity: 1;
}

                `}
            />
          </CardsButton>

          <CardsButton title="Corner">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-esquina"]}
              cssCode={`
.btn-esquina {
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background: #ffffff;
  border: none;
  border-radius: 50px; 
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.btn-esquina:hover {
  border-radius: 4px; 
  box-shadow: 0 8px 25px rgba(0,0,0,0.4);
  transform: scale(1.05);
}

                `}
            />
          </CardsButton>

          <CardsButton title="Push">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-empuje"]}
              cssCode={`
.btn-empuje {
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: white;
  background: #1e90ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease;
  box-shadow: 0 6px #0d5ea8; 
  position: relative;
}

.btn-empuje:hover {
  transform: translateY(-2px); 
  box-shadow: 0 8px #0d5ea8;
}

.btn-empuje:active {
  transform: translateY(2px); 
  box-shadow: 0 2px #0d5ea8; 
}

.btn-empuje span {
  display: inline-block;
  transition: transform 0.1s ease;
}

.btn-empuje:active span {
  transform: translateY(1px); 
}


                `}
            />
          </CardsButton>

          <CardsButton title="Draw">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-dibujo"]}
              cssCode={`
.btn-dibujo {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: #ff416c;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease;
}

.btn-dibujo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border: 2px solid #ff416c;
  border-radius: 12px;
  transition: width 0.4s ease;
  box-sizing: border-box;
}

.btn-dibujo:hover {
  color: #ff416c;
}

.btn-dibujo:hover::before {
  width: 100%;
}

                `}
            />
          </CardsButton>

          <CardsButton title="Draw">
            <Button
              text="Click me"
              onClick={setCssCode}
              className={button1["btn-3d"]}
              cssCode={`
.btn-3d {
  padding: 12px 24px;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: #000000;
  background: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px #909090;
  perspective: 500px;
}

.btn-3d:hover {
  transform: rotateX(15deg) rotateY(10deg) scale(1.05);
  box-shadow: 0 12px #797979;
}

                `}
            />
          </CardsButton>
        </div>
      </div>
      <footer className={styles["footer"]}>
        © 2025 Gero Tortosa
      </footer>
      {cssCode && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} >
            <button className={styles.closeButton} onClick={closeModal}>✖</button>
            <pre>{cssCode}</pre>
          </div>
        </div>
      )}

    </>
  );
}
