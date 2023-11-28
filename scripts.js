// Ejemplo de productos para cada sección
const productosPlasticos = [
    { name: 'Riendas',          description: 'X unidad',        precio:'$85.00',             image: 'image/rienda.jpg' },
    //{ name: 'E-62',             description: 'x100',            precio:'$7,730',             image: 'image/tirador.jpg' },
    //{ name: 'E-67',             description: 'x20',             precio:'$4,378',             image: 'image/tirador.jpg' },
    //{ name: 'E-68 Nylon',       description: 'Xuni',            precio:'$199.54',            image: 'image/tirador.jpg' },
    { name: 'E-78',             description: 'X100',            precio:'$2,770.00',          image: 'image/e78.jpg' },
    { name: 'E-66',             description: 'X100',            precio:'$1,182.00',          image: 'image/e66.jpg' },
    { name: 'E-98 Baja mod 45', description: 'X200',            precio:'$1,716.00',          image: 'image/e98.jpg' },
    { name: 'E-98 Mediana',     description: 'X200',            precio:'$1,816.00',          image: 'image/e98.jpg' },
    { name: 'E-98 Alta Rotonda', description: 'X200',           precio:'$2,037,90',          image: 'image/e98.jpg' },
    { name: 'T-87',             description: 'X100',            precio:'$3,029.00',          image: 'image/t87.jpg' },
    { name: 'T-88',             description: 'x100',            precio:'$2,321.16',          image: 'image/t88.jpg' },
    { name: 'T-89 Negro',       description: 'X100',            precio:'$1,689.71',          image: 'image/t89.jpg' },
    { name: 'T-89 Blanco',      description: 'X100',            precio:'$1,626.00',          image: 'image/t89.jpg' },
    { name: 'T-90 Negro',       description: 'X100',            precio:'$3,624.29',          image: 'image/t90.jpg' },
    { name: 'T-90 Blanco',      description: 'X100',            precio:'$4,093.50',          image: 'image/t90.jpg' },
    { name: 'T-91 Negro',       description: 'X50PARES',        precio:'$3,123.86',          image: 'image/t91.jpg' },
    { name: 'T-91 Blanco',      description: 'X50PARES',        precio:'$3,521.16',          image: 'image/t91.jpg' },
    { name: 'T-92',             description: 'X100',            precio:'$3,996.44',          image: 'image/t92.jpg' },
    { name: 'T-92 Caja Agua',   description: '',                precio:'4,748.52',           image: 'image/t92agua.jpg' },
    { name: 'T-93 Negro',       description: 'X20',             precio:'$5,980.19',          image: 'image/t93.jpg' },
    { name: 'T-93 Blanco',      description: 'X20',             precio:'$5,980.19',          image: 'image/t93.jpg' },
    { name: 'T-93 ECO',         description: 'X20',             precio:'$3,117.60',          image: 'image/t93.jpg' },
    { name: 'T-95 Negro',       description: 'X500',            precio:'$4,534.40',          image: 'image/t95.jpg' },
    { name: 'T-95 Blanco',      description: 'X500',            precio:'$4,989.91',          image: 'image/t95.jpg' },
    { name: 'T-96',             description: 'X500',            precio:'$8,376.78',          image: 'image/t96.jpg' },
    { name: 'T-98',             description: 'X10',             precio:'$3,675.34',          image: 'image/t98.jpg' },
    { name: 'T-100 BCO',        description: 'X100',            precio:'$3,484.67',          image: 'image/t100blanca.jpeg'},
    { name: 'T-100 Neg',        description: 'X100',            precio:'$3,358.30',          image: 'image/t100negro.jpg'},
    { name: 'T-112',            description: 'X100',            precio:'$5,491.37',          image: 'image/t112.jpeg' },
    { name: 'T-112 Caja agua',  description: 'A30 X100',        precio:'$6,384.76',          image: 'image/t112.jpeg' },
    { name: 'T-115',            description: 'X100',            precio:'$3,321.25',          image: 'image/t115.jpeg' },
    { name: 'T-116 Negro',      description: 'X50pares',        precio:'$4,866.68',          image: 'image/t91.jpg' },
    { name: 'T-116 Blanco',     description: 'X50pares',        precio:'$5,845.37',          image: 'image/t91.jpg' },
    { name: 'T-117 Negro con prisionero',               description: 'X50',             precio:'$2,224.00',                    image: 'image/T117.jpg' },
    { name: 'T-117 Blanco con prisionero',              description: 'X50',             precio:'$2,355.00',                    image: 'image/T117.jpg' },
    { name: 'T-118 Negro',      description: 'X50',             precio:'$2,225.00',          image: 'image/t118.jpg' },
    { name: 'T-118 Blanco',     description: 'X50',             precio:'$2,355.00',          image: 'image/t118.jpg' },
    { name: 'T-127',            description: 'X100',            precio:'$6,461.00',          image: 'image/t127.jpg' },
    { name: 'T-130 Negro',      description: 'X100',            precio:'$1,644.50',          image: 'image/t130.jpg' },
    { name: 'T-130 Blanco',     description: 'X100',            precio:'$1,773.20',          image: 'image/t130.jpg' },
    { name: 'T-131 Negro',      description: 'X100',            precio:'$1,644.50',          image: 'image/t131.jpeg' },
    { name: 'T-131 Blanco',     description: 'X100',            precio:'$1,766.60',          image: 'image/t131.jpeg' },
    { name: 'T-132 ECO',        description: 'X8',              precio:'$2,494.80',          image: 'image/t132.jpg' },
    { name: 'T-143',            description: 'modea 2 X100',               precio:'$4,587.00',                    image: 'image/t92.jpg' },
    { name: 'T-150',            description: 'X20 pares',       precio:'$5,486.00',          image: 'image/tirador.jpg' },
    { name: 'Calzo 1mm',        description: 'X100',            precio:'$1,720.40',          image: 'image/calzo1mm.jpg' },
    { name: 'Calzo 2mm',        description: 'X100',            precio:'$1,763.30',          image: 'image/tirador.jpg' },
    { name: 'Calzo 3mm',        description: 'X100',            precio:'$1,785.00',          image: 'image/tirador.jpg' },
    { name: 'Calzo 4mm',        description: 'X100',            precio:'$1,883.20',          image: 'image/tirador.jpg' },
    { name: 'Calzo 5mm',        description: 'X100',            precio:'$1,914.30',          image: 'image/tirador.jpg' },
    { name: 'Calzo 6mm',        description: 'X100',            precio:'$1,945.69',          image: 'image/tirador.jpg' },
    { name: 'Tirador Blanco',   description: 'X20',             precio:'$969.60',            image: 'image/tirador.jpg' },
    { name: 'Tirador Negro',    description: 'X20',             precio:'$969.60',            image: 'image/tirador.jpg' },
    { name: 'Aldaba Eco',       description: 'X50',             precio:'$3,625.50',          image: 'image/tirador.jpg' },
    { name: 'Antiruido',        description: 'X100',            precio:'$1,027,378.00',      image: 'image/tirador.jpg' },
    { name: 'Parte J',          description: 'X200',            precio:'$1,027.00',          image: 'image/partep.jpg' },
    { name: 'Parte P',          description: 'X100',            precio:'$1,350.69',          image: 'image/partej.jpg' },
    { name: 'Patin regulable PB',        description: 'X100',   precio:'$726.90',            image: 'image/patinpb.jpg' },
    { name: 'CE-TOS',           description: 'Clip mediterranea',                precio:'$$8,186.20',         image: 'image/clipmediterranea.jpg' },
        
    
];

const productosHerrajes = [
    { name: 'Cierre lateral standar ventana corrediza con kit xUni.',        description: 'H-55',       precio:'$2,114.00',          image: 'image/cierrelateral.jpg' },
    { name: 'Falleba para ventana de abrir con kit de fijación xUni.',        description: 'H-47 ',      precio:'$7,504.00',          image: 'image/fallebaparaventananegra.jpeg' },
    { name: 'Manija picaporte doble balancin metalico xUni.',                 description: 'H-93',       precio:'$6,755.00',          image: 'image/manijapicaporteh93.jpeg' },
    { name: 'Cerradura con eurocilindro modena xUni.',                        description: 'H-51',       precio:'$13,706.00',         image: 'image/eurocilindro.jpeg' },
    { name: 'Bisagra 2 cuerpos ventanas camara europea xUni.',                description: 'H-61',       precio:'$1,750.00',          image: 'image/bisagra2cuerposnegra.jpeg' },
    { name: 'Bisagra 3 cuerpos puerta camara europea xUni.',                  description: 'H-62',       precio:'$2,772.00',          image: 'image/bisagra3cuerpos.jpeg' },
    { name: 'Aldaba reversible para proyectante xUni.',                       description: 'CP25',       precio:'$2,772.00',          image: 'image/aldabareversible.jpeg' },

// RODAMIENTO AZZURRA

    { name: 'Rueda simple regulable modena (carga max.40kg) xUni.',          description: 'R-40N',         precio:'$660.00',           image: 'image/ruedar40.jpg' },
    { name: 'RUEDA SIMPLE REGULABLE MODENA (Carga Max. 25Kg) xuni',          description: 'R-40A',         precio:'$540.00',           image: 'image/ruedar40d.jpg' },
    { name: 'Rueda doble regulable modena (carga max.80kg) xUni',            description: 'R-42',          precio:'$1,617.00',         image: 'image/ruedar42.jpg' },
    { name: 'RUEDA DOBLE REGULABLE LINEA MODENA (45KG.) xuni',               description: 'R-42A',         precio:'$1,211.00',         image: 'image/ruedar42.jpg' },
    //{ name: 'Nylon x Unidad',                                                description: 'R10.5',         precio:'$653.00',           image: 'image/tirador.jpg' },
    //{ name: 'Nylon x Unidad',                                                description: 'R11.5',         precio:'$910.00',           image: 'image/tirador.jpg' },
    //{ name: 'Zamak x Unidad',                                                description: 'R.10.5',        precio:'$890.82',           image: 'image/tirador.jpg' },
    //{ name: 'Zamak x Unidad',                                                description: 'R11.5',         precio:'$1,208.00',         image: 'image/tirador.jpg' },
    //{ name: 'xunidad',                                                       description: 'R-46',          precio:'$2,035.00',         image: 'image/tirador.jpg' },
    //{ name: '×Unidad 140kg',                                                 description: 'R-47',          precio:'$2,540.00',         image: 'image/tirador.jpg' },

//FELPA IMPORTADA AZZURA

    //{ name: 'Felpa 7x6 estandar color gris ×400m',        description: 'C-14',           precio:'$27,566.00',      image: 'image/tirador.jpg' },
    //{ name: 'Felpa 7x4,5 estandar color gris x450m',      description: 'Parte H',        precio:'$27,566.00',      image: 'image/tirador.jpg' },

//TEJIDO MOSQUITERO LINEA AZZURRA

{ name: 'Tejido para mosquitero en aluminio 0.800x30m xUni.',                   description: 'TEJ800 ',       precio:'$88,675.00',           image: 'image/tejidomosquitero.jpg' },
{ name: 'Tejido para mosquitero en aluminio 1.000x30m xUni',                    description: 'TEJ1000',       precio:'$114,312.00',          image: 'image/tejidomosquitero.jpg' },
{ name: 'Tejido para mosquitero en aluminio 1.200x30m xUni.',                   description: 'TEJ1200',       precio:'$135,168.00',          image: 'image/tejidomosquitero.jpg' },
{ name: 'Tejido para mosquitero en aluminio 1.500x30m xUni.',                   description: 'TEJ1500',       precio:'$$164,725.00',         image: 'image/tejidomosquitero.jpg' },

//HERRAJES GSG ITALY

    { name: 'Kit para ventanas oscilobatientes completo xUni.',                  description: 'H-45',            precio:'$46,250.00',        image: 'image/oscilobatienteh45.jpg' },
    { name: 'Manija picaporte doble balancín metálico xUni.',                    description: 'H-50',            precio:'$10,831.00',        image: 'image/manijah50.jpg' },
    { name: 'Manija picaporte doble balancín plástico xUni.',                    description: 'H-50P ',          precio:'$$7,287.00',        image: 'image/manijah50p.jpg' },
    { name: 'Cerradura de eurocilindro (A30/ modena) xUni.',                     description: 'H-51A-M',         precio:'$21,737.00',        image: 'image/cerradurah51am.jpg' },
    { name: 'Cerradura doble paleta (ekonal/herrero) xUni.',                     description: 'H-51H',           precio:'$12,175.00',        image: 'image/cerraduradoblepaleta.jpg' },
    { name: 'Cierre ventana banderola xUni.',                                    description: 'H-52 ',           precio:'$$4,350.00',        image: 'image/cierrebanderola.jpg' },
    { name: 'Brazo limitador para ventana banderola xUni.',                      description: 'H-53',            precio:'$11,300.00',        image: 'image/brazolimitadorbanderola.jpg' },
    { name: 'Cierre lateral standard ventana corrediza con kit xUni.',           description: 'H-55',            precio:'$2,500.00',         image: 'image/cierrelateralh55.jpg' },
    { name: 'Cierre lateral XL ventana corrediza con kit xUni.',                 description: 'H-56',            precio:'$2,500.00',         image: 'image/cierrelateralh56.jpg' },
    { name: 'Brazo de empuje om 224mm xUni.',                                    description: 'H-63',            precio:'$$8,587.00',        image: 'image/brazodeempujeh63.jpg' },        
    { name: 'Cierre multipunto 600mm completo para corrediza xUni.A30 y m45',    description: 'H-102',           precio:'$16,500.00',        image: 'image/cierremultipunto.jpg' },
    { name: 'Aldaba reversible para proyectante piel de vidrio xUni.',           description: 'H-115 ',          precio:'$8,250.00',         image: 'image/aldabapieldevidrio.jpg' },
    { name: 'Cierre central de aplicar para ventanas corredizas xUni.',          description: 'APL ',            precio:'$3,975.00',         image: 'image/cierrecentral.jpg' },

// BISAGRA A FRICCIÓN DE ACERO INOXIDABLE CON LIMITADOR INCORPORADO     

    { name: 'Brazo fricción 254mm (10") xUni.',              description: 'H-36/A ',          precio:'$14,268.00',          image: 'image/bisagrafriccion254.jpg' },
    { name: 'Brazos fricción 404mm (16") xUni.',             description: 'H-36/B ',          precio:'$17,187.00',          image: 'image/bisagrafriccion404.jpg' },
    { name: 'Brazo fricción 553mm (22") xUni.',              description: 'H-36/C',           precio:'$23,056.00',          image: 'image/bisagrafriccion404.jpg' },
    { name: 'Brazo fricción 655mm (26") xUni.',              description: 'H-36/D',           precio:'$36,020.00',          image: 'image/bisagrafriccion404.jpg' },
    { name: 'Brazo fricción 705mm (28") xUni.',              description: 'H-36/F ',          precio:'$40,312.00',          image: 'image/bisagrafriccion404.jpg' },

//RODAMIENTO GSG ITALY

    

//ESCUADRAS DE ALUMINIO MASTER (made in Italy)
    
    //{ name: 'Escuadra de marco y hoja xUni.',         description: 'E-83',                 precio:'$1,243.00',          image: 'image/tirador.jpg' },
    //{ name: 'Escuadra de marco y hoja A30 xUni.',     description: 'AA255',                precio:'$1,281.25',          image: 'image/tirador.jpg' },
    //{ name: 'Escuadra de hoja corrediza xUni.',       description: 'E-97/AA256',           precio:'$881.25',            image: 'image/tirador.jpg' },
    //{ name: 'Escuadra de puerta xUni',                description: 'E-70',                 precio:'$1,469.00',          image: 'image/tirador.jpg' },
    //{ name: 'Escuadra de marco y hoja xUni.',         description: 'AA700',                precio:'$1,387.00',          image: 'image/tirador.jpg' },
    //{ name: 'x unidad',                               description: 'E-69 italiana',        precio:'$1,250.00',          image: 'image/tirador.jpg' },

//FELPA GSG

    { name: 'Felpa 7x6 con fin seal Color Gris',      description: 'C-14',          precio:'$41,187.00',        image: 'image/burletefelpa.jpg' },
    { name: 'Felpa 7x4,5 con fin seal Color Gris',    description: 'PARTE H',       precio:'$41,187.00',        image: 'image/burletefelpa.jpg' },

//BURLETES PVC

    { name: 'Burlete Universal (liviano)',              description: 'x100mts.',           precio:'$9,139.00',       image: 'image/burlete.jpg' },
    { name: 'Burlete Universal (estándar)',             description: 'x100mts.',           precio:'$10,372.00',      image: 'image/burlete.jpg' },
    { name: 'Burlete Universal (pesado)',               description: 'x100mts.',           precio:'$11,564.00',      image: 'image/burlete.jpg' },
    { name: 'Burlete Paraguaya (chica)',                description: 'x100mts.',           precio:'$4,895.00',       image: 'image/burleteparaguaya.jpg' },
    { name: 'Burlete Paraguaya (mediana)',              description: 'x100mts.',           precio:'$6,177.00',       image: 'image/burleteparaguaya.jpg' },
    { name: 'Burlete Paraguaya (grande)',               description: 'x100mts.',           precio:'$9,677.00',       image: 'image/burleteparaguaya.jpg' },
    { name: 'Burlete Paraguaya (con rulo)',             description: 'x100mts.',           precio:'$13,966.00',      image: 'image/burleteparaguaya.jpg' },
    { name: 'Burlete Paraguaya (extra grande)',         description: 'x100mts.',           precio:'$13,966.00',      image: 'image/burleteparaguaya.jpg' },
    { name: 'Burlete Paraguaya XXG Max',                description: '',                   precio:'$17,278.00',      image: 'image/burleteparaguaya.jpg' },
   //{ name: 'Burlete Tubo paño fijo',                   description: 'x100mts.',           precio:'$7,108.00',       image: 'image/tirador.jpg' },
    //{ name: 'Burlete Tubo paño fijo "BA" 303',          description: '',                   precio:'$7,929.00',       image: 'image/tirador.jpg' },
    //{ name: 'Burlete Parte T',                          description: 'x50mts.',            precio:'$6,295.00',       image: 'image/tirador.jpg' },
    { name: 'Burlete cordon (4mm)',                     description: 'x100mts.',           precio:'$2,799.00',       image: 'image/burletecordon4mm.jpg' },
    { name: 'Burlete Cordón (4,5mm)',                   description: 'x100mts.',           precio:'$$2,865.00',      image: 'image/burletecordon4mm.jpg' },
    { name: 'Burlete Cordón (5mm)',                     description: 'x100mts.',           precio:'$3,762.00',       image: 'image/burletecordon4mm.jpg' },
    { name: 'Burlete Cordón (5,5mm)',                   description: 'x100mts.',           precio:'$3,048.00',       image: 'image/burletecordon4mm.jpg' },
    { name: 'Burlete Cordón (6mm)',                     description: 'x100mts.',           precio:'$3,671.00',       image: 'image/burletecordon4mm.jpg' },
    //{ name: 'Burlete Cordon (7mm)',                     description: '',                   precio:'$3,741.00',       image: 'image/tirador.jpg' },
    { name: 'Burlete Felpa',                            description: 'x100mts.',           precio:'$2,948.00',       image: 'image/burletefelpa.jpg' },
    //{ name: 'Burlete Lateral n°5',                      description: 'x100mts.',           precio:'$6,611.00',       image: 'image/tirador.jpg' },
    //{ name: 'Burlete Lateral Mediano chico',            description: '',                   precio:'$5,013.00',       image: 'image/tirador.jpg' },
    //{ name: 'Burlete Medianito',                        description: 'x100mts.',           precio:'$',               image: 'image/tirador.jpg' },
    { name: 'Tapa canto (25)',                          description: 'x50 mts.',           precio:'$5,087.00',       image: 'image/tapacanto.jpg' },
    { name: 'Tapa canto (36)',                          description: 'x50 mts.',           precio:'$7,568.00',       image: 'image/tapacanto.jpg' },
    //{ name: 'Tapa canto (45)',                          description: 'x50 mts.',           precio:'$15,141.00',      image: 'image/tirador.jpg' },
    { name: 'Cuña n°10 (3mm)',                          description: 'x100mts.',           precio:'$4,895.00',       image: 'image/cuñan10.jpg' },
    //{ name: 'Cuña n°11 (4mm)',                          description: 'x100mts.',           precio:'$6,000.00',       image: 'image/cuñan11.jpg' },
    //{ name: 'Cuña N°0,(4mm)',                           description: '',                   precio:'$',               image: 'image/cuñan0.jpg' },
    //{ name: 'Cuña vidrio repartido 3mm (pinito)',       description: '',                   precio:'$5,942.00',       image: 'image/tirador.jpg' },
    //{ name: 'Cuña vidrio repartido 4mm (pinito)',       description: '',                   precio:'$6,000.00',       image: 'image/tirador.jpg' },
    //{ name: 'Cuña N°5',                                 description: '',                   precio:'$7,602.00',       image: 'image/tirador.jpg' },
    //{ name: 'Cuña Fina W',                              description: '',                   precio:'$6,296.00',       image: 'image/tirador.jpg' },
    //{ name: 'Cuña Mediana V',                           description: '',                   precio:'$8,660.00',       image: 'image/tirador.jpg' },
    //{ name: 'Cuña gruesa U',                            description: '',                   precio:'$10,237.00',      image: 'image/tirador.jpg' },
    //{ name: 'Cuña DVH',                                 description: '',                   precio:'$5,709.00',       image: 'image/tirador.jpg' },
    //{ name: 'Agm tope mampara',                         description: 'x100mts.',           precio:'$10,843.00',      image: 'image/tirador.jpg' },
    //{ name: 'G.G (vidrio repartido)',                   description: '',                   precio:'$7,344.00',       image: 'image/tirador.jpg' },
    //{ name: 'GG 2,4',                                   description: 'x100mts.',           precio:'$',               image: 'image/tirador.jpg' },
    //{ name: 'GG 3,2',                                   description: 'x100mts.',           precio:'$',               image: 'image/tirador.jpg' },
    //{ name: 'Espejada',                                 description: 'x100mts.',           precio:'$',               image: 'image/tirador.jpg' },
    { name: 'B-67 PVC',                                 description: 'x100mts.',           precio:'$9,384.00',       image: 'image/b67.jpg' },
    { name: 'B-68',                                     description: '',                   precio:'$9,526.00',       image: 'image/b68.jpg' },
    { name: 'B-70',                                     description: '',                   precio:'$14,927.00',      image: 'image/b70.jpg' },
    { name: 'B-29',                                     description: '',                   precio:'$6,294.00',       image: 'image/b29.jpg' },
    { name: 'B-30',                                     description: '',                   precio:'$8,662.00',       image: 'image/b30.jpg' },
    { name: 'B-31',                                     description: '',                   precio:'$10,260.00',      image: 'image/b31.jpg' },
    { name: 'B-52 PVC',                                 description: 'x100mts.',           precio:'$5,940.00',       image: 'image/b52.jpg' },
    { name: 'B-57 PVC',                                 description: 'x100mts.',           precio:'$8,240.00',       image: 'image/b57.jpg' },
    { name: 'Cuña 12115 (junta pisos)',                 description: '',                   precio:'$7,312.00',       image: 'image/tirador.jpg' },
];

const productosAccesorios = [
    { name: 'E-69 Nacional Aluminio',             description: 'x Unidad',                      precio:'360.00',        image: 'image/e69aluminio.jpg' },
    { name: 'H-61 Nacional Bco/Neg',              description: 'x Unidad',                      precio:'1,035.00',      image: 'image/e61.jpg' },
    { name: 'H-62 bco/neg',                       description: 'x Unidad',                      precio:'2,082.00',      image: 'image/h62.jpg' },
    { name: 'FLH-1 Blanco',                       description: 'x 12',                          precio:'',              image: 'image/flh1blanco.jpeg' },
    { name: 'FLH-1 Negro',                        description: 'x 12',                          precio:'',              image: 'image/flh1negro.jpeg' },
    { name: 'FLH-1 Natural',                      description: 'x 12',                          precio:'',              image: 'image/flh1natural.jpg' },
    { name: 'H-33 Blanco',                        description: 'x 12',                          precio:'',              image: 'image/h33blanco.jpg' },
    { name: 'H-33 Negro',                         description: 'x 12',                          precio:'',              image: 'image/h33.jpg' },
    //{ name: 'H-33 Natural',                       description: 'x 12',                          precio:'',              image: 'image/tirador.jpg' },
    { name: 'H-63 Largo Blanco',                  description: 'x Unidad',                      precio:'',              image: 'image/h63largoblanco.jpg' },
    { name: 'H-63 Largo Negro',                   description: 'x Unidad',                      precio:'',              image: 'image/h63largonegro.jpg' },
    { name: 'H-63 Corto Blanco',                  description: 'x Unidad',                      precio:'',              image: 'image/h63largoblanco.jpg' },
    { name: 'H-63 Corto Negro',                   description: 'x Unidad',                      precio:'',              image: 'image/h63largonegro.jpg' },
    { name: 'Cierre lateral Master aluminio',     description: 'Con Kit incluido xUni Bco/Neg', precio:'',              image: 'image/cierremaster.jpg' },
    { name: 'cierre h-101',                       description: 'Con kit incluido x unidad',     precio:'',              image: 'image/cierreh101.jpg' },
    { name: 'cierre Bipunto .nacional',           description: 'modena 90',                     precio:'',              image: 'image/cierrebipunto90.jpg' },
    { name: 'Cierre Bipunto A30',                 description: '×Unidad',                       precio:'',              image: 'image/bipuntoa30.jpg' },
    { name: 'Cierre Bipunto Modena 45',           description: '×Unidad',                       precio:'',              image: 'image/bipunto45.jpg' },
    { name: 'S-09',                               description: 'Grampa de amure x 100',         precio:'',              image: 'image/grampas9.jpg' },
    { name: 'E-70',                               description: 'x Unidad',                      precio:'',              image: 'image/e70.jpg' },
    { name: 'E-71',                               description: 'x20',                           precio:'',              image: 'image/e71.jpg' },
    { name: 'E-83',                               description: 'x Unidad',                      precio:'',              image: 'image/e83.jpg' },
    { name: 'Tornillo Parker 38x10',              description: '×1000',                         precio:'',              image: 'image/tornilloparker.jpg' },
    { name: 'Tornillo Pan Framing',               description: '×1000',                         precio:'',              image: 'image/tornilloframing.jpg' },
    { name: 'H-49',                               description: 'x Unidad',                      precio:'',              image: 'image/h49.jpg' },
    { name: 'H-43',                               description: 'x Unidad',                      precio:'',              image: 'image/h43.jpg' },
    { name: 'H-50 Tata Nylon',                    description: 'Bco/neg',                       precio:'',              image: 'image/h50tatanylon.jpg' },
    { name: 'H-51 ECO mgd',                       description: 'mgd',                           precio:'',              image: 'image/h51eco.jpg' },
    //{ name: 'Grampa de amure chapa',              description: '×100',                          precio:'',              image: 'image/tirador.jpg' },
    { name: 'H-53 Largo',                         description: '×par',                          precio:'',              image: 'image/h53largo.jpg' },
    { name: 'H-53 Corto',                         description: '×par',                          precio:'',              image: 'image/h53corto.jpg' },
    { name: 'H-52 Eco',                           description: 'Bco/neg x Unidad',              precio:'',              image: 'image/h52eco.jpg' },
    { name: 'Pletina',                            description: 'x30 metros',                    precio:'',              image: 'image/pletina.jpg' },
    { name: 'Franca 20',                          description: 'x Unidad',                      precio:'',              image: 'image/franca20.jpg' },
    { name: 'Franca 30',                          description: 'x Unidad',                      precio:'',              image: 'image/franca20.jpg' },
    { name: 'Franca 40',                          description: 'x Unidad',                      precio:'',              image: 'image/franca20.jpg' },
    { name: 'Apli bco/neg',                       description: 'x Unidad',                      precio:'',              image: 'image/cierreapli.jpg' },
    { name: 'Apli con llave',                     description: 'x Unidad',                      precio:'',              image: 'image/cierreapliconllave.jpg' },
    { name: 'H-14',                               description: 'TRABA BANDEROLA',               precio:'',              image: 'image/h14.jpg' },
    { name: 'colocador mosquitero doble',         description: 'x Unidad',                      precio:'',              image: 'image/mosquiterodoble.jpg' },
    //{ name: 'H-14',                               description: 'PARA POSTIGON',                 precio:'',              image: 'image/h14postigon.jpg' },
    //{ name: 'Cerradura herrero 25mm',             description: 'x Unidad',                      precio:'',              image: 'image/tirador.jpg' },
    { name: 'Cerradura herrero 36mm',             description: 'x Unidad',                      precio:'',              image: 'image/cerradura36mm.jpg' },
    { name: 'CP-5',                               description: 'izq/der',                       precio:'',              image: 'image/cp5.jpg' },
    { name: 'CP-7',                               description: 'izq/der',                       precio:'',              image: 'image/cp7.jpg' },

//BURLETES DE GOMA

    { name: 'B-57',               description: '×100',             precio:'',              image: 'image/b57.jpg' },
    { name: 'B-29',               description: '×100',             precio:'',              image: 'image/b29.jpg' },
    { name: 'B-30',               description: '×100',             precio:'',              image: 'image/b30.jpg' },
    { name: 'B-31',               description: '×100',             precio:'',              image: 'image/b31.jpg' },
    { name: 'B-37',               description: '×100',             precio:'',              image: 'image/b37.jpg' },
    { name: 'B-52',               description: '×100',             precio:'',              image: 'image/b52.jpg' },
    { name: 'B-52 NEW',           description: '×100',             precio:'',              image: 'image/b52.jpg' },
    { name: 'B-60',               description: '×100',             precio:'',              image: 'image/b60.jpg' },
    { name: 'B-66',               description: '×100',             precio:'',              image: 'image/b66.jpg' },
    { name: 'B-67',               description: '×100',             precio:'',              image: 'image/b67.jpg' },
    { name: 'B-68',               description: '×100',             precio:'',              image: 'image/b68.jpg' },
    { name: 'B-69',               description: '×100',             precio:'',              image: 'image/b69.jpeg' },
    { name: 'B-70/16',            description: '×100',             precio:'',              image: 'image/b70.jpg' },
    //{ name: 'B-71',               description: 'x50',              precio:'',              image: 'image/tirador.jpg' },
    //{ name: 'B-73',               description: '×200',             precio:'',              image: 'image/tirador.jpg' },
    //{ name: 'B-74',               description: '×100',             precio:'',              image: 'image/tirador.jpg' },
    //{ name: 'B-76',               description: '×100',             precio:'',              image: 'image/tirador.jpg' },
    //{ name: 'B-77',               description: 'x50',              precio:'',              image: 'image/tirador.jpg' },
    //{ name: 'B-79',               description: 'x100',             precio:'',              image: 'image/tirador.jpg' },
    //{ name: 'B-80',               description: 'x100',             precio:'',              image: 'image/tirador.jpg' },

//escuadras

    { name: 'Parte "A" (Liviana) 70,5',          description: '×100',            precio:'',              image: 'image/partealiviana.jpg' },
    { name: 'Parte "A" (Liviana) 71,5',          description: '×100',            precio:'',              image: 'image/partealiviana.jpg' },
    { name: 'Parte A Nylon',                     description: '×100',            precio:'',              image: 'image/parteanylon.jpg' },
    { name: 'Parte "A" (pesada)',                description: '×100',            precio:'',              image: 'image/partealiviana.jpg' },
    { name: 'Parte "B"',                         description: '×100',            precio:'',              image: 'image/parteb.jpg' },
    { name: 'Parte "C"',                         description: 'x50',             precio:'',              image: 'image/partec.jpg' },
    { name: 'Esc. Estriada 4mm',                 description: 'x100',            precio:'',              image: 'image/estriada.jpg' },
    { name: 'Esc.Estriada 7mm',                  description: 'x50',             precio:'',              image: 'image/estriada.jpg' },
    { name: 'ALE-1',                             description: 'x100',            precio:'',              image: 'image/ale1.jpg' },
    { name: 'ALE-7',                             description: '×100',            precio:'',              image: 'image/ale7.jpg' },
    //{ name: 'AA-522',                            description: '×100',            precio:'',              image: 'image/tirador.jpg' },
    //{ name: 'AA-537',                            description: '×100',            precio:'',              image: 'image/tirador.jpg' },
    { name: 'E-73 Aluminio',                     description: '×50',             precio:'',              image: 'image/e73.jpg' },
    { name: 'E-73 Nylon',                        description: 'x100',            precio:'',              image: 'image/e73nylon.jpg' },
    { name: 'E-67',                              description: 'x20',             precio:'',              image: 'image/e67.jpg' },
    { name: 'E-80',                              description: 'x20',             precio:'',              image: 'image/e67.jpg' },
    { name: 'E-100',                             description: 'x20',             precio:'',              image: 'image/e67.jpg' },
    { name: 'aldaba venus',                      description: 'x20',             precio:'',              image: 'image/aldabajulieta.jpg' },
    { name: 'aldaba julieta',                    description: 'x20',             precio:'',              image: 'image/aldabavenus.jpg' },
    { name: 'bocallave ntlon',                   description: 'x Unidad',        precio:'',              image: 'image/bocallave.jpg' },
    { name: 'cinta butilo',                      description: 'x50 mts',         precio:'',              image: 'image/cintabutilo.jpg' },
    { name: 'tamiz',                             description: 'x5 kilos',        precio:'',              image: 'image/tamiz.jpg' },
    
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Función para buscar productos
function searchProducts(products, keyword) {
    return products.filter(product => {
        return product.name.toLowerCase().includes(keyword.toLowerCase()) ||
               product.description.toLowerCase().includes(keyword.toLowerCase()) ||
               product.precio.toLowerCase().includes(keyword.toLowerCase());
    });
}

// Función para mostrar productos en el catálogo
function displayProducts(container, products) {
    container.innerHTML = '';

    products.forEach(product => {
        const productCard = `
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="product-card">
                            <img src="${product.image}" alt="${product.name}" class="img-fluid">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                        <p>${product.precio}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += productCard;
    });
}

// Función para buscar y mostrar productos en tiempo real
function updateProductList() {
    const keyword = searchInput.value.toLowerCase();

    const filteredProductsPlasticos = searchProducts(productosPlasticos, keyword);
    displayProducts(document.getElementById('productCatalogPlasticos'), filteredProductsPlasticos);

    const filteredProductsHerrajes = searchProducts(productosHerrajes, keyword);
    displayProducts(document.getElementById('productCatalogHerrajes'), filteredProductsHerrajes);

    const filteredProductsAccesorios = searchProducts(productosAccesorios, keyword);
    displayProducts(document.getElementById('productCatalogAccesorios'), filteredProductsAccesorios);
}

// Evento de entrada de texto en el campo de búsqueda
searchInput.addEventListener('input', updateProductList);

// Mostrar todos los productos al cargar la página
displayProducts(document.getElementById('productCatalogPlasticos'), productosPlasticos);
displayProducts(document.getElementById('productCatalogHerrajes'), productosHerrajes);
displayProducts(document.getElementById('productCatalogAccesorios'), productosAccesorios);


/* row-cols-1 row-cols-sm-2 row-cols-md-3*/

var header = document.querySelector('.header');
    var searchBar = document.querySelector('.search-bar');
    var navbar = document.querySelector('.navbar');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
            searchBar.style.transform = 'translateY(-100%)';
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
            searchBar.style.transform = 'translateY(0)';
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Función para desplazarse suavemente al inicio de la página
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    }

    // Muestra u oculta el botón según la posición del usuario en la página
    window.addEventListener('scroll', function () {
        var scrollButton = document.getElementById('scrollButton');
        if (window.scrollY > 300) { // Cambia 300 según desees
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Cargar la imagen desde JavaScript
    document.addEventListener('DOMContentLoaded', function () {
        const logoImage = document.getElementById('logoImage');
        logoImage.src = 'logoprincipal.png';
    });