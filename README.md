### INFO:

- Pinta: Estado de la llamada.
- Recibe: Datos del componente "Actions" (el Call o Hang).
- Interactúa: Con componente "Actions".

### DISPLAY:

- Pinta: Números clickeados.
- Recibe: Datos de los números desde componente "Key".
- Interactúa: Con componente "Actions" para habilitar el "Call".

### ACTIONS:

- Pinta: Los "Action" (Botones de "Call" y "Hang").
- Recibe: De los componentes "Action" el estado de llamada.
- Interactúa: Con componentes "Display", "Keyboard" and "Action"

### ACTION:

- Pinta: Cada evento lanzado por un boton.
- Recibe: Eventos
- Interacciona: Con display e info

### KEYBOARD:

- Pinta: Todos los Key
- Recibe: Recibe keys
- Interactúa: con los key

### KEY:

- Pinta: cada key
- Recibe: evento click
- Interactúa: con display
