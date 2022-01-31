# PADOQ - To-do List

## Goals for challenge

1. Explain.md file for describing the steps
2. Components into seperate files
3. Components re-written as function-based, instead of class-based
4. A testing suite for the components.
5. NEXTSTEPS.md to explain further objectives

##  Further elaboration

1. Explain.md file for describing the steps

        That is this file. I have used comments in the code: where marked with 💭 it shows observations and reflections: with ⚠️ is where I experienced blockers and had to roll back. 

2. Components into seperate files

        A copy of the old file is on `oldApp.js` for posterity. There are 4 components within it: the central app: `Todos()`, `Todo()` `and AddTodo()`. These can be split into seperate files. 

        Consider there is also Bootstrap required. This ought to be installed if I am to work with it properly. 

3. Components re-written as function-based, instead of class-based

        All elements of this app are written as classes that entend Component. By making them functions, this strips away a lot of the superfluous code, helping readibility and making it more object-oriented. 

        Additionally look to invert dependencies and apply React Hooks (useState, useReduce, etc) to allow the function-based model to work as well as possible. 

4. A testing suite for the components.

          Due to each component being seperated, each one can utilise `NAME.test.js` for jest sampling.    

5. NEXTSTEPS.md to explain further objectives

        TBD


## Any preliminary blockers?

1. I don't have a computer right now. 👀 Access repository and look at files. 
2. By converting to stateless function components, the class components may 'break'. It is likely in the time constraint that I will end up with a combination of the two.
3. Testing: TTD is ideal, but with a full reformat of the code any tests would be prone to fail. Ideally consolidate correct code on unit level and build up to functional etc.
