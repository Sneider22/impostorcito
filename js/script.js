/* --- BASE DE DATOS EXPANDIDA CON MÚLTIPLES PISTAS --- */
const database = [
    // DEPORTES (cada palabra tiene 2 pistas: [pista1, pista2])
    {cat:"Deporte", word:"Fútbol", hints:["Once", "Balón"]}, {cat:"Deporte", word:"Voleibol", hints:["Red", "Saque"]},
    {cat:"Deporte", word:"Tenis", hints:["Verde", "Cancha"]}, {cat:"Deporte", word:"Pádel", hints:["Vidrio", "Pared"]},
    {cat:"Deporte", word:"Baloncesto", hints:["Anaranjado", "Aro"]}, {cat:"Deporte", word:"Béisbol", hints:["Bases", "Diamante"]},
    {cat:"Deporte", word:"Fórmula 1", hints:["Circuito", "Velocidad"]}, {cat:"Deporte", word:"Boxeo", hints:["Guantes", "Round"]},
    {cat:"Deporte", word:"Natación", hints:["Tabla", "Piscina"]}, {cat:"Deporte", word:"Surf", hints:["Tabla", "Ola"]},
    {cat:"Deporte", word:"Golf", hints:["Palo", "Campo"]}, 
    {cat:"Deporte", word:"Karate", hints:["Cinturon", "Tabla"]}, {cat:"Deporte", word:"Gimnasio", hints:["Máquinas", "Pesas"]},
    {cat:"Deporte", word:"Ciclismo", hints:["Velocidad", "Manubrio"]}, {cat:"Deporte", word:"Atletismo", hints:["Pista", "Carrera"]},
    {cat:"Deporte", word:"Hockey", hints:["Disco", "Palo"]}, {cat:"Deporte", word:"Esquí", hints:["Frio", "Montaña"]},
    {cat:"Deporte", word:"Bádminton", hints:["Pluma", "Red"]}, {cat:"Deporte", word:"Ping Pong", hints:["Mesa", "Paleta"]},
    {cat:"Deporte", word:"Arquería", hints:["Flecha", "Arco"]}, {cat:"Deporte", word:"Escalada", hints:["Cuerda", "Roca"]},

    // DIBUJOS
    {cat:"Dibujos", word:"Peppa Pig", hints:["Rosa", "Dinosaurio"]}, {cat:"Dibujos", word:"Bob Esponja", hints:["Amarillo", "Estrella"]},
    {cat:"Dibujos", word:"Mickey Mouse", hints:["Casa", "Orejas"]}, {cat:"Dibujos", word:"El Increíble Mundo de Gumball ", hints:["Gato", "Pez"]},
    {cat:"Dibujos", word:"Pikachu", hints:["Ratón", "Amarillo"]}, {cat:"Dibujos", word:"Goku", hints:["Esferas", "Colores"]},
    {cat:"Dibujos", word:"Shrek", hints:["Cuentos", "Dragón"]}, {cat:"Dibujos", word:"Buzz Lightyear", hints:["Infinito", "Espacio"]},
    {cat:"Dibujos", word:"Minions", hints:["Amarillo", "Bananas"]}, {cat:"Dibujos", word:"Frozen", hints:["Zanahoria", "Hermanas"]},
    {cat:"Dibujos", word:"Moana", hints:["Océano", "Isla"]}, {cat:"Dibujos", word:"Coco", hints:["Música", "Familia"]},
    {cat:"Dibujos", word:"Toy Story", hints:["Infinito", "Vaquero"]}, {cat:"Dibujos", word:"Cars", hints:["Copa", "Carreras"]},
    {cat:"Dibujos", word:"Nemo", hints:["Payaso", "Buscar"]}, {cat:"Dibujos", word:"Simba", hints:["Rey", "Selva"]},
    {cat:"Dibujos", word:"Ariel", hints:["Cangrejo", "Poseidon"]}, {cat:"Dibujos", word:"Barbie", hints:["Rosado", "Profesiones"]},
    {cat:"Dibujos", word:"Gravity Falls", hints:["Libros", "Verano"]}, {cat:"Dibujos", word:"Un Show Mas", hints:["Jefe", "Parque"]},
    // HÉROES
    {cat:"Héroe", word:"Superman", hints:["Extraterrestre", "Laser"]}, {cat:"Héroe", word:"Batman", hints:["Negro", "Noche"]},
    {cat:"Héroe", word:"Iron Man", hints:["Millonario", "Filantropía"]}, {cat:"Héroe", word:"Spiderman", hints:["Casa", "Tío"]},
    {cat:"Héroe", word:"Capitán América", hints:["Vengador", "Estrella"]}, {cat:"Héroe", word:"Thor", hints:["Dios", "Rayo"]},
    {cat:"Héroe", word:"Hulk", hints:["Fuerza", "Verde"]}, {cat:"Héroe", word:"Pantera Negra", hints:["Tribu", "Negro"]},
    {cat:"Héroe", word:"Flash", hints:["Rayo", "Rojo"]}, {cat:"Héroe", word:"Wonder Woman", hints:["Isla", "Lazo"]},
    {cat:"Héroe", word:"Wolverine", hints:["Amarillo", "Metal"]}, {cat:"Héroe", word:"Deadpool", hints:["Cancer", "Rojo"]},
    {cat:"Héroe", word:"Aquaman", hints:["Rey", "Océano"]}, {cat:"Héroe", word:"Dr. Strange", hints:["Tiempo", "Portales"]},
    {cat:"Héroe", word:"Black Widow", hints:["Espía", "Agente"]}, {cat:"Héroe", word:"Ant-Man", hints:["Enorme", "Civil War"]},

    // VILLANOS & TERROR
    {cat:"Villano/Terror", word:"Thanos", hints:["Infinito", "Gemas"]}, {cat:"Villano/Terror", word:"Joker", hints:["Comodín", "Bufón"]},
    {cat:"Villano/Terror", word:"Darth Vader", hints:["Oscuro", "Padre"]}, {cat:"Villano/Terror", word:"Voldemort", hints:["Serpiente", "Nariz"]},
    {cat:"Villano/Terror", word:"Chucky", hints:["Ritual", "Muñeco"]}, {cat:"Villano/Terror", word:"Freddy Krueger", hints:["Dedos", "Pesadilla"]},
    {cat:"Villano/Terror", word:"It (Pennywise)", hints:["Transformaciones", "Cloacas"]}, {cat:"Villano/Terror", word:"Drácula", hints:["Noche", "Sangre"]},
    {cat:"Villano/Terror", word:"Zombi", hints:["Muerto", "Cerebros"]}, {cat:"Villano/Terror", word:"Fantasma", hints:["Invisible", "Sábana"]},
    {cat:"Villano/Terror", word:"Jason", hints:["Viernes", "Machete"]}, {cat:"Villano/Terror", word:"Michael Myers", hints:["Cuchillo", "Máscara"]},
    {cat:"Villano/Terror", word:"Hannibal", hints:["Doctor", "Comida"]}, {cat:"Villano/Terror", word:"Loki", hints:["Trucos", "Dios"]},

    // COMIDAS
    {cat:"Comida", word:"Sushi", hints:["Japón", "Pescado"]}, {cat:"Comida", word:"Pizza", hints:["Hawai", "Queso"]},
    {cat:"Comida", word:"Hamburguesa", hints:["Carne", "Pan"]}, {cat:"Comida", word:"Tacos", hints:["Variedad", "Tortilla"]},
    {cat:"Comida", word:"Arepa", hints:["Harina", "Maíz"]}, {cat:"Comida", word:"Empanada", hints:["Relleno", "Masa"]},
    {cat:"Comida", word:"Ceviche", hints:["Mar", "Limón"]}, {cat:"Comida", word:"Lasagna", hints:["Italiana", "Capas"]},
    {cat:"Comida", word:"Salchipapa", hints:["Fritas", "Salsas"]}, {cat:"Comida", word:"Burrito", hints:["Envuelto", "Tortilla"]},
    {cat:"Comida", word:"Pollo Frito", hints:["Crujiente", "Aceite"]}, {cat:"Comida", word:"Sopa", hints:["Líquido", "Cuchara"]},
    {cat:"Comida", word:"Pastel", hints:["Dulce", "Cumpleaños"]}, {cat:"Comida", word:"Donas", hints:["Redondo", "Azucar"]},
    {cat:"Comida", word:"Hot Dog", hints:["Barato", "Salchicha"]}, {cat:"Comida", word:"Chocolate", hints:["Dulce", "Cacao"]},
    {cat:"Comida", word:"Helado", hints:["Frío", "Cono"]}, {cat:"Comida", word:"Palomitas", hints:["Maíz", "Pijamada"]},
    {cat:"Comida", word:"Pancakes", hints:["Desayuno", "Miel"]}, {cat:"Comida", word:"Pasta", hints:["Largo", "Carne"]},
    {cat:"Comida", word:"Ramen", hints:["Sopa", "Corea"]}, {cat:"Comida", word:"Paella", hints:["Arroz", "Mariscos"]},
    {cat:"Comida", word:"Sándwich", hints:["Pan", "Lechuga"]}, {cat:"Comida", word:"Alitas", hints:["Picante", "Pollo"]},
    {cat:"Comida", word:"Nachos", hints:["Queso", "Tortilla"]}, {cat:"Comida", word:"Tiramisú", hints:["Postre", "Café"]},

    // LUGARES
    {cat:"Lugar", word:"Playa", hints:["Arena", "Estrella"]}, {cat:"Lugar", word:"Río", hints:["Rocas", "Pozo"]},
    {cat:"Lugar", word:"Montaña", hints:["Alto", "Escalada"]}, {cat:"Lugar", word:"Selva", hints:["Verde", "Árboles"]},
    {cat:"Lugar", word:"Desierto", hints:["Arena", "Calor"]}, {cat:"Lugar", word:"Cine", hints:["Estrenos", "Pantalla"]},
    {cat:"Lugar", word:"Discoteca", hints:["Barra", "Baile"]}, {cat:"Lugar", word:"Hospital", hints:["Bienestar", "Insumos"]},
    {cat:"Lugar", word:"Escuela", hints:["Libros", "Examen"]}, {cat:"Lugar", word:"Cementerio", hints:["Tierra", "Descanso"]},
    {cat:"Lugar", word:"Aeropuerto", hints:["Boletos", "Vacaciones"]}, {cat:"Lugar", word:"Cárcel", hints:["Rejas", "Sentencia"]},
    {cat:"Lugar", word:"Parque", hints:["Bancas", "Paseo"]}, {cat:"Lugar", word:"Museo", hints:["Arte", "Historia"]},
    {cat:"Lugar", word:"Restaurante", hints:["Orden", "Platos"]}, {cat:"Lugar", word:"Hotel", hints:["Vacaciones", "Habitaciones"]},
    {cat:"Lugar", word:"Biblioteca", hints:["Información", "Estanteria"]}, {cat:"Lugar", word:"Gimnasio", hints:["Superación", "Maquinas"]},
    {cat:"Lugar", word:"Iglesia", hints:["Bancas", "Adoración"]}, {cat:"Lugar", word:"Estadio", hints:["Deportes", "Gradas"]},

    // TECH/CASA
    {cat:"Tech/Casa", word:"Televisor", hints:["Resolución", "Control"]}, {cat:"Tech/Casa", word:"Audífonos", hints:["Música", "Cable"]},
    {cat:"Tech/Casa", word:"Aire Acondicionado", hints:["Temperatura", "Frío"]}, {cat:"Tech/Casa", word:"Celular", hints:["Aplicaciones", "Llamada"]},
    {cat:"Tech/Casa", word:"WiFi", hints:["Internet", "Red"]}, {cat:"Tech/Casa", word:"PlayStation", hints:["Juegos", "Control"]},
    {cat:"Tech/Casa", word:"Microondas", hints:["Calor", "Comida"]}, {cat:"Tech/Casa", word:"Lavadora", hints:["Agua", "Ciclos"]},
    {cat:"Tech/Casa", word:"Nevera", hints:["Frío", "Hielo"]}, {cat:"Tech/Casa", word:"Cama", hints:["Descanso", "Pijamada"]},
    {cat:"Tech/Casa", word:"Poseta", hints:["Teléfono", "Papel"]}, {cat:"Tech/Casa", word:"Espejo", hints:["Reflejo", "Vidrio"]},
    {cat:"Tech/Casa", word:"Reloj", hints:["Muñeca", "Tiempo"]}, {cat:"Tech/Casa", word:"Laptop", hints:["Desplegable", "Teclado"]},
    {cat:"Tech/Casa", word:"Tablet", hints:["Táctil", "Pantalla"]}, {cat:"Tech/Casa", word:"Altavoz", hints:["Sonido", "Estruendo"]},
    {cat:"Tech/Casa", word:"Cámara", hints:["Recuerdos", "Digital"]}, {cat:"Tech/Casa", word:"Impresora", hints:["Papel", "Tinta"]},
    {cat:"Tech/Casa", word:"Router", hints:["Red", "Internet"]}, {cat:"Tech/Casa", word:"Mouse", hints:["Arrastrar", "Botones"]},
    {cat:"Tech/Casa", word:"Teclado", hints:["Letras", "Luces"]}, {cat:"Tech/Casa", word:"Monitor", hints:["Resolución", "Pulgadas"]},

    // INGENIERÍA DE SISTEMAS
    {cat:"Ing. Sistemas", word:"Python", hints:["Bibliotecas", "Interpretado"]}, {cat:"Ing. Sistemas", word:"JavaScript", hints:["Navegador", "Web"]},
    {cat:"Ing. Sistemas", word:"Java", hints:["Café", "POO"]}, {cat:"Ing. Sistemas", word:"C++", hints:["Plus", "POO"]},
    {cat:"Ing. Sistemas", word:"HTML", hints:["Etiquetas", "WEB"]}, {cat:"Ing. Sistemas", word:"CSS", hints:["Estilos", "Diseño"]},
    {cat:"Ing. Sistemas", word:"SQL", hints:["Base", "Datos"]}, {cat:"Ing. Sistemas", word:"PHP", hints:["Servidor", "Web"]},
    {cat:"Ing. Sistemas", word:"React", hints:["Componentes", "Facebook"]}, {cat:"Ing. Sistemas", word:"Node.js", hints:["Servidor", "JavaScript"]},
    {cat:"Ing. Sistemas", word:"Git", hints:["Versión", "Control"]}, {cat:"Ing. Sistemas", word:"API", hints:["Conexión", "Comunicación"]},
    {cat:"Ing. Sistemas", word:"Bug", hints:["Error", "Lag"]}, 
    {cat:"Ing. Sistemas", word:"Algoritmo", hints:["Pasos", "Procesos"]}, {cat:"Ing. Sistemas", word:"Variable", hints:["Modificable", "Dato"]},

    // ARQUITECTURA
    {cat:"Arquitectura", word:"Plano", hints:["Dibujo", "Diseño"]}, {cat:"Arquitectura", word:"Escalera", hints:["Subir", "Peldaños"]},
    {cat:"Arquitectura", word:"Ventana", hints:["Vidrio", "Luz"]}, {cat:"Arquitectura", word:"Columna", hints:["Soporte", "Vertical"]},
    {cat:"Arquitectura", word:"Arco", hints:["Curvo", "Puerta"]}, {cat:"Arquitectura", word:"Cúpula", hints:["Redonda", "Techo"]},
    {cat:"Arquitectura", word:"Fachada", hints:["Frontal", "Exterior"]}, {cat:"Arquitectura", word:"Balcón", hints:["Exterior", "Vista"]},
    {cat:"Arquitectura", word:"Azotea", hints:["Techo", "Arriba"]}, {cat:"Arquitectura", word:"Cimientos", hints:["Base", "Fundación"]},
    {cat:"Arquitectura", word:"Viga", hints:["Soporte", "Horizontal"]}, {cat:"Arquitectura", word:"Muro", hints:["Pared", "Separar"]},
    {cat:"Arquitectura", word:"Domo", hints:["Cúpula", "Redondo"]}, {cat:"Arquitectura", word:"Atrio", hints:["Patio", "Entrada"]},
    {cat:"Arquitectura", word:"Nave", hints:["Espacio", "Largo"]}, {cat:"Arquitectura", word:"Pórtico", hints:["Entrada", "Columnas"]},

    // VENEZUELA
    {cat:"Venezuela", word:"Arepa", hints:["Harina", "Maíz"]}, {cat:"Venezuela", word:"Turpial", hints:["Ave", "Amarillo"]},
    {cat:"Venezuela", word:"Araguaney", hints:["Árbol", "Amarillo"]}, {cat:"Venezuela", word:"Pabellón", hints:["Plato", "Caraotas"]},
    {cat:"Venezuela", word:"Hallaca", hints:["Navidad", "Aceitunas"]}, {cat:"Venezuela", word:"Tequeño", hints:["Queso", "Frito"]},
    {cat:"Venezuela", word:"Cachapa", hints:["Maíz", "Dulce"]}, {cat:"Venezuela", word:"Caracas", hints:["Ciudad", "Las Mercedes"]},
    {cat:"Venezuela", word:"Chicha", hints:["Bebida", "Arroz"]}, {cat:"Venezuela", word:"Barinas", hints:["Monte", "Burras"]},
    {cat:"Venezuela", word:"Orinoco", hints:["Río", "Largo"]}, {cat:"Venezuela", word:"Ávila", hints:["Montaña", "Caracas"]},
    {cat:"Venezuela", word:"Salto Ángel", hints:["Catarata", "Alto"]}, {cat:"Venezuela", word:"Los Roques", hints:["Islas", "Azul"]},
    {cat:"Venezuela", word:"Simón Bolívar", hints:["Libertad", "Historia"]}, {cat:"Venezuela", word:"Maracaibo", hints:["Ciudad", "Petróleo"]},

    // MEDICINA
    {cat:"Medicina", word:"Estetoscopio", hints:["Escuchar", "Pecho"]}, {cat:"Medicina", word:"Termómetro", hints:["Temperatura", "Oral"]},
    {cat:"Medicina", word:"Jeringa", hints:["Miedo", "Suero"]}, {cat:"Medicina", word:"Bisturí", hints:["Cuchilla", "Cirugía"]},
    {cat:"Medicina", word:"Radiografía", hints:["Fractura", "Huesos"]}, {cat:"Medicina", word:"Electrocardiograma", hints:["Corazón", "Ondas"]},
    {cat:"Medicina", word:"Tensiómetro", hints:["Presión", "Brazo"]}, {cat:"Medicina", word:"Otoscopio", hints:["Oído", "Luz"]},
    {cat:"Medicina", word:"Guantes", hints:["Látex", "Protección"]}, {cat:"Medicina", word:"Mascarilla", hints:["COVID", "Protección"]},
    {cat:"Medicina", word:"Bata", hints:["Blanca", "Uniforme"]}, {cat:"Medicina", word:"Ambulancia", hints:["Emergencia", "Sirena"]},
    {cat:"Medicina", word:"Hospital", hints:["Enfermos", "Camas"]}, {cat:"Medicina", word:"Farmacia", hints:["Estantes", "Pastillas"]},
    {cat:"Medicina", word:"Cirujano", hints:["Operación", "Quirófano"]}, {cat:"Medicina", word:"Enfermera", hints:["Cuidado", "Inyección"]},
    {cat:"Medicina", word:"Anestesia", hints:["Sueño", "Operación"]}, {cat:"Medicina", word:"Sutura", hints:["Hilo", "Cicatriz"]},
    {cat:"Medicina", word:"Vendaje", hints:["Gasas", "Herida"]}, {cat:"Medicina", word:"Antibiótico", hints:["Bacteria", "Infección"]},

    // FAMOSOS
    {cat:"Famosos", word:"Messi", hints:["Miami", "Oro"]}, {cat:"Famosos", word:"Elon Musk", hints:["Espacio", "Cohete"]},
    {cat:"Famosos", word:"Trump", hints:["Torre", "Presidente"]}, {cat:"Famosos", word:"Taylor Swift", hints:["Agosto", "Gato"]},
    {cat:"Famosos", word:"Ariana Grande", hints:["Anillos", "Coleta"]}, {cat:"Famosos", word:"Leonardo Di Caprio", hints:["Oscar", "Lobo"]},
    {cat:"Famosos", word:"Brad Pitt", hints:["Angelina Jolie", "Fight Club"]}, {cat:"Famosos", word:"Nikola Tesla", hints:["Corriente", "Inventor"]},
    {cat:"Famosos", word:"Marie Curie", hints:["Radio", "Ciencia"]}, {cat:"Famosos", word:"Einstein", hints:["Coeficiente", "Cabello"]},
    {cat:"Famosos", word:"Darwin", hints:["Evolución", "Islas"]}, {cat:"Famosos", word:"Cristiano Ronaldo", hints:["Disciplina", "Gol"]},
    {cat:"Famosos", word:"Hitler", hints:["Alemania", "Guerra"]}, {cat:"Famosos", word:"El Papa", hints:["Religión", "Blanco"]},
    {cat:"Famosos", word:"La Roca", hints:["Fuerza", "WWE"]}, {cat:"Famosos", word:"Will Smith", hints:["Robot", "Cachetada"]},
    {cat:"Famosos", word:"Angelina Jolie", hints:["Labios", "Actriz"]}, {cat:"Famosos", word:"Nicolás Maduro", hints:["Bigote", "Presidente"]},
    {cat:"Famosos", word:"Van Gogh", hints:["Cielo", "Pintura"]}, {cat:"Famosos", word:"Speed", hints:["Streamer", "Rápido"]},
    {cat:"Famosos", word:"Westcol", hints:["Rata", "Streamer"]}, {cat:"Famosos", word:"Kanye West", hints:["Polémicas", "Yeezy"]},
    {cat:"Famosos", word:"Mbappé", hints:["Mundial", "Velocidad"]}, {cat:"Famosos", word:"J Balvin", hints:["Reggaeton", "Colombia"]},
    {cat:"Famosos", word:"Bruno Mars", hints:["Pop", "Luna"]}, {cat:"Famosos", word:"LeBron James", hints:["Rey", "Basquetball"]},
    {cat:"Famosos", word:"Curry", hints:["Tres", "Golden"]}, {cat:"Famosos", word:"Shakespeare", hints:["Teatro", "Inglés"]},
    {cat:"Famosos", word:"Shakira", hints:["Ruptura", "Ferrari"]}, {cat:"Famosos", word:"Javier Milei", hints:["Cabello", "Argentina"]},
    {cat:"Famosos", word:"Adam Sandler", hints:["Comedia", "Happy"]}, {cat:"Famosos", word:"Johnny Depp", hints:["Pirata", "Juicio"]},
    {cat:"Famosos", word:"Reina Isabel", hints:["Segunda", "Corona"]}, {cat:"Famosos", word:"Princesa Diana", hints:["Accidente", "Corona"]},
    {cat:"Famosos", word:"Justin Bieber", hints:["Baby", "Canadá"]}, {cat:"Famosos", word:"Bad Bunny", hints:["Verano", "Trap"]},
    {cat:"Famosos", word:"Kardashian", hints:["Reality", "Famosas"]}, {cat:"Famosos", word:"Pelé", hints:["Rey", "Mundial"]},
    {cat:"Famosos", word:"Maradona", hints:["Mano", "Argentina"]}, {cat:"Famosos", word:"BTS", hints:["Corea", "7"]},
    {cat:"Famosos", word:"Coldplay", hints:["Amarillo", "Banda"]}, {cat:"Famosos", word:"Michael Jackson", hints:["Pop", "Rey"]},
    {cat:"Famosos", word:"Mark Zuckerberg", hints:["Red Social", "Meta"]}, {cat:"Famosos", word:"Jeff Bezos", hints:["Calvo", "Rico"]},
    {cat:"Famosos", word:"Bill Gates", hints:["Informática", "Windows"]}, {cat:"Famosos", word:"Serena Williams", hints:["Tenis", "Mujer"]}
];

/* --- LÓGICA DEL JUEGO --- */
let players = [];
let currentPlayerNames = [];
let currentRoundData = null;
let impostorIndices = [];
let turnIndex = 0;
let scores = {};
let usedIndices = new Set();
let scoreboardPage = 0;
const scoreboardPerPage = 3; // 3 rondas por página
let roundHistory = []; // Historial de rondas: [{word, impostors, category, won}]
let selectedCategories = []; // Categorías seleccionadas
let filteredDatabase = []; // Base de datos filtrada según categorías

window.onload = () => {
    addPlayerInput(); addPlayerInput(); addPlayerInput(); addPlayerInput();
    updatePlayerCount();
    updateScoreboard();
};

function addPlayerInput(value = "") {
    const container = document.getElementById('players-list');
    const div = document.createElement('div');
    div.className = "flex gap-3 animate-enter player-input-item";
    div.innerHTML = `
        <input type="text" placeholder="Nombre..." value="${value}" 
            class="player-input w-full p-5 rounded-2xl text-white font-bold text-lg input-field placeholder-slate-500">
        <button onclick="this.parentElement.remove(); updatePlayerCount()" 
            class="px-5 rounded-2xl bg-red-900/40 text-red-300 border-2 border-red-900/60 hover:bg-red-900/60 transition-all font-black min-h-[52px] shadow-lg">✕</button>
    `;
    container.appendChild(div);
    updatePlayerCount();
}

function addQuickPlayer(){
    const input = document.getElementById('quick-player-name');
    if(!input) return;
    const name = input.value.trim();
    if(!name) {
        input.focus();
        return;
    }
    addPlayerInput(name);
    input.value = '';
    updatePlayerCount();
    input.focus();
}

function updatePlayerCount() {
    const count = document.getElementsByClassName('player-input').length;
    document.getElementById('player-count').innerText = `${count} JUGADORES`;
    const impostorInput = document.getElementById('impostor-count');
    if(impostorInput){
        const maxAllowed = Math.max(1, Math.floor(count/2));
        impostorInput.max = maxAllowed;
        if(Number(impostorInput.value) > maxAllowed) impostorInput.value = maxAllowed;
    }
}

function showScreen(screenId) {
    document.querySelectorAll('body > div').forEach(div => div.classList.add('hidden-screen'));
    const target = document.getElementById(screenId);
    if(target) {
        target.classList.remove('hidden-screen');
        target.classList.add('animate-enter');
    }
}

function startGame() {
    const inputs = document.getElementsByClassName('player-input');
    players = [];
    for(let input of inputs) {
        if(input.value.trim() !== "") players.push(input.value.trim());
    }

    if(players.length < 3) {
        showToast('¡Mínimo 3 jugadores! Si no, no tiene gracia.', 'warn');
        return;
    }

    players.forEach(p => { if(!(p in scores)) scores[p] = 0; });
    showCategoriesScreen();
}

function showCategoriesScreen() {
    // Obtener todas las categorías únicas de la base de datos
    const allCategories = [...new Set(database.map(item => item.cat))];
    
    // Si no hay categorías seleccionadas, seleccionar todas por defecto
    if(selectedCategories.length === 0) {
        selectedCategories = [...allCategories];
    }
    
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';
    
    allCategories.forEach(cat => {
        const isSelected = selectedCategories.includes(cat);
        const card = document.createElement('div');
        card.className = `category-card rounded-xl md:rounded-2xl p-4 md:p-5 ${isSelected ? 'selected' : ''}`;
        card.onclick = () => toggleCategory(cat, card);
        card.innerHTML = `
            <div class="flex items-center justify-between">
                <span class="text-white font-bold text-base md:text-lg">${escapeHtml(cat)}</span>
            </div>
        `;
        grid.appendChild(card);
    });
    
    showScreen('screen-categories');
}

function toggleCategory(category, cardElement) {
    const index = selectedCategories.indexOf(category);
    if(index > -1) {
        selectedCategories.splice(index, 1);
        cardElement.classList.remove('selected');
    } else {
        selectedCategories.push(category);
        cardElement.classList.add('selected');
    }
}

function selectAllCategories() {
    const allCategories = [...new Set(database.map(item => item.cat))];
    selectedCategories = [...allCategories];
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => card.classList.add('selected'));
}

function deselectAllCategories() {
    selectedCategories = [];
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => card.classList.remove('selected'));
}

function confirmCategories() {
    if(selectedCategories.length === 0) {
        showToast('¡Debes seleccionar al menos una categoría!', 'warn');
        return;
    }
    
    // Filtrar la base de datos según las categorías seleccionadas
    filteredDatabase = database.filter(item => selectedCategories.includes(item.cat));
    
    // Reiniciar índices usados para la nueva base de datos filtrada
    usedIndices.clear();
    
    setupRound();
}

function goBackToSetup() {
    showScreen('screen-setup');
}

function setupRound() {
    // Usar la base de datos filtrada si existe, sino usar la completa
    const dbToUse = filteredDatabase.length > 0 ? filteredDatabase : database;
    const total = dbToUse.length;
    
    if(total === 0) {
        showToast('No hay palabras disponibles con las categorías seleccionadas. Selecciona al menos una categoría.', 'warn');
        showCategoriesScreen();
        return;
    }
    
    let available = [];
    for(let i = 0; i < total; i++) if(!usedIndices.has(i)) available.push(i);
    if(available.length === 0){
        usedIndices.clear();
        for(let i = 0; i < total; i++) available.push(i);
    }
    const pick = available[Math.floor(Math.random() * available.length)];
    usedIndices.add(pick);
    currentRoundData = dbToUse[pick];
    
    currentPlayerNames = [...players];
    let impostorCount = 1;
    const inp = document.getElementById('impostor-count');
    if(inp) impostorCount = Math.max(1, Math.min(Number(inp.value) || 1, Math.max(1, Math.floor(currentPlayerNames.length/2))));

    impostorIndices = [];
    const indices = currentPlayerNames.map((_,i)=>i);
    for(let k=0;k<impostorCount && indices.length>0;k++){
        const ii = Math.floor(Math.random()*indices.length);
        impostorIndices.push(indices.splice(ii,1)[0]);
    }
    turnIndex = 0;

    document.getElementById('spoiler-section').classList.add('hidden');
    document.getElementById('btn-spoiler').style.display = 'block';
    const results = document.getElementById('result-controls');
    if(results) results.classList.add('hidden');
    const finalBoard = document.getElementById('final-scoreboard');
    if(finalBoard) finalBoard.classList.add('hidden');

    updatePassScreen();
    showScreen('screen-pass');
}

function updatePassScreen() {
    document.getElementById('current-player-name').innerText = currentPlayerNames[turnIndex];
}

function updateScoreboard(targetId = 'final-scoreboard'){
    const board = document.getElementById(targetId);
    if(!board) return;
    board.innerHTML = '';

    // Mostrar historial de rondas
    if(roundHistory.length === 0){
        board.innerHTML = '<p class="text-slate-400 text-center py-6 font-semibold">Sin historial de rondas aún</p>';
        return;
    }

    // Invertir historial para mostrar más reciente primero
    const reversedHistory = [...roundHistory].reverse();
    
    const total = reversedHistory.length;
    const pages = Math.ceil(total / scoreboardPerPage) || 1;
    if(scoreboardPage < 0) scoreboardPage = 0;
    if(scoreboardPage >= pages) scoreboardPage = pages - 1;
    const start = scoreboardPage * scoreboardPerPage;
    const pageEntries = reversedHistory.slice(start, start + scoreboardPerPage);

    pageEntries.forEach((round, i) => {
        const actualIndex = roundHistory.length - (start + i);
        const won = round.won !== undefined ? round.won : false;
        const resultIcon = won ? '✓' : '✗';
        const resultColor = won ? 'text-green-400' : 'text-red-400';
        const row = document.createElement('div');
        row.className = 'scoreboard-item bg-white/8 rounded-xl md:rounded-2xl px-4 md:px-5 py-3 md:py-4 mb-2 md:mb-3 shadow-lg';
        row.innerHTML = `
            <div class="flex flex-col gap-2 md:gap-2.5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 md:gap-3">
                        <span class="font-mono text-sm md:text-base text-slate-300 font-black">#${roundHistory.length - actualIndex}</span>
                        <span class="text-xs md:text-sm text-slate-400 uppercase font-bold">${escapeHtml(round.category)}</span>
                    </div>
                    <span class="${resultColor} text-xl md:text-3xl font-black">${resultIcon}</span>
                </div>
                <div class="flex items-center justify-between pt-2 md:pt-2.5 border-t border-white/10">
                    <div class="flex flex-col flex-1 min-w-0 pr-2">
                        <span class="text-xs md:text-sm text-slate-400 uppercase font-bold mb-1">Palabra</span>
                        <span class="text-cyan-300 font-bold text-sm md:text-base truncate">${escapeHtml(round.word)}</span>
                    </div>
                    <div class="flex flex-col items-end flex-1 min-w-0">
                        <span class="text-xs md:text-sm text-slate-400 uppercase font-bold mb-1">Impostor</span>
                        <span class="text-red-300 font-bold text-sm md:text-base text-right break-words">${escapeHtml(round.impostors.join(', ') || '—')}</span>
                    </div>
                </div>
            </div>
        `;
        board.appendChild(row);
    });

    if(pages > 1){
        const controls = document.createElement('div');
        controls.className = 'flex items-center justify-center gap-4 mt-5';

        const prev = document.createElement('button');
        prev.className = 'px-5 py-3 rounded-2xl bg-slate-800 text-white text-base font-black border-2 border-slate-700 hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg';
        prev.innerText = '◀ Anterior';
        prev.disabled = (scoreboardPage === 0);
        prev.onclick = () => { scoreboardPage = Math.max(0, scoreboardPage-1); updateScoreboard(targetId); };

        const next = document.createElement('button');
        next.className = 'px-5 py-3 rounded-2xl bg-slate-800 text-white text-base font-black border-2 border-slate-700 hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg';
        next.innerText = 'Siguiente ▶';
        next.disabled = (scoreboardPage >= pages-1);
        next.onclick = () => { scoreboardPage = Math.min(pages-1, scoreboardPage+1); updateScoreboard(targetId); };

        const pageInfo = document.createElement('div');
        pageInfo.className = 'text-slate-200 text-base font-bold';
        pageInfo.innerText = `${scoreboardPage+1} / ${pages}`;

        controls.appendChild(prev);
        controls.appendChild(pageInfo);
        controls.appendChild(next);
        board.appendChild(controls);
    }
}

function resetScores(){
    showConfirm('¿Deseas reiniciar el marcador?').then(ok => {
        if(!ok) return;
        scores = {};
        roundHistory = [];
        const final = document.getElementById('final-scoreboard');
        if(final) final.classList.add('hidden');
        updateScoreboard();
        showToast('Marcador reiniciado', 'info');
    });
}

function escapeHtml(unsafe) {
    return unsafe.replace(/[&<>"'`]/g, function(m) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;","`":"&#96;"}[m]; });
}

function revealRole() {
    const isImpostor = Array.isArray(impostorIndices) && impostorIndices.includes(turnIndex);
    const card = document.getElementById('role-card');
    const title = document.getElementById('role-title');
    const word = document.getElementById('secret-word');
    const hintBox = document.getElementById('hint-box');
    const hintText = document.getElementById('impostor-hint');
    const icon = document.getElementById('role-icon');

    hintBox.classList.add('hidden');
    
    if (isImpostor) {
        icon.innerText = "😈";
        title.innerText = "ERES EL IMPOSTOR";
        title.style.color = "#ef4444";
        
        word.innerText = "IMPOSTOR";
        word.className = "text-5xl md:text-6xl font-black mb-2 role-impostor animate-pulse";
        
        hintBox.classList.remove('hidden');
        
        // Asignar pista según el índice del impostor
        const impostorIndexInArray = impostorIndices.indexOf(turnIndex);
        const hints = currentRoundData.hints || [currentRoundData.hint]; // Compatibilidad con formato antiguo
        const selectedHint = hints[impostorIndexInArray] || hints[0]; // Si hay más impostores que pistas, usar la primera
        
        hintText.innerText = selectedHint.toUpperCase();
        
        card.style.borderColor = "#ef4444";
        card.style.boxShadow = "inset 0 0 80px rgba(239, 68, 68, 0.4), 0 25px 80px rgba(239, 68, 68, 0.3)";

    } else {
        icon.innerText = "😇";
        title.innerText = `CATEGORÍA: ${currentRoundData.cat}`;
        title.style.color = "#38bdf8";

        word.innerText = currentRoundData.word;
        word.className = "text-4xl md:text-6xl font-black mb-2 role-innocent uppercase";
        
        card.style.borderColor = "#38bdf8";
        card.style.boxShadow = "inset 0 0 80px rgba(56, 189, 248, 0.2), 0 25px 80px rgba(56, 189, 248, 0.15)";
    }

    showScreen('screen-reveal');
}

function nextTurn() {
    turnIndex++;
    if (turnIndex < players.length) {
        updatePassScreen();
        showScreen('screen-pass');
    } else {
        document.getElementById('final-category').innerText = currentRoundData.cat;
        showScreen('screen-vote');
    }
}

function showSpoiler() {
    document.getElementById('reveal-word-final').innerText = currentRoundData.word;
    const impostorNames = (impostorIndices||[]).map(i => currentPlayerNames[i]).filter(Boolean).join(', ');
    document.getElementById('reveal-impostor-final').innerText = impostorNames || '—';
    
    document.getElementById('spoiler-section').classList.remove('hidden');
    document.getElementById('btn-spoiler').style.display = 'none';
    const results = document.getElementById('result-controls');
    if(results) results.classList.remove('hidden');
}

function awardImpostorPoint(){
    const names = [];
    (impostorIndices||[]).forEach(idx => {
        const n = currentPlayerNames[idx];
        if(n){
            scores[n] = (scores[n] || 0) + 1;
            names.push(n);
        }
    });
    afterAward(true); // true = impostor ganó
    if(names.length) showToast(`😈 ${names.join(', ')} ${names.length > 1 ? 'suman' : 'suma'} +1 punto`, 'danger');
}

function noPointsThisRound(){
    afterAward(false); // false = impostor perdió
    showToast('⚪ Nadie suma puntos esta ronda', 'info');
}

function afterAward(impostorWon = false){
    // Guardar historial de la ronda
    const impostorNames = (impostorIndices||[]).map(i => currentPlayerNames[i]).filter(Boolean);
    roundHistory.push({
        word: currentRoundData.word,
        impostors: impostorNames,
        category: currentRoundData.cat,
        won: impostorWon
    });
    
    // Ocultar el spoiler-section cuando se muestre el marcador
    const spoilerSection = document.getElementById('spoiler-section');
    if(spoilerSection) spoilerSection.classList.add('hidden');
    
    const final = document.getElementById('final-scoreboard');
    if(final) final.classList.remove('hidden');
    scoreboardPage = 0;
    updateScoreboard('final-scoreboard');
    const results = document.getElementById('result-controls');
    if(results) results.classList.add('hidden');
    document.getElementById('btn-spoiler').style.display = 'none';
}

function restartGame() {
    setupRound();
}

function fullReset() {
    showScreen('screen-setup');
    focusLastPlayerInput();
}

function goToSetup(){
    showScreen('screen-setup');
    const shell = document.querySelector('#screen-setup');
    if(shell) shell.scrollIntoView({behavior:'smooth', block:'center'});
    focusLastPlayerInput();
}

function focusLastPlayerInput(){
    setTimeout(()=>{
        const inputs = document.getElementsByClassName('player-input');
        if(inputs.length){
            const last = inputs[inputs.length-1];
            last.focus();
            last.scrollIntoView({behavior:'smooth', block:'center'});
        } else {
            addPlayerInput('');
            const newInputs = document.getElementsByClassName('player-input');
            if(newInputs.length) newInputs[newInputs.length-1].focus();
        }
    },150);
}

document.addEventListener('DOMContentLoaded', () => {
    const quickInput = document.getElementById('quick-player-name');
    if(quickInput) {
        quickInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                addQuickPlayer();
            }
        });
    }
});

/* --- NOTIFICACIONES DENTRO DEL JUEGO --- */
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if(!container) return;
    const icons = { warn: '⚠️', danger: '', info: '', success: '✅' };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = `${icons[type] ? icons[type] + ' ' : ''}${message}`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

function showConfirm(message) {
    return new Promise(resolve => {
        const modal = document.getElementById('confirm-modal');
        const okBtn = document.getElementById('confirm-ok');
        const cancelBtn = document.getElementById('confirm-cancel');
        document.getElementById('confirm-message').textContent = message;
        modal.classList.add('show');
        const close = (result) => {
            modal.classList.remove('show');
            okBtn.onclick = cancelBtn.onclick = modal.onclick = null;
            resolve(result);
        };
        okBtn.onclick = () => close(true);
        cancelBtn.onclick = () => close(false);
        modal.onclick = (e) => { if(e.target === modal) close(false); };
    });
}
