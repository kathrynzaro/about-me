## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
- `header`
- `section`
- `h1`
- `p`
- `button`
- `section`
- `div`
- `p`
- `button`
1. **For each HTML element ask: Why do I need this?**
- `header` to show **About Me**
- `section` for my info
    - `h1` for my name
    - `p` for pronouns/where I live
    - `button` to show full name
- `section` or `div` for favorite animal
    - `p` for **Favorite Animal**
    - `button` to show hidden photo of my cat
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**

1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
- when `show full name button` is clicked my name (kat) will change to my full name (kathryn zaro)
- when `animal button` is clicked a photo of my cat will be revealed
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
