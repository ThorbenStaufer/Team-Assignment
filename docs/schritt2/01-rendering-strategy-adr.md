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
Wir entscheiden uns für SSG, da die Speaker-Profile hauptsächlich aus statischen Inhalten bestehen. Diese können bereits beim Build erstellt und anschließend schnell ausgeliefert werden. 
## Konsequenzen
### Positiv
Die Seiten laden schnell und benötigen weniger Serverleistung. Außerdem sind die Inhalte direkt als HTML verfügbar, was für Suchmaschinen vorteilhaft ist.
### Negativ
Wenn sich eine Speaker Information ändert, muss die Seite neu gebaut und veröffentlicht werden. Änderungen sind daher nicht automatisch sofort sichtbar.

# Session-Detailseiten
## Kontext
Die Detail-Informationen der individuellen Sessions sollen jeweils auf einer eigenen Seite dargestellt werden. Dabei werden Titel, Abstract, Zeit (Tag, Start-/Endzeit), Raum, Track, Level, Format, sowie Links zu den zugehörigen Speaker Profilen für die Session angezeigt. Wie auch die restlichen Konferenz-Daten werden sich auch die Session-Details nicht über Zeit ändern.
## Optionen
### Option 1: Static Site Generation (SSG):
Die Detail-Seiten werden bereits zur Build-Zeit prä-generiert und auf Anfrage statisch ausgeliefert. Die Dateien werden nachträglich nicht neu gebaut und bleiben bis zum nächsten Rebuild der Applikation unverändert.
### Option 2: Server-side Rendering (SSR):
Der Server baut die Detail-Seiten bei jedem Aufruf neu und liefert dann das vollständige Bundle an den Client aus, ohne das dieser weitere Operationen durchführen muss. Tauscht erhöhte, erstmalige Ladezeit gegen sofortige Interaktivität.
## Entscheidung
Da sich unsere Konferenz-Daten nicht verändern können die Detail-Seiten ohne Probleme statisch ausgeliefert werden. Daher werden diese mittel SSG gerendert.
## Konsequenzen
### Positiv
Auslieferung der Detail-Seiten an den Konsumenten ist ohne Wartezeiten möglich.
### Negativ
Da die Anzahl der zu generierenden Seiten abhängig von den in den Konferenz-Daten abgelegten Sessions abhängig ist, benötigt es etwas mehr Konfiguration als für out-of-the-box SSR.

# Session-Übersicht
## Kontext
Die Session-Übersicht zeigt alle Vorträge der Konferenz mit Informationen wie Titel, Speaker, Uhrzeit und Raum. Diese Daten könnten sich kurzfristig noch ändern, zb wenn ein Vortrag verschoben wird oder ein anderer Raum verwendet werden muss. Außerdem können Nutzer*innen die Sessions nach Track, Tag, Level, und Speaker filtern.
## Optionen
### Option 1: Server-side Rendering (SSR): 
Die Session-Übersicht wird bei einer Anfrage am Server erstellt. Dadurch können aktuelle Daten angezeigt werden, ohne die gesamte Website neu bauen zu müssen.
### Option 2: Incremental Static Regeneration (ISR):
Die Seite wird zunächst statisch erstellt und nach bestimmten Zeitabständen aktualisiert. Das spart Serverleistung, allerdings können Änderungen erst mit Verzögerung sichtbar werden.
## Entscheidung
Wir entscheiden uns für SSR, da sich der Zeitplan einer Konferenz ändern kann und aktuelle Informationen wichtig sind. Die Filter können trotzdem direkt im Browser umgesetzt werden.
## Konsequenzen
### Positiv
Änderungen am Zeitplan können bei einer neuen Anfrage direkt berücksichtigt werden. Außerdem ist die Übersicht bereits beim Laden als HTML verfügbar.
### Negativ
Der Server muss die Seite bei jeder Anfrage erstellen, was mehr Ressourcen benötigt. Da wir kein echtes Live-Backend verwenden, können wir die Aktualisierung nur simulieren.

# "Mein Programm" Dashboard