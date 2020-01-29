import styled from "styled-components";

const MissionContentWrapper = styled.div`
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  width: 100%;
`;

const MissionImageWrapper = styled.img`
  width: 50vw;
  @media (max-width: 800px) {
    width: 90vw;
  }
  height: auto;
`;

const MissionStatementWrapper = styled.div`
  color: #4d4d4d;
  text-align: center;
  width: 40vw;
  padding: 50px;
  @media (max-width: 800px) {
    padding: 20px;
    width: 90vw;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MissionTextWrapper = styled.div`
  font-size: 20px;
  width: 20vw;
  @media (max-width: 800px) {
    width: 90vw;
    font-size: 14px;
  }
  font-weight: 400;
  line-height: 1.35;
`;

const MissionTitleWrapper = styled.div`
  font-size: 55px;
  @media (max-width: 800px) {
    font-size: 36px;
  }
  font-weight: 700;
  margin-bottom: 30px;
`;

export {
  MissionContentWrapper,
  MissionImageWrapper,
  MissionStatementWrapper,
  MissionTitleWrapper,
  MissionTextWrapper
};
