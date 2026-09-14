"use client";
import styles from "./DropdownComponent.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const DropdownComponent = ({ devLog }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onDropdownClick = (e) => {
    console.log(e);
    let dropDownContent = e.target.nextElementSibling;
    if (dropDownContent.style.display == "block") {
      dropDownContent.style.display = "none";
      setIsDropdownOpen(false);
    } else {
      dropDownContent.style.display = "block";
      setIsDropdownOpen(true);
    }
  };

  return (
    <div className={styles.DropdownContainer}>
      <button
        className={styles.dropdownButton}
        onClick={(e) => onDropdownClick(e)}
      >
        {"Dev Log " + devLog.postNumber + ": " + devLog.title}
        {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      <div className={styles.dropdownContent}>
        <h4 className={styles.date}>{devLog.date}</h4>
        {devLog.post.map((postElement, idx) => {
          if (typeof postElement === Array) {
            <Image
              key={"postElem-" + idx}
              className={styles.image}
              src={postElement[0]}
              alt={postElement[1]}
              width={400}
              height={300}
            />;
          } else {
            return (
              <p className={styles.postElems} key={"postElem-" + idx}>
                {postElement}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default DropdownComponent;
