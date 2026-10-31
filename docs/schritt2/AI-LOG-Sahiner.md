# AI Log 
## 23.10.26 ChatGPT
### Prompt:
wie genau mache ich am besten folgende Filterfunktion in Vue: 20 Sessions, filterbar nach Track, Konferenztag, Level — Filter kombinierbar (UND-Verknüpfung).
### Zweck: 
Der Prompt soll uns helfen zu entscheiden wie wir bei der Filterung vorgehen und vor allem wie wir const selectedLevel = ref<Level | ''>('') definieren

## 27.10.26 ChatGPT
### Prompt:
Ich will eine BaseList-Komponente erstellen, die optisch zu unserer bestehenden BaseCard passt und so aufgebaut ist: sie sollen sehr breit sein und nebeneinander platziert folgende informationen haben: Titel, Level, Datum, Zeit wie mache ich das Layout am besten?
### Zweck:
Ich wollte eine neue BaseList-Komponente erstellen, die einerseits optisch zu meiner bestehenden BaseCard passt aber breiter und die informationen nebeneinander statt untereinander anzeigt sprich die Sessioninfos sollten in breiten, horizontalen Listenelementen angezeigt werden.

## 30.10.26 ChatGPT
### Prompt:
Ich muss ich folgende aufgabe erfüllen:
Erstellen von Speaker-Profilseiten Eigene Route pro Speaker (z. B. /speakers/[id] ) mit Name, Titel, Firma, Bio, Liste/Links der gehaltenen Sessions. …. Erkläre mir bitte Schritt für Schritt wie ich das am besten angehe
### Zweck:
Eine Anleitung zur Umsetzung der 18 Speaker-Profilseiten mit dynamischen Nuxt-Routen und SSG. Außerdem wollte ich den bereits vorhandenen Code der Session-Detailseiten besser verstehen.

## 30.10.26 ChatGPT
### Prompt:
Beim Generieren unserer Speaker-Profilseiten bekomme ich für alle 18 Speaker einen 404-Fehler, die Dateien heißen … Kann der Dateiname das Problem verursachen? Und wie kann ich überprüfen, ob Nuxt die dynamischen Routen richtig erkennt, und wann ist ein Nuxt Cleanup notwendig?
### Zweck:
Ich wollte herausfinden, warum meine Speaker-Seiten nicht gefunden wurden und beim Build 404-Fehler auftraten. Dabei ging es vor allem um die Dateibenennung und die dynamischen Routen in Nuxt.

## 31.10.26 ChatGPT
### Prompt:
Ich muss eine Session-Übersicht für alle 20 Vorträge unserer Konferenz erstellen. Die Sessions sollen nach Track, Konferenztag und Level gefiltert werden können. Alle Filter müssen gleichzeitig funktionieren (UND-Verknüpfung). Wie erweitere ich dafür mein bestehendes useSessions-Composable und wie teile ich die Umsetzung sinnvoll auf SessionFilterBar, SessionList und die Übersichtsseite auf? Außerdem haben wir uns für SSR entschieden. Was muss ich dafür besonders beachten?
### Zweck:
Ich wollte die filterbare Session-Übersicht umsetzen. Dafür habe ich Hilfe gebraucht bei der Erweiterung meines useSessions-Composables, der Aufteilung in Vue-Komponenten und der Umsetzung der SSR-Entscheidung.

## 31.10.26 ChatGPT
### Prompt:
Ich würd gern über meiner Session-Liste die Spaltenüberschriften Level, Tag und Zeit anzeigen, die Labels sollen genau über den jeweiligen Informationen der Listenelemente stehen wie kann ich das mit CSS Grid umsetzen, sodass die Überschriften und die Werte dieselbe Ausrichtung haben?
### Zweck:
Ich wollte die Session-Übersicht verständlicher gestalten, indem die Spalten Level, Tag und Zeit eigene Überschriften bekommen war mir aber nicht sicher wie ich das im css am besten mache.

## 31.10.26 ChatGPT
### Prompt:
das ist mein grid von den labels und so sieht es grade auf der webseite aus (screenshot) auf welche zahlen muss ich es anpassen damit es besser passt und wofür stehen die zahlen jeweils genau: grid-template-columns: minmax(0, 2fr) minmax(90px, 0.8fr) minmax(100px, 0.9fr) minmax(100px, 0.9fr) auto;“
### Zweck:
Ich wollte die Spaltenüberschriften genau über den richtigen Session-Daten platzieren indem ich die Grid-Spalten anpasse.

## 31.10.26 ChatGPT
### Prompt:
reicht das für ssr rendering wirklich aus oder muss ich noch was machen damit es ssr ist? und wie kann ich das am besten überprüfen ob es funktioniert? routeRules: { '/sessions': { ssr: true, prerender: false },
}
### Zweck:
Ich wollte überprüfen, ob die Session-Übersicht tatsächlich mit SSR gerendert wird und wie sich das anhand des Builds und des HTML-Quelltexts nachweisen lässt.
