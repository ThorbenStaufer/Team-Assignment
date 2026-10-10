import type { Conference } from "~/types/conference";
import type { SessionFormat, SessionLevel } from "~/types/session";

export function useConference() {
    const conferenceData = useFile();
    const conference = computed<Conference>(() => {
        return {
        ...conferenceData.value.conference,
        tracks: conferenceData.value.tracks,
        rooms: conferenceData.value.rooms,
        speaker: conferenceData.value.speakers,
        sessions: conferenceData.value.sessions.map((session) => {
            return {
                ...session,
                level: session.level as SessionLevel,
                format: session.format as SessionFormat
            }
        })}
    })

    return conference;
}