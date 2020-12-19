import { React, useState, useEffect } from "react";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";

export default function PostList() {
  const stateGlobal = useSelector(state => state);
  const posts = stateGlobal.postsReducer.posts;
  const [counter, setCounter] = useState(0);

  const [state, setState] = useState({
    offset: 0,
    tableData: [],
    orgtableData: [],
    perPage: 10,
    currentPage: 0,
  });

  const handlePageClick = e => {
    const selectedPage = e.selected;
    const offset = selectedPage * state.perPage;

    setState({ ...state, currentPage: selectedPage, offset: offset });
    setCounter(counter + 1);
  };

  const loadMoreData = () => {
    const data = state.orgtableData;

    const slice = data.slice(state.offset, state.offset + state.perPage);
    setState({
      ...state,
      pageCount: Math.ceil(data.length / state.perPage),
      tableData: slice,
    });
  };

  const getData = () => {
    fetch("./data/news_result.json")
      .then(data => {
        return data.json();
      })
      .then(data => {
        const tdata = data;
        const slice = tdata.slice(state.offset, state.offset + state.perPage);
        setState({
          ...state,
          pageCount: Math.ceil(tdata.length / state.perPage),
          orgtableData: tdata,
          tableData: slice,
        });
      });
  };

  useEffect(() => {
    loadMoreData();

    getData();
  }, [counter]);
  return (
    <div>
      {state.tableData.length ? (
        state.tableData.map((item, index) => {
          return (
            <Post
              id={item.id}
              key={index}
              title={item.title}
              description={item.textContent}
              image={item.imgLink}
              views={item.views}
            />
          );
        })
      ) : (
        <div className='loader'>
          <Loader
            type='Puff'
            color='#00BFFF'
            height='200px'
            width='200px'
            timeout={3000} //3 secs
          />
        </div>
      )}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={state.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
