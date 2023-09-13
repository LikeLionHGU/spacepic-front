// import React, { useState } from "react";
// import styled from "styled-components";
// import BtnPng from "../imgs/ReloadBtn.png";

// const Btn = styled.div`
//   position: fixed;
//   right: 10px;
//   bottom: 10px;
//   padding: 10px 10px;
//   z-index: 900;
//   cursor: pointer;
// `;
// const Logo = styled.img`
//   width: 90px;
// `;

// const Tooltip = styled.div`
//   position: absolute;
//   bottom: calc(100% + 10px);
//   right: 10px; /* 버튼과 오른쪽 정렬 */
//   background-color: white;
//   color: black;
//   padding: 10px 10px;
//   border-radius: 5px;
//   opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
//   pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
//   transition: opacity 0.3s ease;
// `;

// export default function ReloadBtn() {
//   const [isTooltipVisible, setTooltipVisible] = useState(false);

//   const showTooltip = () => {
//     setTooltipVisible(true);
//   };

//   const hideTooltip = () => {
//     setTooltipVisible(false);
//   };

//   const refreshPage = () => {
//     window.location.reload();
//   };

//   return (
//     <>
//       <Btn
//         onClick={refreshPage}
//         onMouseEnter={showTooltip}
//         onMouseLeave={hideTooltip}
//       >
//         <Logo src={BtnPng} />
//         <Tooltip isVisible={isTooltipVisible}>사진이 새로고침 됩니다!</Tooltip>
//       </Btn>
//     </>
//   );
// }
import React, { useState } from "react";
import styled from "styled-components";
import BtnPng from "../imgs/ReloadBtn.png";

const Btn = styled.div`
  position: fixed;
  right: 5px;
  bottom: 5px;
  padding: 10px 10px;
  z-index: 900;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 90px;
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 3px);
  right: 10px;
  background-color: #4d4d4d;
  color: black;
  padding: 10px 10px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const BalloonTooltip = styled(Tooltip)`
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #4d4d4d;
    bottom: -10px;
    right: calc(20% - 5px);
  }
  width: 174px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  font-weight: 30;
`;

export default function ReloadBtn() {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Btn
        onClick={refreshPage}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <Logo src={BtnPng} />
        <BalloonTooltip isVisible={isTooltipVisible}>
          사진이 새로고침 됩니다!
        </BalloonTooltip>
      </Btn>
    </>
  );
}
