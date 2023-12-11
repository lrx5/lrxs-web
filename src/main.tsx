import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.tsx';
import Nav from './components/Nav.tsx';
import HomePage from './components/HomePage.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import KarzhynWebsite from './components/KarzhynWebsite.tsx';
import FriendsList from './components/FriendsList.tsx';
import Memory from './components/Memory.tsx';
import Caster from './components/Caster.tsx';
import Salad from './components/Salad.tsx';
import NoProject from './components/NoProject.tsx';
import KingTiger from './components/KingTiger.tsx';
import StartUp from './components/StartUp.tsx';
import CafEight from './components/CafEight.tsx';
import MysteryWord from './components/MysteryWord.tsx';
import Rx7 from './components/Rx7.tsx';
import Ingen from './components/Ingen.tsx';
import './index.css';
import './Projects.css';
import './ProjectsBlog.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/lrxs-web/" element={<HomePage />} />
        <Route path="/lrxs-web/about" element={<About />} />
        <Route path="/lrxs-web/contact" element={<Contact />} />
        <Route path="/lrxs-web/karzhyn-website" element={<KarzhynWebsite />} />
        <Route path="/lrxs-web/friends-list-website" element={<FriendsList />} />
        <Route path="/lrxs-web/create-with-clint-double-memory" element={<Memory />} />
        <Route path="/lrxs-web/caster-wheel" element={<Caster />} />
        <Route path="/lrxs-web/salad-kitchen" element={<Salad />} />
        <Route path="/lrxs-web/king-tiger" element={<KingTiger />} />
        <Route path="/lrxs-web/start-up-themed-backgrounds" element={<StartUp />} />
        <Route path="/lrxs-web/cafeight" element={<CafEight />} />
        <Route path="/lrxs-web/mystery-word" element={<MysteryWord />} />
        <Route path="/lrxs-web/rx7-fd" element={<Rx7 />} />
        <Route path="/lrxs-web/ingen" element={<Ingen />} />
        <Route path="/lrxs-web/:NoProject" element={<NoProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

