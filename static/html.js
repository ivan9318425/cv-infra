document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const nota = document.getElementById('nota').value; // Capturamos la nota

    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('nota', nota); // Enviamos 'nota'

    try {
        const response = await fetch('http://localhost:8000/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString()
        });

        const result = await response.json();
        alert("Respuesta del servidor: " + result.mensaje);
    } catch (error) {
        alert("Error al conectar con el backend.");
    }
});