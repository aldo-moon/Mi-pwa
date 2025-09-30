# Actividad 3: Prueba de App Shell

Una aplicación web progresiva (PWA) construida con React y Vite que funciona offline.

## Descripción

PWA Store es una aplicación web que implementa el patrón App Shell, permitiendo que funcione sin conexión a internet una vez que se ha cargado por primera vez. Incluye un gestor de tareas con persistencia de datos y un catálogo de productos simulado.

## Características

- **Funciona Offline**: Gracias a Service Workers, la app funciona sin conexión
- **App Shell**: Estructura optimizada que carga instantáneamente
- **Persistencia de Datos**: Las tareas se guardan en localStorage
- **Instalable**: Se puede instalar como app nativa en dispositivos

## Arquitectura

### Patrón App Shell

La aplicación utiliza el patrón **App Shell**, que consiste en:

1. **Shell (Estructura)**: Header, Navbar y Footer que se cargan inmediatamente desde caché
2. **Contenido Dinámico**: ProductList y TaskList que se cargan dinámicamente según la navegación
3. **Caché Estratégica**: El Service Worker cachea el shell para disponibilidad instantánea

### Service Worker

El Service Worker (`public/sw.js`) implementa:

- **Instalación**: Cachea recursos críticos (HTML, CSS, JS, manifest, iconos)
- **Activación**: Limpia cachés antiguos
- **Fetch**: Estrategia "Cache First" - busca en caché primero, luego en red
- **Actualización**: Cachea dinámicamente nuevos recursos solicitados

## Instalación y Configuración

### Requisitos Previos

- Node.js >= 20.19.0
- npm >= 8.0.0

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd mi-pwa

# Instalar dependencias
npm install
```

## Uso

### Modo Desarrollo

```bash
npm run dev
```

**Importante**: El Service Worker NO funciona en modo desarrollo. Para probarlo, usa el modo producción.

### Modo Producción

```bash
# 1. Crear build de producción
npm run build

# 2. Servir el build
npm run preview

# O usar serve
npx serve -s dist -l 3000
```

La aplicación estará disponible en `http://localhost:3000`

## Cómo Probar sin Conexión

### Método 1: Usando Chrome DevTools (Recomendado)

1. **Hacer build y servir**:

   ```bash
   npm run build
   npx serve -s dist -l 3000
   ```

2. **Abrir la aplicación** en Chrome: `http://localhost:3000`

3. **Verificar Service Worker**:

   - Abre DevTools (F12)
   - Ve a **Application** → **Service Workers**
   - Verifica que esté "activated and running"
   - Debe mostrar: `✅ Service Worker registrado`

4. **Verificar Caché**:

   - En **Application** → **Cache Storage**
   - Verifica que existe `mi-pwa-cache-v1`
   - Debe contener: index.html, manifest.json, iconos

5. **Probar Offline**:

   - Ve a la pestaña **Network**
   - Marca el checkbox **"Offline"**
   - Recarga la página (F5 o Ctrl+R)
   - La app debe seguir funcionando completamente

6. **Navegar entre secciones**:
   - Prueba los botones: Tareas, Productos, Acerca de
   - Agrega tareas, marca como completadas
   - Todo debe funcionar sin conexión

### Método 2: Sin Internet Real

1. **Hacer build y servir**:

   ```bash
   npm run build
   npx serve -s dist -l 3000
   ```

2. **Abrir la aplicación**: `http://localhost:3000`

3. **Navegar por todas las secciones** (para cachear todo el contenido)

4. **Desconectar WiFi** completamente de tu computadora

5. **Recargar la página**:

   - La app debe seguir funcionando
   - Aparecerá indicador "🔴 Sin conexión" en la esquina superior derecha

6. **Probar funcionalidades**:
   - Agregar/eliminar tareas
   - Cambiar prioridades
   - Filtrar tareas (Todas/Activas/Completadas)
   - Navegar entre secciones

### Método 3: Instalación como PWA

1. **En Chrome/Edge**:

   - Busca el ícono de instalación en la barra de URL
   - Click en "Instalar"
   - La app se abrirá como aplicación independiente

2. **Prueba Offline**:
   - Cierra la app instalada
   - Desconecta internet
   - Abre la app desde el menú de aplicaciones
   - Debe funcionar perfectamente

## 🔧 Tecnologías Utilizadas

- **React 19**: Biblioteca de UI
- **Vite 7**: Build tool y dev server
- **Service Workers**: Funcionamiento offline
- **Cache API**: Almacenamiento de recursos
- **LocalStorage**: Persistencia de datos
- **CSS3**: Estilos responsive

## 📊 Estrategia de Caché

El Service Worker implementa una estrategia **Cache First**:

```
Solicitud → ¿En caché?
             ├─ Sí → Devolver desde caché
             └─ No → Ir a red → Guardar en caché → Devolver
```

### Recursos Cacheados

- **Estáticos**: HTML, CSS, JS, manifest
- **Dinámicos**: Recursos solicitados durante navegación
- **Assets**: Iconos e imágenes

## Autor

Aldo Yamil Luna Pavón

## Fecha

Septiembre 2025

---
