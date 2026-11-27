# AI Log
## Eintrag 1 - Erweiterung Filter-Funktion
- **Datum**: 27.11.2026 14:55 Uhr
- **Tool**: Claude Code Opus 5.5
- **Prompt**: Anbei die aktuelle Aufgabenstellung für das Projekt. Wir verwenden Vue + Nuxt und haben ein ESlint Quality-Gate mit aktivem pre-commit hook. Im "docs" Ordner befinden sich eine Reihe von ADR's und anderen Design-Dokumenten, die als Grundlage für die Applikation dienen. Erweitere bitte gemäß Aufgabe A in der Angabe die Session-Overview, implementiert in src\pages\sessions\index.vue, um eine zusätzliche Filter-Funktion nach Uhrzeit. Der Nutzer soll eine Zeitspanne angeben können, woraufhin in der Liste nur jene Sessions angezeigt werden, deren Start- oder End-Zeit in diese Spanne fällt.
- **Zweck**: Gemäß Punkt A eine AI-unterstützte Erweiterung des Codes.
- **Übernommen**: Der generierte Code wurde 1:1 übernommen, bis auf das Styling der Filter-Inputs, welches nachträglich noch nachgebessert wurden.
- **Korrigiert/Abgelehnt**: Das Styling der neuen Filter-Inputs wurde nachgebessert, da dieses schwer neben den bereits vorhandenen Filter-Methoden zu lesen war.
- **Prüfmethode**: Linter (manuell und über pre-commit hook), manuelles Review, Testen im Browser

## Eintrag 2 - Fehler bei erstmaliger Anfrage der Applikation
- **Datum**: 27.11.2026 16:16 Uhr
- **Tool**: Claude Code Opus 5.5
- **Prompt**: Die Applikation scheint einen Fehler zu haben, durch den beim erstmaligen Aufrufen der Standard URL (localhost:3000/sessions) eine veraltete Version mit teilweise fehlendem CSS geladen wird. Erst nachdem entweder zur Session-Detailseite oder zu "Mein Programm" und anschließend über den Navigations-Header wieder zurück gewechselt wurde, wird die tatsächliche Übersicht angezeigt. Bitte untersuche den Fehler und schlage einen möglichen Bug-Fix vor.
- **Zweck**: Beheben eines Fehlers beim Öffnen der Applikation.
- **Übernommen**: Ich habe den lokalen Service-Worker-Cache auf Hinweis von Claude gelöscht.
- **Korrigiert/Abgelehnt**: Claude hat vorgeschlagen die Caching Strategie für unsere statischen Seiten auf "NetworkFirst" zu wechseln oder die JSON Payloads im Precache zu speichern, was ich jedoch verworfen habe, da dies in unserem Fall keinen Sinn ergibt.
- **Prüfmethode**: Testen im Browser mit gelöschtem Cache, manuelles Review der vorgeschlagenen nuxt.config.ts Änderungen vor Ablehnung

## Eintrag 3 - Validierung des Projekts gegen die Angabe
- **Datum**: 27.11.2026 18:23 Uhr
- **Tool**: Claude Code Opus 5.5
- **Prompt**: Ausgehend von der aktuellen Angabe, bitte überprüfe, ob die aktuelle Umsetzung den geforderten Kriterien entspricht.
- **Zweck**: Überprüfen, ob die Angabe vollständig bearbeitet wurde.
- **Übernommen**: Es wurde kein KI-generierter Inhalt direkt übernommen, der Prompt diente nur zur Prüfung, nicht zur Generierung von Verbesserungen.
- **Korrigiert/Abgelehnt**: Auf Hinweis der KI habe ich meine Antwort für die dritte Reflexionsfrage erweitert, da diese zuvor noch nicht die Mindestwortanzahl erreicht hatte.
- **Prüfmethode**: Manuelles Review der Angabe im Vergleich mit der Antwort der KI

## Bewusst ohne AI
Die ADR's und Designdokumente wurden bewusst ohne KI-Einsatz erarbeitet, da diese den Rahmen unseres Projekt darstellen und alles weitere darauf aufbaut. Wir sollten uns darüber bewusst sein, welche Entscheidungen getroffen wurden und warum, weswegen eine Automatisierung dieses Prozesses durch KI nicht förderlich wäre.
