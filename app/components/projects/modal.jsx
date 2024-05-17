import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegWindowClose } from "react-icons/fa";
import "./modal.css"; // Importing the CSS file

// Import required modules
import Carousel from './Carousel'
import Link from "next/link";


const SpringModal = ({ isOpen, setIsOpen, content }) => {
    if (!content) {
        return null; // Return null if content is null
    }
    const { title, description, techStack, deployment, githubUrl, slides } = content;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="modal-backdrop"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "20deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="modal-content"
                    >
                        <div className="modal-inner-content">
                            <div className="modal-buttons">
                                <FaRegWindowClose size={30} onClick={() => setIsOpen(false)} />
                            </div>
                            <div className="carouselContent">
                                <Carousel data={slides} />
                            </div>
                            <div className="portfolioMainContent">
                                <div className="titleContent">
                                    <h1>{title}</h1>
                                    <div className="wordContent">
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <div className="techStackContent">
                                    <h1>Tech Stack</h1>
                                    <div className="techStack">
                                        {techStack.map((icon, index) => (
                                            <div key={index}>{icon}</div>
                                        ))}
                                    </div>
                                    <div className="linkToWebsite">Deployment:</div>
                                    <Link href={deployment} className="linkToWebsite-underline">{deployment}</Link>
                                    <div className="linkToWebsite">GitHubURL:</div>
                                    <Link href={githubUrl} className="linkToWebsite-underline">{githubUrl}</Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpringModal;