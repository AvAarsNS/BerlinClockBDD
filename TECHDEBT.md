Size (from small to big): 🐭🐶🐘
Business impact (from low to critical): 🤔🧨💣
Categories: security, duplication, coverage, code smells (not compliant with best practices), maintainability, readability

- Give all magic numbers a name 🎉
- Turning the lights on based on number of on/off lights can be refactored to a seperate function
- Extract out the O/Y/R strings to constants so they can be named
- colourOfLightOnInThirdRow can be made more readable
- turnOnLightsInThirdRow can be made more readable, maybe with the separate function for turning on the lights
- Deduplicate functions/constants



---


# TODO

| Size | Impact | Category     | Action
|------|--------|--------------|--------
| 🐭   | 🧨     | Code smell   | Convert O/Y/R to constants 🎉
| 🐶   | 🧨     | Duplication  | Create function turningTheLightsOn to inject into turnOnLights 🎉