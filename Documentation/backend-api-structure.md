# Users
- **GET**    /api/users?limit&offset
- **GET**    /api/users/:id
- **POST**   /api/users
- **PATCH**  /api/users/:id
- **DELETE** /api/users/:id

# Channels 
- **GET**    /api/channels?limit&offset
- **GET**    /api/channels/:id
- **POST**   /api/channels
- **PATCH**  /api/channels/:id
- **DELETE** /api/channels/:id

# Channel membership 
- **GET**    /api/channels/:id/members
- **POST**   /api/channels/:id/members            { user_id, role }
- **PATCH**  /api/channels/:id/members/:user_id   { role }
- **DELETE** /api/channels/:id/members/:user_id

# Messages 
- **GET**    /api/channels/:id/messages?limit&before=cursor&after=cursor
- **POST**   /api/channels/:id/messages
- **PATCH**  /api/messages/:id
- **DELETE** /api/messages/:id