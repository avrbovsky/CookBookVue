# Cookbook

## API Documentation

Documentation of API used for this project.

API URL: **https://exercise.cngroup.dk/api**

### Types

Types are derived from the API results, some field might be missing!

#### Recipe

```
{
  _id: string;
  title: string;
  preparationTime?: number;
  servingCount?: number;
  directions?: string;
  ingredients?: Ingredient[];
  slug?: string;
  lastModifiedDate?: string;
  isMarkdown?: boolean;
  sideDish?: string;
  __v?: number;
}
```

#### Ingredient

```
{
  _id: string;
  name: string;
  amount?: number;
  amountUnit?: string;
  isGroup?: boolean;
}
```

### Endpoints

#### /recipes

- Method: **GET**
- Returns: List all available recipes

#### /recipes/:slug

- Method: **GET**
- :slug can be replaced with :id
- Returns: All information available about recipe (based on slug or id)

#### /recipes/ingredients

- Method: **GET**
- Returns: List of all ingredients avaliabel, lists only their names in string array.

#### /recipes/side-dishes

- Method: **GET**
- Returns: List of all side-dishes, string array.

#### /recipes

- Method: **POST**
- Content-type: application/json
- Creates a new recipe
- Required fields and default values:

  ```
  {
    title: string;
    preparationTime?: number;
    servingCount?: number;
    directions?: string;
    ingredients?: Omit<Ingredient, '_id'>[];
    sideDish?: string;
  }
  ```

- Returns: Simplified recipe object, same that is returned in recipe list or error.

#### /recipes/:id

- Method: **POST**
- Content-type: application/json
- Edits an existing recipe
- Only edited fields can be sent
- Returns: Simplified recipe object, same that is returned in recipe list or error.

#### /recipes/:id

- Method: **DELETE**
- Deletes existing recipe
- Returns: 200 OK
