document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const nota = document.getElementById('nota').value;

    try {
        const response = await fetch('http://localhost/enviar-nota', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, nota })
        });

        if (!response.ok) {
            throw new Error(`Error del servidor: ${response.status}`);
        }

        const result = await response.json();
        alert("Respuesta del servidor: " + result.message);
    } catch (error) {
        console.error(error);
        alert("Error al conectar con el backend.");
    }
});