import type { Room } from "./room";

export interface Schedule {
    sessionId: string,
    room: Room,
    day: Date,
    startTime: string,
    endTime: string
}