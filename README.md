# MyHomepage

Hi! This repo is to study React and create my homepage to provide my personal portfolio.

![스크린샷_20221109_094624](https://user-images.githubusercontent.com/62579623/200835203-95823082-5c6c-40ee-970e-3d6795082433.png)

## Language and Frameworks
**Javascript, React, CSS**

## Table of Contents
1. Main page (app.js)
2. About page (not yet)
3. Portfolio page (not yet)

## Main page (App2.js)

### 1. Animated Text
I wanted to change the text to *'Yeongcheol'* or *'Good'* every certain time.
After studying and searching, I found that React provides useEffect hook to handle the events, and setInterval.
At first, I implemented fade effect by CSS and text change by useEffect.

**However**, I found that useEffect took a little more time to process than CSS and it made the cycle between the two ***inconsistent***. 
Also, there is **another problem** that I didn't remove interval at end of useEffect and it doubled the interval event...

To fix this, I decided to implement the animation with only CSS.
I made it look like one unified animation, with two texts overlapping and using animation to control transparency and time.

### 2. Resize according to real viewport
After animated text, I had studied CSS, and found that some abbreviation such as 'rem', 'vh', 'vw' are useful for placing the components.
I wanted to represent the entire contents of one page into viewport, so I implemented the outer component to have height '100vh'
However, I found that it didn't fit well sometimes because 'vh' is calculated from total height can be shown without considering the parts hidden by external UI such as Safari on iPhone.

The answer to fix problem was ***window.innerHeight.***

window.innerHeight returns the height of real viewport.

With this, I implemented the features that resize font automatically, locate the component according to real viewport, and so on.

### 3. Styled-Components
