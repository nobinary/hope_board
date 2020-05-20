# hope_board

### Purpose Statement 

(TBD)

### Stack

- Front-End: React, deployed on AMZ
- Back-End: Ruby/Postgres, deployed on Heroku

### Features (v.1)

- notice board allowing users to post CREATE (C), LIKE, VIEW (R) and UPDATE notes. 

- the base notes can be opened in a modal & contains: 
        1. content
        2. date created
        3. user name 
        4. like button (like can be anonymous)
        5.  #of likes (may be disabled later)

- users have the option of logging in (AUTH) to unlock ability to view two lists: "MY FAVORITES" and "MY NOTES".  

- the app has an About, detailing how to use app

COMPONENT TREE: 
```
App 
| Screens
----> Board (NOT LOGGED IN)
----> Register 
----> Login 
----> My Board (2 lists: MY POSTS/MY FAVORITES)
| Components
-----> Menu (Hidden side nav)
-----> About (modal)
-----> Footer
-----> Note (base)
-----> Note (modal)
-----> CreateNote (modal)
| Shared Components
----> FPButton (Front-Page Button Template)
-----> BigPostIt (Used for Register + Login Screens etc.)

```

### List of potential next features

- Movable notes
- Searchable notes
- Color picker
- post photos (AMZ EC3?) - [ALL = moderated] 
- users flag notes to moderator (dashboard/moderator CMS?)
- user is able to "remove in state" (i.e. "pop") viewed notes to see what's underneath. 
- the app will have a list of "flagged" words, ensuring that the content is PG. 
- Mobile version
