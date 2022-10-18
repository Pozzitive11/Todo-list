function checkCkolor(bgColor) {
  if (bgColor === "000000" || bgColor === "3D3270") {
    return `${bgColor}; color: #fff`;
  } else {
    return `${bgColor}; color: #000`;
  }
}

export {checkCkolor};