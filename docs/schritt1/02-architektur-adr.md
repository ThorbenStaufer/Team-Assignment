# Kontext
Wir wollen eine leicht erweiterbare und anpassbare Applikation entwickeln, welche moderne Design-Patterns implementiert und eine saubere Komponentenstruktur aufweist. Wir werden dieses Projekt auf einer Nuxt-Basis aufbauen, wodurch einige Konventionen zur Ordnerstruktur bereits vorhanden sind, aber durch Konfiguration überschrieben werden könnten:
- Routing-Endpoints in "src/pages"
- allgemeine Komponenten in "src/components"
- Composables in "src/composables"
# Optionen
## Möglichkeit 1:
Komponenten folgen keiner definierten Hierarchie und liegen flach im Quellverzeichnis. Es werden keine Composables verwendet, sondern jegliche Logik wird an den Stellen implementiert, wo sie zum Einsatz kommt. Diese Option wird nicht weiter verfolgt, da die Wartbarkeit der Applikation darunter leiden würde.
## Möglichkeit 2:
Die Komponenten werden nach der Art ihres Inhalts (z.B.: Listen, Cards, etc.) gruppiert. Jede Komponente ist dabei für ihre eigenen Daten zuständig. Diese Option wurde verworfen, da eine Aufteilung nach Art des visuellen Inhalts keinen Mehrwert für die Lesbarkeit des Projekts bietet.
# Entscheidung
Komponenten werden unterteilt in "Basis"- und "Feature"-Komponenten, wobei die "Basis"-Komponenten einen zustandlosen Rohbau eines UI-Elements darstellen und mittels Slots von "Feature"-Komponenten erweitert werden. "Feature"-Komponenten umfassen ebenfalls alle UI-Elemente, die ausschließlich von diesem Feature gebraucht werden. Datenverwaltung ist ausgelagert in Composables. Die Routing-Endpunkte liegen im "src/pages"-Verzeichnis.
# Konsequenzen
## Positiv
Diese Gliederung nutzt sowohl Headless-Components, um klar die Logik von der Darstellung getrennt zu halten, als auch wo sinnvoll Renderless-Components, damit geteiltes UI nicht redundant dupliziert wird, was unser Ziel moderne Design-Patterns einzuhalten erfüllt.
Durch die Auslagerung von Routing-Endpunkten in einen "src/pages"-Ordner bleiben wir konsistent mit Nuxt und müssen keine Änderungen an der Konfiguration vornehmen.
## Negativ
Die Aufteilung sorgt für mehr Komplexität in der Ordnerstruktur, was bei einer kleinen Projekt-Größe wie der unsrigen etwas übertrieben wirkt.
# Komponentenübersicht
```
src/
	app.vue
	components/
		base/
			BaseButton.vue
			BaseCard.vue
			BaseList.vue
		schedule/
			ScheduleCard.vue
			ScheduleList.vue
		sessions/
			SessionCard.vue
			SessionFilterBar.vue
			SessionList.vue
		speaker/
			SpeakerCard.vue
			SpeakerList.vue
	composables/
		useConference.ts
		useFile.ts
		useLocalStorage.ts
		useSchedule.ts
		useSessions.ts
		useSpeaker.ts
	pages/
		index.vue
		schedule.vue
		sessions/
			index.vue
			[sessionId].vue
		speaker/
			index.vue
			[speakerId].vue
	types/
		conference.ts
		room.ts
		schedule.ts
		session.ts
		speaker.ts
		track.ts
```