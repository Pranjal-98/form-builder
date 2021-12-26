# Getting Started with Form Builder

Form Builder is a project where you can create your form just by selecting the elements you need from the list. 

## Primary libraries used in this project:

- React Router
- React Bootstrap
- React beautiful dnd

## How to setup and run:

```
npm install
npm start
```

## Project Flow:
- **Sidebar** : This contains all the elements provided to add in the form, search bar where you can search for element.
- **Modal** : Here you have to fill the required data for the particular element.
  - Features present in Modal:
    - Adding required data for the element like label, placeholder etc.
    - Disabled/ Non- Disabled
    - Adding/ Updating options for drop-down, radio, checkbox, switch.
    - Choose type of Button (Primary, Secondary, Warning, Link,etc.) and input (Email, password, number)
    
- **Generated Form** : It will contain the spawned elements with their look after selecting the features from Modal. Here you can do the following actions-
  - Edit
  - Remove
- **Form Preview** : On selection of **Form Preview** switch, you can see the final look of your form.
    
    
