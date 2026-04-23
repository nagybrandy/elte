export interface Track {
    id: number,
    artist: string,
    title: string,
    length: string,
    rating: number,
    thumbnailURL: string,
    spotifyURL: string,
    chordsURL: string,
    lyricsURL: string,
}

export interface Playlist {
    id: number,
    title: string,
    tracks: Track[],
}


export interface MenuItem {
    name: string,
    path: string,
    icon: string,
}