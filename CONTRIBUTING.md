# Contributing

Thanks for your interest in contributing to the JavaScript Air website!

## Setup

1. Fork the repo
2. Clone your fork
3. Make a branch for your feature/bugfix/new episode/etc.
4. Run `npm install` (make sure you have node and npm installed first)
5. Run `npm run build` to get everything built for the first bit
6. Run `npm run server` and open `localhost:8080` in a browser
7. Run the dev script(s) (in separate terminal tabs/windows) relevant for the changes you're making (see below), make your changes, and refresh your browser to see them
8. Run `npm run build` again to make sure you wont break the build
9. Commit your changes and reference the issue you're addressing (for example: `git commit -am 'Your descriptive message. Closes #34'`)
10. Push your branch to your fork
11. Create a pull request from your branch on your fork to master on this repo
12. Get merged! 🎉 🎊

### Home Page

To develop the home page, use `npm run dev`.

### CSS

CSS is processed using [postcss](https://github.com/postcss/postcss) and you need to build it (it's `.gitignored`). To do this, run `npm run build:css`.

If you're going to work on the css, you can run `npm run dev:css` and it will watch the file for changes and rebuild.

### Episodes

I've hacked together a pretty crazy way to build these files. I'm sure
there's a much better way to do this. But what we've got works pretty
well. If you're working on a specific episode (for example, the first
episode), simply run:

```
npm run dev:episode -- episodes/2015-12-09
```

This will start nodemon watching your file system for changes and
recompiling your page on changes. No hot reloading or anything. Yes, I
have no idea what I'm doing. (protip, you may also want to look into [npm-quick-run](npm.im/npm-quick-run))

I've added a [plop](http://npm.im/plop) generator for adding new
episodes. In the root directory, simply enter

```
plop episode
```

Follow the prompts and it will generate the episode file for you.

### Podbean description

You can generate the description for the podbean podcast like so:

```
npm run description -- episodes/2015-12-09
```

`pbcopy` is available on OSX if you want to pipe the output to your
clipboard (recommended)

## Deploying

We deploy with [surge.sh](https://surge.sh) automatically with
[travis-ci](https://travis-ci.org/javascriptair/site). Once stuff gets
into master, travis builds it and deploys it to surge. That's it! It's
magic!

