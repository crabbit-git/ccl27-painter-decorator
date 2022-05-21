# What's this then?

It's a practice exercise assigned as part of a software development course, which asked that we model a room being painted by a painter and decorator in accordance with specifications laid out in `task.md`. It's not a full application, just a series of models and tests. This was put together using behaviour driven development.

# What can I do with it, though?

Not a whole lot. To do anything much at all, you'll at least need [Node.js](https://nodejs.org). If you have that installed, you can run the tests from a terminal to check whether they pass by installing the required dependencies...

`npm i`

... then running...

`npm test`

... and that's pretty much it, unless you want to mess around with the source code yourself, which you can do if you fancy. Just don't blame me if you break anything, awright? (Yeah, I know, no licence. I'm a simpleton. I know.)

## Limitations

My reading of the brief is such that I believe it heavily implies that only one type of paint need be stocked, or at least that all types of paint can be considered equivalent. So if the decorator bought 3 different cans containing 3 different paints, the room would potentially end up looking like bad modern art, but that would be considered valid for the purposes of the model being described in the brief. Ideally, I would rather have additional checks to specify which particular paint the customer wants to be used, and run all the other checks on only that one product. So for instance, rather than calculating the total volume of paint overall, only calculate the total volume of that one specific paint (whether the decorator has 1 can or 20 cans of it in stock).

The minimum viable product required only that rooms could be painted by decorators as long as they had enough paint, but not that the paint would actually be used up in the process, which is obviously quite nonsensical. Only in the extensions was it specified that the paint would be depleted when a room is painted. Nonetheless, I delivered the MVP first, then reworked it to actually use up paint when a room is painted so that it made more logical sense.
