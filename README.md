# exhibits2
Changes made to the original exhibits to be able to run on a local Windows OS and spin up in Docker.

Changes made to the original exhibits to be able to run on a local Windows OS and spin up in Docker.
before starting the server go to config/webpacker.yml

make sure you make line 56 false or the rails server will not start because the yarn and node packages are outdated.

run command rails db:migrate RAILS_ENV=development 

to make sure there are no pending migrations

Then start server rails s 

# If you see these messages:
*** SIGUSR2 not implemented, signal based restart unavailable!
*** SIGUSR1 not implemented, signal based restart unavailable!
*** SIGHUP not implemented, signal based logs reopening unavailable!

It is becasuse Windows OS does not support those signals. If you need those signals for this app then you must switch to Linx or Mac OS

Local Server Ports:
8983
3035