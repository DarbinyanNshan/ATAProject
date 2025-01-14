import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoEarth } from "react-icons/io5";
import './LanguageSwitcher.css';

const languages = [
    { code: "hy", name: "Հայերեն" },
    { code: "en", name: "English" }
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = i18n.language || 'en';

    const changeLanguage = async (lng) => {
        try {
            await i18n.changeLanguage(lng);
            setIsOpen(false);
        } catch (error) {
            console.error("Language change error:", error);
        }
    };

    return (
        <div
            className="language-switcher"
            onMouseEnter={() => setIsOpen(true)} 
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="dropdown-toggle" title="Language">
                <IoEarth size={24} /> 
            </button>
            {isOpen && (
                <div className="dropdown-menu show">
                    {languages.map((lng) => (
                        <div
                            key={lng.code}
                            className="dropdown-item"
                            onClick={() => changeLanguage(lng.code)}
                        >
                            {lng.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
