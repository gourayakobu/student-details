import React from "react"

const Lists1 = () => {
  const mobiles = [
    {
      id: 1,
      name: "iPhone 16",
      brand: "Apple",
      price: "₹79,900",
      ram: "8 GB",
      storage: "128 GB",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-M2lgCu1CcrBFRQS0XGpPuQ1MZO3oDkrg5L9YkJ9GSFqaFcSLyaQDL3QfhHl5zaJ49Hl5BUZaTFbiSZXs9FUqodr5ywyL",
    },
    {
      id: 2,
      name: "Samsung Galaxy S25",
      brand: "Samsung",
      price: "₹74,999",
      ram: "12 GB",
      storage: "256 GB",
      image: "https://m.media-amazon.com/images/I/618EclOTSEL.jpg",
    },
    {
      id: 3,
      name: "OnePlus 13",
      brand: "OnePlus",
      price: "₹69,999",
      ram: "12 GB",
      storage: "256 GB",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnqELbS0cLoKaIK7JNLwex-HqCDa_-lVZ_ZegL4UDbBmYzdUI6RP0pUrNutVTalmDWl1ISwTRQKomO14BM4A83S0JWAHunYDaCYItYG0IwlVIOAvUduS4R",
    }
  ];

  return (


    <div className="container">
      {mobiles.map((mobile) => (
        <div className="card" key={mobile.id}>
          <img src={mobile.image} alt={mobile.name} />
          <h2>{mobile.name}</h2>
          <p><b>Brand:</b> {mobile.brand}</p>
          <p><b>Price:</b> {mobile.price}</p>
          <p><b>RAM:</b> {mobile.ram}</p>
          <p><b>Storage:</b> {mobile.storage}</p>

          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );

};

export default Lists1