import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserOdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutesComponent/>}>
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="/user/my-orders" element={<UserOdersPage />} />
        <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
        <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
        </Route>
        <Route path="*" element="Page not exists 404" />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

