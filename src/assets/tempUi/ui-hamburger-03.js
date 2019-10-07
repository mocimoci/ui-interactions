module.exports = `
.ui-hamburger-03 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #2980b9 50%, transparent 50%);
  background-size: 100% 40%;
  background-repeat-x: no-repeat;
  background-position: 0 0;
  cursor: pointer;
  transition: background-size 0.2s 0.45s ease;
}
.ui-hamburger-03:before,
.ui-hamburger-03:after {
  height: 20%;
  width: 0;
  position: absolute;
  background-color: #2980b9;
  content: '';
  transform: rotate(0);
  top: 40%;
  transition: transform 0.3s ease, width 0.3s 0.2s ease;
}
.ui-hamburger-03:before,
.ui-hamburger-03:after {
  left: 0;
}
.ui-hamburger-03.is-active {
  background-size: 0 40%;
  transition-delay: 0s;
}
.ui-hamburger-03.is-active:before,
.ui-hamburger-03.is-active:after {
  width: 100%;
  transition: width 0.3s 0.2s ease, transform 0.3s 0.4s ease;
}
.ui-hamburger-03.is-active:before {
  transform: rotate(-45deg);
}
.ui-hamburger-03.is-active:after {
  transform: rotate(45deg);
}

`
