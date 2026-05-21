The purpose of this doc is to serve as a space for all the decisions made throughout and why they were made 

## Backend 

- **Import Structure** Chose to use "imports" in the package.json as opposed to using the tsconfigs.json's paths, the reason for doing this is primarily due to wanting to limit relliance upon dependancies

- **Testing:** I decided to go with Vitest, vitest just overall works better with the imports structure and modern ts structure.


## Frontend Decisions

- State management through Redis 
