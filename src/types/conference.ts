import type { Room } from "./room"
import type { Session } from "./session"
import type { Speaker } from "./speaker"
import type { Track } from "./track"

export interface Conference {
    name: string,
    tagline: string,
    dates: string[],
    location: string,
    timezone: string
    tracks: Track[],
    rooms: Room[],
    speaker: Speaker[],
    sessions: Session[]
}