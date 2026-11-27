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

Thorben: Mich hat überrascht, wie schnell und problemlos die Umsetzung einer Feature-Erweiterung mit KI funktioniert. Ich habe zwar bewusst im Prompt die zuvor erstellten ADR's referenziert, aber dass diese wirklich alle bedacht bzw. im Zweifel mit sauberer Begründung explizit umgangen wurden hat mich, als jemand der noch nie aktiv KI zum Programmieren verwendet hat, sehr positiv überzeugt. Allerdings habe ich ebenfalls festgestellt, dass die KI oftmals mehr vorschlägt/macht als ich von ihr gefordert habe. Das könnte aber auch einfach an schlechtem Prompt-Design von meiner Seite aus liegen.

### ii. An welcher Stelle wurde ein AI-Vorschlag bewusst abgelehnt oder verändert?
Lea: Eine konkrete Stelle war die Behebung eines Linter-Fehlers in der Datei speakers/index.vue, da hat die KI vorgeschlagen, das leere Template mit einem HTML-Element und einem Platzhalter zu befüllen, damit der Linter keinen Fehler mehr anzeigt. Da dieses Template in unserem Projekt allerdings nicht benötigt wird, ist es unnötig dieses mit Platzhaltercode zu befüllen. Außerdem habe ich bewusst auf einige vorgeschlagene ESLint-Regeln verzichtet, da sie nicht Teil der Aufgabenstellung waren.

Thorben: Die KI hat beim Nachvollziehen eines Darstellungsfehlers vorgeschlagen die Caching-Strategie für unsere Detailseiten zu ändern oder zumindest die generierten Payloads in den Precache zu geben. Ich habe diesen Vorschlag bewusst abgelehnt, da dadurch unsere Entscheidung zu einer "CacheFirst" Strategie nicht mehr funktionieren würde. Mir ist bewusst, dass Entscheidungen aus dem ADR mit einer guten Begründung geändert werden können, allerdings sehe ich dazu in unserem Fall keinen Mehrwert. Die Strategie "NetworkFirst" zu machen, wie initial von der KI vorgesehen ergibt bei größtenteils statischen Daten keinen Sinn. Und durch das Einsetzen der Payloads im Precache würden die Seiten zu "CacheOnly" degradieren, was nach Absprache von uns ebenfalls nicht gewünscht ist.

### iii. Wo würden wir AI künftig bewusst nicht einsetzen?
Lea: Ich würde KI nicht für kreative Designentscheidungen einsetzen. Bei unserer Konferenz-Webseite hatte ich bereits eine eigene Vorstellung davon, wie das UI aussehen könnte weshalb ich Entscheidungen bezüglich Farben, Schatten und Rundungen selbst getroffen habe weil ich ein authentisches Design schaffen wollte. Außerdem merke ich auch dass ich aufpassen muss zu viel KI zu verwenden da ich dadurch neige wenig dabei zu lernen, wenn KI quasi für mich zu viel „denken“ übernimmt.

Thorben: KI eignet sich super fürs Generieren von Boilerplate oder zum Austausch über Probleme/Verbesserungen, allerdings würde ich sie keine eigenständigen Entscheidungen durchführen lassen. Design-Entscheidungen, wie wir sie in den ADR's getroffen haben, benötigt die KI als Rahmen und sollte daher auch von Menschenhand verfasst werden. Ebenfalls habe ich des öfteren mitbekommen, dass die KI Entscheidungen treffen würde, die entweder den Rahmen sprengen oder nicht in das von uns angedachte Gesamtbild passen, weswegen menschliches Review definitiv notwendig ist.

