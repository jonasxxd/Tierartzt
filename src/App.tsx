/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Diagnostik from './pages/Diagnostik';
import Operationen from './pages/Operationen';
import Zahnmedizin from './pages/Zahnmedizin';
import Vorsorge from './pages/Vorsorge';
import OnlineSprechstunde from './pages/OnlineSprechstunde';
import Notfall from './pages/Notfall';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/diagnostik" element={<Diagnostik />} />
          <Route path="/diagnostik.html" element={<Diagnostik />} />
          <Route path="/operationen" element={<Operationen />} />
          <Route path="/zahnmedizin" element={<Zahnmedizin />} />
          <Route path="/vorsorge" element={<Vorsorge />} />
          <Route path="/online-sprechstunde" element={<OnlineSprechstunde />} />
          <Route path="/notfall" element={<Notfall />} />
        </Routes>
      </Layout>
    </Router>
  );
}
