import type { NextApiRequest, NextApiResponse } from 'next'
import {Octokit} from 'octokit'
import { Repository } from '../../types/repository'

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
