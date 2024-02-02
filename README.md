## Overview 
This web application is designed to help you improve your typing speed by practicing typing the alphabet in order. <br>
<b>Written in React (TypeScript) </b>

https://speedrun-the-alphabet.netlify.app/

![typing](https://github.com/bartlomiejszwarc/typing-speed/assets/86133933/fb7bc2e8-2ade-49d0-b9fd-48d43853d7c5)

## Features
### Typing test
- Practice typing the alphabet in sequential order
- No need to search for input - just start typing
- Each letter has color that indicates its state:
  - ![#ea580c](https://placehold.co/15x15/ea580c/ea580c.png) active 
  -  ![#15803d](https://placehold.co/15x15/15803d/15803d.png) correct
  -  ![#7f1d1d](https://placehold.co/15x15/7f1d1d/7f1d1d.png) mistake
- To start a new test after finishing previous one, simply start typing again
### Real-time statistics
- There are three statistics available - mistakes, accuracy and characters per minute, which are real-time calculated
- Statistics reset after finishing each test (or after clicking restart button)


### Stopwatch
- Track elapsed time via available stopwatch
- Begin new typing test whenever you want by pressing restart button

![refreshing](https://github.com/bartlomiejszwarc/typing-speed/assets/86133933/f41a58d5-703f-4d4a-8b69-91d72accda3c) <br>



### Top scores and average statistics
- User is allowed to:
  - See their personal five best scores among all attempts 
  - Check average statistics (mistakes, accuracy and CPM) calculated from all stored records
  - Delete all previous records
  
![deleting](https://github.com/bartlomiejszwarc/typing-speed/assets/86133933/6d9fdb7f-791a-43e6-aecd-00763a0c3b9f)

### Credits
- Gauge chart: https://github.com/Martin36/react-gauge-chart
