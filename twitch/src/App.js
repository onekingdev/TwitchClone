import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter, Switch } from "react-router-dom";
import StreamList from "./Components/streams/StreamList";
import StreamDelete from "./Components/streams/StreamDelete";
import StreamShow from "./Components/streams/StreamShow";
import StreamEdit from "./Components/streams/StreamEdit";
import StreamCreate from "./Components/streams/StreamCreate";
import Header from "./Components/Header";
import history from "./history";
import axios from "axios";




function App() {
  
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/stream/new" exact element={<StreamCreate />} />
          <Route path="/stream/edit/:id" exact element={<StreamEdit />} />
          <Route path="/stream/delete/:id" exact element={<StreamDelete />} />
          <Route path="/stream/show/:id" exact element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
