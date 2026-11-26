# Setup
## Clone Repository
Clone the repository from GitHub:
```
git clone https://github.com/ThorbenStaufer/Team-Assignment.git
```
## Install Dependencies
Open a terminal within the project folder and install dependencies via Node:
```
npm install
```
## Compile and Run
Build the project and open a new browser tab to the localhost server:
```
npx nuxt build
node .output/server/index.mjs
```

## AI-Reflexion
### i. Was hat uns beim AI-Einsatz in diesem Schritt am meisten überrascht?
Lea: Positiv überrascht hat mich, wie gut die KI ihre Empfehlungen an unser bestehendes Nuxt-Projekt anpassen konnte. Z.B. wurde mir anstelle von tsc --noEmit der Befehl nuxt typecheck empfohlen, weil dieser auch unsere Vue-Komponenten berücksichtigt. 
Negativ überrascht hat mich bei Schritt 4 allerdings, dass die KI teilweise wesentlich mehr Regeln und Konfigurationen vorgeschlagen hat, als für unser Projekt und die Angabe notwendig waren (obwohl die Angabe mitgeschickt wurde).

### ii. An welcher Stelle wurde ein AI-Vorschlag bewusst abgelehnt oder verändert?
Lea: Eine konkrete Stelle war die Behebung eines Linter-Fehlers in der Datei speakers/index.vue, da hat die KI vorgeschlagen, das leere Template mit einem HTML-Element und einem Platzhalter zu befüllen, damit der Linter keinen Fehler mehr anzeigt. Da dieses Template in unserem Projekt allerdings nicht benötigt wird, ist es unnötig dieses mit Platzhaltercode zu befüllen. Außerdem habe ich bewusst auf einige vorgeschlagene ESLint-Regeln verzichtet, da sie nicht Teil der Aufgabenstellung waren.


### iii. Wo würden wir AI künftig bewusst nicht einsetzen?
Lea: Ich würde KI nicht für kreative Designentscheidungen einsetzen. Bei unserer Konferenz-Webseite hatte ich bereits eine eigene Vorstellung davon, wie das UI aussehen könnte weshalb ich Entscheidungen bezüglich Farben, Schatten und Rundungen selbst getroffen habe weil ich ein authentisches Design schaffen wollte. Außerdem merke ich auch dass ich aufpassen muss zu viel KI zu verwenden da ich dadurch neige wenig dabei zu lernen, wenn KI quasi für mich zu viel „denken“ übernimmt.

