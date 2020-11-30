 [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

# Overview

This is a personal development app that will help the user develop themselves by asking a set of questions and providing a correct or incorrect response.

# Title
Personal Development


# MVP
- Backend for storing user information, JavaScript info, user comments and likes using Ruby on Rails.
- REACT app for the frontend account user experience with full CRUD.
- User can answer the given questions and learn more about themselves.
- Anonymous users will be able to create, edit and delete comments.
- Users will be able to see comments from other users.


# Goals

My goals for this app is to create a platform where users can answer some question that will provide a correct or incorrect response
ans will give the user a better idea of how they can work on their personal development.

This app  will also allow your peers to anonymously post a comment response to the questions:
What do you really think about me?
And how can I improve?


### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Frontend._                                |
|   React Router   | _User Routing._                            |
| Ruby on Rails    | _Backend._                                 |
|     Axios        | _Connect front to back._                   |
|      SQL         | _Manage the database and tables._          |


Client (Front End)

# Wireframes
[wireframes](https://whimsical.com/personal-development-N1SwNNov79JumBxbL7oPac)
[flowchart](https://whimsical.com/personal-development-flowchart-3YAyMsimdfHDF76i79x4SJ)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
      |__ mockups
|__ components/
      |__ screens/
            |__ questions/
                  |__ questions.jsx
                  |__ questions.css
            |__ comments/
                  |__ comments.jsx
                  |__ comments.css
            |__ home/
                  |__ home.jsx
                  |__ home.css
|__ services/
      |__ apiConfig.js/
      |__ users/
|__ App.js
|__ App.css
|__ Index.js
|__ gitignore
|__ package-lock.json
|__ package.json
|__ README.md

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                           | Priority | Estimated Time | Time Invested   | Actual Time |
| -------------------            | :------: | :------------: | :-----------:   | :---------: |
| Backend for users              |    L     |     2 hrs      |     n/a hrs     |     TBD     |
| Create CRUD Actions            |    H     |     5 hrs      |     n/a hrs     |     TBD     |
| Test Crud and debug            |    L     |     3 hrs      |     n/a hrs     |     TBD     |
| Create all my components       |    H     |     5 hrs      |     n/a hrs     |     TBD     |
| Connect frontend and backend   |    L     |     5 hrs      |     n/a hrs     |     TBD     |
| Work on CSS                    |    H     |     10 hrs     |     n/a hrs     |     TBD     |
| additional debuggin            |    L     |     5 hrs      |     n/a hrs     |     TBD     |
| Deploy site                    |    H     |     5 hrs      |     n/a hrs     |     TBD     |
| TOTAL                          |          |     40 hrs     |     n/a hrs     |     TBD     |


> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[draw.io](https://drive.google.com/file/d/1BX9k_1iGIckYufYBict2bPq5WYQC_Loy/view?usp=sharing)

<br>

***

## Post-MVP

1. Authentication for the Cork board components
2. Add more personal developmenet content
3. CSS the page for better user experience

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
