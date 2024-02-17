# React Fibre
### The React Fiberis an internal representation of the React component tree that allows React to efficiently update and render components.
### React Fiber is an ongoing reimplementation of React's core algorithm.
### The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

### Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

## what is the hydration in react 
### when page is load mean when all the html part is loaded after that when javascript injected in the html page this process is called hydration 

## What is reconciliation?
### The algorithm React uses to diff one tree with another to determine which parts need to be changed.Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."