The purpose of this doc is to serve as a space for all the decisions made throughout and why they were made 

## Backend 

- **Import Structure** Chose to use "imports" in the package.json as opposed to using the tsconfigs.json's paths, the reason for doing this is primarily due to wanting to limit relliance upon dependancies

- **Testing:** I decided to go with Vitest, vitest just overall works better with the imports structure and modern ts structure.

- **Reponse Shape**  "naked" for singular resources (It just returns the resource) & Enveloped for responses containing multiple resources. 

- **Caching & Pub/Sub**: To be done through Redis

- **Database Migrations**: dbmate used as it is lightweight and helps keep track of migrations easily


## Frontend Decisions

- **Component Library**: Decided to use **Material-UI** as it is well supported and comprehensive.

- **State management**: To be done through Redux
