## Why Docker

Docker is notably flexible  and lightweight, allowing developers to containerize even the most complex applications. 
It is also easy to script, portable and scalable.
## lessons learned
  Working on this project has been a tremendous Docker learning experience for me. The glitches in the exercise also exposed me to deeper 
  
  Docker concepts during my search for solutions.

  My submission includes artifacts of my failed attempts. 

  The most challenging part was getting the redis master and slave to communicate with each other as well as with the app.

  In my first try, I ran an Ubuntu image and tried to build the application on on it. I quickly learned that it will not work. I wasn't not sure why it didn't. But in hindsight, I now believe it was because I only initialized the webapp and did not add the required redis images.

  The intial problems I faced led to download the project binaries and build using a Docker golang image. While the webapp worked, it still could not talk to the server. 

  Using an Alpine image, I layered a redis server on it and tried to loop the master into slave. It went into infite loop trying to sync.
The classroom experience finally solved the puzzle.

  The greatest lesson I learned is that with Docker, there are probably more than a dozen ways to achieve any given goal.
