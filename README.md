# El Impostorcito - Versión 3.0

## Lógica del Juego

### Flujo Principal

1. **Setup**: Los jugadores se registran y se define el número de impostores (1 o más).

2. **Asignación de Roles**: 
   - Se selecciona una palabra aleatoria de la base de datos
   - Se eligen aleatoriamente los impostores según la cantidad configurada
   - Los jugadores inocentes ven la palabra secreta
   - Los impostores ven una pista relacionada (diferente para cada impostor si hay múltiples)

3. **Revelación**: Cada jugador ve su carta individualmente (palabra o pista según su rol).

4. **Votación**: Después de que todos ven sus cartas, se revela la categoría y los jugadores votan quién es el impostor.

5. **Resultado**: 
   - Si el impostor gana: +1 punto a cada impostor
   - Si el impostor pierde: nadie suma puntos

### Sistema de Pistas

- Cada palabra tiene 2 pistas diferentes
- Si hay 1 impostor: usa la primera pista
- Si hay 2+ impostores: cada uno recibe una pista diferente (pista 1, pista 2, etc.)

### Historial de Rondas

- Se guarda el historial de cada ronda con:
  - Palabra secreta
  - Impostor(es)
  - Categoría
  - Resultado (✓ si ganó, ✗ si perdió)
- Se muestran 3 rondas por página con paginación

### Base de Datos

- Más de 130 palabras organizadas en categorías:
  - Deportes
  - Dibujos
  - Héroes
  - Villanos/Terror
  - Comidas
  - Lugares
  - Tech/Casa
- Cada palabra tiene 2 pistas relacionadas pero no obvias

