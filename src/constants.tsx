

export const INITIAL_PAGE = 1;

export const gitRepositoriesURL = (pageNumber:number):string => `https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=${pageNumber}`

export const AUTHOR_API_URL = 'https://api.github.com/users/harishzetetic'