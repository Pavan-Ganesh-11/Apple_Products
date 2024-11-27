import { useState } from "react";
import Popup from "../Popup/Popup";
import "./Laptop.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const LaptopsList = [
  {
    imageUrl:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=055e&w=256&h=207&q=90&m=6&p=48&f=jpg&o=f&aim=true",
    LaptopName: "Surface Pro",
    LaptopPrice: "₹79999",
    LaptopBrand: "Microsoft",
    isFavorite: false,
    LaptopDescription:
      "The most flexible, most powerful 2-in-1 out there. With AI-accelerated Copilot+ experiences and features built to keep you on the go, Surface Pro 11th Edition, a Copilot+ PC, is a laptop reimagined",
  },
  {
    imageUrl:
      "//i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/16-5640/spi/notebook-vostro-16-5640-nt-gray-fpr-compare-800x550-front.png?fmt=png-alpha&wid=800&hei=550",
    LaptopName: "Dell Vastro 16",
    LaptopPrice: "₹66890",
    LaptopBrand: "Dell",
    isFavorite: false,
    LaptopDescription:
      "Boost productivity with the newly designed Vostro 16. Designed with a spacious screen, up to the latest Intel® Core™ processors and blue light reducing technology.",
  },
  {
    imageUrl:
      "//p3-ofp.static.pub//fes/cms/2024/02/05/nb6kggf4me6xss7fvjjp8zno95qk71910280.png",
    LaptopName: "IdeaPad Pro 5 Gen 9 (16, AMD)",
    LaptopPrice: "₹106312",
    LaptopBrand: "Lenovo",
    isFavorite: false,
    LaptopDescription: `16 (40.64cms) laptop with AMD Ryzen™-fueled processing AI efficiency, smart features, & dynamic display Advanced thermal system & long battery life`,
  },
  {
    imageUrl:
      "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08577119_4.png",
    LaptopName: "HP Envy",
    LaptopPrice: "₹117999",
    LaptopBrand: "HP",
    isFavorite: false,
    LaptopDescription:
      "13th Gen Intel® Evo™ platform powered by Intel® Core™ i7 processor Windows 11 Home 39.6 cm (15.6) FHD OLED touchscreen display with Intel® Iris® Xᵉ Graphics 16 GB LPDDR5 RAM 1 TB SSD Solid State Drive Backlit Keyboard, Wide Vision 5MP IR camera, B&O Speakers, Privacy Camera",
  },
  {
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-m3-max-pro-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830118",
    LaptopName: "Apple M3 Pro",
    LaptopPrice: "₹169900.00",
    LaptopBrand: "Apple",
    isFavorite: false,
    LaptopDescription:
      "Apple M3 Pro will provide high quality of performance without any lag with extrodinary XDR Display",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/61YzG9UsKkL._SX679_.jpg",
    LaptopName: "Aspire Vero 16",
    LaptopPrice: "₹71999",
    LaptopBrand: "Acer",
    isFavorite: false,
    LaptopDescription: "Eco-Conscious AI PC ",
  },
];

const Laptops = () => {
  const [laptop, setLaptopName] = useState("");
  const [isFavorite, setFavorite] = useState(false);
  const [boolean, setBoolean] = useState(false);

  console.log(isFavorite);

  const onClickAddToCart = (laptopName) => {
    setLaptopName(laptopName);
    setBoolean(true);
    setTimeout(() => {
      setBoolean(false);
    }, 5000);
  };

  return (
    <div className="laptop-container">
      <h1 className="laptop-heading">Laptops</h1>
      <div className="cards-container">
        {LaptopsList.map((each) => (
          <div className="card">
            <div className="img-container">
              <img
                src={each.imageUrl}
                alt={each.LaptopName}
                className="Laptop-img"
              />
              <button type="button" className="favorite-btn">
                <MdOutlineFavoriteBorder color="#aaa" size={30} />
              </button>
            </div>
            <h1 className="laptop-name">{each.LaptopName}</h1>
            <h1 className="laptop-price">
              Price: <span>{each.LaptopPrice}/-</span>
            </h1>
            <p className="laptop-desc">{each.LaptopDescription}</p>
            <div className="link-btn-container">
              <a href="#" className="view-details-link">
                View Details
              </a>
              <button
                type="button"
                className="add-to-cart-btn"
                onClick={() => onClickAddToCart(each.LaptopName)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Popup laptopName={laptop} booleanValue={boolean} />
    </div>
  );
};

export default Laptops;
