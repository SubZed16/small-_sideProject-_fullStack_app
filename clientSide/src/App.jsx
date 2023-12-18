
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './layout'
import { CreatePage, DeleteItemPage, ItemDetail, LandingPage, LoginPage, PatchPage, SeeListOfItems } from './pages'
import RequireLoginAccess from './pages/RequireLoginAccess'


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<RequireLoginAccess />}>
                  <Route index path='welcome' element={<LandingPage />} />
                  <Route path="/dashboard" element={<Layout />}>
                      <Route path="seeitems" element={<SeeListOfItems />} />
                      <Route path="createitem" element={<CreatePage />} />
                      <Route path="patchitem" element={<PatchPage />} />
                      <Route path="deleteitem" element={<DeleteItemPage />} />
                      <Route path="item/:id" element={<ItemDetail />} />
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App
