"use client";

import { BookOpenText, Brush, Laptop } from "lucide-react";
import styles from "./filterButton.module.css";

const FilterButton = ({ buttonType, onClick, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={
        isSelected ? styles.selectedButtonContainer : styles.buttonContainer
      }
    >
      {buttonType === "ART" ? (
        <Brush size={30} color="#FFF" />
      ) : buttonType === "STORY" ? (
        <BookOpenText size={30} color="#FFF" />
      ) : (
        <Laptop size={30} color="#FFF" />
      )}
      {buttonType}
    </button>
  );
};
export default FilterButton;
