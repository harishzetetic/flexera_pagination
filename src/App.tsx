import React from 'react';
import './App.css';
import { IAuthorData, ISearchResponse } from './types';
import Card from './components/Card';
import { getFlaggedItems } from './helper/util';
import { INITIAL_PAGE } from './constants';
import ChangePageButton from './components/ChangePageButton';
import { fetchAuthorDetails, fetchData } from './apis';

function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [data, setData] = React.useState<ISearchResponse>()
  const [author, setAuthor] = React.useState<IAuthorData>();
  const [flaggedItems, setFlaggedItems] = React.useState<Array<number>>(getFlaggedItems())
  const [currentPage, setCurrentPage] = React.useState<number>(INITIAL_PAGE)



  React.useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true)
      try {
        const data = await fetchData(currentPage);
        data?.total_count && setData(data)
      } catch (e) {
        console.error('There are some error while fetching repos', e)
      } finally {
        setIsLoading(false)
      }

    }
    fetchRepositories();
  }, [currentPage])

  React.useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const data = await fetchAuthorDetails()
        data?.id && setAuthor(data)
      } catch (e) {
        console.error('Getting error while fetching author info', e)
      }
    }
    fetchAuthorData()
  }, [])

  return (<>
    <div className="container">
      <h1 className='page_title'><span className='highlight'>Example</span> Pagination App</h1>

      {isLoading && <h3>Loading... Please Wait</h3>}
      {!isLoading && data && <>
        <div className="card_container">
          {data.items.map(item => <Card key={item.id} item={item} isFlagged={flaggedItems.includes(item.id)} flaggedItems={flaggedItems} setFlaggedItems={setFlaggedItems} />)}
        </div>
        <div className='button_container'>
          <ChangePageButton type="prev" currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={data?.total_count} />
          Page {currentPage} | Total Results: {data?.total_count}
          <ChangePageButton type="next" currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={data?.total_count} />
        </div>
      </>}

    </div>
    <div className='footer'>
      {author && <>
        <img src={author?.avatar_url} className='author_avatar' alt={author?.name} />
        &nbsp;&nbsp;
        <p>By <a href={author?.html_url} target='_blank'>{author?.name}</a></p>
      </>}
    </div>
  </>
  );
}


export default App;


