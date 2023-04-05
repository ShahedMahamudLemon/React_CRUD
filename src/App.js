import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import TopNav from "./Components/TopNav";
import LoginPage from "./Pages/LoginPage";
import LogoutPage from "./Pages/LogoutPage";
import PostPage from "./Pages/PostPage";
import UpdatePostPage from "./Pages/UpdatePostPage";
function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/home" exact element={<HomePage />}></Route>
        <Route path="/" exact element={<LoginPage />}></Route>
        <Route path="/logout" exact element={<LogoutPage />}></Route>
        <Route path="/post" exact element={<PostPage />}></Route>
        <Route path="/update" exact element={<UpdatePostPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
