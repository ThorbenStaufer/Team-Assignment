# AI Log
## 23.10.2026 - Claude Sonnet 5.5
**Prompt**: I am a computer science student and have the assignment to develop a conference plattform with Vue. I have a composable that has a list of conference sessions and now I want to also offer the ability to filter this list by day, experience level or study track inside the composable, all of which is OR-combinable. How would I do this most effectively, if the filters were also optional?

**Zweck**: Erster Starter in die Composable-Architektur für useSessions; wir haben die Idee die 3 searchTerm-Refs im Composable anzulegen und von dort aus verfügbar zu machen aus der Antwort zu diesem Prompt entnommen.
## 28.10.2026 - Claude Sonnet 5.5
**Prompt**: I am using Nuxt 4 to build a small application that loads a list of events from a JSON file and has an overview page listing all events as well as individual detail pages for them. I want to use SSG for the detail pages, as their content will never change. Other pages should not be static. How do I do that?

**Zweck**: Ergänzende Erklärung zur Konfiguration von Rendering Modes in Nuxt, zusätzlich zur Dokumentation auf der Website; das Anführen der Route List in der Nitro Konfiguration entstammt der Antwort auf diesen Prompt.
## 01.11.2026 - Claude Sonnet 5.5
**Prompt**: The events presented in the detail pages can be saved to a local schedule via a composable, which persists the data in the browsers localStorage. Since the detail pages are statically generated at build time, I can't directly use the composable, as the localStorage does only exist on the client. How would I pull this off?

**Zweck**: Recherche wie das localStorage-Composable von einer statisch generierten Seite aus verwendet werden kann; von der Antwort dieses Prompts wurde übernommen, dass der initiale localStorage Lese-Zugriff in einem onMounted-Hook stattfinden sollte.