export interface IOwner{
    id:number;
    avatar_url: string;
}
export interface IItem{
    id: number,
    full_name:string;
    description:string;
    owner: IOwner
}
export interface ISearchResponse{
    incomplete_results: boolean;
    items: Array<IItem>
    total_count: number
}

export interface IAuthorData{
    avatar_url:string;
    html_url:string;
    name:string;
    id:number;
}