# Noorsoft for operators

Noorsoft is an application for solving customer problems.  
https://noorsoft-internship-back.web.app

#### Quick login to the web application:  
**Email:** fast@fast.ru  
**Password:** Fast1234

## Brief information

### Stack
TypeScript, React, Redux-toolkit, Redux-saga, Firebase, Ant Design, Formik, ESLint, Jest, Prettier...

### What does the Noorsoft web application solve?
Noorsoft web application is part of [Noorsoft-Mobile](https://github.com/krilpil/noorsoft-mobile "Mobile application for client").  
A web application is an interface for interacting with clients who have any difficulties.  

### What is Noorsoft-Mobile?

[Noorsoft-Mobile](https://github.com/krilpil/noorsoft-mobile "Mobile application for client") is an integral part of the overall Noorosft system.  
Only in this application customers can ask questions to the support service.  

## How does it work?

### The first stage

The user has a problem and needs to contact the manager to get help. To do this, he downloads Noorsoft-Mobile. Passes authorization 
or registration in the system. Formulates the problem and writes to the support chat.

![Login screen](https://imageup.ru/img51/4023135/snimok-ekrana-2022-09-14-v-183804.jpg "Login screen")
![Signup screen](https://imageup.ru/img61/4023136/snimok-ekrana-2022-09-14-v-184709.jpg "Signup screen")
![Home screen](https://imageup.ru/img117/4023147/snimok-ekrana-2022-09-14-v-190246.jpg "Home screen")

### The second stage

At the other end of the wire, the operator sees this message and puts the client into active mode. This means that the client's 
problem has been taken into consideration. It is very important to understand that now only one operator sees this message. 
Because he switched it to activity mode.

![The first message](https://imageup.ru/img144/4023151/snimok-ekrana-2022-09-14-v-190428.jpg "The first message")
![Dialog with the user](https://imageup.ru/img275/4023159/snimok-ekrana-2022-09-14-v-190822.jpg "Dialog with the user")


### The third stage

Depending on how the dialogue with the client went, the operator can transfer it to separate categories of messages - saved or closed. 
The categories of messages will be described below.

![Ending the dialog](https://imageup.ru/img298/4023161/snimok-ekrana-2022-09-14-v-191229.jpg "Ending the dialog")

## Message categories

The message is divided into 4 categories:

### Pending

The "Pending" category contains messages from customers who have not yet been accepted by operators. All operators see these messages.

### Active

The "Active" category contains messages from clients that the operator has accepted for work. These messages are seen only by the operator
who received these messages. In this category, the main discussions with the client are conducted.

### Saved

The "Saved" category contains messages from clients that the operator has saved for further work. These messages are seen only by 
the operator who received these messages. This category is intended for those moments when the operator is forced to postpone solving
problems due to any reason. 

### Closed

The "Closed" category contains messages from clients that the operator has saved for further work. These messages are seen only by the operator
who received these messages. This category is intended for completed dialogs.

## How does the search work?

The search searches for posts in separate categories. To select this category, click on one of the icons below the search bar.
Each icon means the status of dialogs: pending, active, saved, close. The search is carried out only by precisely typed values. 

It is important to clarify that the dialog searches not in the dialog, but in a variety of dialogs of the selected category.
