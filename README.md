
<p align="center"><em>Minimal REST API for notes: full CRUD on Node.js + SQLite.</em></p>

---

### Features

- Create, read, update and delete notes
- JSON REST API
- Zero-config SQLite persistence

### Quick Start

```bash
git clone https://github.com/morgana-boop/notes-api
cd notes-api
npm install
npm start
```

Server: `http://localhost:3000`

### Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/notes` | List notes |
| GET | `/notes/:id` | Get one note |
| POST | `/notes` | Create note |
| PUT | `/notes/:id` | Update note |
| DELETE | `/notes/:id` | Delete note |

### Example

```bash
curl -X POST localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello","content":"First note"}'
curl localhost:3000/notes
```

### Structure

```text
server.js   entrypoint
src/        routes / logic
```

### Roadmap

- [ ] Input validation
- [ ] Authentication
- [ ] Tests
- [ ] Docker

---

