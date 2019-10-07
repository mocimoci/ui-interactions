module.exports = `
.ui-arrow-01 {
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
}
.ui-arrow-01:before,
.ui-arrow-01:after {
  content: '';
  background-color: #2980b9;
  position: absolute;
  top: 50%;
  width: 1px;
  height: calc(70% - 1px);
  margin-top: -35%;
}
.ui-arrow-01:before {
  left: 50%;
  margin-left: -25%;
  transform: rotate(-45deg);
}
.ui-arrow-01:after {
  right: 50%;
  margin-right: -25%;
  transform: rotate(45deg);
}
.ui-arrow-01:before,
.ui-arrow-01:after {
  transition: transform 0.34s ease;
}
.ui-arrow-01.is-active:before {
  transform: rotate(45deg);
}
.ui-arrow-01.is-active:after {
  transform: rotate(-45deg);
}
.ui-arrow-02 {
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  transition: transform 0.3s ease;
}
.ui-arrow-02:before,
.ui-arrow-02:after {
  content: '';
  background-color: #2980b9;
  position: absolute;
  top: 50%;
  width: 1px;
  height: calc(70% - 1px);
  margin-top: -35%;
}
.ui-arrow-02:before {
  left: 50%;
  margin-left: -25%;
  transform: rotate(-45deg);
}
.ui-arrow-02:after {
  right: 50%;
  margin-right: -25%;
  transform: rotate(45deg);
}
.ui-arrow-02.is-active {
  transform: rotate(-180deg);
}
.ui-hamburger-01 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #2980b9, #2980b9);
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.2s 0.25s ease;
  cursor: pointer;
}
.ui-hamburger-01:before,
.ui-hamburger-01:after {
  height: 20%;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #2980b9;
  content: '';
  transition: transform 0.3s ease;
}
.ui-hamburger-01:before {
  top: 0;
  transform-origin: 9% 150%;
}
.ui-hamburger-01:after {
  bottom: 0;
  transform-origin: 9% -50%;
}
.ui-hamburger-01.is-active {
  background-size: 0 20%;
  transition-delay: 0s;
}
.ui-hamburger-01.is-active:before {
  transform: rotate(45deg);
  transition-delay: 0.15s;
}
.ui-hamburger-01.is-active:after {
  transform: rotate(-45deg);
  transition-delay: 0.15s;
}
.ui-hamburger-02 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #2980b9, #2980b9);
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.2s 0.25s ease;
  cursor: pointer;
}
.ui-hamburger-02:before,
.ui-hamburger-02:after {
  height: 20%;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #2980b9;
  content: '';
  transition: transform 0.3s ease;
}
.ui-hamburger-02:before {
  top: 0;
  transform-origin: 91% 150%;
}
.ui-hamburger-02:after {
  bottom: 0;
  transform-origin: 91% -50%;
}
.ui-hamburger-02.is-active {
  background-size: 0 20%;
  transition-delay: 0s;
}
.ui-hamburger-02.is-active:before {
  transform: rotate(-45deg);
  transition-delay: 0.15s;
}
.ui-hamburger-02.is-active:after {
  transform: rotate(45deg);
  transition-delay: 0.15s;
}
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
.ui-hamburger-04 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #2980b9 50%, transparent 50%);
  background-size: 100% 40%;
  background-repeat-x: no-repeat;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 0.2s 0.45s ease;
}
.ui-hamburger-04:before,
.ui-hamburger-04:after {
  height: 20%;
  width: 0;
  position: absolute;
  background-color: #2980b9;
  content: '';
  transform: rotate(0);
  top: 40%;
  transition: transform 0.3s ease, width 0.3s 0.2s ease;
}
.ui-hamburger-04:before,
.ui-hamburger-04:after {
  right: 0;
}
.ui-hamburger-04.is-active {
  background-position: 30px 0;
  transition-delay: 0s;
}
.ui-hamburger-04.is-active:before,
.ui-hamburger-04.is-active:after {
  width: 100%;
  transition: width 0.3s 0.2s ease, transform 0.3s 0.4s ease;
}
.ui-hamburger-04.is-active:before {
  transform: rotate(-45deg);
}
.ui-hamburger-04.is-active:after {
  transform: rotate(45deg);
}
.ui-hamburger-05 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #2980b9, #2980b9);
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.2s 0.25s ease;
  cursor: pointer;
  transition: background-size 0.3s 0.2s ease;
}
.ui-hamburger-05:before,
.ui-hamburger-05:after {
  height: 20%;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #2980b9;
  content: '';
  transition: transform 0.3s ease;
}
.ui-hamburger-05:before {
  top: 0;
}
.ui-hamburger-05:after {
  bottom: 0;
}
.ui-hamburger-05:before,
.ui-hamburger-05:after {
  transition: 0.3s ease;
}
.ui-hamburger-05.is-active {
  background-size: 0 0;
}
.ui-hamburger-05.is-active:before,
.ui-hamburger-05.is-active:after {
  transition-delay: 0.3s;
}
.ui-hamburger-05.is-active:before {
  transform: translateY(200%) rotate(45deg);
}
.ui-hamburger-05.is-active:after {
  transform: translateY(-200%) rotate(-45deg);
}
.ui-hamburger-06 {
  width: 30px;
  height: 26px;
  border: none;
  position: relative;
  cursor: pointer;
}
.ui-hamburger-06:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, #2980b9 50%, transparent 50%);
  background-size: 100% 40%;
  background-repeat-x: no-repeat;
  background-position: 0 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.ui-hamburger-06:after {
  width: 80%;
  height: 90%;
  top: 5%;
  left: 10%;
  content: '';
  position: absolute;
  background: linear-gradient(to right, transparent 40%, #2980b9 40%, #2980b9 60%, transparent 60%), linear-gradient(to bottom, transparent 40%, #2980b9 40%, #2980b9 60%, transparent 60%);
  transform: rotate(45deg) scale(0);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.ui-hamburger-06.is-active:before {
  opacity: 0;
  transform: scale(0);
}
.ui-hamburger-06.is-active:after {
  transform: rotate(45deg) scale(1);
  opacity: 1;
  transition-delay: 0.3s ease;
}
@-moz-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@-webkit-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@-o-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
.ui-loading-01 {
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
.ui-loading-01:before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  content: '';
  background-color: #2980b9;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.ui-loading-01:after {
  content: '';
  border: solid 2px #fff;
  border-left-color: transparent;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  margin-top: -8px;
  margin-left: -8px;
  opacity: 0;
  transition: opacity 0.2s 0.1s ease;
}
.ui-loading-01.is-active:before {
  transform: scaleX(1);
}
.ui-loading-01.is-active:after {
  animation: rotation 0.5s infinite linear;
  opacity: 1;
}
@-moz-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@-webkit-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@-o-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
.ui-loading-02 {
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
.ui-loading-02:before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  content: '';
  background-color: #2980b9;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}
.ui-loading-02:after {
  content: '';
  border: solid 2px #fff;
  border-left-color: transparent;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  margin-top: -8px;
  margin-left: -8px;
  opacity: 0;
  transition: opacity 0.2s 0.1s ease;
}
.ui-loading-02.is-active:before {
  transform: scaleY(1);
}
.ui-loading-02.is-active:after {
  animation: rotation 0.5s infinite linear;
  opacity: 1;
}
@-moz-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@-webkit-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@-o-keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
.ui-loading-03 {
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
.ui-loading-03:before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  content: '';
  background-color: #2980b9;
  transform: translateX(-100%);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.1s 0.3s;
}
.ui-loading-03:after {
  content: '';
  border: solid 2px #fff;
  border-left-color: transparent;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  margin-top: -8px;
  margin-left: -8px;
  opacity: 0;
  transition: opacity 0.2s 0.1s ease;
}
.ui-loading-03.is-active:before {
  transition: opacity 0.3s ease;
  transform: translateX(0);
  opacity: 1;
}
.ui-loading-03.is-active:after {
  animation: rotation 0.5s infinite linear;
  opacity: 1;
}
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
.ui-plus-02 {
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
}
.ui-plus-02:before,
.ui-plus-02:after {
  content: "";
  height: 20%;
  width: 100%;
  background-color: #2980b9;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10%;
}
.ui-plus-02:before {
  transform: rotate(90deg);
}
.ui-plus-02:before {
  transition: transform 0.3s ease;
}
.ui-plus-02.is-active:before {
  transform: rotate(-180deg);
}
.ui-toggle-01 {
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
.ui-toggle-01:before {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
}
.ui-toggle-01.is-active {
  color: #fff;
}
.ui-toggle-01:before {
  transform: translateX(calc(-100% - 1px));
}
.ui-toggle-01.is-active:before {
  transform: translateX(0);
}
.ui-toggle-02 {
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
.ui-toggle-02:before {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
}
.ui-toggle-02.is-active {
  color: #fff;
}
.ui-toggle-02:before {
  transform: translateX(calc(100% + 1px));
}
.ui-toggle-02.is-active:before {
  transform: translateX(0);
}
.ui-toggle-03 {
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
.ui-toggle-03:before {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
}
.ui-toggle-03.is-active {
  color: #fff;
}
.ui-toggle-03:before {
  transform: translateY(-100%);
}
.ui-toggle-03.is-active:before {
  transform: translateY(0);
}
.ui-toggle-04 {
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
.ui-toggle-04:before {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
}
.ui-toggle-04.is-active {
  color: #fff;
}
.ui-toggle-04:before {
  transform: translateY(100%);
}
.ui-toggle-04.is-active:before {
  transform: translateY(0);
}
.ui-toggle-05 {
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
.ui-toggle-05:before,
.ui-toggle-05:after {
  position: absolute;
  content: '';
  background-color: #2980b9;
  width: 50%;
  top: 0;
  height: 100%;
  transition: transform 0.3s ease;
  z-index: -1;
}
.ui-toggle-05:before {
  left: 0;
  transform: translateX(-100%);
}
.ui-toggle-05:after {
  right: 0;
  transform: translateX(100%);
}
.ui-toggle-05.is-active {
  color: #fff;
}
.ui-toggle-05.is-active:before,
.ui-toggle-05.is-active:after {
  transform: translateX(0);
}
.ui-toggle-06 {
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
.ui-toggle-06:before,
.ui-toggle-06:after {
  position: absolute;
  content: '';
  background-color: #2980b9;
  width: 100%;
  left: 0;
  height: 50%;
  transition: transform 0.3s ease;
  z-index: -1;
}
.ui-toggle-06:before {
  top: 0;
  transform: translateY(-100%);
}
.ui-toggle-06:after {
  bottom: 0;
  transform: translateY(100%);
}
.ui-toggle-06.is-active {
  color: #fff;
}
.ui-toggle-06.is-active:before,
.ui-toggle-06.is-active:after {
  transform: translateY(0);
}
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
.ui-toggle-08 {
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
.ui-toggle-08:before {
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
  transform: rotate(90deg);
}
.ui-toggle-08.is-active {
  color: #fff;
}
.ui-toggle-08.is-active:before {
  transform: rotate(0);
}
.ui-toggle-09 {
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
.ui-toggle-09:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
  left: 0;
  bottom: 0;
  transform-origin: bottom left;
  transform: rotate(-90deg);
}
.ui-toggle-09.is-active {
  color: #fff;
}
.ui-toggle-09.is-active:before {
  transform: rotate(0);
}
.ui-toggle-10 {
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
.ui-toggle-10:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
  left: 0;
  bottom: 0;
  transform-origin: bottom left;
  transform: rotate(90deg);
}
.ui-toggle-10.is-active {
  color: #fff;
}
.ui-toggle-10.is-active:before {
  transform: rotate(0);
}
.ui-toggle-11 {
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
.ui-toggle-11:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
  right: -1px;
  width: calc(100% + 1px);
  top: 0;
  transform-origin: top right;
  transform: rotate(-90deg);
}
.ui-toggle-11.is-active {
  color: #fff;
}
.ui-toggle-11.is-active:before {
  transform: rotate(0);
}
.ui-toggle-12 {
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
.ui-toggle-12:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
  right: 0;
  top: -1px;
  height: calc(100% + 1px);
  transform-origin: top right;
  transform: rotate(90deg);
}
.ui-toggle-12.is-active {
  color: #fff;
}
.ui-toggle-12.is-active:before {
  transform: rotate(0);
}
.ui-toggle-13 {
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
.ui-toggle-13:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
  right: 0;
  bottom: -1px;
  height: calc(100% + 1px);
  transform-origin: bottom right;
  transform: rotate(-90deg);
}
.ui-toggle-13.is-active {
  color: #fff;
}
.ui-toggle-13.is-active:before {
  transform: rotate(0);
}
.ui-toggle-14 {
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
.ui-toggle-14:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
  right: -1px;
  bottom: 0;
  width: calc(100% + 1px);
  transform-origin: bottom right;
  transform: rotate(90deg);
}
.ui-toggle-14.is-active {
  color: #fff;
}
.ui-toggle-14.is-active:before {
  transform: rotate(0);
}
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
.ui-toggle-16 {
  padding: 15px 25px;
  color: #2980b9;
  cursor: pointer;
  border: solid 1px #2980b9;
  font-size: 16px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: color 0.3s ease;
  transform-origin: center top;
}
.ui-toggle-16:before {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  transition: transform 0.35s ease;
  z-index: -1;
  background-color: #2980b9;
}
.ui-toggle-16.is-active {
  color: #fff;
}
.ui-toggle-16:before {
  transform: translateY(-100%);
  transform-origin: center top;
}
.ui-toggle-16.is-active {
  animation: cartoon-container 500ms ease-out forwards;
}
.ui-toggle-16.is-active:before {
  animation: cartoon-before 450ms 390ms ease-out forwards;
}
@-moz-keyframes cartoon-container {
  0% {
    transform: scale(1, 1);
    color: #2980b9;
  }
  50% {
    transform: scale(1, 0.6);
  }
  80% {
    transform: scale(1, 1.4);
    color: #2980b9;
  }
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}
@-webkit-keyframes cartoon-container {
  0% {
    transform: scale(1, 1);
    color: #2980b9;
  }
  50% {
    transform: scale(1, 0.6);
  }
  80% {
    transform: scale(1, 1.4);
    color: #2980b9;
  }
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}
@-o-keyframes cartoon-container {
  0% {
    transform: scale(1, 1);
    color: #2980b9;
  }
  50% {
    transform: scale(1, 0.6);
  }
  80% {
    transform: scale(1, 1.4);
    color: #2980b9;
  }
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}
@keyframes cartoon-container {
  0% {
    transform: scale(1, 1);
    color: #2980b9;
  }
  50% {
    transform: scale(1, 0.6);
  }
  80% {
    transform: scale(1, 1.4);
    color: #2980b9;
  }
  100% {
    transform: scale(1, 1);
    color: #fff;
  }
}
@-moz-keyframes cartoon-before {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
@-webkit-keyframes cartoon-before {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
@-o-keyframes cartoon-before {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes cartoon-before {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(30%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}

`
