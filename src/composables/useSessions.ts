import type { Room } from "~/types/room";
import type { Session, SessionLevel } from "~/types/session";
import type { Track } from "~/types/track";

export function useSessions() {
    const conference = useConference();

    const selectedTrackId = ref<string>('');
    const selectedDay = ref<string>('');
    const selectedLevel = ref<SessionLevel | ''>('');

    const filteredSessions = computed<Session[]>(() => {
        return conference.value.sessions.filter((session) => {
            const trackFilter = !selectedTrackId.value || session.trackId === selectedTrackId.value;
            const dayFilter = !selectedDay.value || session.day === selectedDay.value;
            const levelFilter = !selectedLevel.value || session.level === selectedLevel.value;

            return trackFilter && dayFilter && levelFilter;
        });
    });

    const availableTracks = computed<Track[]>(() => conference.value.tracks);
    const availableDays = computed<string[]>(() => conference.value.dates);
    const availableRooms = computed<Room[]>(() => conference.value.rooms);

    function getSession(id: string): Session | undefined {
        return conference.value.sessions.find((session) => session.id === id);
    }

    function getSessionsBySpeaker(speakerId: string): Session[] {
        return conference.value.sessions.filter((session) =>
            session.speakerIds.includes(speakerId)
        );
    }

    return { selectedTrackId, selectedDay, selectedLevel, filteredSessions, availableTracks, availableDays, availableRooms, getSession, getSessionsBySpeaker };
}