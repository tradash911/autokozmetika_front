import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GalleryFull from "./Components/sections/GalleryFull";
import { getMainCategoriesWithSubcategories } from "./api/services";
import { getSettings } from "./api/settings";
import { getNews } from "./api/news";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 60,
    },
  },
});
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Main isOpen={isOpen} setIsopen={setIsOpen} />}
            ></Route>
            <Route
              path="/galéria"
              element={<GalleryFull isOpen={isOpen} setIsOpen={setIsOpen} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
