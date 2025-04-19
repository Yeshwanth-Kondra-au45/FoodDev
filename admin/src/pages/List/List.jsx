import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./List.css";
const List = ({ url }) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };
  const removeFood = async (id) => {
    const response = await axios.post(`${url}/api/food/remove`, { id });
    if (response.data.success) {
      toast.success(response.data.message);
      fetchList();
    } else {
      toast.error(response.data.message || "Something went wrong!");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      {list.length > 0 ? (
        <>
          <p>All Foods List</p>
          <div className="list-table">
            <div className="list-table-format">
              <b>Image</b>
              <b>Name</b>
              <b>Category</b>
              <b>Price</b>
              <b>Action</b>
            </div>
            {list.map((item, index) => {
              return (
                <div key={index} className="list-table-format">
                  <img src={`${url}/images/` + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>${item.price}</p>
                  <p onClick={() => removeFood(item._id)} className="cursor">
                    X
                  </p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div
          style={{
            textAlign: "center",
            color: "#6d6d6d",
            padding: "20px",
            fontStyle: "italic",
          }}
        >
          <p>No food items available.</p>
          <p style={{ fontWeight: "bold" }}>
            Please add a new item to get started.
          </p>
        </div>
      )}
    </div>
  );
};

export default List;
