import "./App.css";
import Landing from "./pages/landing/components/Landing";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Landing />
      </QueryClientProvider>
    </div>
  );
}

export default App;
