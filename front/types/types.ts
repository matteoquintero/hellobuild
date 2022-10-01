export type Repository = {
    name: string | null,
    private: boolean | undefined,
    created_at: string | null,
    updated_at: string | null,
    pushed_at: string | null,
    size:number | undefined,
    stargazers_count:number | undefined,
    watchers_count:number | undefined,
    language:string | null,
    has_issues:  boolean | undefined,
    has_projects:  boolean | undefined,
    has_downloads:  boolean | undefined,
    has_wiki:  boolean | undefined,
    has_pages: boolean | undefined,
    forks_count: number | undefined,
    archived: boolean | undefined,
    disabled: boolean | undefined,
    open_issues_count: number | undefined,
    allow_forking:  boolean | undefined,
    is_template: boolean | undefined,
    topics: Array<string> | undefined,
    visibility: string | undefined,
    forks: number | undefined,
    open_issues: number | undefined,
    watchers: number | undefined,
    default_branch: string | null, 
    favorite: boolean | false, 
}

export type Nav = {
    current:number,
    image:string  | undefined  | null
}

export type Favorite = {
    name:string | undefined  | null,
    is:boolean | undefined  | null
}