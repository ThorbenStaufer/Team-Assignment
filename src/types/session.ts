import type { Room } from "./room";
import type { Speaker } from "./speaker";
import type { Track } from "./track";

export type SessionLevel = 'Einsteiger' | 'Fortgeschritten' | 'Experte';
export type SessionFormat = 'Vortrag' | 'Workshop' | 'Podium';

export interface Session {
    id: string,
    title: string,
    abstract: string,
    trackId?: string,
    track?: Track,
    speakerIds?: string[],
    speaker?: Speaker[],
    day: Date,
    startTime: string,
    endTime: string,
    roomId?: string,
    room?: Room,
    level: SessionLevel,
    format: SessionFormat
}