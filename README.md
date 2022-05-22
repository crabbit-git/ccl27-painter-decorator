# CodeClan laboratory exercise no. 27: Painter and Decorator

## What's this then?

It's a practice exercise assigned as part of a software development course, which asked that we model a room being painted by a painter and decorator in accordance with specifications laid out in `task.md`. It's not a full application, just a series of models and tests. This was put together using behaviour driven development.

## What can I do with it, though?

Not a whole lot. To do anything much at all, you'll at least need [Node.js](https://nodejs.org). If you have that installed, you can run the tests from a terminal to check whether they pass by installing the required dependencies...

`npm i`

... then running...

`npm test`

... and that's pretty much it, unless you want to mess around with the source code yourself, which you can do if you fancy. Just don't blame me if you break anything, awright? (Yeah, I know, no licence. I'm a simpleton. I know.)

## Minimum viable product vs actually viable product

The minimum viable product according to the brief in `task.md` required only that rooms could be painted by decorators as long as they had enough paint, but not that the paint would actually be used up in the process, which is obviously quite nonsensical. Only in the extensions was it specified that the paint would be depleted when a room is painted. Nonetheless, I delivered the MVP first, then reworked it to actually use up paint when a room is painted so that it made more logical sense.

My reading of the brief is such that I believe it heavily implies that only one type of paint need be stocked, or at least that all types of paint can be considered equivalent. So if the decorator bought 3 different cans containing 3 different paints, the room would potentially end up looking like bad modern art, but that would be considered valid for the purposes of the model being described in the brief. However, if I paid somebody to paint my living room and they did that to it, I'd be out for blood, so I would rather have additional checks to specify which particular paint the customer wants to be used, and run all the other checks on only that one product. So for instance, rather than calculating the total volume of paint overall, I'd only calculate the total volume of that one specific paint by filtering for its name or some other identifier e.g. product barcode or SKU (whether the decorator has 1 can or 20 cans of it in stock). Same thing for painting the room and so forth: pick a paint rather than just a room, and only use that one paint (even if it takes multiple cans of it) to paint the room. I initially implemented it the way the brief implied, then "fixed" it (in my opinion) by picking paints by name. In a real world use case, though, I'd likely be using something less finicky and error prone than a simple string representing the paint's product name, such as a primary key according to a product database, or something to that effect.
