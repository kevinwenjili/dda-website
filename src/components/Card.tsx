interface CardProps {
  img?: string;
  altText?: string;
  refLink?: string;
  city?: string;
  province?: string;
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
  projectTitle,
  projectType,
}: CardProps) => {
  return (
    <div className="card" style={{ width: "auto" }}>
      <a href={refLink}>
      <img src={img} className="card-img-top" alt={altText} />
        <div className="card-body">
          <p className="card-title">{projectTitle}</p>
          <p className="card-text">
            {city}, {province}
          </p>
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
