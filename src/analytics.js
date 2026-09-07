import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-ZQDE5FQW50");
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};