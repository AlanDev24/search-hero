import { Navbar } from "../../ui/components";
import { Route, Routes } from "react-router-dom";
import { Hero, SearchHero, DcPage, MarvelPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchHero />} />
          <Route path="hero/:heroId" element={<Hero />} />
        </Routes>
      </div>
    </>
  );
};
