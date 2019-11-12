/**
 * @file
 * Entry point for UK political utilities
 */

import removeAccents from "remove-accents";

export const getPartyInfo = name => {
  const sanitisedName = removeAccents(name.toUpperCase().replace(/\s/g, ""));
  switch (sanitisedName) {
    case "CONSERVATIVE":
      return {
        color: "#149adb",
        whiteOverlayOpacity: 0.2,
        shortName: "Con",
        formattedName: "Conservative",
        adjective: "Conservative party"
      };
    case "LABOUR":
      return {
        color: "#cf4d3c",
        whiteOverlayOpacity: 0.2,
        shortName: "Lab",
        formattedName: "Labour",
        adjective: "Labour party"
      };
    case "LIBERALDEMOCRATS":
      return {
        color: "#f09000",
        whiteOverlayOpacity: 0.2,
        shortName: "Lib Dem",
        formattedName: "Liberal Democrats",
        adjective: "Liberal Democrat"
      };
    case "GREEN":
      return {
        color: "#8deb9d",
        whiteOverlayOpacity: 0.3,
        shortName: "Green",
        formattedName: "Green",
        adjective: "Green party"
      };
    case "CHANGEUK":
      return {
        color: "#fc8b9d",
        whiteOverlayOpacity: 0.3,
        shortName: "TIGfC",
        formattedName: "Independent Group for Change",
        adjective: "Independent Group for Change"
      };
    case "BREXIT":
      return {
        color: "#80cfd6",
        whiteOverlayOpacity: 0.3,
        shortName: "Brexit",
        formattedName: "Brexit",
        adjective: "Brexit party"
      };
    case "UKIP":
      return {
        color: "#7200ab",
        whiteOverlayOpacity: 0.3,
        shortName: "Ukip",
        formattedName: "Ukip",
        adjective: "Ukip"
      };
    case "PLAIDCYMRU":
      return {
        color: "#990000",
        whiteOverlayOpacity: 0.3,
        shortName: "PC",
        formattedName: "Plaid Cymru",
        adjective: "Plaid Cymru"
      };
    case "SNP":
      return {
        color: "#ffdf00",
        whiteOverlayOpacity: 0,
        shortName: "SNP",
        formattedName: "Scottish National party",
        adjective: "Scottish National party"
      };
    case "SINNFEIN":
      return {
        color: "#006643",
        whiteOverlayOpacity: 0.3,
        shortName: "SF",
        formattedName: "Sinn Féin",
        adjective: "Sinn Féin"
      };
    case "DUP":
      return {
        color: "#210066",
        whiteOverlayOpacity: 0.5,
        shortName: "DUP",
        formattedName: "Democratic Unionist party",
        adjective: "Democratic Unionist party"
      };
    case "UUP":
      return {
        color: "#3f67cc",
        whiteOverlayOpacity: 0.3,
        shortName: "UUP",
        formattedName: "Ulster Unionist party",
        adjective: "Ulster Unionist party"
      };
    case "SDLP":
      return {
        color: "#5ba373",
        whiteOverlayOpacity: 0.3,
        shortName: "SDLP",
        formattedName: "Social Democratic and Labour party",
        adjective: "Social Democratic and Labour party"
      };
    case "ALLIANCE":
      return {
        color: "#ffbe18",
        whiteOverlayOpacity: 0.3,
        shortName: "APNI",
        formattedName: "Alliance party",
        adjective: "Alliance party"
      };
    case "INDEPENDENT/OTHER":
    case "INDEPENDENT":
    case "OTHER":
      return {
        color: "#d9cace",
        whiteOverlayOpacity: 0.3,
        shortName: "Ind",
        formattedName: "Independent",
        adjective: "Independent"
      };
    case "OTHERS":
      return {
        color: "#ffffff",
        whiteOverlayOpacity: 0.3,
        shortName: "Others",
        formattedName: "Others",
        adjective: "Other"
      };
    default:
      throw new Error(`No party match found for ${name}`);
  }
};

export default null;
