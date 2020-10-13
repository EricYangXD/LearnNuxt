const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['notAuthed'] = require('../middleware/notAuthed.js')
middleware['notAuthed'] = middleware['notAuthed'].default || middleware['notAuthed']

export default middleware
