export type SessionLevel = 'Einsteiger' | 'Fortgeschritten' | 'Experte';
export type SessionFormat = 'Vortrag' | 'Workshop' | 'Podium';

export interface Session {
    id: string,
    title: string,
    abstract: string,
    trackId: string,
    speakerIds: string[],
    day: string,
    startTime: string,
    endTime: string,
    roomId: string,
    level: SessionLevel,
    format: SessionFormat
}