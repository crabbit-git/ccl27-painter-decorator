# What's this then?

It's a practice exercise assigned as part of a software development course, which asked that we model a room being painted by a painter and decorator in accordance with specifications laid out in `task.md`. It's not a full application, just a series of models and tests. This was put together using behaviour driven development.

# What can I do with it, though?

Not a whole lot. To do anything much at all, you'll at least need [Node.js](https://nodejs.org). If you have that installed, you can run the tests from a terminal to check whether they pass by installing the required dependencies...

`npm i`

... then running...

`npm test`

... and that's pretty much it, unless you want to mess around with the source code yourself, which you can do if you fancy. Just don't blame me if you break anything, awright? (Yeah, I know, no licence. I'm a simpleton. I know.)

## Limitations

The minimum viable product required only that rooms could be painted by decorators as long as they had enough paint, but not that the paint would actually be used up in the process, which is obviously quite nonsensical. Only in the extensions was it specified that the paint would be depleted when a room is painted. Nonetheless, I delivered the MVP first; I'll rework it later to use up paint and thus make more logical sense.
