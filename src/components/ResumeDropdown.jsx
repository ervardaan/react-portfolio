// src/components/ResumeDropdown.jsx
import { useState, useRef, useEffect } from "react";

export default function ResumeDropdown({ resumes }) {
  // If you don't pass resumes as a prop, this fallback will be used.
  const defaultResumes = resumes ?? [
    { name: "Resume (General)", file: "/resumes/Kapoor_2025_resume_SWE.pdf" },
    { name: "Resume (Data Science)", file: "/resumes/Kapoor_2025_resume_SWE.pdf" },
    { name: "Resume (Software Eng)", file: "/resumes/Kapoor_2025_resume_SWE.pdf" },
  ];

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="hover:text-blue-600 focus:outline-none"
      >
        Download Resumes
      </button>

      {open && (
        <ul
          role="menu"
          aria-label="Resumes"
          className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-lg rounded-md py-1 z-50"
        >
          {defaultResumes.map((r, i) => (
            <li key={i} role="none" className="border-b last:border-none">
              <a
                role="menuitem"
                tabIndex={0}
                href={r.file}
                download
                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {r.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
