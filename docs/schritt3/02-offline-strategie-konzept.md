# Offline-Strategie – Shift Konferenzwebsite
## Sessions und Speaker-Daten – Cache First
Für die Sessions und Speaker-Informationen verwenden wir Cache First. Dabei wird zuerst geprüft, ob die Inhalte bereits im Cache gespeichert sind und nur wenn sie fehlen, werden sie aus dem Internet geladen.
Diese Strategie passt gut, weil sich das Konferenzprogramm nach der Veröffentlichung normalerweise kaum verändert. Die Informationen können dadurch schnell angezeigt werden, auch bei schlechtem Konferenz-WLAN.
Ein Nachteil ist, dass gespeicherte Informationen veraltet sein können. Falls sich beispielsweise kurzfristig Räume oder Uhrzeiten ändern, wäre Stale While Revalidate besser geeignet. Dabei werden zuerst die gespeicherten Daten angezeigt und gleichzeitig im Hintergrund aktualisiert. So bleiben die Informationen schnell verfügbar und werden bei bestehender Internetverbindung erneuert.

## „Mein Programm“ – Network First
Für „Mein Programm“ entscheiden wir uns für Network First. Dabei versucht die Website zuerst, die aktuelle Version vom Server zu laden. Ist keine Verbindung möglich, wird auf eine gespeicherte Version zurückgegriffen.
Diese Strategie wäre besonders sinnvoll, wenn Nutzer*innen ihr Programm auf mehreren Geräten bearbeiten können. Wird beispielsweise am Handy eine Session hinzugefügt, soll diese Änderung auch am Laptop möglichst schnell sichtbar sein.
Cache First wäre hier weniger sinnvoll, weil zuerst eine möglicherweise veraltete Version angezeigt wird, obwohl neuere Daten verfügbar sind. Änderungen auf anderen Geräten könnten dadurch übersehen werden. Bei einem plötzlichen Internetausfall wäre dann möglicherweise nur dieser alte Stand verfügbar. Network First versucht dagegen bei jedem Aufruf, die neuesten Daten zu laden. Dadurch steht bei einem späteren Internetausfall der letzte erfolgreich geladene Stand zur Verfügung.

## Statische Assets – Cache First
Für die App-Shell, Icons, Schriftarten und CSS-Dateien verwenden wir Cache First.
Die App-Shell enthält die grundlegenden Teile der Website, die für die Anzeige und Bedienung notwendig sind und da sich diese Dateien selten ändern, müssen sie nicht bei jedem Besuch neu heruntergeladen werden.
Beim ersten Aufruf werden die Dateien aus dem Internet geladen und anschließend gespeichert. Bei späteren Besuchen werden die gespeicherten Dateien verwendet. Dadurch lädt die Website schneller und benötigt weniger Internet. Bereits gespeicherte Seiten und ihre benötigten Dateien können auch offline geöffnet werden.
Als Alternative haben wir Network First überlegt. Da sich unsere statischen Dateien nicht ändern, wären wiederholte Netzwerkanfragen unnötig und könnten bei schlechtem WLAN zu längeren Ladezeiten führen.

## Verhalten bei vollständigem Internetausfall
Wenn während der Konferenz die Internetverbindung abbricht, sollen bereits gespeicherte Inhalte weiterhin funktionieren. Besucher*innen können ihre Sessions ansehen und auf „Mein Programm“ zugreifen, sofern die benötigten Dateien vorher geladen wurden.
Nicht gespeicherte Inhalte und neue Änderungen sind offline nicht verfügbar. Bei einem ersten Besuch ohne Internet funktioniert die Website noch nicht, da keine Dateien im Cache liegen.
Unser Ziel ist, dass die wichtigsten Funktionen nach einem erfolgreichen Online-Besuch auch ohne Internet nutzbar bleiben.
