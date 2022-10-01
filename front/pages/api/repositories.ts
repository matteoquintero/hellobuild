import type { NextApiRequest, NextApiResponse } from 'next'
import {Octokit} from 'octokit'
type Repository = {
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
}
  
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Repository[]>
) {
    const octokit = new Octokit({
        auth:'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'
    })
    const githubResponse = await octokit.request('GET /user/repos', {})
    if(!githubResponse){
        res.status(401)
        return
    }
    let repositories: Repository[] = githubResponse.data.map( element => {
        return{
            name: element.name,
            private: element.private,
            created_at: element.created_at,
            updated_at: element.updated_at,
            pushed_at: element.pushed_at,
            size: element.size,
            stargazers_count: element.stargazers_count,
            watchers_count: element.watchers_count,
            language: element.language,
            has_issues: element.has_issues,
            has_projects: element.has_projects,
            has_downloads: element.has_downloads,
            has_wiki: element.has_wiki,
            has_pages: element.has_pages,
            forks_count: element.forks_count,
            archived: element.archived,
            disabled: element.disabled,
            open_issues_count: element.open_issues_count,
            allow_forking: element.allow_forking,
            is_template: element.is_template,
            topics: element.topics,
            visibility: element.visibility,
            forks: element.forks,
            open_issues: element.open_issues,
            watchers: element.watchers,
            default_branch: element.default_branch,            
        }
    } )
    res.status(200).json(repositories)
}
