// === TU FECHA DE ANIVERSARIO CONFIGURADA (12 de Julio de 2025) ===
const fechaAniversario = new Date('2025-07-12T00:00:00'); 

function iniciarHistoria() {
    // 1. Activa tu música al dar clic
    const musica = document.getElementById("musica");
    if (musica) {
        musica.play().catch(error => console.log("Permiso de audio:", error));
    }

    // 2. Te lleva a la sección de historia centrándola perfectamente
    const historia = document.getElementById("historia");
    if (historia) {
        historia.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function actualizarContador() {
    const ahora = new Date();
    
    let anios = ahora.getFullYear() - fechaAniversario.getFullYear();
    let meses = ahora.getMonth() - fechaAniversario.getMonth();
    let dias = ahora.getDate() - fechaAniversario.getDate();
    let horas = ahora.getHours() - fechaAniversario.getHours();
    let minutos = ahora.getMinutes() - fechaAniversario.getMinutes();
    let segundos = ahora.getSeconds() - fechaAniversario.getSeconds();

    // Ajustes matemáticos para desfases de tiempo (meses/días negativos)
    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
        const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }
    if (meses < 0) { meses += 12; anios--; }

    // Inyectar los números en las cajitas del HTML
    if (document.getElementById('c-anios')) document.getElementById('c-anios').innerText = anios;
    if (document.getElementById('c-meses')) document.getElementById('c-meses').innerText = meses;
    if (document.getElementById('c-dias')) document.getElementById('c-dias').innerText = dias;
    if (document.getElementById('c-horas')) document.getElementById('c-horas').innerText = horas;
    if (document.getElementById('c-minutos')) document.getElementById('c-minutos').innerText = minutos;
    if (document.getElementById('c-segundos')) document.getElementById('c-segundos').innerText = segundos;
}

// Ejecutar el contador inmediatamente y actualizarlo cada 1 segundo
actualizarContador();
setInterval(actualizarContador, 1000);
