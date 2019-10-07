module.exports = `
.ui-toggle-15 {
  padding: 15px 25px;
  color: #2980b9;
  cursor: pointer;
  border: solid 1px #2980b9;
  font-size: 16px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: color 0.3s ease;
}
.ui-toggle-15:before,
.ui-toggle-15:after {
  top: 0;
  position: absolute;
  width: calc(50% + 21px);
  height: 100%;
  content: '';
  background-color: #2980b9;
  transition: transform 0.35s ease;
  z-index: -1;
}
.ui-toggle-15:before {
  left: 0;
  transform: skewX(-20deg) translateX(calc(-100% - 20px));
}
.ui-toggle-15:after {
  right: 0;
  transform: skewX(-20deg) translateX(calc(100% + 20px));
}
.ui-toggle-15.is-active {
  color: #fff;
}
.ui-toggle-15.is-active:before {
  transform: skewX(-20deg) translateX(-20px);
}
.ui-toggle-15.is-active:after {
  transform: skewX(-20deg) translateX(20px);
}

`
