const app = require('express')()

app.get('/api/feed', (req, res) => {
  fetch(`https://media.rss.com/thenetworkage/feed.xml`)
  .then(data => data.text())
  .then(data => res.json(data))
  .catch(err => res.json({ error: true, message: err }))
})

app.listen(8080, () => console.log('app listening on 8080'))