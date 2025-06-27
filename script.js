const camisetas = [
  { equipo: "Argentina", referencia: "Camiseta 1", stock: true, imagen: "argentina.jpg" },
  { equipo: "FC Barcelona", referencia: "Camiseta 2", stock: true, imagen: "barsa1.jpg" },
  { equipo: "FC Barcelona", referencia: "Camiseta 3", stock: true, imagen: "barsa2.jpg" },
  { equipo: "FC Barcelona", referencia: "Camiseta 4", stock: true, imagen: "barsa3.jpg" },
  { equipo: "FC Barcelona", referencia: "Camiseta 5", stock: true, imagen: "barsa4.jpg" },
  { equipo: "FC Barcelona", referencia: "Camiseta 6", stock: true, imagen: "barsa5.jpg" },
  { equipo: "FC Barcelona", referencia: "Camiseta 7", stock: true, imagen: "barsa6.jpg" },
  { equipo: "FC Barcelona", referencia: "Camiseta 8", stock: true, imagen: "barsa7.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 9", stock: true, imagen: "betis1.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 10", stock: true, imagen: "betis2.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 11", stock: true, imagen: "betis3.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 12", stock: true, imagen: "betis4.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 13", stock: true, imagen: "betis5.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 14", stock: true, imagen: "betis6.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 15", stock: true, imagen: "betis7.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 16", stock: true, imagen: "betis8.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 50", stock: true, imagen: "betis9.jpg" },
  { equipo: "Real Betis", referencia: "Camiseta 51", stock: true, imagen: "betis10.jpg" },
  { equipo: "Boca Juniors", referencia: "Camiseta 17", stock: true, imagen: "bocajuniors.jpg" },
  { equipo: "España", referencia: "Camiseta 18", stock: true, imagen: "españa1.jpg" },
  { equipo: "España", referencia: "Camiseta 19", stock: true, imagen: "españa2.jpg" },
  { equipo: "España", referencia: "Camiseta 20", stock: true, imagen: "españa3.jpg" },
  { equipo: "España", referencia: "Camiseta 21", stock: true, imagen: "españa4.jpg" },
  { equipo: "España", referencia: "Camiseta 84", stock: true, imagen: "españa5.jpg" },
  { equipo: "Francia", referencia: "Camiseta 22", stock: true, imagen: "francia.jpg" },
  { equipo: "Real Betis - Joaquín", referencia: "Camiseta 23", stock: true, imagen: "juaquin.jpg" },
  { equipo: "Messi", referencia: "Camiseta 24", stock: true, imagen: "messi.jpg" },
  { equipo: "Inter Miami", referencia: "Camiseta 25", stock: true, imagen: "miami.jpg" },
  { equipo: "Inter Miami 2", referencia: "Camiseta 26", stock: true, imagen: "miami2.jpg" },
  { equipo: "Neymar", referencia: "Camiseta 27", stock: true, imagen: "neymar.jpg" },
  { equipo: "PSG", referencia: "Camiseta 28", stock: true, imagen: "paris.jpg" },
  { equipo: "Portugal", referencia: "Camiseta 29", stock: true, imagen: "portugal.jpg" },
  { equipo: "Real Madrid (Morado)", referencia: "Camiseta 30", stock: true, imagen: "realmadrid2.jpg" },
  { equipo: "Real Madrid (Negra)", referencia: "Camiseta 31", stock: true, imagen: "realmadrid.jpg" },
  { equipo: "Real Madrid (Azul)", referencia: "Camiseta 32", stock: true, imagen: "realmadrid3.jpg" },
  { equipo: "Red Bull", referencia: "Camiseta 33", stock: true, imagen: "redbul.jpg" },
  { equipo: "Ronaldo (Negra)", referencia: "Camiseta 34", stock: true, imagen: "ronaldo2.jpg" },
  { equipo: "Ronaldo (Blanca)", referencia: "Camiseta 35", stock: true, imagen: "ronalo.jpg" },
  { equipo: "Sevilla (Clásica)", referencia: "Camiseta 36", stock: true, imagen: "sevilla.jpg" },
  { equipo: "Sevilla 2", referencia: "Camiseta 37", stock: true, imagen: "sevilla2.jpg" },
  { equipo: "Sevilla 3", referencia: "Camiseta 38", stock: true, imagen: "sevilla3.jpg" },
  { equipo: "Sevilla 4", referencia: "Camiseta 39", stock: true, imagen: "sevilla4.jpg" },
  { equipo: "Sevilla 5", referencia: "Camiseta 40", stock: true, imagen: "sevilla5.jpg" },
  { equipo: "Sevilla 6", referencia: "Camiseta 41", stock: true, imagen: "sevill6.jpg" },
  { equipo: "Tottenham", referencia: "Camiseta 42", stock: true, imagen: "tottenham.jpg" },
  { equipo: "Valencia", referencia: "Camiseta 43", stock: true, imagen: "valencia.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 234", stock: true, imagen: "camiseta10.jpg" },
  { equipo: "Real Madrid", referencia: "Camiseta 235", stock: true, imagen: "camiseta11.jpg" },
  { equipo: "Cam", referencia: "Camiseta 236", stock: true, imagen: "camiseta12.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 237", stock: true, imagen: "camiseta13.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 238", stock: true, imagen: "camiseta14.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 239", stock: true, imagen: "camiseta15.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 240", stock: true, imagen: "camiseta16.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 241", stock: true, imagen: "camiseta17.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 242", stock: true, imagen: "camiseta18.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 243", stock: true, imagen: "camiseta19.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 246", stock: true, imagen: "camiseta20.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 246", stock: true, imagen: "camiseta21.jpg" },
  { equipo: "Camiseta", referencia: "Camiseta 234", stock: true, imagen: "camiseta22.jpg" },
{ equipo: "Camiseta", referencia: "Camiseta A30", stock: true, imagen: "camiseta30.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta C47", stock: true, imagen: "camiseta47.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta D48", stock: true, imagen: "camiseta48.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta E49", stock: true, imagen: "camiseta49.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta F50", stock: true, imagen: "camiseta50.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta G51", stock: true, imagen: "camiseta51.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta H52", stock: true, imagen: "camiseta52.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta I53", stock: true, imagen: "camiseta53.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta J54", stock: true, imagen: "camiseta54.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta K55", stock: true, imagen: "camiseta55.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta L56", stock: true, imagen: "camiseta56.jpeg" } ,

];


const tallas = ["S", "M", "L", "XL", "XXL"];

const container = document.getElementById("camisetas-container");

camisetas.forEach(c => {
  const div = document.createElement("div");
  div.className = "camiseta";
  div.innerHTML = `
    <img src="img/${c.imagen}" alt="${c.equipo}" />
    <h3>${c.equipo}</h3>
    <p><strong>Referencia:</strong> ${c.referencia}</p>
    <p class="stock ${c.stock ? "disponible" : "agotado"}">
      ${c.stock ? "Disponible" : "Agotado"}
    </p>
    <p class="tallas"><strong>Tallas:</strong> ${tallas.join(", ")}</p>
    ${
      c.stock
        ? `<a href="https://wa.me/34634620890?text=Hola,%20quiero%20la%20camiseta%20de%20${encodeURIComponent(
            c.equipo
          )}" class="boton-whatsapp" target="_blank">Pedir por WhatsApp</a>`
        : ""
    }
  `;
  container.appendChild(div);
});

// ---------------- NUEVAS CATEGORIAS ------------------

function mostrarProductos(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  lista.forEach(producto => {
    const div = document.createElement("div");
    div.className = "camiseta";
    div.innerHTML = `
      <img src="img/${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p><strong>Referencia:</strong> ${producto.referencia}</p>
      <p class="stock ${producto.stock ? "disponible" : "agotado"}">
        ${producto.stock ? "Disponible" : "Agotado"}
      </p>
      ${
        producto.tallas
          ? `<p class="tallas"><strong>Tallas:</strong> ${producto.tallas.join(", ")}</p>`
          : ""
      }
      ${
        producto.stock
          ? `<a href="https://wa.me/34634620890?text=Hola,%20quiero%20el%20producto:%20${encodeURIComponent(
              producto.nombre
            )}" class="boton-whatsapp" target="_blank">Pedir por WhatsApp</a>`
          : ""
      }
    `;
    contenedor.appendChild(div);
  });
}

const zapatos = [
{ nombre: "Zapatillas", referencia: "ZP001", stock: true, imagen: "image00001.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP002", stock: true, imagen: "image00002.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP003", stock: true, imagen: "image00003.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP004", stock: true, imagen: "image00004.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP005", stock: true, imagen: "image00005.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP006", stock: true, imagen: "image00006.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP007", stock: true, imagen: "image00007.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP008", stock: true, imagen: "image00008.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP009", stock: true, imagen: "image00009.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP010", stock: true, imagen: "image00010.jpeg",  },

{ nombre: "Zapatillas", referencia: "ZP011", stock: true, imagen: "image00011.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP012", stock: true, imagen: "image00012.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP013", stock: true, imagen: "image00013.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP014", stock: true, imagen: "image00014.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP015", stock: true, imagen: "image00015.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP016", stock: true, imagen: "image00016.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP017", stock: true, imagen: "image00017.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP018", stock: true, imagen: "image00018.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP019", stock: true, imagen: "image00019.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP020", stock: true, imagen: "image00020.jpeg",  },

{ nombre: "Zapatillas", referencia: "ZP021", stock: true, imagen: "image00021.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP022", stock: true, imagen: "image00022.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP023", stock: true, imagen: "image00023.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP024", stock: true, imagen: "image00024.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP025", stock: true, imagen: "image00025.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP026", stock: true, imagen: "image00026.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP027", stock: true, imagen: "image00027.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP028", stock: true, imagen: "image00028.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP029", stock: true, imagen: "image00029.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP030", stock: true, imagen: "image00030.jpeg",  },

{ nombre: "Zapatillas", referencia: "ZP031", stock: true, imagen: "image00031.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP032", stock: true, imagen: "image00032.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP033", stock: true, imagen: "image00033.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP034", stock: true, imagen: "image00034.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP035", stock: true, imagen: "image00035.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP036", stock: true, imagen: "image00036.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP037", stock: true, imagen: "image00037.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP038", stock: true, imagen: "image00038.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP039", stock: true, imagen: "image00039.jpeg",  },
{ nombre: "Zapatillas", referencia: "ZP040", stock: true, imagen: "image00040.jpeg",  },

{ nombre: "Zapatillas", referencia: "ZP041", stock: true, imagen: "image00041.jpeg",  },
{ nombre: "TALLAS", referencia: "ZP045", stock: true, imagen: "image00499.jpeg", },
]
 
const conjuntos = [
  
  { nombre: "Conjunto Deportivo", referencia: "CJ031", stock: true, imagen: "Camiseta31.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ032", stock: true, imagen: "Camiseta32.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ033", stock: true, imagen: "Camiseta33.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ034", stock: true, imagen: "Camiseta34.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ035", stock: true, imagen: "Camiseta35.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ036", stock: true, imagen: "Camiseta36.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ037", stock: true, imagen: "Camiseta37.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ038", stock: true, imagen: "Camiseta38.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ039", stock: true, imagen: "Camiseta39.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ040", stock: true, imagen: "Camiseta40.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ041", stock: true, imagen: "Camiseta41.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ042", stock: true, imagen: "Camiseta42.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ043", stock: true, imagen: "Camiseta43.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ044", stock: true, imagen: "Camiseta44.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ045", stock: true, imagen: "Camiseta45.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ046", stock: true, imagen: "Camiseta46.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ057", stock: true, imagen: "Camiseta57.jpeg", tallas: ["16", "18", "20","22","24","26","28"] },
  { nombre: "Conjunto Deportivo", referencia: "CJ111", stock: true, imagen: "IMG-20250627-WA0111.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ112", stock: true, imagen: "IMG-20250627-WA0112.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ113", stock: true, imagen: "IMG-20250627-WA0113.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ114", stock: true, imagen: "IMG-20250627-WA0114.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ115", stock: true, imagen: "IMG-20250627-WA0115.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ116", stock: true, imagen: "IMG-20250627-WA0116.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ117", stock: true, imagen: "IMG-20250627-WA0117.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ118", stock: true, imagen: "IMG-20250627-WA0118.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ119", stock: true, imagen: "IMG-20250627-WA0119.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ120", stock: true, imagen: "IMG-20250627-WA0120.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ121", stock: true, imagen: "IMG-20250627-WA0121.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ122", stock: true, imagen: "IMG-20250627-WA0122.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ123", stock: true, imagen: "IMG-20250627-WA0123.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ124", stock: true, imagen: "IMG-20250627-WA0124.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ125", stock: true, imagen: "IMG-20250627-WA0125.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ126", stock: true, imagen: "IMG-20250627-WA0126.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ127", stock: true, imagen: "IMG-20250627-WA0127.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ128", stock: true, imagen: "IMG-20250627-WA0128.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ129", stock: true, imagen: "IMG-20250627-WA0129.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ130", stock: true, imagen: "IMG-20250627-WA0130.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ131", stock: true, imagen: "IMG-20250627-WA0131.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ132", stock: true, imagen: "IMG-20250627-WA0132.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ133", stock: true, imagen: "IMG-20250627-WA0133.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ134", stock: true, imagen: "IMG-20250627-WA0134.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ135", stock: true, imagen: "IMG-20250627-WA0135.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ136", stock: true, imagen: "IMG-20250627-WA0136.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ137", stock: true, imagen: "IMG-20250627-WA0137.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ138", stock: true, imagen: "IMG-20250627-WA0138.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ139", stock: true, imagen: "IMG-20250627-WA0139.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ140", stock: true, imagen: "IMG-20250627-WA0140.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ141", stock: true, imagen: "IMG-20250627-WA0141.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ142", stock: true, imagen: "IMG-20250627-WA0142.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ143", stock: true, imagen: "IMG-20250627-WA0143.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ144", stock: true, imagen: "IMG-20250627-WA0144.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ145", stock: true, imagen: "IMG-20250627-WA0145.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ146", stock: true, imagen: "IMG-20250627-WA0146.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ147", stock: true, imagen: "IMG-20250627-WA0147.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ148", stock: true, imagen: "IMG-20250627-WA0148.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ149", stock: true, imagen: "IMG-20250627-WA0149.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ150", stock: true, imagen: "IMG-20250627-WA0150.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ151", stock: true, imagen: "IMG-20250627-WA0151.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ152", stock: true, imagen: "IMG-20250627-WA0152.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ153", stock: true, imagen: "IMG-20250627-WA0153.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ154", stock: true, imagen: "IMG-20250627-WA0154.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ155", stock: true, imagen: "IMG-20250627-WA0155.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ156", stock: true, imagen: "IMG-20250627-WA0156.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ157", stock: true, imagen: "IMG-20250627-WA0157.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ158", stock: true, imagen: "IMG-20250627-WA0158.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ159", stock: true, imagen: "IMG-20250627-WA0159.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ160", stock: true, imagen: "IMG-20250627-WA0160.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ161", stock: true, imagen: "IMG-20250627-WA0161.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ162", stock: true, imagen: "IMG-20250627-WA0162.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ163", stock: true, imagen: "IMG-20250627-WA0163.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ164", stock: true, imagen: "IMG-20250627-WA0164.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ165", stock: true, imagen: "IMG-20250627-WA0165.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ166", stock: true, imagen: "IMG-20250627-WA0166.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ167", stock: true, imagen: "IMG-20250627-WA0167.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ168", stock: true, imagen: "IMG-20250627-WA0168.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ169", stock: true, imagen: "IMG-20250627-WA0169.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ170", stock: true, imagen: "IMG-20250627-WA0170.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ171", stock: true, imagen: "IMG-20250627-WA0171.jpg" },
  { nombre: "Conjunto Deportivo", referencia: "CJ172", stock: true, imagen: "IMG-20250627-WA0172.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ173", stock: true, imagen: "IMG-20250627-WA0173.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ174", stock: true, imagen: "IMG-20250627-WA0174.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ175", stock: true, imagen: "IMG-20250627-WA0175.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ176", stock: true, imagen: "IMG-20250627-WA0176.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ177", stock: true, imagen: "IMG-20250627-WA0177.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ178", stock: true, imagen: "IMG-20250627-WA0178.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ179", stock: true, imagen: "IMG-20250627-WA0179.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ180", stock: true, imagen: "IMG-20250627-WA0180.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ181", stock: true, imagen: "IMG-20250627-WA0181.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ182", stock: true, imagen: "IMG-20250627-WA0182.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ183", stock: true, imagen: "IMG-20250627-WA0183.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ184", stock: true, imagen: "IMG-20250627-WA0184.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ185", stock: true, imagen: "IMG-20250627-WA0185.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ186", stock: true, imagen: "IMG-20250627-WA0186.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ187", stock: true, imagen: "IMG-20250627-WA0187.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ188", stock: true, imagen: "IMG-20250627-WA0188.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ189", stock: true, imagen: "IMG-20250627-WA0189.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ190", stock: true, imagen: "IMG-20250627-WA0190.jpg" },
{ nombre: "Conjunto Deportivo", referencia: "CJ191", stock: true, imagen: "IMG-20250627-WA0191.jpg" },
];
 
const bolsos = [
  
  { nombre: "Bolso y Complementos", referencia: "BC036", stock: true, imagen: "IMG-20250627-WA0036.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC037", stock: true, imagen: "IMG-20250627-WA0037.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC038", stock: true, imagen: "IMG-20250627-WA0038.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC039", stock: true, imagen: "IMG-20250627-WA0039.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC040", stock: true, imagen: "IMG-20250627-WA0040.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC041", stock: true, imagen: "IMG-20250627-WA0041.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC042", stock: true, imagen: "IMG-20250627-WA0042.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC043", stock: true, imagen: "IMG-20250627-WA0043.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC044", stock: true, imagen: "IMG-20250627-WA0044.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC045", stock: true, imagen: "IMG-20250627-WA0045.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC046", stock: true, imagen: "IMG-20250627-WA0046.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC047", stock: true, imagen: "IMG-20250627-WA0047.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC048", stock: true, imagen: "IMG-20250627-WA0048.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC049", stock: true, imagen: "IMG-20250627-WA0049.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC050", stock: true, imagen: "IMG-20250627-WA0050.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC051", stock: true, imagen: "IMG-20250627-WA0051.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC052", stock: true, imagen: "IMG-20250627-WA0052.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC053", stock: true, imagen: "IMG-20250627-WA0053.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC054", stock: true, imagen: "IMG-20250627-WA0054.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC055", stock: true, imagen: "IMG-20250627-WA0055.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC056", stock: true, imagen: "IMG-20250627-WA0056.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC057", stock: true, imagen: "IMG-20250627-WA0057.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC058", stock: true, imagen: "IMG-20250627-WA0058.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC059", stock: true, imagen: "IMG-20250627-WA0059.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC060", stock: true, imagen: "IMG-20250627-WA0060.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC061", stock: true, imagen: "IMG-20250627-WA0061.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC062", stock: true, imagen: "IMG-20250627-WA0062.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC063", stock: true, imagen: "IMG-20250627-WA0063.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC064", stock: true, imagen: "IMG-20250627-WA0064.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC065", stock: true, imagen: "IMG-20250627-WA0065.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC066", stock: true, imagen: "IMG-20250627-WA0066.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC067", stock: true, imagen: "IMG-20250627-WA0067.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC068", stock: true, imagen: "IMG-20250627-WA0068.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC069", stock: true, imagen: "IMG-20250627-WA0069.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC070", stock: true, imagen: "IMG-20250627-WA0070.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC071", stock: true, imagen: "IMG-20250627-WA0071.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC072", stock: true, imagen: "IMG-20250627-WA0072.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC073", stock: true, imagen: "IMG-20250627-WA0073.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC074", stock: true, imagen: "IMG-20250627-WA0074.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC075", stock: true, imagen: "IMG-20250627-WA0075.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC076", stock: true, imagen: "IMG-20250627-WA0076.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC077", stock: true, imagen: "IMG-20250627-WA0077.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC078", stock: true, imagen: "IMG-20250627-WA0078.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC079", stock: true, imagen: "IMG-20250627-WA0079.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC080", stock: true, imagen: "IMG-20250627-WA0080.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC081", stock: true, imagen: "IMG-20250627-WA0081.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC082", stock: true, imagen: "IMG-20250627-WA0082.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC083", stock: true, imagen: "IMG-20250627-WA0083.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC084", stock: true, imagen: "IMG-20250627-WA0084.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC085", stock: true, imagen: "IMG-20250627-WA0085.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC086", stock: true, imagen: "IMG-20250627-WA0086.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC087", stock: true, imagen: "IMG-20250627-WA0087.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC088", stock: true, imagen: "IMG-20250627-WA0088.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC089", stock: true, imagen: "IMG-20250627-WA0089.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC090", stock: true, imagen: "IMG-20250627-WA0090.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC091", stock: true, imagen: "IMG-20250627-WA0091.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC092", stock: true, imagen: "IMG-20250627-WA0092.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC093", stock: true, imagen: "IMG-20250627-WA0093.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC094", stock: true, imagen: "IMG-20250627-WA0094.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC095", stock: true, imagen: "IMG-20250627-WA0095.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC096", stock: true, imagen: "IMG-20250627-WA0096.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC097", stock: true, imagen: "IMG-20250627-WA0097.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC098", stock: true, imagen: "IMG-20250627-WA0098.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC099", stock: true, imagen: "IMG-20250627-WA0099.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC100", stock: true, imagen: "IMG-20250627-WA0100.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC101", stock: true, imagen: "IMG-20250627-WA0101.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC102", stock: true, imagen: "IMG-20250627-WA0102.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC103", stock: true, imagen: "IMG-20250627-WA0103.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC104", stock: true, imagen: "IMG-20250627-WA0104.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC105", stock: true, imagen: "IMG-20250627-WA0105.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC106", stock: true, imagen: "IMG-20250627-WA0106.jpg" },
  { nombre: "Bolso y Complementos", referencia: "BC107", stock: true, imagen: "IMG-20250627-WA0107.jpg" }


];
 
const Perfumes = [
{ nombre: "Perfumes", referencia: "ZP042", stock: true, imagen: "image00042.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP043", stock: true, imagen: "image00043.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP044", stock: true, imagen: "image00044.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP045", stock: true, imagen: "image00045.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP046", stock: true, imagen: "image00046.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP047", stock: true, imagen: "image00047.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP048", stock: true, imagen: "image00048.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP049", stock: true, imagen: "image00049.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP050", stock: true, imagen: "image00050.jpeg",  },

{ nombre: "Perfumes", referencia: "ZP051", stock: true, imagen: "image00051.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP052", stock: true, imagen: "image00052.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP053", stock: true, imagen: "image00053.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP054", stock: true, imagen: "image00054.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP055", stock: true, imagen: "image00055.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP056", stock: true, imagen: "image00056.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP057", stock: true, imagen: "image00057.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP058", stock: true, imagen: "image00058.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP059", stock: true, imagen: "image00059.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP060", stock: true, imagen: "image00060.jpeg",  },

{ nombre: "Perfumes", referencia: "ZP061", stock: true, imagen: "image00061.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP062", stock: true, imagen: "image00062.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP063", stock: true, imagen: "image00063.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP064", stock: true, imagen: "image00064.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP065", stock: true, imagen: "image00065.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP066", stock: true, imagen: "image00066.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP067", stock: true, imagen: "image00067.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP068", stock: true, imagen: "image00068.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP069", stock: true, imagen: "image00069.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP070", stock: true, imagen: "image00070.jpeg",  },

{ nombre: "Perfumes", referencia: "ZP071", stock: true, imagen: "image00071.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP072", stock: true, imagen: "image00072.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP073", stock: true, imagen: "image00073.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP074", stock: true, imagen: "image00074.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP075", stock: true, imagen: "image00075.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP076", stock: true, imagen: "image00076.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP077", stock: true, imagen: "image00077.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP078", stock: true, imagen: "image00078.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP079", stock: true, imagen: "image00079.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP080", stock: true, imagen: "image00080.jpeg",  },

{ nombre: "Perfumes", referencia: "ZP081", stock: true, imagen: "image00081.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP082", stock: true, imagen: "image00082.jpeg",  },
{ nombre: "Perfumes", referencia: "ZP083", stock: true, imagen: "image00083.jpeg",  },
];
const nuevosLanzamientos = [
  { equipo: "Camiseta", referencia: "Camiseta A30", stock: true, imagen: "camiseta30.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta C47", stock: true, imagen: "camiseta47.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta D48", stock: true, imagen: "camiseta48.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta E49", stock: true, imagen: "camiseta49.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta F50", stock: true, imagen: "camiseta50.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta G51", stock: true, imagen: "camiseta51.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta H52", stock: true, imagen: "camiseta52.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta I53", stock: true, imagen: "camiseta53.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta J54", stock: true, imagen: "camiseta54.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta K55", stock: true, imagen: "camiseta55.jpeg" }, 
{ equipo: "Camiseta", referencia: "Camiseta L56", stock: true, imagen: "camiseta56.jpeg" } ,
];

mostrarProductos(zapatos, "zapatos-container");
mostrarProductos(conjuntos, "conjuntos-container");
mostrarProductos(bolsos, "bolsos-container");
mostrarProductos(Perfumes, "Perfumes");
mostrarProductos(nuevosLanzamientos, "nuevos-container");
