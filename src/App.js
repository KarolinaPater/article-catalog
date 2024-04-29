import "./style/reset.scss";
import "./style/variables.scss";
import Layout from "./layout/Layout.js";
import AppProvider from "./AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Layout />
      </AppProvider>
    </div>
  );
}

export default App;
