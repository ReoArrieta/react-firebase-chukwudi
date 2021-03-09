import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Message from "../UI/Message";
import { setSuccess } from "../../store/actions/authActions";
import { RootState } from "../../store";
import "./Homepage.css";

import headerImage from "../../assets/images/headerimage.png";
import happy from "../../assets/images/d.png";
import clock from "../../assets/icons/149316.svg";
import Categories from "../../assets/categories.json";
import Products from "../../assets/products.json";

const Homepage: FC = () => {
  const { needVerification, success } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(setSuccess(""));
    }
  }, [success, dispatch]);

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col border">
            {needVerification && (
              <Message
                type="success"
                msg="Porfavor verifica tu correo electrónico"
              />
            )}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-8">
            <div className="box">
              <img src={headerImage} className="sizeImgHeader" alt="" />
              <div>
                <h3>$0 delivery for 30 days!</h3>
                <img src={happy} alt="" />
              </div>
              <p>$0 delivery free for orders over $10 for 30 days</p>
              <p>Lean more →</p>
            </div>
          </div>
          <div className="col border">
            <div>
              <h1>My 😎</h1>
              <h1>Order </h1>
            </div>
            <div className="cardTime">
              <p>625 St Marks Ave</p>
              <p>Edit</p>
              <img src={clock} className="sizeSvgHeader" alt="" />
              <p>35 min</p>
              <p>Chose time</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 border">
            <h1 className="categories">Restaurants 🍔</h1>
            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle mt-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Delivery: Now
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 border">
          {Categories.map((category) => {
              return (
                <div key={category.id} className="categories">
                  <p>{category.name}</p>
                  <img src={category.icon} className="sizeSvgHeader" alt="" />
                </div>
              );
            })}
          </div>
          <div className="col border">
            2
          </div>
        </div>
        <div className="row">
          <div className="col-8 border">
            {Products.map((product) => {
              return(
                <div key={product.id}>
                  <p>{product.name}</p>
                  <img src={product.image} className="sizeImgHeader" alt=""/>
                </div>
              )
            })}
          </div>
          <div className="col">3</div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
