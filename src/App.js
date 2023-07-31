import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
