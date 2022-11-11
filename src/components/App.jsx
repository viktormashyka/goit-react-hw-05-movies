// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout';

// const About = lazy(() => import('../pages/About'));
// const Home = lazy(() => import('../pages/Home'));
// const ProductDetails = lazy(() => import('../pages/ProductDetails'));
// const Products = lazy(() => import('../pages/Products'));
// const Mission = lazy(() => import('./Mission'));
// const Team = lazy(() => import('./Team'));
// const Reviews = lazy(() => import('./Reviews'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="products" element={<Products />} />
//         <Route path="products/:id" element={<ProductDetails />} />
//       </Route>
//     </Routes>
//   );
// };

import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { ProductDetails } from '../pages/ProductDetails';
import { Products } from '../pages/Products';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

//***Suspense та прийом «shared layout»***/

// import { lazy } from 'react';

// const MyComponent = lazy(() => import('path/to/MyComponent'));

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route path="some-path" element={<MyComponent />} />
//         {/* Інші маршрути */}
//       </Route>
//     </Routes>
//   );
// };

//***React.lazy() та React.Suspense***//

// import { HiArrowLeft } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const StyledLink = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   padding: 8px 0;
//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   text-transform: uppercase;

//   :hover {
//     color: orangered;
//   }
// `;

// export const BackLink = ({ to, children }) => {
//   return (
//     <StyledLink to={to}>
//       <HiArrowLeft size="24" />
//       {children}
//     </StyledLink>
//   );
// };

//***Хук useSearchParams***//

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const username = searchParams.get('username');

//   useEffect(() => {
//     // Тут виконуємо асинхронну операцію,
//     // наприклад HTTP-запит за інформацією про користувача
//     if (username === '') return;

//     async function fetchUser() {
//       const user = await FakeAPI.getUser(username);
//       setUser(user);
//     }

//     fetchUser();
//   }, [username]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ username: form.elements.username.value });
//     form.reset();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" />
//         <button type="submit">Search</button>
//       </form>
//       {user && <UserInfo user={user} />}
//     </>
//   );
// };

// ***Хук useLocation***//

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Analytics from 'path/to/analytics-service';

// const App = () => {
//   const location = useLocation();

//   useEffect(() => {
//     Analytics.send(location);
//   }, [location]);

//   return <div>...</div>;
// };
