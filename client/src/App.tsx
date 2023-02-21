import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import AppMain from "./Components/Main/AppMain";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppHeader></AppHeader>
        <AppMain></AppMain>
        <AppFooter></AppFooter>
      </QueryClientProvider>
    </>
  );
}

export default App;
