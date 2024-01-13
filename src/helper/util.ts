

export const getFlaggedItems = ():Array<number>=>{
    const itemsFromStorage = localStorage.getItem('flaggedItems');
    if(itemsFromStorage){
      return JSON.parse(itemsFromStorage)
    } else {
      return []
    }
    
  }

  export const calculateLastPage = (totalCount:number, perPageResult=10):number => {
      if(totalCount < perPageResult){
        return 1
      }
        const result = totalCount % perPageResult;
        if(result === 0){
            return totalCount / perPageResult
        } else {
            return Math.floor(totalCount / perPageResult) + 1
        }
  }