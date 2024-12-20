var config_data = `
{
  "dataFormat": "tsv",
  "title": "2024 Central Valley Regional Scouting System",
  "page_title": "scout",
  "checkboxAs": "YN",
  "prematch": [
    { "name": "Scouter",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "pr": "Practice<br>",
        "qu": "Qualification<br>",
        "pl": "Playoff"
      },
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Event(Locked)",
      "code": "e",
      "type": "event",
      "defaultValue": "CAFR",
      "required": "true",
      "disabled": "true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "LeaveStartingZone",
      "type": "bool"
    },
    { "name": "Pre Load",
      "code": "preLoad",
      "type": "radio",
      "choices": {
        "Speaker": "Speaker",
        "AMP": "AMP",
        "None": "None"
      }
    },
    { "name": "Speaker Tried",
      "code": "autoSpeakerTried",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "autoSpeakerScores",
      "type": "counter"
    },
    { "name": "Amp Tried",
      "code": "autoAmpTried",
      "type": "counter"
    },
    { "name": "Amp Scores",
      "code": "autoAmpScores",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Speaker Tried",
      "code": "teleopSpeakerTried",
      "type": "counter"
    },
    { "name": "Speaker Scores(UnAmplified)",
      "code": "teleopSpeakerScoresUnAmplified",
      "type": "counter"
    },
    { "name": "Speaker Scores(Amplified)",
      "code": "teleopSpeakerScoresAmplified",
      "type": "counter"
    },
    { "name": "Amp Tried",
      "code": "teleopAmpTried",
      "type": "counter"
    },
    { "name": "Amp Scores",
      "code": "teleopAmpScores",
      "type": "counter"
    },
    { "name": "Defence Times",
      "code": "defenceTimes",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Park",
      "code": "park",
      "type": "bool"
    },
    { "name": "Onstage",
      "code": "Onstage",
      "type": "radio",
      "choices": {
        "Yes": "Yes",
        "fail": "fail",
        "Untried": "Untried"
      }
    },
    { "name": "Harmony",
      "code": "harmony",
      "type": "radio",
      "choices": {
        "Yes": "Yes",
        "fail": "fail",
        "Untried": "Untried"
      }
    },
    { "name": "Trap",
      "code": "trap",
      "type": "radio",
      "choices": {
        "Yes": "Yes",
        "fail": "fail",
        "Untried": "Untried"
      }
    }
  ],
  "postmatch": [
    { "name": "Foul",
      "code": "foul",
      "type": "counter"
    },
    { "name": "Tech Foul",
      "code": "techFoul",
      "type": "counter"
    },
    { "name": "Disabled",
      "code": "disabled",
      "type": "bool"
    }
  ]
}`;
