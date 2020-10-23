#                   API ASTRAL MAP

### Rotas:

#### POST :
 - /api/postAstralData
 -- *Body*:
```json=
{
    "name:" : "Joao das Neves"
    "email" : "user@gmail.com"
    "dataNas": "02/02/2002"
    "horaNas": "8:5"
    "lat": "-18.878787"
    "long": "-17.545448"
}

```
 -- *Response*:
    CodeStatus: 200

 ```
 {
     "signo":"Aries"
     "lua" : "Peixes"
     "asc" : "Capricornio"
     "venus" : "Libra"
 }
 ```


#### POST :

- /api/sinastria
    
  -- *Body:*

  ```
    {
        user: {
            "signo":"sagitario"
            "ascendente":"peixes"
            "venus":"aquario"
        },
        terget :{
            "signo":"sagitario"
            "ascendente":"peixes"
            "venus":"aquario"
        }

    }

  ```

-- *Response*

```
{
    sinastria: 85.0
    text: "Esses signos se dao muito bem na area das finanças"
}
```