"use client";
import React, { useEffect } from "react";

export default function SplitTextAnimation({
  text = "Grow your business with a new website.",
}) {
  const htmlString = `
    <span
      className="wow charsAnimIn words chars splitting"
      aria-hidden="true"
      style="--word-total: ${text.split(" ").length}; --char-total: ${
    text.split("").length
  }; visibility: visible;"
    >
      ${text
        .trim()
        .split(" ")
        .map(
          (elm, i) => `
        <span className="word" data-word="Grow" style="--word-index: ${i}">
          ${elm
            .split("")
            .map(
              (elm2, i2) => `
            <span className="char" data-char="G" style="--char-index: ${
              i + i2
            }">
              ${elm2}
            </span>
          `
            )
            .join("")}
        </span>
        <span className="whitespace"> </span>
      `
        )
        .join("")}
    </span>
  `;

  return (
    <>
      <span
        className="wow charsAnimIn words chars splitting"
        aria-hidden="true"
        style={{
          "--word-total": text.split(" ").length,
          "--char-total": text.split("").length,
          visibility: "visible",
        }}
      >
        {text
          .trim()
          .split(" ")
          .map((elm, i) => (
            <React.Fragment key={i}>
              <span
                className="word"
                data-word="Grow"
                style={{ "--word-index": i }}
              >
                {elm.split("").map((elm2, i2) => (
                  <span
                    key={i2}
                    className="char"
                    data-char="G"
                    style={{ "--char-index": i + i2 }}
                  >
                    {elm2}
                  </span>
                ))}
              </span>
              <span className="whitespace"> </span>
            </React.Fragment>
          ))}
      </span>
    </>
  );
}
