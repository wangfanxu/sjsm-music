import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Draw from "./routes/draw/draw.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* <Route index element={<Home />}></Route> */}
        <Route index element={<Draw />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/auth" element={<Authentication />}></Route>
        <Route path="/draw" element={<Draw />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
