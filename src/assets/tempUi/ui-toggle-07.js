module.exports = `
.ui-toggle-07 {
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
.ui-toggle-07:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
  left: 0;
  top: 0;
  transform-origin: top left;
  transform: rotate(-90deg);
}
.ui-toggle-07.is-active {
  color: #fff;
}
.ui-toggle-07.is-active:before {
  transform: rotate(0);
}

`
