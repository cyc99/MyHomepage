import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/main";
import GoogleAuthCallback from "./components/login/google_login";
import Login from "./components/login/login";
import KakaoAuthCallback from "./components/login/kakao_login";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="api/v2/google/login/callback"
            element={<GoogleAuthCallback />}
          />
          <Route path="login" element={<Login />} />
          <Route
            path="api/v2/kakao/login/callback"
            element={<KakaoAuthCallback />}
          />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
