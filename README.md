# Reminders
## What It Is
**Reminders** is an app that allows users to create web reminders. 
Users can:
- create reminders using a calendar widget
- modify reminders
- delete reminders

## Usage
### Clone Down
To clone down run ```git clone https://github.com/tywood01/reminders.git```

Then run ```uv sync```

Finally to handle migrations run
```
cd backend/
uv run manage.py migrate
```

### Run App
To run the app
1. Run
```
cd backend/
uv run manage.py runserver
```
2. Run
```
cd ..frontend/
npm run dev
```
3. Then connect to the local host link provided in the terminal.

## Contact Info
### Tytus Woodburn : tytus.woodburn@student.cune.edu
### Andrew Fynaardt : andrew.fynaardt@student.cune.edu
### Reagan Zierke : reagan.zierke@student.cune.edu
