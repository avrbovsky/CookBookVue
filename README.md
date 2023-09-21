# Cookbook

## Project

This repo is an example application used for Vue learning purpose. It does NOT focus on any styling or UX perspective features. Its main goal is to provide guidance how to setup Vue application with modern standards and headless libs. You can find API documentation in the API.md file. Keep in mind that `main` branch of this repo is completed example of what you should build. Please use `skeleton` branch as your starting point.

Cookbook is a simple application to view, create, edit or delete recipes. Each recipe has its own ingredients, steps to prepare and other info. If you want to try the application you can use either `main` branch of this repo or [public version](https://exercise.cngroup.dk/), which is written in React, but you can inspire with the visuals there as well.

## Requirements

- Node 18+
- Yarn

## Setup

- Vue
- Typescript, ESlint, Prettier, EditorConfig
- Tailwind (optional)
- I18next
- Headless UI
- Vue Query
- Vue Table
- Vee-Validate (forms)

## Steps to learn

### Before start

Before you start your Vue journey we recommend to watch Udemy course that will guide you through the basics.

- [Udemy Course](https://ciklum.udemy.com/course/the-vue-3-bootcamp-the-complete-developer-guide)

### Task #1

- Copy `skeleton` branch as first starting point
- Add list of recipes
- Add search input that will filter list of recipes

### Task #2

- Add Router to the app
- Create home route on `/` and detail on `/detail/:id`
- Add link from recipe card on the list to the detail
- Load BE data on the detail and render them

### Task #3

- Get familiar with form lib [Vee-Validate](https://vee-validate.logaretm.com/v4/)
- Add new route for creating recipes `/add`
- Create reusable component for creating recipes
- Use the component for editation of created recipes
- Add validation for `title`, `directions` and `preparationTime` as mandatory.
- After recipe creation, the app will redirect to its detail
- After recipe editation, the app will redirect to its detail and refetch data (to sync with BE)

### Task #4

- Create persisted store for favourite recipes with Pinia
- Add option to add/remove recipe to/from favourites list
- Add button to toggle between all and favourites recipes on the list view
- Add option to delete recipe in recipe detail view

### Task #5 (optional)

- Create reusable Table component
- Add toggle to display either grid of recipes and list (with the table)

## Contacts in Ciklum WE (former CN group) for more info

- Lukáš Kadoch (lkad@ciklum.com)
- Jiří Kříž (jik@ciklum.com)
