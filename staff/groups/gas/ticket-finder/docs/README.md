# Ticket Finder App

## Introduction

This application lets you find, save and access a link to buy tickets for events in Spain searching by keyword or field (music, sports). You can add and delete favourite events to your favourites list.
It was developed as a front-end project for the Skylab Coders bootcamp (Barcelona, 2018). The objective was to apply the following technologies in a real-life application:

## Functional Description

### Use cases diagram

To use this application the user needs to register and login. The application lets the user find, save and access a link to buy tickets for events in Spain searching by keyword or field (music, sports). The user can click on an event for more information. The application also displays three random clickable events when accessing the Home page. In addition, the user can add events to a list of favourite events and delete them later on.

![Use cases](images/use-cases.png)

## Activity Diagram

The application has two main activities: search for an event and save an event in a favourites list. You can click on an event for more information. With regard to the favourites list, you can also delete the event any time.

![Use cases](images/activity-diagram.png)

## Block diagram
The front end of the application was built using React. The back end is connected to 2 APIs: the first one to manage the users and store the favourite events of each user, and the second one to retrieve the information from all the available events that are shown to the user.

![Block Diagram](images/block-diagram.png)

## Components Diagram
The application has some react components, the business logic and the two APIs used: Ticketmaster and Skylabcoders.

![Components Diagram](images/components-diagram.png)

## Sequence Diagram
The most significant tasks of the application are those that use the APIs. Skylab Coders API is used to save the user data (for register and login purposes) and the user’s favourites list. Ticketmaster API is used to search for events and display its details when an event is clicked.

![Components Diagram](images/sequence-diagram-1.png)

![Components Diagram](images/sequence-diagram-2.png)




## Entity Relation Diagram
![Data diagram](images/data-diagram.png)

## Technology Stack

* HTML
* CSS
* Javascript (ES6)
* React
* React Router
* MD Bootstrap React
* APIs
