var express = require('express') // Llamamos a Express
var app = express()
var port = process.env.PORT || 8000
app.use(express.json())

var basePath = "/grupo-salinas/juridico/firma-documentos";

/**
 * CATÁLOGOS
 */
app.get(basePath + '/catalogos/v1/catalogos', function (req, res) {
  const idEmpresa = req.query.idEmpresa;
  console.log("GET catálogos con idEmpresa " + idEmpresa);
  res.json({
    "mensaje": "Operación Exitosa",
    "folio": "81427310-d984-4f95-800d-382000ad07b5",
    "resultado": {
      "unidadesNegocio": [
        {
          "id": 1,
          "nombre": "WILFRIDO PROYECCION INTEGRAL ADMINISTRATIVA SC",
          "areas": []
        },
        {
          "id": 2,
          "nombre": "ADAMANTIUM PRIVATE SECURITY SERVICES",
          "areas": [
            {
              "id": 0,
              "nombre": "CONTABILIDAD"
            }
          ]
        },
        {
          "id": 3,
          "nombre": "ADHELPOS ADMINISTRACION DE PROYECTOS SA DE CV",
          "areas": []
        },
        {
          "id": 4,
          "nombre": "AFORE  AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 5,
          "nombre": "AIE DE MEXICO SC",
          "areas": [
            {
              "id": 1,
              "nombre": "SISTEMAS"
            }
          ]
        },
        {
          "id": 6,
          "nombre": "ALLAN DIRECCION ALTERNATIVA EMPRESARIAL",
          "areas": []
        },
        {
          "id": 7,
          "nombre": "ALTA EMPRESA SA DE CV",
          "areas": []
        },
        {
          "id": 8,
          "nombre": "APOLO EXPECTATIVAS EN ADMINISTRACION SC",
          "areas": [
            {
              "id": 2,
              "nombre": "RECURSOS HUMANOS"
            }
          ]
        },
        {
          "id": 9,
          "nombre": "ARRENDADORA INTERNACIONAL AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 10,
          "nombre": "ASESORES ESPECIALIZADOS CORPORATIVOS SC",
          "areas": []
        },
        {
          "id": 11,
          "nombre": "ASESORIA ESPECIALIZADA EN AVIACION SA DE CV",
          "areas": [
            {
              "id": 3,
              "nombre": "MANTENIMIENTO"
            }
          ]
        },
        {
          "id": 12,
          "nombre": "ASOCIACION AZTECA AMIGOS DE LA CULTURA Y LAS ARTES AC",
          "areas": []
        },
        {
          "id": 13,
          "nombre": "ATENCION Y SOLUCIONES CREATIVAS DE PRODUCCION SA DE CV",
          "areas": []
        },
        {
          "id": 14,
          "nombre": "AWN CONSULTING SC",
          "areas": []
        },
        {
          "id": 15,
          "nombre": "AZNETWORK SC",
          "areas": []
        },
        {
          "id": 16,
          "nombre": "AZTECA MEDIA PROMOTING SA DE CV",
          "areas": []
        },
        {
          "id": 17,
          "nombre": "AZTECA NOVELAS II SA DE CV",
          "areas": []
        },
        {
          "id": 18,
          "nombre": "AZTECA NOVELAS SAPI DE CV",
          "areas": []
        },
        {
          "id": 19,
          "nombre": "AZTECA RECORDS SA DE CV",
          "areas": []
        },
        {
          "id": 22,
          "nombre": "BAZ SUPER APP SA DE CV",
          "areas": []
        },
        {
          "id": 23,
          "nombre": "BEYOND THE AUDIT SC",
          "areas": []
        },
        {
          "id": 24,
          "nombre": "CERVANTES INTEGRACION DE NEGOCIOS SC",
          "areas": []
        },
        {
          "id": 25,
          "nombre": "CHOPIN PONDERACION Y PROYECTOS ADMINISTRATIVOS SC",
          "areas": []
        },
        {
          "id": 26,
          "nombre": "CIRCULO DE CREDITO SA",
          "areas": []
        },
        {
          "id": 27,
          "nombre": "CIRCULO LABORAL SA",
          "areas": []
        },
        {
          "id": 28,
          "nombre": "CLUB DE FUTBOL ROJINEGROS SA DE CV",
          "areas": []
        },
        {
          "id": 29,
          "nombre": "COFIMAX SC",
          "areas": []
        },
        {
          "id": 30,
          "nombre": "COLEGIO ANAXIMENES AC",
          "areas": []
        },
        {
          "id": 31,
          "nombre": "COMERCIACOM SA DE CV",
          "areas": []
        },
        {
          "id": 32,
          "nombre": "COMERCIALIZACIï¿½ï¿½N Y DESARROLLO AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 33,
          "nombre": "COMERCIALIZADORA DE MOTOCICLETAS DE CALIDAD SA DE CV",
          "areas": []
        },
        {
          "id": 34,
          "nombre": "COMERCIALIZADORA DE PUBLICIDAD AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 35,
          "nombre": "COMERCIALIZADORA EN MEDIOS DE COMUNICACION DE TV AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 36,
          "nombre": "CONOCIMIENTO E INVESTIGACION CIENTIFICA SC",
          "areas": []
        },
        {
          "id": 37,
          "nombre": "CONSULTORIA EDITORIAL SC",
          "areas": []
        },
        {
          "id": 38,
          "nombre": "CORPORACION DE ASESORIA TECNICA Y DE PRODUCCION SA DE CV",
          "areas": []
        },
        {
          "id": 40,
          "nombre": "DALI ADMINISTRACION EMPRESARIAL SC",
          "areas": []
        },
        {
          "id": 41,
          "nombre": "DEPORTIVO VERACRUZ SA DE CV",
          "areas": []
        },
        {
          "id": 42,
          "nombre": "DIRECCION DE ADMINISTRACION CENTRAL SA DE CV",
          "areas": []
        },
        {
          "id": 43,
          "nombre": "DKA STRATEGIC SC ",
          "areas": []
        },
        {
          "id": 44,
          "nombre": "DUMAS PROYECCION Y ADMINISTRACION DE NEGOCIOS SC",
          "areas": []
        },
        {
          "id": 45,
          "nombre": "DURERO SERVICIOS INTEGRALES SC",
          "areas": []
        },
        {
          "id": 46,
          "nombre": "EDITORIAL MANDARINA SA DE CV",
          "areas": []
        },
        {
          "id": 47,
          "nombre": "EGEO ESTRATEGIAS Y PROYECTOS ADMINISTRATIVOS SC",
          "areas": [
            {
              "id": 4,
              "nombre": "MARKETING"
            }
          ]
        },
        {
          "id": 48,
          "nombre": "EPG MEXICO SA DE CV",
          "areas": []
        },
        {
          "id": 49,
          "nombre": "EPISODIO ESENCIAL SA DE CV",
          "areas": []
        },
        {
          "id": 50,
          "nombre": "EQUIPO DE FUTBOL MAZATLAN SA DE CV",
          "areas": []
        },
        {
          "id": 51,
          "nombre": "EQUIPOS DUO SC",
          "areas": []
        },
        {
          "id": 52,
          "nombre": "ESIDATA SC",
          "areas": []
        },
        {
          "id": 53,
          "nombre": "ESTUDIOS AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 54,
          "nombre": "EVO DIGITAL SA DE CV ",
          "areas": []
        },
        {
          "id": 55,
          "nombre": "EXSEQUENDI LEGAL SC",
          "areas": []
        },
        {
          "id": 56,
          "nombre": "FUNDACION AZTECA IAP",
          "areas": []
        },
        {
          "id": 57,
          "nombre": "FUNDACION TV AZTECA AC",
          "areas": []
        },
        {
          "id": 58,
          "nombre": "GANADOR AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 60,
          "nombre": "GIOVANI PROPUESTAS Y PROYECTOS ADMINISTRATIVOS SC",
          "areas": []
        },
        {
          "id": 61,
          "nombre": "GOYA PROYECCION ALTERNATIVA EMPRESARIAL SC",
          "areas": []
        },
        {
          "id": 62,
          "nombre": "GRUPO EDITORIAL DIEZ SA DE CV",
          "areas": []
        },
        {
          "id": 63,
          "nombre": "GRUPO PROASA SA DE CV",
          "areas": []
        },
        {
          "id": 64,
          "nombre": "HAR HUMAN BRAIN SC",
          "areas": []
        },
        {
          "id": 65,
          "nombre": "HH SISTEMAS ESPECIALIZADO SC",
          "areas": []
        },
        {
          "id": 66,
          "nombre": "HOGAR SEGURO TP SA DE CV",
          "areas": []
        },
        {
          "id": 67,
          "nombre": "HUMANITREE AC",
          "areas": []
        },
        {
          "id": 68,
          "nombre": "IGM KAVADARCI SA DE CV ",
          "areas": []
        },
        {
          "id": 69,
          "nombre": "INMOBILIARIA HABITACIONAL DEL FUTURO SA DE CV",
          "areas": []
        },
        {
          "id": 70,
          "nombre": "INTERTICKET SPORT SA DE C",
          "areas": []
        },
        {
          "id": 71,
          "nombre": "INVERSORA MEXICANA DE PRODUCCION SA DE CV",
          "areas": []
        },
        {
          "id": 72,
          "nombre": "KIPLING PROYECTOS ALTERNATIVOS DE NEGOCIOS SC",
          "areas": []
        },
        {
          "id": 73,
          "nombre": "KRW SERVICIOS Y CONSUOTORIA SC",
          "areas": []
        },
        {
          "id": 74,
          "nombre": "LASIMEX SA DE CV",
          "areas": []
        },
        {
          "id": 75,
          "nombre": "LONDON DESARROLLOS SA DE CV",
          "areas": []
        },
        {
          "id": 76,
          "nombre": "LUCAS SOLUCIONES ALTERNATIVAS EMPRESARIALES SC",
          "areas": []
        },
        {
          "id": 77,
          "nombre": "MAPLATAM SAPI DE CV",
          "areas": []
        },
        {
          "id": 79,
          "nombre": "MAZATLAN PROMOTORA DE FUTBOL SA DE CV",
          "areas": []
        },
        {
          "id": 80,
          "nombre": "MERCADOTECNIA TVA SC",
          "areas": []
        },
        {
          "id": 81,
          "nombre": "MULTIMEDIA ESPECTACULOS Y ATRACCIONES SA DE CV",
          "areas": []
        },
        {
          "id": 82,
          "nombre": "NETMO PROYECTOS ESPECIALES SC",
          "areas": []
        },
        {
          "id": 83,
          "nombre": "NICCOLO PROYECTOS ALTERNATIVOS CORPORATIVOS SC",
          "areas": []
        },
        {
          "id": 84,
          "nombre": "NICOLAS ESTRATEGIAS Y ALTERNATIVAS DE NEGOCIOS SC",
          "areas": []
        },
        {
          "id": 85,
          "nombre": "OMORFI 20I SA DE CV",
          "areas": []
        },
        {
          "id": 86,
          "nombre": "OPERADORA GANADOR TV AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 87,
          "nombre": "OPERADORA MEXICANA DE TELEVISION SA DE CV",
          "areas": []
        },
        {
          "id": 88,
          "nombre": "OPERADORA RUN SC",
          "areas": []
        },
        {
          "id": 89,
          "nombre": "OPERADORA SALINAS Y ROCHA SA DE CV",
          "areas": []
        },
        {
          "id": 90,
          "nombre": "OPERADORAS EN SERVICIOS COMERCIALES SA DE CV",
          "areas": []
        },
        {
          "id": 91,
          "nombre": "OTELO ADMINISTRACION DE NEGOCIOS SC",
          "areas": []
        },
        {
          "id": 92,
          "nombre": "PADUA SOPORTE SC",
          "areas": []
        },
        {
          "id": 93,
          "nombre": "PARADIN DE MEXICO SA DE CV",
          "areas": []
        },
        {
          "id": 94,
          "nombre": "PIEDRA LUNA CORASOL SA DE CV",
          "areas": []
        },
        {
          "id": 95,
          "nombre": "PITAGORAS DISEÑOS INTEGRALES ADMINISTRATIVOS",
          "areas": []
        },
        {
          "id": 96,
          "nombre": "PLATON ADMINISTRACION Y DIRECCION EMPRESARIAL SC",
          "areas": []
        },
        {
          "id": 98,
          "nombre": "PRODUCCIONES DOPAMINA SA DE CV",
          "areas": []
        },
        {
          "id": 99,
          "nombre": "PRODUCCIONES ESPECIALIZADAS SA DE C V",
          "areas": []
        },
        {
          "id": 100,
          "nombre": "PRODUCTORA DE TELEVISION REGIONAL DE TV AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 101,
          "nombre": "PROMOT FUTBOL ROJINEGROS SA DE CV",
          "areas": []
        },
        {
          "id": 102,
          "nombre": "PROMOTORA DE TORNEOS Y ESPECTACULOS PUBLICOS SA DE CV",
          "areas": []
        },
        {
          "id": 103,
          "nombre": "PROMOTORA ESPECIALIZADA DE PUBLICIDAD REGIONAL DE TV AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 104,
          "nombre": "PUBLICIDAD ESPECIALIZADA EN MEDIOS DE COMUNICACION DE TV AZTECA SA DE CV ",
          "areas": []
        },
        {
          "id": 105,
          "nombre": "PUNTO CASA DE BOLSA SA DE CV",
          "areas": []
        },
        {
          "id": 106,
          "nombre": "RED AZTECA INTERNACIONAL SA DE CV",
          "areas": []
        },
        {
          "id": 107,
          "nombre": "RQ PROGRAMACION SC",
          "areas": []
        },
        {
          "id": 108,
          "nombre": "SCI DE MEXICO SA DE CV",
          "areas": []
        },
        {
          "id": 109,
          "nombre": "SEGUROS AZTECA DAÑOS SA DE CV",
          "areas": []
        },
        {
          "id": 110,
          "nombre": "SEGUROS AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 111,
          "nombre": "SELABE DISEÑOS SA DE CV",
          "areas": []
        },
        {
          "id": 112,
          "nombre": "SELABE MOTORS SA DE CV",
          "areas": []
        },
        {
          "id": 113,
          "nombre": "SERVICIOS ADMINISTRATIVOS PARA TV SA DE CV",
          "areas": []
        },
        {
          "id": 114,
          "nombre": "SERVICIOS AEREOS NOTICIOSOS SA DE CV",
          "areas": []
        },
        {
          "id": 115,
          "nombre": "SERVICIOS DE PRODUCCION TV SA DE CV",
          "areas": []
        },
        {
          "id": 116,
          "nombre": "SERVICIOS DE PUBLICIDAD REGIONAL DE TV AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 117,
          "nombre": "SERVICIOS ESPECIALIZADOS TAZ SA DE CV",
          "areas": []
        },
        {
          "id": 118,
          "nombre": "SERVICIOS FORANEOS DE ADMINISTRACION SA DE CV",
          "areas": []
        },
        {
          "id": 119,
          "nombre": "SERVICIOS INTEGRALES DE INFORMACION ESTRATEGICA DE NEGOCIOS ALC",
          "areas": []
        },
        {
          "id": 120,
          "nombre": "SERVICIOS LABORALES Y EJECUTIVOS SA DE CV",
          "areas": []
        },
        {
          "id": 121,
          "nombre": "SERVICIOS LOCALES DE PRODUCCION SA DE CV",
          "areas": []
        },
        {
          "id": 122,
          "nombre": "SERVICIOS PRODUCTIVOS DE TELEVISION SA DE CV",
          "areas": []
        },
        {
          "id": 123,
          "nombre": "SERVICIOS Y DESARROLLO EN SISTEMAS AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 124,
          "nombre": "SERVICIOS Y MANTENIMIENTO DEL FUTURO EN TELEVISION SA DE CV",
          "areas": []
        },
        {
          "id": 125,
          "nombre": "SIGLO XXI SA DE CV",
          "areas": []
        },
        {
          "id": 126,
          "nombre": "SINOT SC",
          "areas": []
        },
        {
          "id": 127,
          "nombre": "SISTEMAS PROFESIONALES AVANZADOS SA DE CV",
          "areas": []
        },
        {
          "id": 128,
          "nombre": "SOLIDCARGO SA DE CV",
          "areas": []
        },
        {
          "id": 129,
          "nombre": "TELEVISION AZTECA II SA DE CV",
          "areas": []
        },
        {
          "id": 130,
          "nombre": "TELEVISION AZTECA III SA DE CV",
          "areas": []
        },
        {
          "id": 131,
          "nombre": "TELEVISION AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 132,
          "nombre": "TELEVISORA DEL VALLE DEï¿½ï¿½MEXICO SA DE CV",
          "areas": []
        },
        {
          "id": 133,
          "nombre": "TIENDAS SUPER PRECIO SA",
          "areas": []
        },
        {
          "id": 134,
          "nombre": "TOTAL BOX SA DE CV",
          "areas": []
        },
        {
          "id": 135,
          "nombre": "TOTAL PLAY TELECOMUNICACIONES SAPI DE CV",
          "areas": []
        },
        {
          "id": 136,
          "nombre": "TOTALSEC SA DE CV",
          "areas": []
        },
        {
          "id": 137,
          "nombre": "TRIENIO SC",
          "areas": []
        },
        {
          "id": 138,
          "nombre": "TRT ESPECIALISTAS SC",
          "areas": []
        },
        {
          "id": 139,
          "nombre": "TV AZTECA COMERCIALIZADORA SA DE CV",
          "areas": []
        },
        {
          "id": 140,
          "nombre": "TV AZTECA SA DE CV",
          "areas": []
        },
        {
          "id": 141,
          "nombre": "TV AZTECA SAB DE CV",
          "areas": []
        },
        {
          "id": 142,
          "nombre": "TVA PUBLISHING SA DE CV",
          "areas": []
        },
        {
          "id": 143,
          "nombre": "TVAFE SA DE CV",
          "areas": []
        },
        {
          "id": 144,
          "nombre": "TYPHOON OFFSHORE SAPI DE CV",
          "areas": []
        },
        {
          "id": 145,
          "nombre": "UDINE ASSORTS SC",
          "areas": []
        },
        {
          "id": 146,
          "nombre": "UPAX GS SA DE CV",
          "areas": []
        },
        {
          "id": 147,
          "nombre": "VINDIE SA DE CV",
          "areas": []
        },
        {
          "id": 148,
          "nombre": "WALDO ADMINISTRACION ESTRATEGICA ADMINISTRATIVA SC",
          "areas": []
        }
      ],
      "tiposDocumentos": [
        {
          "id": 0,
          "nombre": "DECLARACION"
        },
        {
          "id": 1,
          "nombre": "CONVENIO"
        },
        {
          "id": 2,
          "nombre": "DECISION ADMINISTRATIVA"
        },
        {
          "id": 3,
          "nombre": "DOCUMENTO INSTITUCIONAL"
        },
        {
          "id": 4,
          "nombre": "LAUDO"
        },
        {
          "id": 5,
          "nombre": "PRUEBA TIPO"
        }
      ],
      "categorias": [
        {
          "id": 0,
          "nombre": "DEMANDA"
        },
        {
          "id": 1,
          "nombre": "JUICIO"
        },
        {
          "id": 2,
          "nombre": "AUDITORIA"
        },
        {
          "id": 3,
          "nombre": "CONTRATO"
        },
        {
          "id": 4,
          "nombre": "CONTRATO2"
        }
      ]
    }
  })
});

/**
 * PLANTILLAS
 */
var plantillas = [
  {
    "id": 241,
    "nombre": "pase",
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-13",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  },
  {
    "id": 333,
    "nombre": "file_new",
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-15",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  },
  {
    "id": 366,
    "nombre": "CEM - PRESENTACION",
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-20",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  },
  {
    "id": 367,
    "nombre": "CEM - PRESENTACION",
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-20",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  },
  {
    "id": 362,
    "nombre": "CEM - PRESENTACION",
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-20",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  },
  {
    "id": 363,
    "nombre": "CEM - PRESENTACION",
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-20",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  },
  {
    "id": 364,
    "nombre": "CEM - PRESENTACION",
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-20",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  },
  {
    "id": 365,
    "nombre": "CEM - PRESENTACION",
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-20",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  }
];

// Insertar
app.post(basePath + '/gestion-plantillas/v1/plantillas', function (req, res) {
  console.log("POST /plantillas");
  var newId = plantillas[plantillas.length - 1].id + 1;
  var plantilla = {
    "id": newId,
    "nombre": req.body.nombre,
    "ruta": "/folder-name/object-name",
    "rutaImagenPortada": "/folder-name/object-name/portada-[nombre]-001.png",
    "fechaCreacion": "2023-06-20",
    "usuario": {
      "id": "1089453",
      "nombre": "YONATAN",
      "primerApellido": "HERNANDEZ",
      "segundoApellido": " "
    },
    "descargas": 0
  };
  plantillas.push(plantilla);

  res.json({
    "mensaje": "Operación Exitosa",
    "folio": "536234d8-6d06-44eb-a9bf-9b55f14ed4bd"
  });
});

// Read
app.post(basePath + '/gestion-plantillas/v1/plantillas/busquedas', function (req, res) {
  console.log("POST /plantillas/busquedas");
  res.json({
    "mensaje": "Operación Exitosa",
    "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733",
    "resultado": {
      "plantillas": req.body.masUsados ? plantillas.sort(function (a, b) { return a.descargas - b.descargas; }) : plantillas
    }
  })
});

// Contador descargas
app.post(basePath + '/gestion-plantillas/v1/plantillas-frecuentes', function (req, res) {
  const idAModificar = req.body.idPlantilla;
  console.log("POST /plantillas-frecuentes " + idAModificar);

  var indexModificar = plantillas.findIndex(function (plantilla) {
    return plantilla.id == idAModificar;
  });

  plantillas[indexModificar].descargas++;

  res.json({
    "mensaje": "Operación Exitosa",
    "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733"
  })
});

// Delete
app.put(basePath + '/gestion-plantillas/v1/plantillas/:idPlantilla', function (req, res) {
  const idAEliminar = req.params.idPlantilla;
  console.log("PUT /plantillas/" + idAEliminar);

  var indiceAEliminar = plantillas.findIndex(function (plantilla) {
    return plantilla.id == idAEliminar;
  });

  if (indiceAEliminar !== -1) {
    plantillas.splice(indiceAEliminar, 1);
  }

  res.json({
    "mensaje": "Operación Exitosa",
    "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733"
  })
});

/**
 * DOCUMENTOS
 */
var documentos = [
  {
    "id": 1,
    "idEstatus": 1,
    "nombre": "Contrato de Compraventa",
    "ruta": "contrato-2023-11.pdf",
    "unidadNegocio": "Banco azteca",
    "area": "Recursos humanos",
    "tipo": "Contrato",
    "fechaCreacion": "15/Mar/2023",
    "fechaVencimiento": "17/Mar/2023",
    "fechaFinalizacion": "17/Mar/2023",
    "fechaUltimaEdicion": "15/Mar/2023",
    "diasVencido": 3,
    "usuario": {
      "id": "1089453",
      "nombre": "Ricardo",
      "primerApellido": "Sandobal",
      "segundoApellido": "Perez"
    }
  }
];

// Insertar
app.post(basePath + '/gestion-documentos/v1/documentos', function (req, res) {
  console.log("POST /documentos");
  var newId = documentos[documentos.length - 1].id + 1;
  var documento = {
    "id": newId,
    "idEstatus": 1,
    "nombre": req.body.nombre,
    "ruta": req.body.ruta,
    "unidadNegocio": "Banco azteca",
    "area": "Recursos humanos",
    "tipo": "Contrato",
    "fechaCreacion": obtenerFechaActual(),
    "fechaVencimiento": "17/Mar/2023",
    "fechaFinalizacion": "17/Mar/2023",
    "fechaUltimaEdicion": obtenerFechaActual(),
    "diasVencido": 3,
    "usuario": {
      "id": req.body.idUsuario,
      "nombre": "Ricardo",
      "primerApellido": "Sandobal",
      "segundoApellido": "Perez"
    }
  };
  documentos.push(documento);

  res.json({
    "mensaje": "Operación Exitosa",
    "folio": "536234d8-6d06-44eb-a9bf-9b55f14ed4bd",
    "resultado": {
      "idDocumento": newId
    }
  });
});

// Update
app.put(basePath + '/gestion-documentos/v1/documentos/:idDocumento?', function (req, res) {
  const currentId = req.params.idDocumento;
  console.log("PUT /documentos/" + currentId);

  var index = documentos.findIndex(function (x) {
    return x.id == currentId;
  });

  var currentDoc = documentos[index];

  if (currentDoc == undefined) {
    res.json({
      "codigo": "500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
      "mensaje": "Error en el servidor al procesar la petición.",
      "folio": "145-202005041545559500",
      "info": "https://baz-developer.bancoazteca.com.mx/info#500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
      "detalles": [
        "Problemas internos"
      ]
    });
  }
  else {
    currentDoc.nombre = req.body.nombre;
    currentDoc.ruta = req.body.ruta;
    currentDoc.fechaUltimaEdicion = obtenerFechaActual();
    currentDoc.usuario.id = req.body.idUsuario;

    res.json({
      "mensaje": "Operación Exitosa",
      "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733"
    })
  }
});

// Read by Id
// Consulta detalles firmas
// Consulta detalles documentos
app.post(basePath + '/gestion-documentos/v1/documentos/:idDocumento/busquedas', function (req, res) {
  const currentId = req.params.idDocumento;
  console.log("POST /documentos/" + currentId + "/busquedas");

  if (currentId == "detalles-firmas") {
    res.json({
      "mensaje": "Operación Exitosa",
      "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733",
      "resultado": {
        "totalFirmas": 4,
        "firmasRecabadas": 2,
        "etiquetas": [
          "Contrato",
          "Carta"
        ],
        "firmantes": [
          {
            "id": 1,
            "nombre": "Ricardo",
            "primerApellido": "Sandobal",
            "segundoApellido": "Coretes",
            "contacto": {
              "correo": "ricardo.cortes@juridicogs.com"
            },
            "fechaHoraFirma": "18/Mar/2023 11:50",
            "documentoVisto": true,
            "firmado": true
          },
          {
            "id": 2,
            "nombre": "Juan",
            "primerApellido": "Rodríguez",
            "segundoApellido": "Sandoval",
            "contacto": {
              "correo": "juan.sandoval@juridicogs.com"
            },
            "fechaHoraFirma": "19/Mar/2023 11:50",
            "documentoVisto": true,
            "firmado": true
          },
          {
            "id": 3,
            "nombre": "Bruce",
            "primerApellido": "Wane",
            "segundoApellido": "Martínez",
            "contacto": {
              "correo": "bruce.wane@juridicogs.com"
            },
            "fechaHoraFirma": null,
            "documentoVisto": true,
            "firmado": false
          },
          {
            "id": 4,
            "nombre": "Peter",
            "primerApellido": "Parker",
            "segundoApellido": "Gonzáles",
            "contacto": {
              "correo": "peter.spaydi@juridicogs.com"
            },
            "fechaHoraFirma": null,
            "documentoVisto": true,
            "firmado": false
          }
        ]
      }
    })
  }
  else if (currentId == "detalles") {
    var index = documentos.findIndex(function (x) {
      return x.id == req.body.idDocumento;
    });

    var currentDoc = documentos[index];

    if (currentDoc == undefined) {
      res.json({
        "codigo": "500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
        "mensaje": "Error en el servidor al procesar la petición.",
        "folio": "145-202005041545559500",
        "info": "https://baz-developer.bancoazteca.com.mx/info#500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
        "detalles": [
          "Problemas internos"
        ]
      });
    }
    else {
      res.json({
        "mensaje": "Operación Exitosa",
        "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733",
        "resultado": {
          "documento": {
            "nombre": currentDoc.nombre,
            "unidadNegocio": "Banco Azteca",
            "area": "Recursos humanos",
            "tipoDocumento": "Contrato",
            "categoria": "categoria",
            "etiquetas": [
              "contrato",
              "Carta"
            ],
            "firmantes": [
              {
                "id": 1,
                "nombre": "Ricardo",
                "primerApellido": "Sandobal",
                "segundoApellido": "Coretes",
                "contacto": {
                  "correo": "ricardo.cortes@juridicogs.com"
                }
              }
            ],
            "configuracionFirmas": {
              "tipoFirmas": "Simple",
              "validaciones": {
                "identificacionOficial": true,
                "pruebaVida": true,
                "geolocalizacion": true
              }
            },
            "configuracionEnvios": {
              "fechaLimiteFirma": "03/Abr/2023",
              "asunto": "Alfredo te envio un documento para firma.",
              "mensaje": "El documento Contrato de Compraventa mercantil requiere tu firma."
            }
          }
        }
      })
    }
  }
  else {
    var index = documentos.findIndex(function (x) {
      return x.id == currentId;
    });

    var currentDoc = documentos[index];

    if (currentDoc == undefined) {
      res.json({
        "codigo": "500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
        "mensaje": "Error en el servidor al procesar la petición.",
        "folio": "145-202005041545559500",
        "info": "https://baz-developer.bancoazteca.com.mx/info#500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
        "detalles": [
          "Problemas internos"
        ]
      });
    }
    else {
      res.json({
        "mensaje": "Operación Exitosa",
        "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733",
        "resultado": {
          "nombre": currentDoc.nombre,
          "ruta": currentDoc.ruta,
          "idUnidadNegocio": 1,
          "idArea": 1,
          "idTipoDocumento": 2,
          "idCategoria": 1,
          "idEmpresa": "ASDF12324GHJ",
          "etiquetas": [
            "Contrato",
            "Carta"
          ],
          "idUsuario": currentDoc.usuario.id,
          "idPaso": 1
        }
      })
    }
  }
});

// Read
app.post(basePath + '/gestion-documentos/v1/documentos/busquedas', function (req, res) {
  console.log("POST /documentos/busquedas");
  res.json({
    "mensaje": "Operación Exitosa",
    "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733",
    "resultado": {
      "documentos": documentos
    }
  })
});

// Envíos
app.post(basePath + '/gestion-documentos/v1/documentos/:idDocumento/envios', function (req, res) {
  const currentId = req.params.idDocumento;
  console.log("PUT /documentos/" + currentId + "/envios");

  var index = documentos.findIndex(function (x) {
    return x.id == currentId;
  });

  var currentDoc = documentos[index];

  if (currentDoc == undefined) {
    res.json({
      "codigo": "500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
      "mensaje": "Error en el servidor al procesar la petición.",
      "folio": "145-202005041545559500",
      "info": "https://baz-developer.bancoazteca.com.mx/info#500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
      "detalles": [
        "Problemas internos"
      ]
    });
  }
  else {
    res.json({
      "mensaje": "Operación Exitosa",
      "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733"
    })
  }
});

// Estatus búsquedas
var estatus = [
  {
    "idEstatus": 1,
    "estatus": "Proceso de firma",
    "totalDocumentos": 29
  },
  {
    "idEstatus": 2,
    "estatus": "Borradores",
    "totalDocumentos": 10
  },
  {
    "idEstatus": 3,
    "estatus": "Vencidos",
    "totalDocumentos": 1
  },
  {
    "idEstatus": 4,
    "estatus": "Firmados",
    "totalDocumentos": 3
  },
  {
    "idEstatus": 5,
    "estatus": "Cancelados y rechazados",
    "totalDocumentos": 33
  }
];

// Búsquedas
app.post(basePath + '/gestion-documentos/v1/estatus-documentos/busquedas', function (req, res) {
  console.log("POST /estatus-documentos/busquedas");
  res.json({
    "mensaje": "Operación Exitosa",
    "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733",
    "resultado": {
      "estatus": estatus
    }
  })
});

// Estatus Documentos
app.put(basePath + '/gestion-documentos/v1/documentos/:idDocumento/estatus', function (req, res) {
  const currentId = req.params.idDocumento;
  console.log("PUT /documentos/" + currentId + "/estatus");

  var index = documentos.findIndex(function (x) {
    return x.id == currentId;
  });

  var currentDoc = documentos[index];

  if (currentDoc == undefined) {
    res.json({
      "codigo": "500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
      "mensaje": "Error en el servidor al procesar la petición.",
      "folio": "145-202005041545559500",
      "info": "https://baz-developer.bancoazteca.com.mx/info#500.Grupo-Salinas-Juridico-Firma-Documentos-Gestion-Documentos.145500",
      "detalles": [
        "Problemas internos"
      ]
    });
  }
  else {
    currentDoc.idEstatus = req.body.idEstatus;
    res.json({
      "mensaje": "Operación Exitosa",
      "folio": "324a9bb7-f88d-4c6b-9cba-df00785dd733"
    })
  }
});

/**
 * UTILS
 */
const meses = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
];

const obtenerFechaActual = () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
};

app.listen(port)
