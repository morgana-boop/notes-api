# notes-api

REST CRUD API for notes. Node.js, Express, Sequelize, SQLite.

## Run
    npm install
    npm start

## Endpoints
| Method | Route | Description |
|---|---|---|
| GET | /notes | List notes |
| GET | /notes/:id | Get note |
| POST | /notes | Create note (`title` required) |
| PUT | /notes/:id | Update note |
| DELETE | /notes/:id | Delete note |

Errors: 400 invalid input, 404 not found.

## Example
    curl -X POST localhost:3000/notes -H 'Content-Type: application/json' -d '{"title":"a","content":"b"}'
