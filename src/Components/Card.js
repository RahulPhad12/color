import React from "react";

function Card({ colorName, color_code }) {
  return (
    <>
        <div className="display">
          <p
            style={{
              height: 240,
              width: 180,
              backgroundColor: `${color_code}`,
            }}
          ></p>
          <p className="text">{color_code}</p>
          <p className="text" style={{ color: `${color_code}`, fontSize: 12 }}>
            {colorName}
          </p>
        </div>
    </>
  );
}

export default Card;
