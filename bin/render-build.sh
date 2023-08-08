#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate

# clean
rm -rf public
# build
npm install --prefix client && npm run build --prefix client
# postbuild
cp -a client/build/. public/