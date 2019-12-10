/**
 * @file
 * Entry point for UK political utilities
 */

import removeAccents from "remove-accents";

export const parties = {
  CON: {
    color: "#149adb",
    socialColor: "#0095E8",
    textColor: "white",
    whiteOverlayOpacity: 0.2,
    shortName: "Con",
    formattedName: "Conservative",
    adjective: "Conservative party"
  },
  LAB: {
    color: "#cf4d3c",
    socialColor: "#FF634D",
    textColor: "white",
    whiteOverlayOpacity: 0.2,
    shortName: "Lab",
    formattedName: "Labour",
    adjective: "Labour party"
  },
  LIBDEM: {
    color: "#f09000",
    socialColor: "#FFAD36",
    textColor: "black",
    whiteOverlayOpacity: 0.2,
    shortName: "Lib Dem",
    formattedName: "Liberal Democrats",
    adjective: "Liberal Democrat"
  },
  GREEN: {
    color: "#8deb9d",
    socialColor: "#80FF96",
    textColor: "black",
    whiteOverlayOpacity: 0.3,
    shortName: "Green",
    formattedName: "Green",
    adjective: "Green party"
  },
  TIGFC: {
    color: "#fc8b9d",
    socialColor: "#FCBDC7",
    textColor: "black",
    whiteOverlayOpacity: 0.3,
    shortName: "TIGfC",
    formattedName: "Independent Group for Change",
    adjective: "Independent Group for Change"
  },
  BREXIT: {
    color: "#80cfd6",
    socialColor: "#00bfbc",
    textColor: "black",
    whiteOverlayOpacity: 0.3,
    shortName: "Brexit",
    formattedName: "Brexit party",
    adjective: "Brexit party"
  },
  UKIP: {
    color: "#7200ab",
    socialColor: "#7F00D9",
    textColor: "white",
    whiteOverlayOpacity: 0.3,
    shortName: "Ukip",
    formattedName: "Ukip",
    adjective: "Ukip"
  },
  PC: {
    color: "#990000",
    socialColor: "#B30000",
    textColor: "white",
    whiteOverlayOpacity: 0.3,
    shortName: "PC",
    formattedName: "Plaid Cymru",
    adjective: "Plaid Cymru"
  },
  SNP: {
    color: "#ffdf00",
    socialColor: "#FFF8AB",
    textColor: "black",
    whiteOverlayOpacity: 0,
    shortName: "SNP",
    formattedName: "Scottish National party",
    adjective: "Scottish National party"
  },
  SF: {
    color: "#006643",
    socialColor: "#006643",
    textColor: "white",
    whiteOverlayOpacity: 0.3,
    shortName: "SF",
    formattedName: "Sinn Féin",
    adjective: "Sinn Féin"
  },
  DUP: {
    color: "#210066",
    socialColor: "#4B28B0",
    textColor: "white",
    whiteOverlayOpacity: 0.5,
    shortName: "DUP",
    formattedName: "Democratic Unionist party",
    adjective: "Democratic Unionist party"
  },
  UUP: {
    color: "#3f67cc",
    socialColor: "#195EF7",
    textColor: "white",
    whiteOverlayOpacity: 0.3,
    shortName: "UUP",
    formattedName: "Ulster Unionist party",
    adjective: "Ulster Unionist party"
  },
  SDLP: {
    color: "#5ba373",
    socialColor: "#007D51",
    textColor: "black",
    whiteOverlayOpacity: 0.3,
    shortName: "SDLP",
    formattedName: "Social Democratic and Labour party",
    adjective: "Social Democratic and Labour party"
  },
  APNI: {
    color: "#ffbe18",
    socialColor: "#FACD5D",
    textColor: "black",
    whiteOverlayOpacity: 0.3,
    shortName: "APNI",
    formattedName: "Alliance party",
    adjective: "Alliance party"
  },
  SPEAKER: {
    color: "#ffffff",
    socialColor: "#ffffff",
    textColor: "black",
    whiteOverlayOpacity: 1,
    shortName: "Speaker",
    formattedName: "Speaker",
    adjective: "Speaker"
  },
  IND: {
    color: "#d9cace",
    socialColor: "#E0D9D5",
    textColor: "black",
    whiteOverlayOpacity: 0.3,
    shortName: "Ind",
    formattedName: "Independent",
    adjective: "Independent"
  },
  OTHERS: {
    color: "#ffffff",
    socialColor: "#ffffff",
    textColor: "black",
    whiteOverlayOpacity: 0.3,
    shortName: "Others",
    formattedName: "Others",
    adjective: "Other"
  }
};

export const partiesArray = Object.entries(parties).map(([key, d]) => ({
  key,
  ...d
}));

export const getPartyInfo = name => {
  const sanitisedName = removeAccents(name.toUpperCase().replace(/\s/g, ""));
  switch (sanitisedName) {
    case "CONSERVATIVE":
    case "CONSERVATIVES":
    case "TORIES":
    case "CON":
      return parties.CON;
    case "LABOUR":
    case "LAB":
      return parties.LAB;
    case "LIBERALDEMOCRATS":
    case "LIBERALDEMOCRAT":
    case "LIBDEM":
    case "LIBDEMS":
    case "LD":
      return parties.LIBDEM;
    case "GREEN":
    case "GREENS":
      return parties.GREEN;
    case "INDEPENDENTGROUPFORCHANGE":
    case "CHANGEUK":
    case "CHANGE":
    case "TIGFC":
      return parties.TIGFC;
    case "BREXIT":
    case "BREXITPARTY":
      return parties.BREXIT;
    case "UKIP":
      return parties.UKIP;
    case "PLAIDCYMRU":
    case "PC":
      return parties.PC;
    case "SNP":
    case "SCOTTISHNATIONALPARTY":
      return parties.SNP;
    case "SINNFEIN":
    case "SF":
      return parties.SF;
    case "DUP":
    case "DEMOCRATICUNIONISTPARTY":
      return parties.DUP;
    case "UUP":
    case "ULSTERUNIONISTPARTY":
      return parties.UUP;
    case "SDLP":
    case "SOCIALDEMOCRATICANDLABOURPARTY":
    case "SOCIALDEMOCRATICLABOURPARTY":
      return parties.SDLP;
    case "ALLIANCE":
    case "APNI":
      return parties.APNI;
    case "THESPEAKER":
    case "SPEAKER":
      return parties.SPEAKER;
    case "INDEPENDENT/OTHER":
    case "INDEPENDENT":
    case "OTHER":
    case "IND":
      return parties.IND;
    case "OTHERS":
      return parties.OTHERS;
    default:
      if (sanitisedName.includes("INDEPENDENT")) {
        return parties.IND;
      }
      throw new Error(`No party match found for ${name}`);
  }
};

export default null;
