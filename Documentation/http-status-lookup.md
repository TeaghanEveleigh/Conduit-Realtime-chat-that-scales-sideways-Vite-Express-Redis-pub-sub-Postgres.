200 OK — successful GET/PATCH/PUT
201 Created — successful POST that created something
204 No Content — successful DELETE (or PATCH with no body to return)
400 Bad Request — validation failed (bad input)
401 Unauthorized — missing or invalid auth (not signed in)
403 Forbidden — signed in but not allowed
404 Not Found — resource doesn't exist
409 Conflict — duplicate, or state conflict (e.g., already exists)
422 Unprocessable — well-formed but semantically wrong (alternative to 400)
500 Internal Error — your bug
503 Service Unavail — dependencies down
