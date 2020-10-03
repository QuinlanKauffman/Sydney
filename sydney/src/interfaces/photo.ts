export interface Photo {
    caption: string,
    url: string,
    width: number,
    height: number,
    tags: Tag[];
}

export enum Tag {
    hockey = "Hockey",
    freelance = "Freelance",
}