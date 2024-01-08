// utils/analytics.js
import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-XXXXXXXXX-Y"); // Replace with your Tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
