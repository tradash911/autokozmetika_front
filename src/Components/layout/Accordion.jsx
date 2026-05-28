import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { StyledWrapper } from "./accordion.styles";

export default function FAQItem({ title, body }) {
  const [open, setOpen] = useState(false);

  return (
    <StyledWrapper>
      {/* HEADER */}
      <div
        className="header"
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          cursor: "pointer",
        }}
      >
        <span>{title}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            transition: "0.2s",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <path
            d="M8 5l8 7-8 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden", padding: "0 1rem" }}
          >
            <div className="body" style={{ paddingBottom: "1rem" }}>
              {body}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledWrapper>
  );
}
