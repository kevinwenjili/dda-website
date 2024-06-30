interface CardProps {
  img?: string;
  altText?: string;
  refLink?: string;
  city?: string;
  province?: string;
  client?: string;
  children?: string;
  projectTitle?: string;
  projectType?: string;
}

const Card = ({
  img = "public/assets/template.jpg",
  altText,
  refLink = "#",
  city,
  province,
  client,
  projectTitle,
  projectType,
}: CardProps) => {
  return (
    <div className="card" style={{ width: "auto" }}>
      <a href={refLink}>
        <img src={img} className="card-img-top" alt={altText} />
        <div className="card-body">
          <div className="card-title">{projectTitle}</div>
          <div className="card-info">
            <p className="card-text-client">{client}</p>
            <p className="card-text-location">
              {city !== "" ? `${city}, ${province}` : `${province}`}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;

// import { BsFillBagFill } from "react-icons/bs";

// const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
//   return (
//     <>
//       <section className="card">
//         <img src={img} alt={title} className="card-img" />
//         <div className="card-details">
//           <h3 className="card-title">{title}</h3>
//           <section className="card-reviews">
//             {star} {star} {star} {star}
//             <span className="total-reviews">{reviews}</span>
//           </section>
//           <section className="card-price">
//             <div className="price">
//               <del>{prevPrice}</del> {newPrice}
//             </div>
//             <div className="bag">
//               <BsFillBagFill className="bag-icon" />
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Card;
