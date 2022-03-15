import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdmissionEnquiryList from "../src/Pages/AdmissionEnquiry/AdmissionEnquiryList"
import VisitorBook from "./Pages/VisitorBook/VisitorBook";
import PhoneCallLog from "./Pages/PhoneCallLog/PhoneCallLog";
import PostalDispatch from "./Pages/PostalDispatch/PostalDispatch";
import PostalReceive from "./Pages/PostalReceive/PostalReceive";
import Complain from "./Pages/Complain/Complain";
import SetupFrontOffice from "./Pages/SetupFrontOffice/SetupFrontOffice";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import TodayComplain from "./Pages/AdmissionEnquiry/TodayComplain";
import MasterDashboard from "./FoodiesPages/MasterDashboard/MasterDashboard";
import Dispatcher from "./FoodiesPages/Dispatcher/Dispatcher";
import Dispute from "./FoodiesPages/Dispute/Dispute";
import DisputeManager from "./FoodiesPages/DisputeManager/DisputeManager";
import RestaurantManagement from "./FoodiesPages/RestaurantManagement/RestaurantManagement";
import UserManagement from "./FoodiesPages/UserManagement/UserManagement";
import DeliveryExecutiveManagement from "./FoodiesPages/DeliveryExecutiveManagement/DeliveryExecutiveManagement";
import CategoryManagement from "./FoodiesPages/CategoryManagement/CategoryManagement"
import RestaurantManagementList from "./FoodiesPages/RestaurantManagement/RestaurantManagementList"
import MenuManagement from "./FoodiesPages/MenuManagement/MenuManagement";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
         <Route exact path="/master-dashboard" element={<MasterDashboard />} />
        <Route exact path="/dispatcher" element={<Dispatcher />} />
        <Route exact path="/dispute" element={<Dispute />} />
        <Route exact path="/dispute-manager" element={<DisputeManager />} />
        <Route exact path="/restaurant-management" element={<RestaurantManagement />} />
        <Route exact path="/user-management" element={<UserManagement />} />
        <Route exact path="/deliver-executive-management" element={<DeliveryExecutiveManagement />} />
        <Route exact path="/category-management" element={<CategoryManagement />} />
        <Route exact path="/restaurant-managementList" element={<RestaurantManagementList />} />
        {/* <Route exact path="/menu-management" element={<MenuManagement />} /> */}
        

      </Routes>
    </>
  );
}

export default App;
