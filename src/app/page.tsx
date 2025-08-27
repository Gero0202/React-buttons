'use client'

import styles from "./page.module.css";
import { Michroma } from 'next/font/google'
import { CardsButton } from "./component/CardButton";
import Button from "./component/buttons/Button";
import { useState } from "react";
import button1 from "@/app/css/buttons/buttonone.module.css"

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
        <p className={`${styles["first-title"]} ${pacifico.className}`}>React Buttons</p>
        <p className={`${styles["second-title"]} ${pacifico.className}`}>by <a href="https://github.com/Gero0202">Gero Tortosa</a></p>
      </div>
      <div className={styles["div-first-container"]}>
        <div className={styles["div-container"]}>
          <CardsButton title="Clasic">
            <Button 
            text="Clasic"
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
              text="Click!"  
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

          <CardsButton title="Clasic">
            <Button 
              text="Rojo"  
              className="boton-rojo"
              onClick={setCssCode}
              cssCode=".boton-rojo {color-red}"
              />
          </CardsButton>

          
        </div>
      </div>
      {cssCode && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>✖</button>
            <pre>{cssCode}</pre>
          </div>
        </div>
      )}

    </>
  );
}
