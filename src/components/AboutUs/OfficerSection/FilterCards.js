import React, { useState } from "react";
import styled from "styled-components"
import SectionTitle from "../../BigSectionTitle";
import ExecBoardCards from "./ExecBoardCards"

const FilterContainer = styled.div`
  z-index: 1;
  display: flex;
  height: 100%;
  justify-content: center;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`

const FilterItem = styled.div`
  font-family: 'Bebas Neue', cursive;
  font-size : 23px;
  text-decoration: none;
  color: #414142;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  margin-top: 10px;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #414142;
    height: 0.004rem;
  }

  :hover {
    cursor: pointer;
    color: #414142;
    ::after {
      width: 100%;
  }
`
const clicked = {
  display: "inline-block",
  content: ".",
  background: "transparent",
  borderBottom: "1px solid #414142"
};

function FilterCards() {
  const [component, setComponent] = useState(null);
  const [selectedSomethingElse, setSelectedSomethingElse] = useState(false);
  const [isExec, setIsExec] = useState(true);
  const [isProj, setIsProj] = useState(false);
  const [isBoot, setIsBoot] = useState(false);
  const [isOc, setIsOc] = useState(false);
  const [isRnd, setIsRnd] = useState(false);
  const [isFound, setIsFound] = useState(false);

  const LoadComponent = async location => {
    const { default: component } = await import(`./${location}`);
    setComponent(component);
    setSelectedSomethingElse(true);
    if (location === "ExecBoardCards") { setIsExec(true); setIsProj(false); setIsBoot(false); setIsOc(false); setIsRnd(false); setIsFound(false); }
    if (location === "ProjectCards") { setIsExec(false); setIsProj(true); setIsBoot(false); setIsOc(false); setIsRnd(false); setIsFound(false); }
    if (location === "BootcampCards") { setIsExec(false); setIsProj(false); setIsBoot(true); setIsOc(false); setIsRnd(false); setIsFound(false); }
    if (location === "OnlineCourseCards") { setIsExec(false); setIsProj(false); setIsBoot(false); setIsOc(true); setIsRnd(false); setIsFound(false); }
    if (location === "RNDCards") { setIsExec(false); setIsProj(false); setIsBoot(false); setIsOc(false); setIsRnd(true); setIsFound(false); }
    if (location === "FounderCards") { setIsExec(false); setIsProj(false); setIsBoot(false); setIsOc(false); setIsRnd(false); setIsFound(true); }
  };

  return (
    <>
        <SectionTitle title="Our Officers"></SectionTitle>
        <FilterContainer>
            <FilterItem style={isExec ? clicked : null} onClick={() => LoadComponent("ExecBoardCards")}>Executive Board</FilterItem>
            <FilterItem style={isProj ? clicked : null} onClick={() => LoadComponent("ProjectCards")}>Projects</FilterItem>
            <FilterItem style={isBoot ? clicked : null} onClick={() => LoadComponent("BootcampCards")}>Bootcamp</FilterItem>
            <FilterItem style={isOc ? clicked : null} onClick={() => LoadComponent("OnlineCourseCards")}>Online Course</FilterItem>
            <FilterItem style={isRnd ? clicked : null} onClick={() => LoadComponent("RNDCards")}>Research & Development</FilterItem>
            <FilterItem style={isFound ? clicked : null} onClick={() => LoadComponent("FounderCards")}>Founders</FilterItem>
        </FilterContainer>
        {selectedSomethingElse ? component : <ExecBoardCards/>}
    </>
  );
}

export default FilterCards;