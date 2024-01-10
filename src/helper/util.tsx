

export const getFlaggedItems = ():Array<number>=>{
    const itemsFromStorage = localStorage.getItem('flaggedItems');
    if(itemsFromStorage){
      return JSON.parse(itemsFromStorage)
    } else {
      return []
    }
    
  }

  export const calculateLastPage = (totalCount:number, perPageResult=10):number => {
        const result = totalCount % perPageResult;
        if(result === 0){
            return totalCount / perPageResult
        } else {
            return (totalCount / perPageResult) + 1
        }
  }