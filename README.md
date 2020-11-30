Overview
MVP
Goals
Libraries and Dependencies
Client (Front End)
Wireframes
Component Tree
Component Hierarchy
Component Breakdown
Time Estimates
Server (Back End)
ERD Model
Post-MVP
Code Showcase
Code Issues & Resolutions

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
[draw.io](https://drive.google.com/file/d/1BX9k_1iGIckYufYBict2bPq5WYQC_Loy/view?usp=sharing)

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

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

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
