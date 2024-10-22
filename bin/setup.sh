#!/usr/bin/env bash
set -e

brew install asdf

asdf plugin add nodejs
asdf plugin add yarn
asdf install

yarn install
