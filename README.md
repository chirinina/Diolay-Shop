# 🚀 Configuración y ejecución en entorno de desarrollo

## 🧰 Tecnologías utilizadas
<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="50" alt="NPM"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="50" alt="Docker"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="50" alt="PostgreSQL"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" height="50" alt="Prisma"/>
</p>

---

## ⚙️ Pasos para ejecutar el proyecto

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# 2. Ir al directorio del proyecto
cd <NOMBRE_DEL_PROYECTO>

# 3. Crear archivo de entorno
cp .env.template .env

# 4. Instalar dependencias
npm install

# 5. Levantar base de datos
docker compose up -d

# 6. Ejecutar migraciones
npx prisma migrate dev

# 7. Ejecutar seed
npm run seed

# 8. Iniciar proyecto
npm run dev
