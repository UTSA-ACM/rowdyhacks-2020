import styled from "styled-components";

const DividerHeader = styled.div`
  width: 100%;
  background-image: linear-gradient(#ffffff, #888888);
  height: 10px;
  opacity: 50%;
  display: parent;
`;

const DividerFooter = styled.img`
  width: 100%;
`;

const DividerContent = styled.div`
  display: parent;
  background: ${props => props.theme.main};
  padding-top: 70px;
`;

const SectionTitle = styled.div`
  font-family: parisplus-std, sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const SectionContent = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: 400;
`;

const Divider = styled.section`
  display: flex;
  flex-direction: column;
`;

export {
  Divider,
  DividerHeader,
  DividerContent,
  DividerFooter,
  SectionTitle,
  SectionContent
};
