import type { Schedule } from "~/types/schedule";
import type { Session } from "~/types/session";

export function useSchedule() {
    const mySchedule = useLocalStorage<Schedule[]>('mySchedule', []);
    const { availableRooms } = useSessions();

    function addSession(session: Session): void {
        const scheduleItem: Schedule = {
            sessionId: session.id,
            day: session.day,
            startTime: session.startTime,
            endTime: session.endTime,
            room: availableRooms.value.find((room) => room.id === session.roomId)
        };
        mySchedule.value.push(scheduleItem);
    }

    function removeSession(id: string): void {
        mySchedule.value = mySchedule.value.filter((item) => item.sessionId !== id);
    }

    return { mySchedule, addSession, removeSession };
}