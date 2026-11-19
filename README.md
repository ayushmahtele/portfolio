# Ayush Mahtele – Portfolio

Static site (no build step). Files:
- `index.html` – the whole site
- `photo.jpg` – add your photo here (square, ~400x400). Until then, an "AM" badge shows.

## Edit projects
Open `index.html`, find the `var P=[` list. For each project:
- `live:"https://..."` -> shows the Live demo button
- `live:""` -> button is hidden (project not deployed)
- `repo:"https://github.com/ayushmahtele/..."` -> Code button

## Deploy
`git add . && git commit -m "update" && git push` – Vercel redeploys automatically.
