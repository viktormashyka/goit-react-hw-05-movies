import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

// import { Outlet } from 'react-router-dom';

// import { Container, Header, Logo, Link } from './SharedLayout.styled';
// // import { Container, Header, Logo, Link } from './App.styled';

// export const SharedLayout = () => {
//   return (
//     <Container>
//       <Header>
//         <Logo>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{' '}
//           GoMerch Store
//         </Logo>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/products">Products</Link>
//         </nav>
//       </Header>
//       <Outlet />
//     </Container>
//   );
// };

//***Suspense та прийом «shared layout»***/

// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// const SharedLayout = () => {
//   return (
//     <Container>
//       <AppBar>
//         <Navigation />
//         <UserMenu />
//       </AppBar>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </Container>
//   );
// };
