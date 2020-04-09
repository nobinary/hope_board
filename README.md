# hope_board

### Purpose Statement 

(TBD)

### Stack

- Front-End: React, deployed on AMZ
- Back-End: Ruby/Sequelize/Postgres, deployed on Heroku

### Features (v.1)

- notice board allowing users to post CREATE (C), LIKE and VIEW (R) all notes. Additionally, a user is able to "remove in state" (i.e. "pop") viewed notes to see what's underneath. 

- the base notes can be opened in a modal & contains: 
        1. text
        2. date created
        3. author (can be anonymous)
        4. like button
        5.  #of likes (may be disabled later)
        
- note base view vs modal? difference = size/color/opacity, click on base note to expand (+ button)

- users have the option of logging in (AUTH) to unlock ability to view two lists: "MY FAVORITES" and "MY NOTES".  

- the app will have a list of "flagged" words, ensuring that the content is PG. We need user advisory ("how it works"/ABOUT) + list of flagged words

COMPONENT TREE: 

App 
| Screens
----> Board (NOT LOGGED IN)
----> Register
----> Login
----> My Board (2 lists: MY POSTS/MY FAVORITES)
| Common/Shared Components
-----> Menu (Hidden side nav)
-----> Note (base)
-----> Note (modal)
-----> Modal (About etc.)
-----> Create Note (modal?)

### Features (v.2)

- Movable notes
- Searchable notes
- Color picker
- Ability to EDIT (U) and DELETE (D) notes
- post photos (AMZ EC3?) - [ALL = moderated] 
- users flag notes ("dislike") + moderator dashboard/CMS


### Faeatures (v. 3) 

- Mobile version
