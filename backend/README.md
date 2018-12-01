# Fitness-Backend

## Model

### Variante 1: Festes Model

```json
[
  {
    "started": 1543402376,
    "units": [
      {
        "name": "Bench Press",
        "repetitions": 20,
        "accomplishment": 35,
        "accomplishmentUnit": "kg",
        "comment": "Gewicht je Seite"
      },
      {
        "name": "Laufband",
        "accomplishment": 35,
        "accomplishmentUnit": "kg",
        "comment": "Gewicht je Seite"
      }
    ]
  }
]
```

### Variante 2: Generisches Model

```json
[
  {
    "started": 1543402376,
    "units": [
      {
        "name": "Kurs",
        "customFields": [
          {
            "key": "Dauer",
            "value": "45 min."
          },
          {
            "key": "Kalorien verbrannt (ca.)",
            "value": "220"
          }
        ]
      }
    ]
  }
]
```
