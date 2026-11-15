# Verifikations-Nachweis
Die Offline-Funktionalität unserer Konferenzwebsite „Shift“ wurde im Produktionsmodus mithilfe der Chrome DevTools überprüft. Dafür wurde die Website zuerst online geöffnet, damit der Service Worker die benötigten Dateien zwischenspeichern konnte und anschließend wurde im Network-Tab der Offline-Modus aktiviert und die Session-Übersicht sowie „Mein Programm“ erneut aufgerufen. Beide Seiten waren offline verfügbar mit den richtigen Sessions.
Im Application-Tab wurde kontrolliert, ob der Service Worker aktiviert ist und die vorgesehenen Caches angelegt wurden. Zusätzlich wurde das Web App Manifest überprüft. Chrome erkannte die Start-URL /sessions, den Darstellungsmodus standalone sowie die definierten Farben.
Das Lighthouse-Audit (Version 13.5.0) erreichte auf Desktop in allen vier Kategorien 100 Punkte. Da Lighthouse keine eigene PWA-Kategorie mehr anbietet, wurden die PWA-Eigenschaften zusätzlich manuell überprüft. Die tatsächliche Installierbarkeit wurde zusätzlich über die Installationsfunktion von Chrome überprüft und mit mehreren Screenshots dokumentiert.

## Screenshots und Testergebnisse

### 1. Lighthouse-Audit

Das Audit der Session-Übersicht erreichte in allen
vier Kategorien 100 Punkte.

![Lighthouse Desktop](assets/lighthouse-audit.png)

### 2. Offline-Test: Session-Übersicht

Die Session-Übersicht wurde im Offline-Modus erfolgreich erneut geladen.

![Session-Übersicht offline](assets/offline-sessions.png)

### 3. Offline-Test: Mein Programm

Die gespeicherten Sessions blieben auch offline erhalten.

![Mein Programm offline](assets/offline-schedule.png)

### 4. Service Worker 

Der Service Worker wurde im Application-Tab überprüft.

![Service Worker](assets/service-worker.png)

### 5. Cache Storage

Die angelegten Caches (Precache, Schedule & Sessions) wurden im Cache Storage kontrolliert.

![Cache Storage 1](assets/cache-precache.png)
![Cache Storage 2](assets/cache-schedule.png)
![Cache Storage 3](assets/cache-sessions.png)

### 6. Web App Manifest

Chrome erkennt die konfigurierten Manifest-Einstellungen.

![Web App Manifest](assets/manifest.png)

### 7. PWA Installierbarkeit

Installation in Chrome ist erfolgreich.

![Installation 1](assets/Installation1.png)
![Installation 2](assets/Installation2.png)
![Installation 3](assets/Installation3.png)
![Installation 4](assets/Installation4.png)