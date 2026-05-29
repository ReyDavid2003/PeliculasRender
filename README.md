# API de Películas

API REST creada con Node.js, Express, Sequelize, SQLite y JWT.

## Ejecutar localmente

```bash
npm install
npm start
```

La API corre localmente en:

```text
http://localhost:3000
```

## Usuario de prueba

```json
{
  "usuario": "admin",
  "password": "1234"
}
```

## Endpoints principales

- `GET /` - Verifica que la API está funcionando.
- `POST /login` - Genera token JWT.
- `GET /peliculas` - Lista películas, requiere token.
- `GET /peliculas/:id` - Busca película por id, requiere token.
- `POST /peliculas` - Crea película, requiere token.
- `PUT /peliculas/:id` - Actualiza película, requiere token.
- `DELETE /peliculas/:id` - Elimina película, requiere token.

## Deploy en Render

Build Command:

```bash
npm install
```

Start Command:

```bash
npm start
```

Environment Variable recomendada:

```text
JWT_SECRET=mi_secreto_super_seguro
```
