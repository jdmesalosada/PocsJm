Pre requisitos:
Tener instalado mongo DB.

Iniciar la app:  nodemon o nodemon index+

Crear un genero:
POST: http://localhost:3000/api/genres

{"name": "Thriller"}

Obtener los generos:
GET: http://localhost:3000/api/genres

Actualizar:
PUT: http://localhost:3000/api/genres/${id_del_genero}

{"name": "Updated Thriller"}