import React, { useEffect, useState } from "react";
import truck from "../../Images/truck.webp";
import { Icon } from "semantic-ui-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSingleData } from "../Store/Middleware/Middleware";
import firebase from "firebase";


 function Product (props) {
  // const style = {
  //   height: 30,
  //   border: "1px solid green",
  //   margin: 6,
  //   padding: 8,
  // };
   function fetchMoreData()
   {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      // this.setState({
      //   items: this.state.items.concat(Array.from({ length: 20 })),
      // });
      props.setArr(props.arr.concat(Array.from({ length: 20 })));
    }, 1500);
  }
  useEffect(() => {
    props.getSingleData();
  }, []);
  
  return (
    <>
      {/* <InfiniteScroll
        dataLength={props.arr.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      > */}
      {
      props.arr
        // .filter((obj, i) => props.arr[i].subCatogorie === path)[0]
        .map((a, index) => (
          <div
            className="Product"
            key={index}
            onClick={() => [
              props.getSingleData(a),
              props.history.push(`/product/view/${a.key}`),
            ]}
          >
            <div
              className="productImage"
              style={{ backgroundImage: `url(${a.imageURL[0]})` }}
            >
              <div className="feature">
                <Icon name="heart outline" />
                {/* <p>FEATURED</p> */}
              </div>
            </div>
            <div className="detail">
              <h3>RS {a.price}</h3>
              <p className="Modal">{a.descript}</p>
              {/* <p className="des">{a.descript}</p> */}
              <p className="moment">{a.moment}</p>
            </div>
          </div>
        ))}
      {/* </InfiniteScroll> */}
    </>
  );

  // scroll
  // return props.arr.map((a, i) => {
  //   return (
  //     <div className="Product">
  //       <div
  //         className="productImage"
  //         style={{ backgroundImage: `url(${truck})` }}
  //       >
  //         <div className="feature">
  //           <Icon name="heart outline" />
  //           {/* <p>FEATURED</p> */}
  //         </div>
  //       </div>
  //       <div className="detail">
  //         <h3>RS {a.price}</h3>
  //         <p className="Modal">{a.Modal}</p>
  //         <p className="des">{a.des}</p>
  //         <p className="moment">{a.moment}</p>
  //       </div>
  //     </div>
  // );
  // });
}

const mapStateToProps = (state) => {
  return {
    singleData: state.singleData,
  };
};
const mapDispatchToProps = { getSingleData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Product));
