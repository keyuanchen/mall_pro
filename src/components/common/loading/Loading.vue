<template>
  <div class="loader">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<style scoped lang="less">
.loader {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@-webkit-keyframes loading {
  50% {
    transform: scale(0.4);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.loading {
  position: relative;
}

.loading span {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
}

.loading span:nth-of-type(1) {
  top: 25px;
  left: 0;
  -webkit-animation: loading-3 1s ease 0s infinite;
}

.loading span:nth-of-type(2) {
  top: 17px;
  left: 17px;
  -webkit-animation: loading-3 1s ease -0.12s infinite;
}

.loading span:nth-of-type(3) {
  top: 0;
  left: 25px;
  -webkit-animation: loading-3 1s ease -0.24s infinite;
}

.loading span:nth-of-type(4) {
  top: -17px;
  left: 17px;
  -webkit-animation: loading-3 1s ease -0.36s infinite;
}

.loading span:nth-of-type(5) {
  top: -25px;
  left: 0;
  -webkit-animation: loading-3 1s ease -0.48s infinite;
}

.loading span:nth-of-type(6) {
  top: -17px;
  left: -17px;
  -webkit-animation: loading-3 1s ease -0.6s infinite;
}

.loading span:nth-of-type(7) {
  top: 0;
  left: -25px;
  -webkit-animation: loading-3 1s ease -0.72s infinite;
}

.loading span:nth-of-type(8) {
  top: 17px;
  left: -17px;
  -webkit-animation: loading-3 1s ease -0.84s infinite;
}
</style>
