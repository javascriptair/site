#!/usr/bin/env bash
set -e
# allow being run from somewhere other than the git rootdir
gitroot=$(git rev-parse --show-cdup)
# default gitroot to . if we're already at the rootdir
gitroot=${gitroot:-.};
nm_bin=$gitroot/node_modules/.bin
SRC_FILES=$(git diff --staged --diff-filter=ACMTUXB --name-only -- '*.js') && x=1
if [ $SRC_FILES ]; then
  echo "Linting ${#SRC_FILES[@]} changed files 😁"
  $nm_bin/eslint $SRC_FILES
  echo "⚡ changed files passed linting! ⚡"
else
  echo "No files to lint 🙌"
fi
