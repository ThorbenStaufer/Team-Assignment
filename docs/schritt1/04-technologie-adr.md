# Technologie-ADR: Wahl von Nuxt als Projekt-Framework für die Shift-Konferenzplattform

## Kontext
Wir bauen eine neue Konferenz-Plattform namens „Shift“. Die Website wird später ganz verschiedene Seiten haben: einfache Infoseiten über Sessions, Detailseiten für Sprecher und einen persönlichen Zeitplan für die Nutzer. Das Entwicklungs-Team verfügt über solide Vorkenntnisse in Vue.js, hat jedoch begrenzte Kapazitäten für das manuelle Aufsetzen komplexer Infrastrukturen. Da im Kurs kein separater Block für Routing-Mechanismen vorgesehen ist, muss das gewählte Tooling ein intuitives, wartbares Ökosystem bieten, das ohne tiefgehende manuelle Konfiguration skaliert und uns somit Arbeit abnimmt.

## Entscheidung
Wir werden Nuxt als fertiges Grundgerüst für unser Projekt verwenden.

## Betrachtete Alternativen

### Alternative 1: Custom Setup (Vue 3 + Vite + Vue Router)
Vorteile: Maximale Kontrolle über die Build-Konfiguration; minimale Bundle-Größen zu Beginn.
Nachteile: Vollständig manuelles Setup für Routing, Meta-Tags und State-Management nötig. Das kostet viel Zeit, denn es erfordert höheren initialen Boilerplate-Aufwand.
Warum abgelehnt: Der manuelle Konfigurationsaufwand für das komplexe Routing (Dashboards, Detailseiten) bindet zu viele Ressourcen. Da Vue Router im Kurs nicht separat behandelt wird, erhöht dieses Setup die Fehleranfälligkeit bei der Einarbeitung.

### Alternative 2: Vue 3 + Vite als Single-Page-Anwendung ohne Vue Router
Vorteile: Diese Variante hätte ein sehr einfaches Setup und würde ausschließlich die bereits bekannten Technologien Vue und Vite benötigen. Unterschiedliche Bereiche wie Sessions, Speaker und die persönliche Programmübersicht könnten innerhalb einer einzigen Anwendung über Vue-Komponenten und einen internen Zustand ein- und ausgeblendet werden. Für einen kleinen Prototyp wäre dieser Ansatz schnell und unkompliziert umzusetzen.
Nachteile: Die Anwendung hätte keine echten eigenen URLs für unterschiedliche Seiten. Besonders bei Session-Details und Speaker-Profilen wäre dies problematisch, da diese nicht direkt über eine eigene URL aufgerufen oder geteilt werden könnten. Auch die Navigation über die Vor- und Zurück-Funktion des Browsers wäre ohne zusätzliche Eigenimplementierung eingeschränkt.
Warum abgelehnt: Unsere Konferenzanwendung besteht aus mehreren klar getrennten Seitentypen wie Session-Übersicht, Speaker-Profilen und persönliche Programmübersicht. Dafür ist ein echtes Routing sinnvoll. Eine reine Single-Page-Lösung ohne Router wäre zwar einfacher umzusetzen, würde aber die Navigation und spätere Erweiterbarkeit unnötig einschränken.

## Konsequenzen

### Positiv
Automatisiertes Datei-basiertes Routing: Nuxt generiert Seitenverbindungen automatisch über die Ordnerstruktur, was die Erstellung von Detailseiten und verschachtelten Dashboard-Routen massiv vereinfacht.
Schnellere Time-to-Market: Viele wichtige Funktionen sind schon fertig eingebaut, sodass wir direkt mit dem Designen loslegen können.
Zukunftssicherheit: Nahtlose Erweiterbarkeit für spätere Architekturschritte (wie differenzierte Rendering-Strategien).

### Negativ
Lernaufwand: Wir haben beide keine Vorerfahrung mit Nuxt darum muss sich unser Team am Anfang ein paar Tage Zeit nehmen, um zu verstehen, wie Nuxt die Ordnerstrukturen vorgibt.

### Risiken
Zu groß für den Start: Für eine ganz einfache, kleine Website hat Nuxt fast schon zu viele Funktionen, die wir am Anfang noch gar nicht alle brauchen.
