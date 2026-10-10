import json from '../conference-data.json';

export function useFile() {
    const conferenceData = ref(json);

    return conferenceData;
}