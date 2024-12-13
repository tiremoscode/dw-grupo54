function generateRfc() {
    // Obtener valores de los inputs
    const name = document.getElementById("name").value.trim().toUpperCase();
    const lastName1 = document.getElementById("lastName1").value.trim().toUpperCase();
    const lastName2 = document.getElementById("lastName2").value.trim().toUpperCase();
    const date = document.getElementById("date").value;

    // Validar que todos los campos estén completos
    if (!name || !lastName1 || !lastName2 || !date) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Procesar la fecha
    const [year, month, day] = date.split("-");
    const rfc = `${lastName1.slice(0, 2)}${lastName2.slice(0, 1)}${name.slice(0, 1)}${year.slice(-2)}${month}${day}XX`;

    // Mostrar el RFC generado
    const rfcContainer = document.getElementById("rfc-container");
    document.getElementById("rfc-result").innerText = rfc;
    rfcContainer.classList.remove("d-none");
}
