import React from "react";
import { range } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ReviewPagination = (props) => {
  const { setIsLoading, viewablePages, setViewablePages, setPage, page, totPage } = props;

  const onClickItem = (e) => {
    const val = e.target.value;
    const view = (Math.ceil(val / 5) - 1) * 5;
    setPage(val);
    setViewablePages(range(view + 1, Math.min(view + 6, totPage + 1)));
    setIsLoading(true)
  };

  const onClickPrev = () => {
    let newPage = (page - 1) > 1 ? page - 1 : 1;
    const view = (Math.ceil(newPage / 5) - 1) * 5;
    if (newPage > 1){
      setPage(newPage);
      setViewablePages(range(view + 1, Math.min(view + 6, totPage + 1)));
      setIsLoading(true)
    }
  };
  const onClickNext = () => {
    let newPage = (page + 1) <= totPage ? page + 1 : totPage;
    const view = (Math.ceil(newPage / 5) - 1) * 5;
    if (newPage <=totPage) {
      setPage(newPage);
      setViewablePages(range(view + 1, Math.min(view + 6, totPage + 1)));
      setIsLoading(true)
    }
  };

  return (
    <div id="mypagepagination" className="mypagepagination">
      <FontAwesomeIcon
        icon={faAngleLeft}
        onClick={onClickPrev}
        style={{fontSize:'14px', color:'#564B43'}}

      />
      {viewablePages.map((item, index) => {
        return (
          <li
            value={item}
            key={index}
            onClick={onClickItem}
            style={{backgroundColor:(page===item? '#AC998A':'#EDDCCF'), fontSize:'16px', color:(page===item? 'white': '#564B43'), width:'28px', height:'28px', cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center'}}
          >
            {item}
          </li>
        );
      })}
      <FontAwesomeIcon
        icon={faAngleRight}
        onClick={onClickNext}
        style={{fontSize:'14px', color:'#564B43'}}

      />
    </div>
  );
};

export default ReviewPagination;
