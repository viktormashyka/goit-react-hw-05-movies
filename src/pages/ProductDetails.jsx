import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { getProductById } from '../fakeAPI';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Product - {product.name} - {id}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};

export default ProductDetails;

// import { useParams } from 'react-router-dom';
// import { getProductById } from '../fakeAPI';

// export const ProductDetails = () => {
//   const { id } = useParams();
//   const product = getProductById(id);
//   return (
//     <main>
//       <img src="https://via.placeholder.com/960x240" alt="" />
//       <div>
//         <h2>
//           Product - {product.name} - {id}
//         </h2>
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
//           sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
//           a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
//           atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
//           praesentium ipsum quos unde voluptatum?
//         </p>
//       </div>
//     </main>
//   );
// };

//***location.state***//

// const ProductDetails = () => {
//   const location = useLocation();
//   console.log(location.state);

//   // /products -> products/h-1
//   // { from: { pathname: "/products", search: "" } }

//   // /products?name=hoodie -> products/h-1
//   // { from: { pathname: "/products", search: "?name=hoodie" } }

//   return <Link to={location.state.from}>Back to products</Link>;
// };

// const ProductDetails = () => {
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? '/products';

//   return <Link to={backLinkHref}>Back to products</Link>;
// };
