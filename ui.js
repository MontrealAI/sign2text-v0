/*
Google LLC. initially published the source code
in two Github repositories

 https://github.com/tensorflow/tfjs-models/tree/master/posenet
 https://github.com/tensorflow/tfjs-examples/tree/master/webcam-transfer-learning

and licensed the code under the Apache License, Version 2.0.

MONTREAL.AI modified the code to make it suitable for a new use.
The modifications to the code are the differences between
the original code above-referenced and the code herein.
Thank You to the TensorFlow.js team and contributors.
*/

/**
 * @license
 * Copyright 2018 MONTREAL.AI. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
// import * as tf from '@tensorflow/tfjs';

var ui = ui || {}

const CONTROLS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const CONTROL_CODES = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

ui.init = function() {
  document.getElementById('controller').style.display = '';
  statusElement.style.display = 'none';
}

const trainStatusElement = document.getElementById('train-status');

// Set hyper params from UI values.
const learningRateElement = document.getElementById('learningRate');
ui.getLearningRate = () => +learningRateElement.value;

const batchSizeFractionElement = document.getElementById('batchSizeFraction');
ui.getBatchSizeFraction = () => +batchSizeFractionElement.value;

const epochsElement = document.getElementById('epochs');
ui.getEpochs = () => +epochsElement.value;

const denseUnitsElement = document.getElementById('dense-units');
ui.getDenseUnits = () => +denseUnitsElement.value;
const statusElement = document.getElementById('status');

ui.predictClass = function(classId) {
  document.body.setAttribute('data-active', CONTROLS[classId]);
  console.log(CONTROLS[classId]);
}

ui.isPredicting = function() {
  statusElement.style.visibility = 'visible';
}
ui.donePredicting = function() {
  statusElement.style.visibility = 'hidden';
}
ui.trainStatus = function(status) {
  trainStatusElement.innerText = status;
}

var addExampleHandler;

// export let addExampleHandler;
ui.setExampleHandler = function(handler) {
  addExampleHandler = handler;
}
let mouseDown = false;
const totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const aButton = document.getElementById('a');
const bButton = document.getElementById('b');
const cButton = document.getElementById('c');
const dButton = document.getElementById('d');
const eButton = document.getElementById('e');
const fButton = document.getElementById('f');
const gButton = document.getElementById('g');
const hButton = document.getElementById('h');
const iButton = document.getElementById('i');
const jButton = document.getElementById('j');
const kButton = document.getElementById('k');
const lButton = document.getElementById('l');
const mButton = document.getElementById('m');
const nButton = document.getElementById('n');
const oButton = document.getElementById('o');
const pButton = document.getElementById('p');
const qButton = document.getElementById('q');
const rButton = document.getElementById('r');
const sButton = document.getElementById('s');
const tButton = document.getElementById('t');
const uButton = document.getElementById('u');
const vButton = document.getElementById('v');
const wButton = document.getElementById('w');
const xButton = document.getElementById('x');
const yButton = document.getElementById('y');
const zButton = document.getElementById('z');

const thumbDisplayed = {};

ui.handler = async function(label) {
  mouseDown = true;
  const className = CONTROLS[label];
  const button = document.getElementById(className);
  const total = document.getElementById(className + '-total');
  while (mouseDown) {
    addExampleHandler(label);
    document.body.setAttribute('data-active', CONTROLS[label]);
    total.innerText = totals[label]++;
    await tf.nextFrame();
  }
  document.body.removeAttribute('data-active');
}

aButton.addEventListener('mousedown', () => ui.handler(0));
aButton.addEventListener('mouseup', () => mouseDown = false);

bButton.addEventListener('mousedown', () => ui.handler(1));
bButton.addEventListener('mouseup', () => mouseDown = false);

cButton.addEventListener('mousedown', () => ui.handler(2));
cButton.addEventListener('mouseup', () => mouseDown = false);

dButton.addEventListener('mousedown', () => ui.handler(3));
dButton.addEventListener('mouseup', () => mouseDown = false);

eButton.addEventListener('mousedown', () => ui.handler(4));
eButton.addEventListener('mouseup', () => mouseDown = false);

fButton.addEventListener('mousedown', () => ui.handler(5));
fButton.addEventListener('mouseup', () => mouseDown = false);

gButton.addEventListener('mousedown', () => ui.handler(6));
gButton.addEventListener('mouseup', () => mouseDown = false);

hButton.addEventListener('mousedown', () => ui.handler(7));
hButton.addEventListener('mouseup', () => mouseDown = false);

iButton.addEventListener('mousedown', () => ui.handler(8));
iButton.addEventListener('mouseup', () => mouseDown = false);

jButton.addEventListener('mousedown', () => ui.handler(9));
jButton.addEventListener('mouseup', () => mouseDown = false);

kButton.addEventListener('mousedown', () => ui.handler(10));
kButton.addEventListener('mouseup', () => mouseDown = false);

lButton.addEventListener('mousedown', () => ui.handler(11));
lButton.addEventListener('mouseup', () => mouseDown = false);

mButton.addEventListener('mousedown', () => ui.handler(12));
mButton.addEventListener('mouseup', () => mouseDown = false);

nButton.addEventListener('mousedown', () => ui.handler(13));
nButton.addEventListener('mouseup', () => mouseDown = false);

oButton.addEventListener('mousedown', () => ui.handler(14));
oButton.addEventListener('mouseup', () => mouseDown = false);

pButton.addEventListener('mousedown', () => ui.handler(15));
pButton.addEventListener('mouseup', () => mouseDown = false);

qButton.addEventListener('mousedown', () => ui.handler(16));
qButton.addEventListener('mouseup', () => mouseDown = false);

rButton.addEventListener('mousedown', () => ui.handler(17));
rButton.addEventListener('mouseup', () => mouseDown = false);

sButton.addEventListener('mousedown', () => ui.handler(18));
sButton.addEventListener('mouseup', () => mouseDown = false);

tButton.addEventListener('mousedown', () => ui.handler(19));
tButton.addEventListener('mouseup', () => mouseDown = false);

uButton.addEventListener('mousedown', () => ui.handler(20));
uButton.addEventListener('mouseup', () => mouseDown = false);

vButton.addEventListener('mousedown', () => ui.handler(21));
vButton.addEventListener('mouseup', () => mouseDown = false);

wButton.addEventListener('mousedown', () => ui.handler(22));
wButton.addEventListener('mouseup', () => mouseDown = false);

xButton.addEventListener('mousedown', () => ui.handler(23));
xButton.addEventListener('mouseup', () => mouseDown = false);

yButton.addEventListener('mousedown', () => ui.handler(24));
yButton.addEventListener('mouseup', () => mouseDown = false);

zButton.addEventListener('mousedown', () => ui.handler(25));
zButton.addEventListener('mouseup', () => mouseDown = false);

ui.drawThumb = function(img, label) {
  if (thumbDisplayed[label] == null) {
    const thumbCanvas = document.getElementById(CONTROLS[label] + '-thumb');
    ui.draw(img, thumbCanvas);
  }
}

ui.draw = function(image, canvas) {
  const [width, height] = [224, 224];
  const ctx = canvas.getContext('2d');
  const imageData = new ImageData(width, height);
  const data = image.dataSync();
  for (let i = 0; i < height * width; ++i) {
    const j = i * 4;
    imageData.data[j + 0] = (data[i * 3 + 0] + 1) * 127;
    imageData.data[j + 1] = (data[i * 3 + 1] + 1) * 127;
    imageData.data[j + 2] = (data[i * 3 + 2] + 1) * 127;
    imageData.data[j + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
}
