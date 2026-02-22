import { useState } from "react";

import { ImageGallery, ImageModal } from "components";

import styles from "./HomePage.module.css";

const importImages = () => {
  const images = import.meta.glob("../../../readme-img/*.webp", {
    eager: true,
  });
  return Object.keys(images).map((path) => {
    const fileName = path
      .replace("../../../readme-img/", "")
      .replace(".webp", "");
    return {
      src: images[path].default,
      alt: fileName.replace(/-/g, " "),
    };
  });
};

const images = importImages();

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    if (!isModalOpen) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <h1 className={styles.title}>
        Front-End Development with React
      </h1>
      <h2 className={styles.subtitle}>Description</h2>
      <p>
        Hello! This is my final assignment from the course "Front-End
        Development with React". You are on the main page of a multi-user web
        application for convenient storage and work with personal contacts,
        which supports registration, login and update of users using JWT. Please
        register to see the full functionality of my application. To do this,
        you can simply use your personal or temporary email at this link: {' '}
        <a
          className={styles.link}
          href="https://temp-mail.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Temp Mail
        </a>
      </p>
      <ImageGallery images={images} onImageClick={openModal} />
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClickClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};
