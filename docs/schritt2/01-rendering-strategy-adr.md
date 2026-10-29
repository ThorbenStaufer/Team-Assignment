# Einleitung
Die Auswahl der geeigneten Rendering-Strategie beruht primär auf der Art des angezeigten Inhaltes sowie der Möglichkeiten, die durch das Framework gegeben sind. Nuxt ist nicht nur in der Lage alle vier Optionen (Static Site Generation, Server-side Rendering, Client-side Rendering, Incremental Static Regeneration) zu unterstützen, sondern bietet ebenfalls einen hybriden Modus mit dem die Rendering-Strategie pro Route individuell festgelegt werden kann. Dadurch steht es uns frei für jede Route die am besten geeignete Strategie auszuwählen. Dabei zu beachtende Kriterien inkludieren, ob sich angezeigte Daten über Zeit ändern, ob sich Nutzer-Aktionen direkt auf der Seite widerspiegeln sollen und ab wann der anzuzeigende Inhalt verfügbar ist.

# Speaker-Profile
## Kontext
Auf unserer Konferenz-Website werden die Speaker auf den Speaker-Profilseiten vorgestellt. Dazu gehören beispielsweise Name, Titel, Firma, Bio und
Liste/Links zu den Vorträgen. Diese Daten stehen bereits vor dem Aufruf der Website fest und ändern sich normalerweise nicht während der Laufzeit darum brauchen wir keine ständig neu geladenen Daten.
## Optionen
### Option 1: Static Site Generation (SSG): 
Die Speaker-Profile werden bereits beim Erstellen der Website als fertige HTML-Seiten generiert. Beim Aufrufen müssen die Inhalte daher nicht erst vom Server zusammengestellt werden.
### Option 2: Server-side Rendering (SSR): 
Die Profile werden bei jeder Anfrage am Server erstellt. Dadurch könnten Änderungen sofort angezeigt werden, allerdings ist das für unsere weitgehend gleichbleibenden Daten nicht notwendig.
## Entscheidung
Wir entscheiden uns für SSG, da die Speaker-Profile hauptsächlich aus statischen Inhalten bestehen. Diese können bereits beim Build erstellt und anschließend schnell ausgeliefert werden. Damit folgen wir auch der im Szenario vorgeschlagenen Rendering-Strategie.
## Konsequenzen
### Positiv
Die Seiten laden schnell und benötigen weniger Serverleistung. Außerdem sind die Inhalte direkt als HTML verfügbar, was für Suchmaschinen vorteilhaft ist.
### Negativ
Wenn sich eine Speaker Information ändert, muss die Seite neu gebaut und veröffentlicht werden. Änderungen sind daher nicht automatisch sofort sichtbar.

# Session-Detailseiten
# Session-Übersicht
# "Mein Programm" Dashboard