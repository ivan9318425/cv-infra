from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr

app = FastAPI()

# Sirve todo lo que esté en la carpeta "static" (css, js, imágenes)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Ruta raíz: devuelve tu cv.html
@app.get("/")
async def leer_cv():
    return FileResponse("static/cv.html")

class NotaRequest(BaseModel):
    email: EmailStr
    nota: str

@app.post("/enviar-nota")
async def recibir_nota(datos: NotaRequest):
    print(f"Correo recibido: {datos.email}")
    print(f"Nota recibida: {datos.nota}")
    
    return {
        "message": "Nota recibida con éxito",
        "data_received": {
            "email": datos.email,
            "nota": datos.nota
        }
    }