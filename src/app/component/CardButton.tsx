import styles from "@/app/css/crdsbutton.module.css"

import { ReactNode } from "react";

export const CardsButton = ({ children, title }: { children: ReactNode; title: string }) =>{
    return (
        <div className={styles["div-card"]}>
            <p>{title}</p>
            {children}
        </div>
    )
}