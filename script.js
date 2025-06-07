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
  { equipo: "Boca Juniors", referencia: "Camiseta 17", stock: true, imagen: "bocajuniors.jpg" },
  { equipo: "España", referencia: "Camiseta 18", stock: true, imagen: "españa1.jpg" },
  { equipo: "España", referencia: "Camiseta 19", stock: true, imagen: "españa2.jpg" },
  { equipo: "España", referencia: "Camiseta 20", stock: true, imagen: "españa3.jpg" },
  { equipo: "España", referencia: "Camiseta 21", stock: true, imagen: "españa4.jpg" },
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
  { equipo: "Valencia", referencia: "Camiseta 43", stock: true, imagen: "valencia.jpg" }
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
