# My Personal Blog

[This website](https://kylieis.online) serves as my personal landing page. This repo also hosts the code for my blog, where I post about the various programming things I've learned/am learning, general productivity tips, and some scattered things in between.

Built with Svelte!

## Generating Social Images

To create a new preview card for any site hosted on kylieis.online/kale-stew.github.io (using ['now'](https://kylieis.online/now) as an example):

```sh
$ npx create-img resoc-template/resoc.manifest.json -o public/open-graph/now.jpg --params title="now" -w 1200 -h 630
```

## Deployment

CI takes care of deploy on merge to the default branch, `dev`. 🚀👨‍🚀
