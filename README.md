# 🌻 Flores Amarillas de Primavera
### *Para Sabrina, Solana y Felicitas*

Una experiencia web interactiva, delicada y optimizada para celulares para conmemorar el 21 de Septiembre (inicio de la primavera) con la tradicional entrega de flores amarillas.

---

## 💛 Estructura del Obsequio

1. **Pantalla de Bienvenida:** Portada delicada con pétalos de rosa flotando en brisa suave y el botón **"Abrí tu Obsequio"**.
2. **Paso 1 (Sabrina):** Rosa amarilla floreciendo en animación continua con dedicatoria poética.
3. **Paso 2 (Solana):** Segunda flor radiante con mensaje dedicado a su luz y alegría.
4. **Paso 3 (Felicitas):** Tercera flor con mensaje tierno y cariñoso.
5. **Ramillete Final:** Las tres rosas unidas en un lazo dorado con los tres nombres y el mensaje principal:
   > *"Las flores son digitales pero el corazón es real"*
6. **Música ambiental suave:** Melodía sintetizada en tiempo real mediante *Web Audio API* (sonido cálido tipo arpa / campanitas celestiales) con botón flotante para silenciar o reanudar cuando deseen.

---

## ✍️ Cómo personalizar los mensajes

Si querés cambiar o retocar las dedicatorias poéticas:
1. Abrí el archivo [`index.html`](index.html).
2. Buscá las secciones `<section id="step-sabrina">`, `<section id="step-solana">`, o `<section id="step-felicitas">`.
3. Editá el texto dentro de la etiqueta `<p class="poetic-message">...</p>`.
4. Guardá el archivo.

---

## 🚀 Cómo subir a GitHub y activar GitHub Pages para compartir el link

Para que tu esposa y tus hijas puedan abrirlo en sus teléfonos móviles desde cualquier lugar:

### Opción Rápida con Git en la terminal:
1. Creá un nuevo repositorio en tu cuenta de [GitHub](https://github.com/new) (por ejemplo llamado `flores-amarillas` o `flores`). Podés ponerlo como **Público**.
2. En tu terminal o consola dentro de esta carpeta (`c:\Flores`), ejecutá:
   ```bash
   git init
   git add .
   git commit -m "Obsequio de flores amarillas de primavera"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPOSITORIO.git
   git push -u origin main
   ```
3. En tu repositorio de GitHub, andá a **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
4. En **Build and deployment** > **Branch**, seleccioná la rama `main` y la carpeta `/(root)`.
5. Hacé clic en **Save**.
6. ¡Listo! En 1 a 2 minutos GitHub te dará el enlace:
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`
   Ese enlace lo podés enviar por WhatsApp para que lo abran en sus celulares.

---

### Opción Visual (sin consola):
1. Creá el repositorio en [github.com/new](https://github.com/new).
2. Hacé clic en **"uploading an existing file"** (subir archivos existentes).
3. Arrastrá los archivos `index.html`, `style.css`, `script.js` y `README.md`.
4. Hacé clic en **Commit changes**.
5. Andá a **Settings** > **Pages**, elegí rama `main` y hacé clic en **Save**.
