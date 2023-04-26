Feature: Berlin Clock
The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.
The clock is read from the top row to the bottom.
The top row of four red fields denote five full hours each,
alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format.
The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past)
and the bottom row has another four yellow fields, which mark one full minute eac
The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Scenario: At 00:00:01, all lights are off
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:00:01
    Then the round yellow light at the top is off
    And all lights in the top row are off
    And all lights in the second row are off
    And all lights in the third row are off
    And all lights in the bottom row are off

Scenario: At 00:00:02, top light is on, all other lights are off
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:00:02
    Then the round yellow light at the top is on
    And all lights in the top row are off
    And all lights in the second row are off
    And all lights in the third row are off
    And all lights in the bottom row are off

Scenario: At 00:01:01, bottom row first light blinks
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:01:01
    Then the round yellow light at the top is off
    And all lights in the top row are off
    And all lights in the second row are off
    And all lights in the third row are off
    And only the first light in the bottom row is yellow

Scenario: At 00:02:01, bottom row first two lights are yellow
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:02:01
    Then the round yellow light at the top is off
    And all lights in the top row are off
    And all lights in the second row are off
    And all lights in the third row are off
    And the first two lights in the bottom row are yellow

Scenario: At 00:03:01, bottom row first three lights are yellow
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:03:01
    Then the round yellow light at the top is off
    And all lights in the top row are off
    And all lights in the second row are off
    And all lights in the third row are off
    And the first three lights in the bottom row are yellow

Scenario: At 00:04:01, bottom row all lights are yellow
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:04:01
    Then the round yellow light at the top is off
    And all lights in the top row are off
    And all lights in the second row are off
    And all lights in the third row are off
    And all the lights in the bottom row are yellow

Scenario: At 00:01:00, top light is yellow and on the bottom row one light is yellow
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:01:00
    Then the round yellow light at the top is on
    And all lights in the top row are off
    And all lights in the second row are off
    And all lights in the third row are off
    And only the first light in the bottom row is yellow

Scenario: At 00:05:01, only the first light in the third row is yellow
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:05:01
    Then the round yellow light at the top is off
    And all lights in the top row are off
    And all lights in the second row are off
    And only the first light in the third row is yellow
    And all lights in the bottom row are off

Scenario: At 00:45:01, the first 9 lights in the third row are on, each third light is red
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:45:01
    Then the round yellow light at the top is off
    And all lights in the top row are off
    And all lights in the second row are off
    And the third row shows 🟡🟡🔴🟡🟡🔴🟡🟡🔴⚫⚫
    And all lights in the bottom row are off

Scenario: At 00:59:02 the top light should blink and all lights should be on in the third and bottom row
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 00:59:02
    Then the round yellow light at the top is on
    And all lights in the top row are off
    And all lights in the second row are off
    And the third row shows 🟡🟡🔴🟡🟡🔴🟡🟡🔴🟡🟡
    And all the lights in the bottom row are yellow

Scenario: At 03:59:02 the top light should blink, in the 2nd row the first 3 lights should be on and all lights should be on in the third and bottom row 
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 03:59:02
    Then the round yellow light at the top is on
    And all lights in the top row are off
    And the second row shows 🔴🔴🔴⚫
    And the third row shows 🟡🟡🔴🟡🟡🔴🟡🟡🔴🟡🟡
    And all the lights in the bottom row are yellow

Scenario: At 03:59:02 the top light should blink, in the 2nd row the first 3 lights should be on and all lights should be on in the third and bottom row 
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 03:59:02
    Then the round yellow light at the top is on
    And all lights in the top row are off
    And the second row shows 🔴🔴🔴⚫
    And the third row shows 🟡🟡🔴🟡🟡🔴🟡🟡🔴🟡🟡
    And all the lights in the bottom row are yellow