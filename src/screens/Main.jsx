import React, { useState, useEffect } from "react";
import "../styles/css/main.scss";

import { ntfList, ntfData } from "../services/collection";
import DetailModal from "../screens/components/DetailModal";
import QrModal from "../screens/components/QrModal";

import transData from "../config/tranLang";
import { languageState } from "../store/app";
import { useRecoilValue } from "recoil";

function Main() {
  // 카운트 제어
  const dday = new Date("Sep 11,2021,21:00:00"); //디데이
  const now = new Date(); //현재 날짜 가져오기
  const distance = dday.getTime() - now;
  const [d, setD] = useState(0);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);

  // 번역 제어
  const language = useRecoilValue(languageState);

  // 데이터 제어
  const [collectionList, setCollectionList] = useState(null);
  const closed = dday.getMonth() !== now.getMonth() || dday.getDate() < now.getDate() ? true : false;
  // const [soldOut, setSoldOut] =  useState(false);

  // 팝업1 제어
  const [popup1Open, setPopup1Open] = useState(false);
  const [popup1Data, setPopup1Data] = useState(null);

  // 팝업2 제어
  const [popup2Open, setPopup2Open] = useState(false);
  const [popup2Data, setPopup2Data] = useState(null);

  // 코인 리스트 조회
  useEffect(() => {
    (async () => {
      // counter();

      const { data } = await ntfList();
      if (data && data.return_code === 200) setCollectionList(data.response);
    })();
  }, []);

  // 메인 카운트다운
  // eslint-disable-next-line no-unused-vars
  const counter = () => {
    setInterval(function () {
      setD(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setH(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setM(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setS(Math.floor((distance % (1000 * 60)) / 1000));
      if (s < 10) {
        setS("0" + s);
      }
    }, 1000);
  };

  // 코인 세부 정보 조회
  const collectClick = async (nftId) => {
    const { data } = await ntfData(nftId);

    if (data && data.return_code === 200) {
      const detilData = { ...data.response, closed: closed };
      setPopup1Data(detilData);
      setPopup1Open(true);
    }
  };

  // QR 모달 오픈
  const openQrModal = (data) => {
    setPopup1Open(false);
    setPopup2Open(true);
    setPopup2Data(data);
  };

  return (
    //  {/* <p className="countDown">{`${d}Days ${h}:${m}:${s}`}</p> */}

    <div className="main">
      {/* <DetailModal open={true} /> */}

      <div className="contentsWrap">
        <div className="mainContents">
          <div className="iconScroll" />
          <div className="mainImg" />
          <div className="mainInner">
            <div className="mainInnerTop">
              <div className="title">
                Cardano nft
                <br />
                for charity
              </div>
              <div className="text">
                This CNFT is designed to donate to African children.
                <br />
                Own both CNFT and love.
              </div>
            </div>
            <div className="mainInnerBottom">
              <div className="title">Comming Soon</div>
              {/* <div className="counter">
                <div>
                  <span className="days" id="day">
                    {d}
                  </span>
                  <div className="smallText">Days</div>
                </div>
                <div>
                  <span className="hours" id="hour">
                    {h}
                  </span>
                  <div className="smallText">Hours</div>
                </div>
                <div>
                  <span className="minutes" id="minute">
                    {m}
                  </span>
                  <div className="smallText">Minutes</div>
                </div>
                <div>
                  <span className="seconds" id="second">
                    {s}
                  </span>
                  <div className="smallText">Seconds</div>
                </div>
              </div>
              <div className="text">September 11th 12PM (UTC)</div> */}
            </div>
          </div>
        </div>
        <div className="contents content1">
          <div className="wrap">
            <div className="col1">
              <div className="title">
                About
                <br />
                the project
              </div>
            </div>
            <div className="col2">
              <div className="text">
                This project started with Cardanians form South Korea
                <br />
                This project, which started from Korea's representative POOL, is CNFT with the goal of donation.
                <br />
                Each CNFT automatically donates 80% of the purchase price to Save the Children's ADA wallet, excluding
                project operating costs.
                <br />
                <br />
                Representative pool name of Korea (in alphabetical order)
                <br />
                · DINO & GINO
                <br />
                · TERA1 & TERA2
                <br />· KTP
              </div>
            </div>
          </div>
        </div>
        <div className="contents content2">
          <div className="wrap">
            <div className="col1">
              <div className="title titleWhite">
                Donation
                <br />
                status and
                <br />
                monitoringt
              </div>
            </div>
            <div className="col2">
              <div className="text">
                <div className="textBox">
                  Our address will be revealed later.
                  <br />
                  Donations will be made to the public donation address...
                  <br />
                  Check it out in Cardano Explorer.
                  <br />
                  <a href="https://explorer.cardano.org/" target="_blank" rel="noreferrer">
                    https://explorer.cardano.org/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contents content3">
          <div className="wrap">
            <div className="col3">
              <div className="title">
                CNFT
                <br />
                for Charity
              </div>
            </div>
            <div className="col4">
              <div className="collection">
                <div className="collectionImg">
                  {/* <div className="soldOut"></div>
                  <div className="closed" style={{ display: "block" }}></div> */}
                  <img src="/img/gold.png" alt="Gold" />
                </div>
                <div className="text bold">Gold</div>
              </div>
            </div>
            <div className="col4">
              <div className="collection">
                <div className="collectionImg">
                  {/* <div className="soldOut" style={{ display: "block" }}></div>
                  <div className="closed"></div> */}
                  <img src="/img/silver.png" alt="Silver" />
                </div>
                <div className="text bold">Silver</div>
              </div>
            </div>
            <div className="col4">
              <div className="collection">
                <div className="collectionImg">
                  <div className="soldOut"></div>
                  <div className="closed"></div>
                  <img src="/img/bronze.png" alt="Bronze" />
                </div>
                <div className="text bold">Bronze</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
