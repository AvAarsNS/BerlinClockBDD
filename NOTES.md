Atomic behaviors:

# Determine if the top light should blink based on the evenness of the amount of seconds

💡1 --> O
💡2 --> Y

# Bottom row: determine which lights should be blinking based on the amount of minutes

💡 0 --> OOOO
💡 1 --> YOOO
💡 2 --> YYOO
💡 3 --> YYYO
💡 4 --> YYYY
💡 7 --> YYOO

# Third row: determine which lights should be blinking based on the amount of minutes, divided by 5

0  --> OOOOOOOOOOO 💡
1  --> OOOOOOOOOOO 💡
5  --> YOOOOOOOOOO 💡
10 --> YYOOOOOOOOO 💡
15 --> YYROOOOOOOO 💡
20 --> YYRYOOOOOOO 💡
25 --> YYRYYOOOOOO 💡
30 --> YYRYYROOOOO 💡
35 --> YYRYYRYOOOO 💡
40 --> YYRYYRYYOOO 💡
45 --> YYRYYRYYROO 💡
50 --> YYRYYRYYRYO 💡
55 --> YYRYYRYYRYY 💡

# Second row: determine which lights should be on based on the number of hours divided by 4
0 --> OOOO 💡
1 --> ROOO 💡
2 --> RROO 💡
3 --> RRRO 💡
4 --> RRRR 💡
5 --> OOOO 💡
6 --> ROOO 💡
7 --> RROO 💡
8 --> RRRO 💡
9 --> RRRR 💡
10 --> OOOO 💡
11 --> ROOO 💡

# Top row: determine which lights should be on. A light turns on for every 5 hours.
0 --> OOOO 💡
1 --> OOOO 💡
2 --> OOOO 💡
5 --> ROOO 💡
6 --> ROOO 💡
10 --> RROO 💡
14 --> RROO 💡
15 --> RRRO 💡
17 --> RRRO 💡
18 --> RRRO 💡
20 --> RRRR 💡
24 --> RRRR 💡

# Create Light String: create a light string that is compatible with all rows of the Berlin Clock

Primary: 🟡
Secondary: 😡
Interval: 3
11
NumberOfLights: 11 --> 🟡🟡😡🟡🟡😡🟡🟡😡🟡🟡