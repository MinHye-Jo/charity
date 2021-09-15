import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/css/style.css";
import { languageState } from "../../store/app";
import { useRecoilState } from "recoil";

function Header() {
  // 서브메뉴 제어
  const [subOpen, setSubOpen] = useState(false);

  const [language, setLanguage] = useRecoilState(languageState);

  return (
    <header className="headerWrap">
      <div className="headerInner">
        <div className="logo">
          <h1>
            <a href="/">
              <div className="logoImg"></div>
              <div className="logoText">
                Save The Children <span>CNFT</span>
              </div>
            </a>
          </h1>
        </div>
        <div className="headerRight">
          <div className="lnb pcNav">
            <div className="sns twitter">
              <a href="https://twitter.com/KmonsterCNFT" target="_blank" rel="noreferrer"></a>
            </div>
            <div className="sns gmail">
              <a href="mailto:cardanocomm@gmail.com" target="_blank" rel="noreferrer"></a>
            </div>
            <div className="guide">
              <Link to="/" className="guide">
                <div className="iconGuide"></div>Guide
              </Link>
            </div>
          </div>
          <div className="moNav">
            <button className="iconMenu"></button>
            <div className="moMenu">
              <button className="iconClose"></button>
              <div className="lnb">
                <div className="sns twitter">
                  <a href="https://twitter.com/KmonsterCNFT" target="_blank" rel="noreferrer"></a>
                </div>
                <div className="sns gmail">
                  <a href="mailto:cardanocomm@gmail.com" target="_blank" rel="noreferrer"></a>
                </div>
                <div className="guide">
                  <Link to="/" className="guide">
                    <div className="iconGuide"></div>Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
