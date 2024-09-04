# Currency List Challenge -- on Ruby on Rails

### Prerequisite

- PostgreSQL
- Bun (yarn or other package management tools can be used)

### How to Use

1. clone or download this repo
2. install gems and packages\
    `bundle install`\
    `bun install` (or `yarn install`)
3. setup database\
    `bundle exec rails db:setup`
4. start server\
    `bin/dev`
5. go to url that is from Rails, not vite\
    example: http://localhost:3100


### Front-end code
```bash
app/frontend
├── App.vue
├── assets
│   └── logo.svg
├── components
│   ├── Currency.vue
│   └── CurrencyList.vue
├── entrypoints
│   ├── application.ts
│   └── index.css
├── router
│   └── index.ts
├── stores
│   └── currency.ts
└── views
    └── HomeView.vue

7 directories, 9 files
```
