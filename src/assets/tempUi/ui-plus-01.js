module.exports = `
.ui-plus-01 {
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
}
.ui-plus-01:before,
.ui-plus-01:after {
  content: "";
  height: 20%;
  width: 100%;
  background-color: #2980b9;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10%;
}
.ui-plus-01:before {
  transform: rotate(90deg);
}
.ui-plus-01:before {
  transition: transform 0.3s ease;
}
.ui-plus-01.is-active:before {
  transform: rotate(0);
}

`
