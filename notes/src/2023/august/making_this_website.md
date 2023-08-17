# Making this website
Over the past few years, I've gained quite a bit of fullstack experience across many different tech stacks,
ranging from React to Vue and Express to Django. By far, the most popular frontend framework is React,
and I've used that at many companies and on many projects. But, I've gotten a bit tired of it, and I wanted to
try something new for this website.

Specifically, React is a big framework with a lot of features but that means the bundle size is also quite large.
For a simple website like this (all static with no reactive state), I don't really need the features that React provides.


Let's optimize for speed and size.

## My Tech Stack
### Main Page
Funny enough, I'm not using a web framework at all. In fact, I don't even use JavaScript on the main page. It's just vanilla HTML
with [Tailwind](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for styling.

Sometimes, lacking the component architecture can make writing HTML a bit tedious. In my case, my website is small enough that
I don't need to worry too much. 

I've been closely following [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) for a while.
They're a set of web APIs that allow you to create custom, reusable HTML elements. They're already supported by most modern browsers,
but certain features are still experimental. Ideally, it would provide for component architecture without the need for a framework.

#### Tailwind
Tailwind is a utility-first CSS framework that allows you to build custom designs without writing any CSS. It's a bit different
from other CSS frameworks like Bootstrap and Bulma, where you have to use their pre-defined components and classes.

Tailwind offers the flexibility to build your own styles by composing utility classes. For example, if you want to create a button
with a blue background, you can use the `bg-blue-500` class. If you want to add a hover effect, you can add the `hover:bg-blue-600` class.

```html
<button class="bg-blue-500 hover:bg-blue-600">Click me!</button>
```

#### DaisyUI
DaisyUI is a plugin for Tailwind that adds a bunch of pre-defined components and classes. This brings it a bit closer to Bootstrap and Bulma,
but it still retains the flexibility of Tailwind. For example, if you want to create a button with a blue background, you can use the `btn` class.
The plugin will automatically set colours based on the current theme.

```html
<button class="btn">Click me!</button>
```

What's great about using both Tailwind and DaisyUI is that you can still use Tailwind's utility classes to customize the components.

### My Notes
This part of my website is built with [mdBook](https://rust-lang.github.io/mdBook/), a Rust-based static site generator for creating books from Markdown files.

My first experience with mdBook was when I was reading the [Rust Programming Language book](https://doc.rust-lang.org/book/).
Unrelated note, I'm actually a big fan of Rust and I've used it in various projects. Expect to see some Rust-related content in the future.

Overall, I find that mdBook has a simple and intuitive design that's easy to customize. Writing notes in Markdown is also a lot easier than writing HTML
or using a WYSIWYG editor.


### Hosting and Deployment
Since everything is static and I have no backend at all, I'm using GitHub Pages to host my website for free. I also have 
a GitHub Actions workflow that automatically builds and deploys my website whenever I push to the `main` branch. The workflow involves
building the main page with Tailwind and DaisyUI, and building the notes with mdBook. All built files are in the `dist/` directory, and
are served by GitHub Pages.