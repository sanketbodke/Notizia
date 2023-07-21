import "./App.css";
// import News from "./components/News";
import Navbar from "./components/Navbar";
// import LoadingAnimation from "./components/LoadingAnimation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, 
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
       <Navbar />
        {/* <News /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
