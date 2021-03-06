import React from "react";
import SectionBlock from "../../components/SectionDividers/SectionBlock";
import {
  GoldPartnerImage,
  SilverPartnerImage,
  BronzePartnerImage,
  OtherPartnerImage,
  PartnerContentWrapper,
  PartnerTitleWrapper,
  GoldPartnerContainer,
  SilverPartnerContainer,
  BronzePartnerContainer,
  OtherPartnerContainer
} from "./PartnerStyle";

function PartnerSection() {
  return (
    <SectionBlock sectionNumber={4} id="partners">
      {{
        content: PartnerContent
      }}
    </SectionBlock>
  );
}

const goldPartners = [
  { name: "FrostBank", link: "https://www.frostbank.com/" },
  { name: "ManTech", link: "https://www.mantech.com/", paddingTop: 30 },
  { name: "TechData", link: "https://www.techdata.com/", paddingTop: 30 },
  { name: "AFCS", link: "http://www.afciviliancareers.com/" },
  { name: "iHeartMedia", link: "https://www.iheartmedia.com/", paddingTop: 30 }
];

const silverPartners = [
  { name: "Accenture", link: "https://www.accenture.com/us-en" },
  { name: "UTSA_CS", link: "https://cs.utsa.edu/" },
  {
    name: "Google",
    link: "https://careers.google.com/students/"
  }
];

const bronzePartners = [
  {
    name: "CivTechSA",
    fileType: "png",
    link: "https://www.civtech-sa.com/",
    bgColor: "#ffffff"
  },
  {
    name: "Facebook",
    fileType: "png",
    link: "https://www.facebook.com/",
    bgColor: "#ffffff"
  },
  {
    name: "UTSA_COS",
    fileType: "png",
    link: "https://www.utsa.edu/sciences/",
    bgColor: "#ffffff"
  },
  {
    name: "Valero",
    fileType: "png",
    link: "https://www.valero.com/en-us",
    bgColor: "#ffffff"
  },
  {
    name: "Webhead",
    fileType: "png",
    link: "https://www.webheadtech.com/",
    bgColor: "#ffffff"
  },
  {
    name: "Posh",
    fileType: "png",
    link: "https://www.dawnzer.po.sh",
    bgColor: "#ffffff"
  },
  {
    name: "UTSA_SDS",
    fileType: "png",
    link: "https://provost.utsa.edu/sds/",
    bgColor: "#212529"
  },
  {
    name: "UTSA_Research",
    fileType: "png",
    link:
      "https://www.utsa.edu/president/organization/vp-search/VPREDKE-Search.html",
    bgColor: "#ffffff"
  },
  {
    name: "NSA",
    fileType: "png",
    link: "https://www.nsa.gov/",
    bgColor: "#ffffff"
  }
];

const otherPartners = [{ name: "MLH", link: "https://mlh.io/" }];

const PartnerContent: React.FC = () => {
  return (
    <PartnerContentWrapper>
      <PartnerTitleWrapper>OUR PARTNERS</PartnerTitleWrapper>
      <GoldPartnerSection />
      <SilverPartnerSection />
      <BronzePartnerSection />
      <OtherPartnerSection />
    </PartnerContentWrapper>
  );
};

const GoldPartnerSection: React.FC = () => {
  return (
    <GoldPartnerContainer>
      {goldPartners.map(partner => {
        const { name, link } = partner;
        const padding =
          partner.paddingTop === undefined ? 0 : partner.paddingTop;
        return (
          <a href={link} key={name + "-partner"}>
            <div>
              <GoldPartnerImage
                key={name + "Image"}
                src={require("../../static/PartnerLogos/" + name + ".png")}
                alt={name}
                theme={{ padding: padding }}
              />
            </div>
          </a>
        );
      })}
    </GoldPartnerContainer>
  );
};

const SilverPartnerSection: React.FC = () => {
  return (
    <SilverPartnerContainer>
      {silverPartners.map(partner => {
        const { name, link } = partner;
        return (
          <a href={link} key={name + "-partner"}>
            <div>
              <SilverPartnerImage
                key={name + "Image"}
                src={require("../../static/PartnerLogos/" + name + ".png")}
                alt={name}
              />
            </div>
          </a>
        );
      })}
    </SilverPartnerContainer>
  );
};

const BronzePartnerSection: React.FC = () => {
  return (
    <BronzePartnerContainer>
      {bronzePartners.map(partner => {
        const { name, fileType, link, bgColor } = partner;
        return (
          <a
            href={link}
            style={{ minWidth: "120px", margin: "0px 15px" }}
            key={name + "-partner"}
          >
            <div>
              <BronzePartnerImage
                key={name + "Image"}
                src={require("../../static/PartnerLogos/" +
                  name +
                  "." +
                  fileType)}
                alt={name}
                theme={{ backgroundColor: bgColor }}
              />
            </div>
          </a>
        );
      })}
    </BronzePartnerContainer>
  );
};

const OtherPartnerSection: React.FC = () => {
  return (
    <OtherPartnerContainer>
      {otherPartners.map(partner => {
        const { name, link } = partner;
        return (
          <a href={link} key={name + "-partner"}>
            <div>
              <OtherPartnerImage
                key={name + "Image"}
                src={require("../../static/PartnerLogos/" + name + ".jpg")}
                alt={name}
              />
            </div>
          </a>
        );
      })}
    </OtherPartnerContainer>
  );
};

export default PartnerSection;
