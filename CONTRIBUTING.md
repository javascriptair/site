# Contributing

Thanks for your interest in contributing to the JavaScript Air website!

## Setup

1. Fork the repo
2. Clone your fork
3. Make a branch for your feature/bugfix/new episode/etc.
4. Run `npm install` (make sure you have node and npm installed first)
5. Run `npm run dev`
6. Open `index.html` in a browser
7. Make your changes and refresh your browser to see them
8. Run `npm run eslint` to make sure your code passes our guidelines
9. Commit your changes `git commit -am 'Your descriptive message. Closes #34'`
10. Push your branch to your fork
11. Create a pull request from your branch on your fork to master on this repo
12. Get merged!

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
have no idea what I'm doing.

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

