import React from "react";
import { NavigateFunction } from "react-router-dom";

interface Props {
  event: React.MouseEvent<HTMLAnchorElement>;
  targetId: string;
  offset: number;
  navigate: NavigateFunction;
}
console.log("handle nav click");


const HandleNavClick = ({ event, targetId, offset, navigate }: Props) => {
  event.preventDefault();

  navigate(`#${targetId}`);
  const element = document.getElementById(targetId);
  if (element) {
    // Get the height of the navbar
    const navbarHeight = document.getElementById("banner")?.clientHeight || 0;

    // Adjust scroll position to account for the navbar after the scrollIntoView animation
    setTimeout(() => {
      const elementRect = element.getBoundingClientRect();
      const offsetPosition = window.scrollY + elementRect.top - navbarHeight;

      window.scrollTo({
        top: offsetPosition - offset,
        behavior: "smooth",
      });
    }, 5); // Adjust timeout duration if needed
  }
  return null;
};

export default HandleNavClick;
