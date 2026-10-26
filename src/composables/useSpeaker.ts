import type { Speaker } from "~/types/speaker";

export function useSpeakers() {
    const conference = useConference();

    const speakers = computed<Speaker[]>(() => conference.value.speaker);

    function getSpeaker(id: string): Speaker | undefined {
        return speakers.value.find((speaker) => speaker.id === id);
    }

    return { speakers, getSpeaker };
}