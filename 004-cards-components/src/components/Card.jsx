import { BuyButton } from './BuyButton';
import { Img } from './Img';

export function Card(prop) {
  return (
    <div className="card"
      style={{
        backgroundColor: "rgb(215, 225, 231)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        padding: "4rem",
        margin: "0 auto",
        fontSize: "20px",
        textAlign: "left",
        display: "flex",
        width: "1000px",
        gap: "4rem",  
        
      }}
    >
      <Img />
      <div>
        <h2>{prop.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <BuyButton /> 
      </div>
      

    </div>
  );
}


