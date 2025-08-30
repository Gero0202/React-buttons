# 🔵 React-Buttons

React-Buttons es una coleccion de botones estilizados con CSS puro, listos para usar en cualquier proyecto.
La idea es que un usuario pueda navegar la galeria de botones, elegir el que mas le guste y copiar facilmente su codigo CSS, sin importar si trabaja con React, Next.js o cualquier otro framework:
👉 Si hay CSS, el botón se puede usar.

---

## 🎨 Cómo usar un botón en tu proyecto

1. Explora la galeria y haz click en un boton que te guste.
  
2. Copia el codigo CSS que aparece en pantalla.

3. Pegalo en tu archivo CSS o modulo de estilos.

---

## 🛠️ Como colaborar

Si quieres aportar un nuevo boton:

1. Crea el CSS
 - Dentro de la carpeta css/buttons/  agrega tu codigo CSS entre comentarios /**/ :
```bash
/**/
.button-one {
  background: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.button-one:hover {
  background: #45a049;
}
/**/
```

2. Agrega un nuevo CardsButton en page y en cssCode agregar el codigo funcional que se va a ver al hacer click

```bash
<CardsButton title="Boton Verde">
  <Button 
    text="Click me" 
    className={button1["button-one"]} 
    onClick={setCssCode} 
    cssCode={`/* tu CSS aquí */`} 
  />
</CardsButton>
```

3. Haz un Pull Request
 - Asegurate de que tu boton funciona.
 - Abre un PR para que se revise y se sume a la galeria.

---

## 🚀 Deploy

[Vercel](https://react-buttons-ten.vercel.app/)

--- 

## 🌟 Creditos

- Desarrollado por Geronimo Tortosa 



 
   

