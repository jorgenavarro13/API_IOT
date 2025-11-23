

## Errores que cometí en estre proyecto y como solucionarlos.

Aquí tienes un **README.md profesional**, enfocado **exclusivamente en los errores que tuviste y cómo los solucionamos**, listo para ser ampliado en el futuro.
Puedes copiarlo directo a tu proyecto.

---

# **README.md**

# API IoT 2025

**Proyecto de API para sensorización, manejo de datos y conexión a base de datos MySQL/Aiven.**
Este documento incluye, por ahora, únicamente el registro de errores encontrados durante el desarrollo y sus soluciones, con fines de aprendizaje y referencia futura.

---

## 📘 **Registro de Errores y Soluciones**

Este apartado documenta los principales problemas enfrentados durante el desarrollo de la API, especialmente relacionados con:

* Variables de entorno
* Git y GitHub (push protection, commits, ramas)
* Configuración ESM/CJS en Node.js
* Conexiones a MySQL/Aiven
* Powershell / permisos / npm

---

# 🧩 **1. Problemas con variables de entorno `.env`**

### ❌ **Error:**

Las variables `process.env` aparecían como `undefined` dentro del proyecto.

### ✔ **Solución:**

1. Se instaló `dotenv` correctamente:

   ```bash
   npm install dotenv
   ```
2. Se cargó explícitamente al inicio del archivo de configuración:

   ```js
   import dotenv from 'dotenv';
   dotenv.config();
   ```
3. Se verificó que el archivo `.env` estuviera en el mismo nivel que `app.js`.
4. Se imprimieron logs de depuración:

   ```js
   console.log("Host:", process.env.AIVEN_HOST);
   ```
5. Se confirmó que `.env` **no estuviera siendo ignorado por VSCode**, sino cargado por Node.

---

# 🧩 **2. Error de Node.js: `"module is not defined in ES module scope"`**

### ❌ **Causa:**

El proyecto estaba declarado como **ES Modules** (`"type": "module"` en package.json), pero algunos archivos seguían usando `module.exports` (sintaxis CommonJS).

### ✔ **Solución:**

Convertir la exportación a ESM:

```js
export default {
  dbHost,
  dbPort,
  dbUser,
  dbPass,
  dbName,
  // ...
};
```

Y actualizar las importaciones:

```js
import constants from './constants.js';
```

---

# 🧩 **3. Powershell bloqueaba `npm install`**

### ❌ **Error:**

```
npm.ps1 cannot be loaded because running scripts is disabled on this system
```

### ✔ **Solución:**

Ejecutar Powershell como administrador y habilitar scripts:

```powershell
Set-ExecutionPolicy RemoteSigned
```

---

# 🧩 **4. `.env` fue detectado como secreto por GitHub (Push Protection)**

### ❌ **Error:**

GitHub rechazó el push con:

```
Push cannot contain secrets
Aiven Service Password detected in .env
```

### ✔ **Solución:**

1. **Eliminar el .env del historial y del staging:**

   ```bash
   git rm --cached .env
   ```
2. Añadir correctamente al `.gitignore`:

   ```
   .env
   .env.*
   ```
3. Rehacer commit limpio SIN el .env.
4. Forzar push nuevamente.

---

# 🧩 **5. Git no permitía push desde la rama `aiven`**

### ❌ **Problema:**

```
fatal: The current branch aiven has no upstream branch
```

### ✔ **Solución:**

Configurar la rama remota:

```bash
git push --set-upstream origin aiven
```

Y luego ya es posible usar simplemente:

```bash
git push
```

---

# 🧩 **6. GitHub seguía detectando secretos incluso después del .gitignore**

### ❌ **Causa:**

El `.env` ya había sido subido antes, por lo que GitHub lo detectaba *en commits antiguos* (aunque ya no existiera).

### ✔ **Solución:**

* Borrar el archivo del repositorio (`git rm --cached .env`)
* Hacer un commit limpio sin secretos
* Hacer el push nuevamente (ya sin bloqueos)

---

# 🧩 **7. Conexión con Aiven no funcionaba y no era claro el motivo**

### ✔ **Solución: Se agregó un bloque de debug**

```js
console.log("=== MySQL Debug Info ===");
console.log("Host:", HOST);
console.log("Port:", PORT);
console.log("User:", USR);
console.log("Database:", DB);
```

Gracias a esto se detectó correctamente:

* Variables cargadas
* Host válido
* Puerto correcto
* Conexión establecida

---

# 🧩 **8. Confusión entre CMD y Powershell**

### Explicación técnica importante:

* **PowerShell** bloquea scripts por seguridad → impide usar `npm.ps1`.
* **CMD** no bloquea scripts → funciona sin configurar nada.

Esto explica por qué **npm funcionaba en CMD pero no en PowerShell**.

---

## ✔ Resultado Final

Después de aplicar todas las correcciones:

* Variables de entorno funcionan correctamente
* `.env` ya no se sube nunca más
* Pushes a ramas funcionan
* Conexión a Aiven establecida
* PRs listos para integrar
* Proyecto listo para seguir creciendo
