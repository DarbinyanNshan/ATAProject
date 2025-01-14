import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../i18n/LanguageSwitcher";

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const { t } = useTranslation();
    const navRef = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const onHome= () => {
            navigate('/');
    
    };

    return (
        <>
            <nav ref={navRef} className={`navbar ${isFixed ? "fixed" : ""}`}>
                <div className="logo" onClick={onHome}>
                    <h1>ATS</h1>
                    <h6>Armenian Thyroid Association</h6>
                </div>
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    {isOpen && (
                        <div className="close-icon" onClick={() => setIsOpen(false)}>
                            <IoClose />
                        </div>
                    )}
                    <NavLink to="/activities" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.activities')}</NavLink>
                    <NavLink to="/about" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.about')}</NavLink>
                    <NavLink to="/news" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.news')}</NavLink>
                    <NavLink to="/media" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.media')}</NavLink>
                    <NavLink to="/contact" onClick={() => { setIsOpen(false); scrollToTop(); }}>{t('navBar.contact')}</NavLink>
                    <LanguageSwitcher setIsOpen={setIsOpen} />
                </div>
                {!isOpen && (
                    <div className="new-toggle" onClick={() => setIsOpen(true)}>
                        <FaBars />
                    </div>
                )}
            </nav>
        </>
    );
};
