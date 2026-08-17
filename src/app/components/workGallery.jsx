"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./workGallery.module.css";
import FilterButton from "./filterButton";
import * as projectData from "./projectData.json";

const GALLERY = "gallery";
const PDF = "pdf";
const VIDEO = "video";
const IFRAME = "iframe";

const WorkGallery = () => {
  const [isArtSelected, setIsArtSelected] = useState(false);
  const [isCodeSelected, setIsCodeSelected] = useState(false);
  const [isStorySelected, setIsStorySelected] = useState(false);
  const [currentDisplayedProjects, setCurrentDisplayedProjects] = useState(
    projectData.default.projects,
  );

  const [isProjectModalDisplayed, setIsProjectModalDisplayed] = useState(false);
  const [currentModalDisplayedProject, setCurrentModalDisplayedProject] =
    useState(null);

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

  const displayProject = (idx) => {
    setIsProjectModalDisplayed(true);
    document.body.style.overflow = "hidden";
    setCurrentModalDisplayedProject(currentDisplayedProjects[idx]);
  };

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
                  onClick={() => {
                    displayProject(idx);
                  }}
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
      {isProjectModalDisplayed && (
        <>
          <div
            className={styles.modalOverlay}
            onClick={() => {
              setIsProjectModalDisplayed(false);
              document.body.style.overflow = "unset";
            }}
          />
          <div className={styles.modalContainer}>
            <p
              className={styles.closeButton}
              onClick={() => {
                setIsProjectModalDisplayed(false);
                document.body.style.overflow = "unset";
              }}
            >
              🗙
            </p>
            <h1 className={styles.projectTitle}>
              {currentModalDisplayedProject.title}
              <span className={styles.yearTag}>
                {" "}
                ({currentModalDisplayedProject.date.split("/")[1]})
              </span>
              <div className={styles.mediaContainer}>
                {currentModalDisplayedProject.mediaDisplayType == VIDEO && (
                  <iframe
                    className={styles.mediaVideo}
                    src={currentModalDisplayedProject.projectSource}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                )}
                {currentModalDisplayedProject.mediaDisplayType == IFRAME && (
                  <div
                    style={{
                      position: "relative",
                      width: currentModalDisplayedProject.mediaWidth,
                      height: currentModalDisplayedProject.mediaHeight,
                    }}
                  >
                    <iframe
                      width={currentModalDisplayedProject.mediaWidth}
                      height={currentModalDisplayedProject.mediaHeight}
                      frameBorder="0"
                      className={styles.mediaIframe}
                      src={currentModalDisplayedProject.projectSource}
                    ></iframe>
                    <div className={styles.mediaIframeAlt}>
                      Sorry! This project is not viewable at this screensize.
                      Please use a desktop or visit the link below.
                    </div>
                  </div>
                )}
                {currentModalDisplayedProject.mediaDisplayType == GALLERY && (
                  <div className={styles.mediaGallery}>
                    {/* projectSource type will be an array, if it's one item than it's a single image, if it's more than one, format as a slide show with buttons to navigate */}
                  </div>
                )}
                {currentModalDisplayedProject.mediaDisplayType == PDF && (
                  <iframe
                    frameBorder="0"
                    className={styles.mediaPDF}
                    src={currentModalDisplayedProject.projectSource}
                    type="application/pdf"
                  ></iframe>
                )}
              </div>
            </h1>
          </div>
        </>
      )}
    </div>
  );
};
export default WorkGallery;
