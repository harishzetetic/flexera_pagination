import { INITIAL_PAGE } from "../constants";
import { calculateLastPage } from "../helper/util";


interface IChangePageButton{
    type:string,
    currentPage: number,
    totalPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  }
const ChangePageButton = (props:IChangePageButton) => {
    const {type, currentPage, totalPage, setCurrentPage} = props;
    const icon  = type === 'prev' ? '<' : '>';
    const changePage = () => {
      if(type === 'prev'){
        setCurrentPage(currentPage-1)
      } else {
        setCurrentPage(currentPage + 1)
      }
    }
    const isPrevPageDisabled = () => {
      return (currentPage === INITIAL_PAGE ? 'disabled' : '')
    }
    const isNextPageDisabled = () => {
      return (currentPage === calculateLastPage(totalPage) ? 'disabled' : '')
    }
  
    return <div className={`button ${type === 'prev' ? isPrevPageDisabled() : isNextPageDisabled()}`} onClick={changePage}>{icon}</div>
  }

  export default ChangePageButton