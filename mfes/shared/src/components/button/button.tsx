import React from "react"

export default function Button({
  children,
  type,
  rounded,
  onClick,
  hoverClass,
  htmlType
}: any) {
  return (
    <button
      className={`lavish-btn ${rounded && "rounded"} ${type}`}
      onMouseEnter={({ target }: any) => target.classList.add(hoverClass)}
      onMouseLeave={({ target }: any) => target.classList.remove(hoverClass)}
      onClick={onClick}
      type={htmlType}
    >
      {children}
    </button>
  )
}
