import { Route, Routes } from "react-router-dom";
import {Moviedetails, Movielist, Pagenotfound, Search, } from "../pages";
import {RateMovie} from "../pages/RateMovie";

const AllRoutes = () => {
  return <>
  <Routes>
       <Route path="/" element={<Movielist title="Your Guide to Great Movies" apiPath="movie/now_playing"/>} />
       <Route path="movies/popular" element={<Movielist title="Popular Movies" apiPath="movie/popular"/>} />
       <Route path="movies/top" element={<Movielist title="Top Rated Movies" apiPath="movie/top_rated"/>} />
       <Route path="movies/upcoming" element={<Movielist title="Upcoming Movies" apiPath="movie/upcoming"/>} />
       <Route path="movie/:id" element={<Moviedetails/>} />
       <Route path="/rate/:id" element={<RateMovie />} />
       <Route path="search" element={<Search apiPath="search/movie" />} />
       <Route path="*" element={<Pagenotfound/>} title="page not found" />
  </Routes>
  </>;
    
  
};

export default AllRoutes