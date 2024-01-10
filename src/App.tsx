import React from 'react';
import './App.css';
import { IAuthorData, ISearchResponse } from './types';
import Card from './components/Card';
import { getFlaggedItems } from './helper/util';
import { AUTHOR_API_URL, INITIAL_PAGE, gitRepositoriesURL } from './constants';
import ChangePageButton from './components/ChangePageButton';

function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [data, setData]= React.useState<ISearchResponse>()
  const [author, setAuthor] = React.useState<IAuthorData>();
  const [flaggedItems, setFlaggedItems] = React.useState<Array<number>>(getFlaggedItems())
  const [currentPage, setCurrentPage] = React.useState<number>(INITIAL_PAGE)
  const headers = new Headers({'User-Agent': 'agent1'})

  const fetchData = async () => {
    setIsLoading(true)
    try{
      const response = await fetch(gitRepositoriesURL(currentPage), { headers })
      const data:ISearchResponse = await response.json()
      if(data?.total_count){
        setData(data)
        setIsLoading(false)
      }
    } catch(e){
      setIsLoading(false)
    }
    
  }

  const fetchAuthorDetails = async () => {
    try{
      const response = await fetch(AUTHOR_API_URL, {headers })
    const data:IAuthorData = await response.json()
    if(data?.id){ setAuthor(data)}
    } catch(e){
      console.log('Getting error while fetching author info', e)
    }
    
  }

  React.useEffect(()=>{fetchData();}, [currentPage])
  React.useEffect(()=>{fetchAuthorDetails()}, [])

  return (<>
    <div className="container">
      <h1 className='page_title'><span className='highlight'>Flexera</span> Pagination App</h1>
      
      {isLoading && <h3>Loading... Please Wait</h3>}
      {!isLoading && data && <>
        <div className="card_container">
        {data.items.map(item => <Card key={item.id} item={item} isFlagged={flaggedItems.includes(item.id)} flaggedItems={flaggedItems} setFlaggedItems={setFlaggedItems}/>)}
      </div>
      <div className='button_container'>
          <ChangePageButton type="prev" currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={data?.total_count}/>
          Page {currentPage} | Total Results: {data?.total_count}
          <ChangePageButton type="next" currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={data?.total_count}/>
        </div>
      </>}
      
    </div>
    <div className='footer'>
      {author && <>
        <img src={author?.avatar_url} className='author_avatar' alt={author?.name}/>
        &nbsp;&nbsp;
      <p>By <a href={author?.html_url} target='_blank'>{author?.name}</a></p>
      </>}
    </div>
    </>
  );
}


export default App;


