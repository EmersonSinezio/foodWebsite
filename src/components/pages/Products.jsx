import React from "react";
import FoodImage1 from "/assets/Burgao.png";
import FoodImage2 from "/assets/Chinese.png";
import FoodImage3 from "/assets/suschi.png";
import FoodImage4 from "/assets/Burgao_batata.png";
import { useState } from "react";

function Products() {
  let [change, setChange] = useState(false);
  let [buying, setBuying] = useState(false);
  const [price, setPrice] = useState(0);
  //Função para fazer o menu e aparecer a mensagem
  function buy() {
    setBuying((buying = true));
    setTimeout(() => {
      setPrice(price - price);
      setBuying((buying = false));
    }, 2000);
  }
  //Pegar os nomes dos produtos e colocar o valor em "Price"
  function handleChange(e) {
    const item = e.target.id;
    switch (item) {
      case "hamburger":
        setPrice(price + 30);
        break;
      case "Chinese":
        setPrice(price + 35);
        break;
      case "Sushi":
        setPrice(price + 40);
        break;
      default:
        null;
        break;
    }
  }
  return (
    <div className="containerProducts">
      {/* Mensagem que aparece de compra */}
      {buying == true ? (
        <div className="buy">
          <h1>Comprou com sucesso!</h1>
        </div>
      ) : null}
      <div className="productMain">
        <img src={FoodImage4} alt="Burgão_Batata" className="imgFull" />
      </div>
      {/* Imagens de baixo */}
      <div className="subProducts" onClick={(e) => handleChange(e)}>
        <div className="items">
          <img
            src={FoodImage1}
            alt="Burgão"
            className="imagePrev"
            id="hamburger"
          />
          <div className="description">
            <h2>
              Hamburger <span>R$ 30</span>
            </h2>
          </div>
        </div>
        <div className="items">
          <img
            src={FoodImage2}
            alt="Comida Chinesa"
            className="imagePrev"
            id="Chinese"
          />
          <div className="description">
            <h2>
              Comida Chinesa <span> R$ 35</span>
            </h2>
          </div>
        </div>
        <div className="items">
          <img src={FoodImage3} alt="Sushi" className="imagePrev" id="Sushi" />
          <div className="description">
            <h2>
              Suchi <span> R$ 40</span>
            </h2>
          </div>
        </div>
      </div>
      {/* O cart aparece somente se o usuario tiver clicado em algum produto */}
      {price > 0 ? (
        <div className="cart">
          <h1>Total: R$ {price}</h1>
          <div className="cartButtons">
            <button onClick={() => buy()}>Comprar?</button>
            <button onClick={() => setPrice(price - price)}>Cancelar</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Products;
