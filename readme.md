init knex
```bash
npx knex init
```

create migration
```bash
npx knex migrate:make cars_table
```

run migration
```bash
npx knex migrate:latest
```

drop migration
```bash
npx knex migrate:rollback
```

create seeds
```bash
npx knex seed:make cars_data
```

run seed
```bash
npx knex seed:run
```
