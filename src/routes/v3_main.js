import Header from "../components/header";
import React from "react";
import { useNavigate } from "react-router-dom";
import vector from "../img/vectors.png";
import "../routes/v3_main.css"
import logo from "../img/spacepic2.png";
function V3main() {
    return (
        <>
        <Header/>
        
        <div className="topVector">
            <div className="topVectorContainer">
                <img className="topVectorImg" src={vector} alt="vector"></img>
            </div>
            <div>
                <img className="topImage" src={logo} alt="logo"></img>
            </div>
            <div>
                <p id="topPtag">이번 컨셉 주제: 크리스마스와 종강을 기다리는 여러분을 표현해주세요!</p>
            </div>
            <div className="midRanking">
                <div id="Ranking2"><p>2</p></div>
                <div id="Ranking1"><p>1</p></div>
                <div id="Ranking3"><p>3</p></div>
            </div>
        </div>


        </>
        

    )
}

export default V3main;