window.db = {
  config: {
    ligaNombre: "Liga de Fut 6 SSA",
    temporada: "Clausura 2025",
    faseActual: "playoffs", // Opciones: 'regular' o 'playoffs'
    fechaGranFinal: "2025-11-30T12:00:00",
    telefonoWhatsApp: "521234567890",
    colorPrincipal: "#1e3a8a",
    colorSecundario: "#10b981"
  },
  jugadorJornada: {
    nombre: "Edgar Chevalier",
    equipo: "SICT",
    foto: "assets/images/cheva.png",
    frase: "Liderando la ofensiva con 3 goles clave.",
    stats: { goles: 3, asistencias: 1, valoracion: 9.8 }
  },
  avisos: [
    { titulo: "Junta de Dueños", mensaje: "Martes 8:00 PM en oficinas.", tipo: "info" },
    { titulo: "Cierre de Registros", mensaje: "Último día: Viernes 20.", tipo: "urgente" }
  ],
  sliderImages: [
    { img: "assets/images/portada1.png", caption: "LA GLORIA ES NUESTRA" },
    { img: "assets/images/portada2.png", caption: "Resultados Jornada 18" },
    { img: "assets/images/portada3.png", caption: "Inscripciones Abiertas 2026" }
  ],
  patrocinadores: [
    { logo: "assets/images/logo.png", nombre: "Aciertagol", link: "#" },
    { logo: "assets/images/images.png", nombre: "Ronyn Gym", link: "#" },
  ],
  equipos: [
    { id: 1, nombre: "SICT", logo: "assets/images/5.jpg" },
    { id: 2, nombre: "Contraloría", logo: "assets/images/contra.jpg" },
    { id: 3, nombre: "RH SSA", logo: "assets/images/secre.png" },
    { id: 4, nombre: "CESAMA", logo: "assets/images/cesa.jpg" },
    { id: 5, nombre: "Hosp. Gral.", logo: "assets/images/secre.png" },
    { id: 6, nombre: "Planeación", logo: "assets/images/secre.png"},
    { id: 7, nombre: "SEMARNAT", logo: "assets/images/6.jpg" },
    { id: 8, nombre: "Salubridad", logo: "assets/images/secre.png" },
    { id: 9, nombre: "Informática", logo: "assets/images/secre.png" },
    { id: 10, nombre: "SEG", logo: "assets/images/secre.png" }
  ],
  tablaGeneral: [
    { pos: 1, equipoId: 1, pj: 18, pts: 44, gf: 98, gc: 39 },
    { pos: 2, equipoId: 2, pj: 18, pts: 41, gf: 89, gc: 56 },
    { pos: 3, equipoId: 3, pj: 18, pts: 34, gf: 65, gc: 54 },
    { pos: 4, equipoId: 4, pj: 18, pts: 31, gf: 72, gc: 50 },
    { pos: 5, equipoId: 5, pj: 18, pts: 29, gf: 94, gc: 77 },
    { pos: 6, equipoId: 6, pj: 18, pts: 28, gf: 68, gc: 64 },
    { pos: 7, equipoId: 7, pj: 18, pts: 26, gf: 64, gc: 68 },
    { pos: 8, equipoId: 8, pj: 18, pts: 17, gf: 46, gc: 70 },
    { pos: 9, equipoId: 9, pj: 18, pts: 12, gf: 44, gc: 103 },
    { pos: 10, equipoId: 10, pj: 18, pts: 4, gf: 30, gc: 80 }
  ],
  tablaGoleo: [
    { pos: 1, nombre: "Edgar Chevalier", equipoId: 1, goles: 40, foto: "assets/images/cheva.png" },
    { pos: 2, nombre: "Angel Salazar", equipoId: 5, goles: 25, foto: "assets/images/jugador_cr.png" },
    { pos: 3, nombre: "Max Alvarado", equipoId: 5, goles: 22, foto: "assets/images/max.png" },
    { pos: 4, nombre: "Yahir Castro", equipoId: 6, goles: 17, foto: "https://via.placeholder.com/100" },
    { pos: 5, nombre: "Rafa Martinez", equipoId: 2, goles: 16, foto: "assets/images/rafa.png" }
  ],
  jornadas: [
    {
      jornadaNum: 19,
      partidos: [
         { eqA: 1, eqB: 2, hora: "10:00 AM", cancha: "Cancha 1" },
         { eqA: 3, eqB: 4, hora: "11:00 AM", cancha: "Cancha 2" },
         { eqA: 5, eqB: 6, hora: "12:00 PM", cancha: "Cancha 1" }
      ]
    }
  ],
  playoffs: {
    cuartos: [
        { eqA: 1, eqB: 8, scoreA: 2, scoreB: 0, status: "Final" },
        { eqA: 4, eqB: 5, scoreA: 4, scoreB: 9, status: "Final" },
        { eqA: 2, eqB: 7, scoreA: 7, scoreB: 2, status: "Final" },
        { eqA: 3, eqB: 6, scoreA: 3, scoreB: 2, status: "Final" }
    ],
    semis: [
        { eqA: 1, eqB: 5, hora: "Mie 19:00", cancha: "Polideportivo" },
        { eqA: 2, eqB: 3, hora: "Mie 20:00", cancha: "Polideportivo" }
    ],
    final: [
        { eqA: null, eqB: null, hora: "Por Definir", cancha: "Estadio" }
    ],
    tercerLugar: [
        { eqA: null, eqB: null, hora: "Por Definir", cancha: "Estadio" }
    ]
  },
  galeria: [
    "assets/images/CESAMA.jpg", "assets/images/SEMARNAT.jpg", "assets/images/TELMEX.jpg", "assets/images/SICT.jpg",
    "assets/images/SALUBRIDAD.jpg", "assets/images/RH.jpg", "assets/images/INFORMATICA.jpg", "assets/images/HOSP.jpg"
  ]
};