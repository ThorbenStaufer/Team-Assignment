# Entscheidungsprotokoll – PWA-Caching

## Kontext
Unsere Konferenzwebsite „Shift“ soll auch bei einer schlechten oder fehlenden Internetverbindung möglichst gut funktionieren, denn gerade auf einer Konferenz kann das WLAN überlastet sein. Besucher*innen sollen deshalb weiterhin auf bereits geladene Sessions, Speaker-Informationen und ihr persönliches Programm zugreifen können. Und da sich nicht alle Inhalte gleich häufig ändern, haben wir uns für unterschiedliche Caching-Strategien entschieden
## Optionen
Cache First: Bereits gespeicherte Inhalte werden zuerst aus dem Cache geladen. Das ermöglicht schnelle Ladezeiten und die Offline-Nutzung. Allerdings können Informationen veraltet sein.

Network First: Zuerst wird versucht, die aktuelle Version aus dem Internet zu laden. Falls keine Verbindung besteht, wird auf den Cache zurückgegriffen. Bei schlechtem Internet können dadurch längere Wartezeiten entstehen.

Stale While Revalidate: Gespeicherte Inhalte werden sofort angezeigt und gleichzeitig im Hintergrund aktualisiert. Dadurch können Änderungen nachgeladen werden, allerdings sehen Nutzer*innen zunächst möglicherweise veraltete Informationen.

## Entscheidung
Für die Session- und Speaker-Seiten verwenden wir Cache First, da sich das Konferenzprogramm normalerweise selten verändert. Damit bereits geladene Informationen auch offline schnell verfügbar sind.
Für die Seite „Mein Programm“ verwenden wir Network First. Dadurch wird bei bestehender Internetverbindung zuerst die aktuelle Seite geladen und bei Verbindungsproblemen auf eine gespeicherte Version zurückgegriffen.
Die statischen Dateien der Website, beispielsweise JavaScript, CSS und Icons, werden über den Precache bereitgestellt.

## Konsequenzen
Durch die Kombination verschiedener Caching-Strategien kann die Website nach einem Online-Besuch teilweise ohne Internetverbindung genutzt werden. Die grundlegende Oberfläche und bereits gespeicherte Seiten stehen weiterhin zur Verfügung.
Ein Nachteil von Cache First ist, dass kurzfristige Änderungen am Konferenzprogramm nicht sofort sichtbar sein müssen. Network First benötigt dagegen bei fehlender Verbindung möglicherweise etwas Zeit, bevor der Cache verwendet wird. Ein erstmaliger Besuch ohne Internet ist nicht möglich, wenn die erforderlichen Dateien noch nicht gespeichert wurden.

## Testszenarien
### Szenario 1: Session-Übersicht offline
Ausgangslage: Die Konferenzwebsite wurde zunächst im Produktionsmodus mit bestehender Internetverbindung geöffnet. Dabei konnte der Service Worker die benötigten Dateien und Seiten zwischenspeichern. Die Session-Übersicht wurde bereits mindestens einmal erfolgreich geladen.

Aktion: Anschließend wurde in den Chrome DevTools im Network-Tab der Offline-Modus aktiviert. Danach wurde die Session-Übersicht erneut geladen, um zu überprüfen, ob die Seite ohne Internetverbindung weiterhin funktioniert.

Beobachtetes Verhalten: Die Session-Übersicht konnte auch offline angezeigt werden. Damit wurde bestätigt, dass die zuvor gespeicherten Inhalte verfügbar sind. Beim weiteren Scrollen durch die Sessions traten jedoch teilweise Fehler beim Laden zusätzlicher Nuxt-Payload-Dateien auf.

Ergebnis: Die grundlegende Offline-Anzeige funktioniert. Das vollständige Nachladen von Inhalten ist allerdings noch nicht zuverlässig auch wenn es den Anschein hat das alles passt.

### Szenario 2: Mein Programm offline
Ausgangslage: Die Konferenzwebsite wurde zunächst online geöffnet. Anschließend wurden mehrere Sessions zum persönlichen Programm hinzugefügt. Diese Auswahl wurde im Local Storage des Browsers gespeichert. Auch die Seite /schedule wurde bei bestehender Internetverbindung aufgerufen, damit sie im Cache abgelegt werden konnte.

Aktion: Danach wurde in den Chrome DevTools der Offline-Modus aktiviert. „Mein Programm“ wurde erneut geöffnet beziehungsweise neu geladen. Dabei wurde überprüft, ob die gespeicherten Sessions weiterhin sichtbar sind und ob die grundlegende Bedienung ohne Internetverbindung möglich bleibt.

Beobachtetes Verhalten: Die zuvor ausgewählten Sessions blieben erhalten und wurden weiterhin angezeigt. Die Daten konnten aus dem Local Storage gelesen werden, obwohl keine Internetverbindung bestand.

Ergebnis: Das persönliche Programm kann nach einem erfolgreichen Online-Besuch auch offline verwendet werden. Die Auswahl bleibt auf demselben Gerät gespeichert. Eine Synchronisierung zwischen mehreren Geräten ist derzeit nicht vorgesehen.

### Szenario 3: Erstbesuch ohne Internet
Ausgangslage: Für diesen Test wird ein Browserprofil ohne zuvor gespeicherte Daten der Konferenzwebsite verwendet. Es sind somit weder ein aktiver Service Worker noch zwischengespeicherte Seiten oder statische Dateien vorhanden. Dadurch wird ein tatsächlicher Erstbesuch simuliert.

Aktion: Vor dem ersten Aufruf der Website wird im Network-Tab der Chrome DevTools der Offline-Modus aktiviert. Anschließend wird versucht, die Session-Übersicht über /sessions zu öffnen.

Beobachtetes Verhalten: Da die Website zuvor noch nie geladen wurde, können keine Dateien aus dem Cache bereitgestellt werden. Der Browser kann die benötigten Inhalte ohne Internetverbindung daher nicht abrufen.

Ergebnis: Ein Erstbesuch ohne Internet ist ein bewusst akzeptierter Grenzfall unserer Umsetzung. Unsere PWA soll vor allem nach einem erfolgreichen Online-Besuch offline funktionieren. Eine erstmalige Installation oder das erstmalige Laden der Website benötigt weiterhin eine Internetverbindung.


## Cross-Review
Der erste Entwurf des Entscheidungsprotokolls wurde von Lea Sahiner erstellt.
