"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./workGallery.module.css";
import FilterButton from "./filterButton";
import * as projectData from "./projectData.json";

const WorkGallery = () => {
  const [isArtSelected, setIsArtSelected] = useState(false);
  const [isCodeSelected, setIsCodeSelected] = useState(false);
  const [isStorySelected, setIsStorySelected] = useState(false);
  const [currentDisplayedProjects, setCurrentDisplayedProjects] = useState(
    projectData.default.projects,
  );

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const filterProjects = () => {
      setCurrentDisplayedProjects(
        currentDisplayedProjects.map((project) => {
          if (isArtSelected && !project.tag.includes("art")) {
            project.show = false;
            return project;
          }
          if (isCodeSelected && !project.tag.includes("code")) {
            project.show = false;
            return project;
          }
          if (isStorySelected && !project.tag.includes("story")) {
            project.show = false;
            return project;
          }
          project.show = true;
          return project;
        }),
      );
    };
    filterProjects();
  }, [isArtSelected, isCodeSelected, isStorySelected]);

  return (
    <div id="work" className={styles.galleryContainer}>
      <h1>CHECK OUT SOME OF MY WORK</h1>
      <div className={styles.filterContainer}>
        <FilterButton
          buttonType="ART"
          onClick={() => {
            setIsArtSelected(!isArtSelected);
          }}
          isSelected={isArtSelected}
        />
        <FilterButton
          buttonType="CODE"
          onClick={() => {
            setIsCodeSelected(!isCodeSelected);
          }}
          isSelected={isCodeSelected}
        />
        <FilterButton
          buttonType="STORY"
          onClick={() => {
            setIsStorySelected(!isStorySelected);
          }}
          isSelected={isStorySelected}
        />
      </div>
      <div className={styles.galleryDisplay}>
        {currentDisplayedProjects.map((project, idx) => {
          return project.show
            ? project.thumbNailImagePath && (
                <Image
                  key={"project" + idx}
                  className={styles.projectThumbnail}
                  src={project.thumbNailImagePath}
                  alt={project.thumbNailAlt}
                  width={400}
                  height={300}
                />
              )
            : null;
        })}
        {((isCodeSelected && isStorySelected) ||
          (isArtSelected && isCodeSelected && isStorySelected)) && (
          <div className={styles.testProject}>
            No project with that combo yet!
          </div>
        )}
      </div>
    </div>
  );
};
export default WorkGallery;
