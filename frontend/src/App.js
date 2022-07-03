import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from './axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { Row, Col } from 'react-bootstrap';
import About from './screens/AboutScreen';
import Stack from 'react-bootstrap/Stack';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <header>
        <Navbar variant="dark" expand="lg" className="py-4">
          <Container>
            <Col>
              <SearchBox />
            </Col>

            <Col
              xs={5}
              style={{
                width: '100%',
                marginRight: 'unset',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img width={100} src="/images/Logo.png" />
                </Navbar.Brand>
              </LinkContainer>
            </Col>

            <Col>
              <Nav className="me-auto justify-content-end">
                <Link to="/cart" className="nav-link text-dark">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="warning">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown
                    className="rounded-pill"
                    title={userInfo.name}
                    id="basic-nav-dropdown"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item "
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link text-dark" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
            </Col>
          </Container>
        </Navbar>
      </header>
      <div
        className={
          sidebarIsOpen
            ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
            : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
        }
      ></div>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />}></Route>
            <Route
              path="/orderhistory"
              element={<OrderHistoryScreen />}
            ></Route>
            <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
            <Route path="/payment" element={<PaymentMethodScreen />}></Route>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <footer className="page-footer font-small blue pt-3 text-white bg-dark">
        <div className="container-fluid text-center text-md-left">
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div className="col-md-3 mb-md-0 mb-3">
              <Stack gap={3}>
                <div className="">
                  <a className="custom_link" href="/about">
                    About
                  </a>
                </div>
                <div className="">
                  <a className="custom_link " href="#!">
                    FAQ
                  </a>
                </div>
              </Stack>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-2 mt-md-0 mt-3">
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img width={100} src="/images/Logo.png" />
                </Navbar.Brand>
              </LinkContainer>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright : Bagniverse
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
