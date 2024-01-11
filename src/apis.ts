import { gitRepositoriesURL, AUTHOR_API_URL } from "./constants"
import { ISearchResponse, IAuthorData } from "./types"


const headers = new Headers({'User-Agent': 'agent1'})

export const fetchData = async (currentPage:number):Promise<ISearchResponse> => {
      const response = await fetch(gitRepositoriesURL(currentPage), { headers })
      const data:ISearchResponse = await response.json()
      return data;     
  }

export const fetchAuthorDetails = async ():Promise<IAuthorData> => {
      const response = await fetch(AUTHOR_API_URL, {headers })
      const data:IAuthorData = await response.json()
      return data; 
  }