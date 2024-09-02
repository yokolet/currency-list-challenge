# README

This is a template for Ruby on Rails and Vue.js.

### Prerequisite
- PostgreSQL
- Bun

### How to use
1. clone or download the repo
2. create a repository on GitHub/GitLab/etc and change the remote origin: `git remote set-url origin [the repo url]`
3. change database names\
    edit config/database.yml
4. change the title\
    edit app/views/layout/application.html.erb
5. install packages\
    `bundle install`\
    `bun install`
6. setup database: `bundle exec rails db:create` or `bundle exec rails db:setup`
7. create database schema file: `bundle exec rails db:migrate`
8. start server: `bin/dev`
9. create an application
