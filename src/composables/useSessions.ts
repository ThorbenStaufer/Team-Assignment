import type { Room } from "~/types/room";
import type { Session, SessionLevel } from "~/types/session";
import type { Track } from "~/types/track";

export function useSessions() {
    const conference = useConference();

    const selectedTrackId = ref<string>('');
    const selectedDay = ref<string>('');
    const selectedLevel = ref<SessionLevel | ''>('');
    // Zeitspanne im Format "HH:MM"; leerer String = keine Begrenzung auf dieser Seite
    const selectedTimeFrom = ref<string>('');
    const selectedTimeTo = ref<string>('');

    // "HH:MM"-Strings sind zero-padded und damit lexikographisch vergleichbar
    function isWithinTimeRange(time: string): boolean {
        const afterFrom = !selectedTimeFrom.value || time >= selectedTimeFrom.value;
        const beforeTo = !selectedTimeTo.value || time <= selectedTimeTo.value;
        return afterFrom && beforeTo;
    }

    const filteredSessions = computed<Session[]>(() => {
        return conference.value.sessions.filter((session) => {
            const trackFilter = !selectedTrackId.value || session.trackId === selectedTrackId.value;
            const dayFilter = !selectedDay.value || session.day === selectedDay.value;
            const levelFilter = !selectedLevel.value || session.level === selectedLevel.value;
            const timeFilter = isWithinTimeRange(session.startTime) || isWithinTimeRange(session.endTime);

            return trackFilter && dayFilter && levelFilter && timeFilter;
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

    return { selectedTrackId, selectedDay, selectedLevel, selectedTimeFrom, selectedTimeTo, filteredSessions, availableTracks, availableDays, availableRooms, getSession, getSessionsBySpeaker };
}