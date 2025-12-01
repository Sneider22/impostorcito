# 🕵️ El Impostorcito - Versión 3.0

## 🌟 ¡Bienvenido a la Versión 3.0 de El Impostorcito!

**El Impostorcito** es un emocionante juego de deducción social donde los jugadores Inocentes deben descubrir al Impostor, mientras que el Impostor debe adivinar la palabra secreta. Esta versión trae más de **250 palabras** nuevas, un sistema de pistas mejorado y un historial detallado para llevar la cuenta de tus victorias y derrotas. ¿Estás listo para poner a prueba tu astucia y engaño?

---

## 🧠 Lógica del Juego

### ➡️ Flujo Principal

1.  **Setup**: Los jugadores se registran y se define el número de impostores (1 o más). 🧑‍🤝‍🧑

2.  **Selección de Categorías**: 📚
    * Se muestra una pantalla para elegir las categorías que se jugarán
    * Por defecto todas las categorías están seleccionadas
    * Se puede seleccionar/deseleccionar individualmente o todas a la vez
    * El juego solo usará palabras de las categorías seleccionadas

3.  **Asignación de Roles**: 🃏
    * Se selecciona una palabra aleatoria de las categorías elegidas
    * Se eligen aleatoriamente los impostores según la cantidad configurada
    * Los jugadores **inocentes** ven la **palabra secreta** 🤫
    * Los **impostores** ven una **pista relacionada** (diferente para cada impostor si hay múltiples) ❓

4.  **Revelación**: Cada jugador ve su carta individualmente (palabra o pista según su rol). 👁️

5.  **Votación**: Después de que todos ven sus cartas, se revela la categoría y los jugadores votan quién es el impostor. 🗳️

6.  **Resultado**: 🏆
    * Si el impostor **gana**: **+1 punto** a cada impostor ➕
    * Si el impostor **pierde**: nadie suma puntos ➖

### 💡 Sistema de Pistas

* Cada palabra tiene **2 pistas diferentes**
* Si hay 1 impostor: usa la primera pista
* Si hay 2+ impostores: cada uno recibe una pista diferente (pista 1, pista 2, etc.)

### 📜 Historial de Rondas

* Se guarda el historial de cada ronda con:
    * Palabra secreta
    * Impostor(es)
    * Categoría
    * Resultado (**✓ si ganó, ✗ si perdió**) ✅/❌
* Se muestran 3 rondas por página con paginación

### 🗃️ Base de Datos

* **Más de 250 palabras** organizadas en **12 categorías**: 🚀
    * Deportes ⚽
    * Dibujos 🎨
    * Héroes 🦸
    * Villanos/Terror 😈
    * Comidas 🍔
    * Lugar 🗺️
    * Tech/Casa 🏠
    * Ing. Sistemas (lenguajes de programación y términos técnicos) 💻
    * Arquitectura (elementos arquitectónicos) 🏛️
    * Venezuela (comidas, lugares y símbolos venezolanos) 🇻🇪
    * Medicina (instrumentos, procedimientos y términos médicos) ⚕️
    * Famosos (deportistas, actores, músicos, científicos, empresarios y personalidades históricas) ⭐
      
* Cada palabra tiene **2 pistas relacionadas pero no obvias**
* El sistema filtra automáticamente según las categorías seleccionadas
