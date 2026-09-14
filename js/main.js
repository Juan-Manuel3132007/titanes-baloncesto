

const entrenadores = [
    { id: 1, nombre: "Andrés Quiceno",  especialidad: "Fundamentos individuales" },
    { id: 2, nombre: "Marcela Ospina",  especialidad: "Defensa y lectura de juego" },
    { id: 3, nombre: "Julián Restrepo", especialidad: "Tiro exterior y ataque" },
    { id: 4, nombre: "Camilo Arboleda", especialidad: "Preparación física" }
];

const categorias = [
    {
        clave: "formativa",
        nombre: "Formativa",
        edades: "10 a 12 años",
        resumen: "La etapa donde el balón se vuelve familiar. Se corrige poco y se juega mucho, porque a esta edad lo que importa es que el gesto salga solo.",
        trabajo: [
            "Manejo de balón con ambas manos",
            "Pase de pecho, picado y de béisbol",
            "Entrada a canasta en dos tiempos",
            "Posición defensiva básica"
        ],
        torneos: [
            "Festivales formativos de la liga",
            "Encuentros amistosos entre escuelas",
            "Torneo interno de la escuela"
        ]
    },
    {
        clave: "competitiva",
        nombre: "Competitiva",
        edades: "13 a 16 años",
        resumen: "Primera etapa de competencia real. Aparecen los sistemas, la lectura de juego y también la primera derrota que duele.",
        trabajo: [
            "Sistemas ofensivos básicos",
            "Defensa individual y en zona",
            "Transición y contraataque",
            "Lectura de situaciones de dos contra uno"
        ],
        torneos: [
            "Torneo departamental de Antioquia",
            "Juegos Intercolegiados",
            "Copa interclubes"
        ]
    },
    {
        clave: "elite",
        nombre: "Elite",
        edades: "17 a 20 años",
        resumen: "Alto rendimiento con cinco sesiones semanales. Se entrena pensando en el calendario de competencia, no en la sesión del día.",
        trabajo: [
            "Preparación física dirigida",
            "Análisis de video propio y del rival",
            "Sistemas de ataque y ajustes en vivo",
            "Trabajo específico por posición"
        ],
        torneos: [
            "Liga departamental de Antioquia",
            "Torneo nacional interclubes",
            "Selección departamental por convocatoria"
        ]
    },
    {
        clave: "mayores",
        nombre: "Mayores",
        edades: "21 años en adelante",
        resumen: "Categoría abierta para quienes quieren seguir compitiendo sin dejar el trabajo o el estudio. Dos sesiones semanales en horario nocturno.",
        trabajo: [
            "Mantenimiento físico y prevención de lesión",
            "Sistemas de juego adaptados al grupo",
            "Tiro y finalización",
            "Juego en espacios reducidos"
        ],
        torneos: [
            "Liga municipal de mayores",
            "Torneos empresariales",
            "Copa abierta de Medellín"
        ]
    }
];

const grupos = [
    {
        id: 1,
        nombre: "Formativa Mañana",
        categoria: "formativa",
        edadMin: 10,
        edadMax: 12,
        dias: "Martes y jueves",
        horario: "8:00 a.m. – 9:30 a.m.",
        precio: 95000,
        cupos: 6,
        entrenadorId: 1,
        imagen: "img/grupo-formativa.jpg",
        descripcion: "Programa de iniciación para quienes empiezan desde cero. Se trabaja manejo de balón, pase y entrada a canasta, siempre en formato de juego."
    },
    {
        id: 2,
        nombre: "Formativa Tarde",
        categoria: "formativa",
        edadMin: 10,
        edadMax: 12,
        dias: "Lunes, miércoles y viernes",
        horario: "4:00 p.m. – 5:30 p.m.",
        precio: 110000,
        cupos: 4,
        entrenadorId: 1,
        imagen: "img/grupo-formativa.jpg",
        descripcion: "Mismo contenido que el programa de la mañana pero con una sesión adicional por semana. Pensado para quienes estudian en jornada matinal."
    },
    {
        id: 3,
        nombre: "Competitiva Mixta",
        categoria: "competitiva",
        edadMin: 13,
        edadMax: 16,
        dias: "Martes, jueves y sábado",
        horario: "5:00 p.m. – 7:00 p.m.",
        precio: 130000,
        cupos: 8,
        entrenadorId: 2,
        imagen: "img/grupo-competitiva.jpg",
        descripcion: "Primera etapa de competencia. Se suman sistemas defensivos, transición y lectura de juego. El grupo participa en el torneo departamental."
    },
    {
        id: 4,
        nombre: "Elite Masculino",
        categoria: "elite",
        edadMin: 17,
        edadMax: 20,
        dias: "Lunes a viernes",
        horario: "6:00 p.m. – 8:00 p.m.",
        precio: 180000,
        cupos: 0,
        entrenadorId: 3,
        imagen: "img/grupo-elite.jpg",
        descripcion: "Alto rendimiento con cinco sesiones semanales, preparación física dirigida y análisis de video. Requiere prueba de ingreso."
    },
    {
        id: 5,
        nombre: "Elite Femenino",
        categoria: "elite",
        edadMin: 17,
        edadMax: 20,
        dias: "Lunes a viernes",
        horario: "4:00 p.m. – 6:00 p.m.",
        precio: 180000,
        cupos: 5,
        entrenadorId: 3,
        imagen: "img/grupo-elite.jpg",
        descripcion: "Mismo plan de trabajo que la rama masculina, con calendario propio en el torneo departamental femenino. Requiere prueba de ingreso."
    },
    {
        id: 6,
        nombre: "Mayores",
        categoria: "mayores",
        edadMin: 21,
        edadMax: 60,
        dias: "Miércoles y viernes",
        horario: "8:00 p.m. – 10:00 p.m.",
        precio: 120000,
        cupos: 10,
        entrenadorId: 4,
        imagen: "img/grupo-mayores.jpg",
        descripcion: "Categoría abierta para quienes quieren seguir compitiendo. El grupo representa a la escuela en la liga municipal de mayores."
    }
];


/* --- Funciones de apoyo --------------------------------------- */

/** Resuelve la relación entre programa y entrenador. */
function buscarEntrenador(id) {
    return entrenadores.find(function (entrenador) {
        return entrenador.id === id;
    });
}

/** Busca una categoría por su clave. */
function buscarCategoria(clave) {
    return categorias.find(function (categoria) {
        return categoria.clave === clave;
    });
}

/** Busca un programa por su id. */
function buscarGrupo(id) {
    return grupos.find(function (grupo) {
        return grupo.id === Number(id);
    });
}

/** Convierte 95000 en "$95.000". */
function formatearPrecio(valor) {
    return "$" + valor.toLocaleString("es-CO");
}


/* ============================================================
   2. MENÚ RESPONSIVE
   Interacción del Grupo A: manipulación del DOM.
   ============================================================ */

const menuBoton = document.getElementById("menu-boton");
const menuPrincipal = document.getElementById("menu-principal");

if (menuBoton && menuPrincipal) {

    menuBoton.addEventListener("click", function () {
        // El estado se lee del atributo, no de una variable aparte.
        // Así el estado visual y el accesible nunca se desincronizan.
        const abierto = menuBoton.getAttribute("aria-expanded") === "true";

        menuBoton.setAttribute("aria-expanded", String(!abierto));
        menuPrincipal.classList.toggle("menu--abierto", !abierto);
    });

    // Cerrar con Escape y devolver el foco al botón
    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && menuBoton.getAttribute("aria-expanded") === "true") {
            menuBoton.setAttribute("aria-expanded", "false");
            menuPrincipal.classList.remove("menu--abierto");
            menuBoton.focus();
        }
    });
}


/* ============================================================
   3. CATÁLOGO DINÁMICO Y FILTRO
   Interacción del Grupo A: el contenido se genera desde el
   arreglo de objetos, no está escrito en el HTML.
   ============================================================ */

const catalogo = document.getElementById("catalogo");
const filtros = document.getElementById("filtros");
const resultadoFiltro = document.getElementById("resultado-filtro");

/** Construye la tarjeta de un programa. */
function crearTarjeta(grupo, posicion) {
    const entrenador = buscarEntrenador(grupo.entrenadorId);
    const categoria = buscarCategoria(grupo.categoria);

    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";
    tarjeta.dataset.categoria = grupo.categoria;
    // El CSS usa --i para escalonar la animación de entrada.
    tarjeta.style.setProperty("--i", posicion);

    if (grupo.cupos === 0) {
        tarjeta.classList.add("tarjeta--agotada");
    }

    /* --- Imagen --- */
    const figura = document.createElement("figure");
    figura.className = "tarjeta__figura";

    const imagen = document.createElement("img");
    imagen.src = grupo.imagen;
    imagen.alt = "Entrenamiento del programa " + grupo.nombre;
    imagen.width = 800;
    imagen.height = 600;
    imagen.loading = "lazy";
    // Si el archivo no existe, se quita la figura en vez de
    // dejar el ícono de imagen rota.
    imagen.addEventListener("error", function () {
        figura.remove();
    });

    figura.appendChild(imagen);
    tarjeta.appendChild(figura);

    /* --- Cuerpo --- */
    const cuerpo = document.createElement("div");
    cuerpo.className = "tarjeta__cuerpo";

    const etiquetaCategoria = document.createElement("p");
    etiquetaCategoria.className = "tarjeta__categoria";
    etiquetaCategoria.textContent = categoria.nombre;

    const titulo = document.createElement("h2");
    titulo.className = "tarjeta__titulo";
    titulo.textContent = grupo.nombre;

    /* --- Lista de datos --- */
    const datos = document.createElement("dl");
    datos.className = "tarjeta__datos";

    const pares = [
        ["Edades", grupo.edadMin + " a " + grupo.edadMax + " años"],
        ["Días", grupo.dias],
        ["Horario", grupo.horario],
        ["Entrenador", entrenador.nombre]
    ];

    pares.forEach(function (par) {
        const fila = document.createElement("div");
        fila.className = "tarjeta__dato";

        const termino = document.createElement("dt");
        termino.textContent = par[0];

        const definicion = document.createElement("dd");
        // textContent y no innerHTML: nunca se interpreta HTML
        // que venga de los datos.
        definicion.textContent = par[1];

        fila.appendChild(termino);
        fila.appendChild(definicion);
        datos.appendChild(fila);
    });

    const descripcion = document.createElement("p");
    descripcion.className = "tarjeta__descripcion";
    descripcion.textContent = grupo.descripcion;

    /* --- Pie: precio y cupos --- */
    const pie = document.createElement("div");
    pie.className = "tarjeta__pie";

    const precio = document.createElement("p");
    precio.className = "tarjeta__precio";
    precio.textContent = formatearPrecio(grupo.precio);

    const unidad = document.createElement("span");
    unidad.textContent = " / mes";
    precio.appendChild(unidad);

    const cupos = document.createElement("p");
    cupos.className = "tarjeta__cupos";

    if (grupo.cupos === 0) {
        cupos.classList.add("tarjeta__cupos--lleno");
        cupos.textContent = "Sin cupos";
    } else if (grupo.cupos <= 4) {
        cupos.classList.add("tarjeta__cupos--pocos");
        cupos.textContent = grupo.cupos === 1
            ? "Último cupo"
            : "Solo " + grupo.cupos + " cupos";
    } else {
        cupos.textContent = grupo.cupos + " cupos disponibles";
    }

    pie.appendChild(precio);
    pie.appendChild(cupos);

    /* --- Acción ---------------------------------------------
       Regla del dominio: sin cupos no se puede inscribir.
       Se usa un <button> deshabilitado en lugar de un enlace,
       porque un enlace no se puede desactivar de verdad. */
    let accion;

    if (grupo.cupos === 0) {
        accion = document.createElement("button");
        accion.type = "button";
        accion.className = "boton boton--ancho boton--agotado";
        accion.disabled = true;
        accion.textContent = "Cupos agotados";
    } else {
        accion = document.createElement("a");
        // El id viaja en la URL para preseleccionar el programa
        accion.href = "inscripcion.html?grupo=" + grupo.id;
        accion.className = "boton boton--ancho";
        accion.textContent = "Inscribirme en este programa";
    }

    cuerpo.appendChild(etiquetaCategoria);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(datos);
    cuerpo.appendChild(descripcion);
    cuerpo.appendChild(pie);
    cuerpo.appendChild(accion);
    tarjeta.appendChild(cuerpo);

    return tarjeta;
}

/** Construye el panel informativo de una categoría. */
function crearPanelCategoria(categoria) {
    const panel = document.createElement("section");
    panel.className = "panel-categoria";
    panel.dataset.categoria = categoria.clave;

    const edades = document.createElement("p");
    edades.className = "panel-categoria__edad";
    edades.textContent = categoria.edades;

    const titulo = document.createElement("h2");
    titulo.className = "panel-categoria__titulo";
    titulo.textContent = "Categoría " + categoria.nombre;

    const resumen = document.createElement("p");
    resumen.className = "panel-categoria__resumen";
    resumen.textContent = categoria.resumen;

    const cuerpo = document.createElement("div");
    cuerpo.className = "panel-categoria__cuerpo";
    cuerpo.appendChild(crearBloqueLista("Qué se trabaja", categoria.trabajo));
    cuerpo.appendChild(crearBloqueLista("Dónde compite", categoria.torneos));

    panel.appendChild(edades);
    panel.appendChild(titulo);
    panel.appendChild(resumen);
    panel.appendChild(cuerpo);

    return panel;
}

/** Crea un bloque con título y lista de puntos. */
function crearBloqueLista(titulo, elementos) {
    const bloque = document.createElement("div");

    const encabezado = document.createElement("h3");
    encabezado.textContent = titulo;

    const lista = document.createElement("ul");

    elementos.forEach(function (texto) {
        const item = document.createElement("li");
        item.textContent = texto;
        lista.appendChild(item);
    });

    bloque.appendChild(encabezado);
    bloque.appendChild(lista);

    return bloque;
}

/** Dibuja el catálogo filtrado por categoría. */
function pintarCatalogo(clave) {
    if (!catalogo) {
        return;
    }

    catalogo.innerHTML = "";

    // El panel vive fuera del catálogo, se borra aparte
    const panelAnterior = document.querySelector(".panel-categoria");
    if (panelAnterior) {
        panelAnterior.remove();
    }

    const visibles = clave === "todas"
        ? grupos
        : grupos.filter(function (grupo) {
            return grupo.categoria === clave;
        });

    // El panel solo aparece al filtrar por una categoría concreta
    if (clave !== "todas") {
        const categoria = buscarCategoria(clave);
        catalogo.parentNode.insertBefore(crearPanelCategoria(categoria), catalogo);
    }

    if (visibles.length === 0) {
        const vacio = document.createElement("p");
        vacio.className = "catalogo-vacio";
        vacio.textContent = "No hay programas abiertos en esta categoría por ahora.";
        catalogo.appendChild(vacio);
    } else {
        visibles.forEach(function (grupo, indice) {
            catalogo.appendChild(crearTarjeta(grupo, indice));
        });
    }

    if (resultadoFiltro) {
        const plural = visibles.length === 1 ? "programa" : "programas";
        const conCupo = visibles.filter(function (grupo) {
            return grupo.cupos > 0;
        }).length;

        let texto = clave === "todas"
            ? "Mostrando los " + visibles.length + " programas"
            : "Mostrando " + visibles.length + " " + plural + " de la categoría " + buscarCategoria(clave).nombre;

        texto += conCupo === visibles.length
            ? ", todos con cupos disponibles."
            : ", " + conCupo + " con cupos disponibles.";

        resultadoFiltro.textContent = texto;
    }
}

/* --- Eventos del filtro (Grupo C) ------------------------------
   Delegación: un solo listener en el contenedor en lugar de uno
   por botón. El evento burbujea desde el botón hasta aquí. */

if (filtros) {

    filtros.addEventListener("click", function (evento) {
        const boton = evento.target.closest(".filtro");

        if (!boton) {
            return;
        }

        const activos = filtros.querySelectorAll(".filtro--activo");
        activos.forEach(function (elemento) {
            elemento.classList.remove("filtro--activo");
        });

        boton.classList.add("filtro--activo");
        pintarCatalogo(boton.dataset.categoria);
    });

    pintarCatalogo("todas");
}


/* ============================================================
   4. OPCIONES DEL FORMULARIO
   El select se llena desde el mismo arreglo de programas, así
   nunca queda desactualizado respecto al catálogo.
   ============================================================ */

const selectGrupo = document.getElementById("grupo");

if (selectGrupo) {

    grupos.forEach(function (grupo) {
        const opcion = document.createElement("option");
        opcion.value = String(grupo.id);
        opcion.textContent = grupo.nombre + " (" + grupo.edadMin + "–" + grupo.edadMax + " años)";

        // Los programas sin cupo aparecen pero no se pueden elegir
        if (grupo.cupos === 0) {
            opcion.disabled = true;
            opcion.textContent += " — sin cupos";
        }

        selectGrupo.appendChild(opcion);
    });

    /* Si se llegó desde una tarjeta del catálogo, el programa
       viene en la URL y queda preseleccionado. */
    const parametros = new URLSearchParams(window.location.search);
    const idDesdeUrl = parametros.get("grupo");

    if (idDesdeUrl && buscarGrupo(idDesdeUrl)) {
        selectGrupo.value = idDesdeUrl;
    }
}


/* ============================================================
   5. VALIDACIÓN DEL FORMULARIO
   Interacción del Grupo B. El formulario lleva novalidate,
   así que toda la validación es esta.
   ============================================================ */

const formulario = document.getElementById("formulario");

if (formulario) {

    const campoEdad = document.getElementById("edad");
    const bloqueAcudiente = document.getElementById("bloque-acudiente");
    const campoMensaje = document.getElementById("mensaje");
    const contadorMensaje = document.getElementById("contador-mensaje");
    const mensajeExito = document.getElementById("mensaje-exito");

    const MAYORIA_DE_EDAD = 18;

    /** Escribe un error debajo de un campo y lo marca en rojo. */
    function mostrarError(idCampo, texto) {
        const campo = document.getElementById(idCampo);
        const salida = document.getElementById("error-" + idCampo);

        if (salida) {
            salida.textContent = texto;
        }

        if (campo) {
            campo.classList.add("invalido");
        }
    }

    /** Borra todos los errores antes de volver a validar. */
    function limpiarErrores() {
        formulario.querySelectorAll(".error").forEach(function (elemento) {
            elemento.textContent = "";
        });

        formulario.querySelectorAll(".invalido").forEach(function (elemento) {
            elemento.classList.remove("invalido");
        });
    }

    /** Devuelve true si el aspirante es menor de edad. */
    function esMenorDeEdad() {
        const edad = Number(campoEdad.value);
        return campoEdad.value !== "" && edad < MAYORIA_DE_EDAD;
    }

    /* --- Regla propia 1 -------------------------------------
       El bloque del acudiente aparece o desaparece según la
       edad escrita, y sus campos solo se validan si está visible. */
    function actualizarBloqueAcudiente() {
        if (!bloqueAcudiente) {
            return;
        }

        bloqueAcudiente.hidden = !esMenorDeEdad();
    }

    if (campoEdad) {
        campoEdad.addEventListener("input", actualizarBloqueAcudiente);
        actualizarBloqueAcudiente();
    }

    /* --- Contador de caracteres --- */
    if (campoMensaje && contadorMensaje) {
        campoMensaje.addEventListener("input", function () {
            contadorMensaje.textContent = campoMensaje.value.length + " / 300 caracteres";
        });
    }

    /* --- Validación al enviar --- */
    formulario.addEventListener("submit", function (evento) {
        // Se detiene el envío: la página no debe recargarse mientras
        // se decide si los datos son correctos.
        evento.preventDefault();

        limpiarErrores();

        if (mensajeExito) {
            mensajeExito.hidden = true;
        }

        let valido = true;
        let primerError = null;

        /* Nombre: requerido, mínimo 5 caracteres */
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre === "") {
            mostrarError("nombre", "Escribe el nombre completo del aspirante.");
            valido = false;
            primerError = primerError || "nombre";
        } else if (nombre.length < 5) {
            mostrarError("nombre", "El nombre debe tener al menos 5 caracteres.");
            valido = false;
            primerError = primerError || "nombre";
        }

        /* Edad: requerida y dentro del rango que atiende la escuela */
        const edad = Number(campoEdad.value);
        if (campoEdad.value === "") {
            mostrarError("edad", "Indica la edad del aspirante.");
            valido = false;
            primerError = primerError || "edad";
        } else if (edad < 10 || edad > 60) {
            mostrarError("edad", "La escuela recibe jugadores entre 10 y 60 años.");
            valido = false;
            primerError = primerError || "edad";
        }

        /* Programa: requerido */
        const idGrupo = selectGrupo.value;
        if (idGrupo === "") {
            mostrarError("grupo", "Selecciona el programa que te interesa.");
            valido = false;
            primerError = primerError || "grupo";
        }

        const grupoElegido = idGrupo !== "" ? buscarGrupo(idGrupo) : null;

        /* --- Regla propia 2 ---------------------------------
           Un programa sin cupos no admite inscripción. */
        if (grupoElegido && grupoElegido.cupos === 0) {
            mostrarError("grupo", grupoElegido.nombre + " no tiene cupos disponibles. Elige otro programa.");
            valido = false;
            primerError = primerError || "grupo";
        }

        /* --- Regla propia 3 ---------------------------------
           La edad debe corresponder al rango del programa.
           No tiene sentido inscribir a alguien de 25 años en
           un programa de 10 a 12. */
        if (grupoElegido && campoEdad.value !== "" && grupoElegido.cupos > 0) {
            if (edad < grupoElegido.edadMin || edad > grupoElegido.edadMax) {
                mostrarError(
                    "grupo",
                    grupoElegido.nombre + " es para jugadores de " +
                    grupoElegido.edadMin + " a " + grupoElegido.edadMax +
                    " años. Revisa el programa seleccionado."
                );
                valido = false;
                primerError = primerError || "grupo";
            }
        }

        /* Correo: requerido y con formato válido.
           La expresión pide texto, arroba, texto, punto y al
           menos dos letras finales. */
        const correo = document.getElementById("correo").value.trim();
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

        if (correo === "") {
            mostrarError("correo", "Escribe un correo de contacto.");
            valido = false;
            primerError = primerError || "correo";
        } else if (!patronCorreo.test(correo)) {
            mostrarError("correo", "Ese correo no tiene un formato válido. Ejemplo: nombre@correo.com");
            valido = false;
            primerError = primerError || "correo";
        }

        /* Teléfono: 10 dígitos. Se quitan espacios y guiones antes. */
        const telefono = document.getElementById("telefono").value.replace(/[\s-]/g, "");

        if (telefono === "") {
            mostrarError("telefono", "Escribe un número de contacto.");
            valido = false;
            primerError = primerError || "telefono";
        } else if (!/^\d{10}$/.test(telefono)) {
            mostrarError("telefono", "El teléfono debe tener 10 dígitos.");
            valido = false;
            primerError = primerError || "telefono";
        }

        /* Experiencia: hay que elegir una opción */
        const experiencia = formulario.querySelector('input[name="experiencia"]:checked');
        if (!experiencia) {
            const salida = document.getElementById("error-experiencia");
            if (salida) {
                salida.textContent = "Selecciona tu nivel de experiencia.";
            }
            valido = false;
            primerError = primerError || "exp-ninguna";
        }

        /* Acudiente: solo si el aspirante es menor */
        if (esMenorDeEdad()) {
            const acudiente = document.getElementById("acudiente").value.trim();
            const telAcudiente = document.getElementById("tel-acudiente").value.replace(/[\s-]/g, "");
            const permiso = document.getElementById("permiso");

            if (acudiente === "") {
                mostrarError("acudiente", "Escribe el nombre del acudiente.");
                valido = false;
                primerError = primerError || "acudiente";
            } else if (acudiente.length < 5) {
                mostrarError("acudiente", "El nombre debe tener al menos 5 caracteres.");
                valido = false;
                primerError = primerError || "acudiente";
            }

            if (telAcudiente === "") {
                mostrarError("tel-acudiente", "Escribe el teléfono del acudiente.");
                valido = false;
                primerError = primerError || "tel-acudiente";
            } else if (!/^\d{10}$/.test(telAcudiente)) {
                mostrarError("tel-acudiente", "El teléfono debe tener 10 dígitos.");
                valido = false;
                primerError = primerError || "tel-acudiente";
            }

            if (!permiso.checked) {
                mostrarError("permiso", "Se necesita la autorización del acudiente.");
                valido = false;
                primerError = primerError || "permiso";
            }
        }

        /* Tratamiento de datos: obligatorio siempre */
        const datos = document.getElementById("datos");
        if (!datos.checked) {
            mostrarError("datos", "Debes autorizar el tratamiento de datos para continuar.");
            valido = false;
            primerError = primerError || "datos";
        }

        /* --- Resultado --- */

        if (!valido) {
            // El foco va al primer campo con error: quien navega con
            // teclado o lector de pantalla sabe dónde corregir.
            const campo = document.getElementById(primerError);
            if (campo) {
                campo.focus();
            }
            return;
        }

        // Sin backend, el envío se simula. En la Entrega 2 aquí va
        // la petición a la API.
        if (mensajeExito) {
            mensajeExito.textContent =
                "Inscripción recibida para " + grupoElegido.nombre +
                ". Te contactamos al correo " + correo + " en las próximas 48 horas.";
            mensajeExito.hidden = false;
            mensajeExito.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        formulario.reset();
        actualizarBloqueAcudiente();

        if (contadorMensaje) {
            contadorMensaje.textContent = "0 / 300 caracteres";
        }
    });
}