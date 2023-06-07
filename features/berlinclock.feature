Feature: Berlin Clock - see features/berlinclock.feature for the full documentation
    The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.
    The clock is read from the top row to the bottom.
    The top row of four red fields denote five full hours each,
    alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format.
    The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past)
    and the bottom row has another four yellow fields, which mark one full minute eac
    The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Scenario: At 13:59:02 the top light should blink, in the first row the first 2 lights should be on, in the 2nd row the first 3 lights should be on and all lights should be on in the third and bottom row
    Given a german citizen is standing in front of the Berlin Clock
    When the current time is 13:59:02
    Then the round yellow light at the top blinks
    And the top row shows 🔴🔴⚫⚫
    And the second row shows 🔴🔴🔴⚫
    And the third row shows 🟡🟡🔴🟡🟡🔴🟡🟡🔴🟡🟡
    And the bottom row shows 🟡🟡🟡🟡