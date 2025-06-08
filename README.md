# App de Gestión de Hábitos Saludables (Consola - TypeScript)

Este proyecto es una aplicación de consola hecha en **TypeScript** para registrar, seguir y validar hábitos saludables de diferentes usuarios.

---

## 🧩 Funcionalidades

- ✅ Registro de usuarios y hábitos con validación de datos
- 📅 Seguimiento de fechas de cumplimiento
- 📊 Estadísticas de porcentaje de cumplimiento
- 🔔 Alertas si un hábito no se cumple en más de 3 días
- 🗓️ Calendario textual que muestra las fechas cumplidas

---

## ⚙️ Cómo ejecutar

1. Abre una terminal en la carpeta `trabajo autonomo/`
2. Compila el código TypeScript:

```bash
tsc
```

3. Ejecuta la aplicación:

```bash
node build/main.js
```

---

## 📁 Estructura del proyecto

```
trabajo autonomo/
├── code/
│   ├── Calendario.ts
│   ├── ControlHabitos.ts
│   ├── Habito.ts
│   ├── Usuario.ts
│   └── main.ts
├── build/          ← generado al compilar
├── tsconfig.json
└── README.md       ← este archivo
```

---

## 💡 Nota

Este proyecto **no requiere React ni dependencias externas**. Todo es puro TypeScript de consola.

