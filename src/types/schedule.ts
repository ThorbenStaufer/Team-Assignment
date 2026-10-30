import type { Room } from "./room";

export interface Schedule {
    sessionId: string,
    room?: Room,
    day: string,
    startTime: string,
    endTime: string
}