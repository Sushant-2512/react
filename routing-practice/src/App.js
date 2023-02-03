import logo from './logo.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/Layout'
import Home from './component/Home'
import Animation from './component/Animation'
import HOC from './component/HOC'


const ChildComponent= (props) =>
{
      return (<p>
          This is your required child block
      </p>)
}
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" index element={<Home />} />
          <Route path="Animation" element={<Animation />} />
           <Route path="HOC"  element={<HOC ChildComponent={ChildComponent }/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
