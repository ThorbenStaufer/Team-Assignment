import type { Session } from "./session";

export interface Speaker {
    id: string,
    name: string,
    title: string,
    company: string,
    bio: string,
    sessionIds?: string[],
    sessions?: Session[]
}