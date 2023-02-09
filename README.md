Following this tutorial:
```
https://docs.djangoproject.com/en/4.1/intro/tutorial01/
```

To install dependencies
```
pip install -r requirements.txt`
```

To source the virtual environment
```
source env/bin/activate
```

Run `npm run build` in the '/web' directory to build the react app. This is stored
in django_bees/static, from whence the serve_frontend app serves it.

From the `django_bees` project folder the following will rebuild the react app
and start the django dev server
```
../web && npm run build && ../django_bees/ && python manage.py runserver
```
