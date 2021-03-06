define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/all/admin/",
    "title": "Afficher tous les  admins",
    "version": "1.0.0",
    "name": "Affiche_admin",
    "group": "Admin",
    "description": "<p>Pour afficher les informations des  admin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admins",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"admins : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/find/admin/by/id",
    "title": "Afficher un admin en particulier",
    "version": "1.0.0",
    "name": "Affiche_admin",
    "group": "Admin",
    "description": "<p>Pour afficher  les informations d'un  admin par son id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "\n{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n   \n{\n  \n  \"id\":1\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"admin: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/add/admin",
    "title": "Ajouter un admin",
    "version": "1.0.0",
    "name": "Ajouter_admin",
    "group": "Admin",
    "description": "<p>Pour l'ajout d'un admin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>le token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateNaissance",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"pseudo\": \"baba\",\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"password\": \"silence44\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "admin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "   HTTP/1.1 200 OK\n{\n  \"status\": \"ok\",\n  \"admin\": { \"pseudo\": \"baba\",\n \"createdAt\": 1648280820835,\n \"updatedAt\": 1648280820835,\n \"id\": 5,\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"password\": \"silence44\",\n \"role\": \"vaccinate\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"code_connection\": \"465d3124-c698-4359-a10b-f5c00fe04baa\",\n \"date_naissance\": \"20/03/1993\",\n \"status\": false,\n}\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationFormat",
            "description": "<p>Le Format est Authorization: Bearer [token].</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeader",
            "description": "<p>Aucune Authorization trouver.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>token invalide .</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Erreur survenue à l'enregistrement</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n   \"trace\": \"\"\n  \"message\" : \"Les paramètres envoyés sont invalide\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/update/admin/password",
    "title": "Modifier mot de passe d'un admin",
    "version": "1.0.0",
    "name": "Modifier_mot_de_passe_d'un_admin",
    "group": "Admin",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ancienmdp",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nouveaumdp",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"ancienmdp\": \"baba\",\n \"nouveaumdp\": \"BABA\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"mot de passe modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/update/admin/password",
    "title": "Modifier mot de passe d'un admin",
    "version": "1.0.0",
    "name": "Modifier_mot_de_passe_d'un_admin",
    "group": "Admin",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ancienmdp",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nouveaumdp",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"ancienmdp\": \"baba\",\n \"nouveaumdp\": \"BABA\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"mot de passe modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/update/admin",
    "title": "Modifier un admin",
    "version": "1.0.0",
    "name": "Modifier_un_admin",
    "group": "Admin",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateNaissance",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"pseudo\": \"baba\",\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"Admin modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/api/v1/all/admin/medecin",
    "title": "Afficher tous les medecins admin",
    "version": "1.0.0",
    "name": "Affiche_tous_les_medecins_admin",
    "group": "Admin_medecin",
    "description": "<p>Pour afficher  les informations des medecins admin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medecins",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"medecins : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin_medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/find/admin/medecin/by/id",
    "title": "Afficher un medecin admin en particulier",
    "version": "1.0.0",
    "name": "Affiche_un_medecin_admin_par_id",
    "group": "Admin_medecin",
    "description": "<p>Pour afficher  les informations d'un  medecin admin par son id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n   \n{\n  \n  \"id\":1\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medecin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"medecin: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin_medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/add/admin/medecin",
    "title": "Ajouter un Medecin admin",
    "version": "1.0.0",
    "name": "Ajouter_un_medecin_Admin",
    "group": "Admin_medecin",
    "description": "<p>Pour l'ajout d'un medecin admin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "centre",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateNaissance",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"pseudo\": \"baba\",\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"password\": \"silence44\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n \"centre\": \"2\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medecin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n    {\n    status:'ok',\n    medecin:{\"pseudo\": \"baba\",\n  \"createdAt\": 1648280820835,\n  \"updatedAt\": 1648280820835,\n  \"id\": 5,\n  \"nom\": \"BABA\",\n  \"prenom\": \"TCHAO\",\n  \"tel\": \"22893068270\",\n  \"password\": \"silence44\",\n  \"role\": \"vaccinate\",\n  \"card_id\": \"557767777767657\",\n  \"email\": \"baba@mail.com\",\n  \"code_connection\": \"465d3124-c698-4359-a10b-f5c00fe04baa\",\n  \"date_naissance\": \"20/03/1993\",\n  \"status\": false,\n  \"medecin\": 1}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationFormat",
            "description": "<p>Le Format est Authorization: Bearer [token].</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeader",
            "description": "<p>Aucune Authorization trouver.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>token invalide .</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Erreur survenue à l'enregistrement</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalide\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin_medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/update/admin/medecin/password",
    "title": "Modifier mot de passe d'un admin medecin",
    "version": "1.0.0",
    "name": "Modifier_mot_de_passe_d'un_admin_medecin",
    "group": "Admin_medecin",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ancienmdp",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nouveaumdp",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"ancienmdp\": \"baba\",\n \"nouveaumdp\": \"BABA\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"mot de passe modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin_medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/update/admin/medecin",
    "title": "Modifier un admin",
    "version": "1.0.0",
    "name": "Modifier_un_admin_medecin",
    "group": "Admin_medecin",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateNaissance",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"pseudo\": \"baba\",\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"Admin medecin modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Admin_medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/login/admin",
    "title": "Connecter un admin",
    "version": "1.0.0",
    "name": "Connecter_un_admin",
    "group": "Auth",
    "description": "<p>Pour vérifier l'identité d'un utilisateur admin</p>",
    "header": {
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n \n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"pseudo\": \"baba\",\n \n \"password\": \"silence44\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n    {\n  \"status\": \"ok\",\n  \"user\": \"12\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/login/admin/medecin",
    "title": "Connecter un admin medecin",
    "version": "1.0.0",
    "name": "Connecter_un_admin_medecin",
    "group": "Auth",
    "description": "<p>Pour vérifier l'identité d'un utilisateur admin medecin</p>",
    "header": {
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n \n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"pseudo\": \"baba\",\n \n \"password\": \"silence44\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n    {\n  \"status\": \"ok\",\n  \"user\": \"12\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/login/medecin",
    "title": "Connecter un medecin",
    "version": "1.0.0",
    "name": "Connecter_un_medecin",
    "group": "Auth",
    "description": "<p>Pour vérifier l'identité d'un utilisateur medecin</p>",
    "header": {
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n \n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"pseudo\": \"baba\",\n \n \"password\": \"silence44\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n    {\n  \"status\": \"ok\",\n  \"user\": \"12\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/login/medecin",
    "title": "Connecter un medecin",
    "version": "1.0.0",
    "name": "Connecter_un_medecin",
    "group": "Auth",
    "description": "<p>Pour vérifier l'identité d'un utilisateur medecin</p>",
    "header": {
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n \n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"pseudo\": \"baba\",\n \n \"password\": \"silence44\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n    {\n  \"status\": \"ok\",\n  \"user\": \"12\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/login/patient",
    "title": "Connecter un patient",
    "version": "1.0.0",
    "name": "Connecter_un_patient",
    "group": "Auth",
    "description": "<p>Pour vérifier l'identité d'un utilisateur patient</p>",
    "header": {
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n \n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"pseudo\": \"baba\",\n \n \"password\": \"silence44\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n    {\n  \"status\": \"ok\",\n  \"user\": \"12\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/login/patient/first/connexion",
    "title": "Connecter patient pour la première fois",
    "version": "1.0.0",
    "name": "Connecter_un_patient_pour_la_prmière_fois",
    "group": "Auth",
    "description": "<p>Pour vérifier l'identité d'un utilisateur patient</p>",
    "header": {
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \n \n \"code\": \"465d3124-c698-4359-a10b-f5c00fe04baa\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": \"ok\",\n     \"user\": \"12\",\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6MTY0ODI4NDAzNTAyNSwidXBkYXRlZEF0IjoxNjQ4Mjg0MDM1MDI1LCJpZCI6MTIsIm5vbSI6ImFkbWluIiwicHJlbm9tIjoiYWRtaW4iLCJwc2V1ZG8iOiJhZG1pbiIsInRlbCI6IjIyODkzNDEzNDIzIiwic3RhdHVzIjp0cnVlLCJyb2xlIjoiYWRtaW4iLCJjYXJkX2lkIjoiMTIzNDQ5OTk5OTk5IiwiZW1haWwiOiJnaG9zdEBtYWlsLmNvbSIsImRhdGVfbmFpc3NhbmNlIjoiMTIvMDUvMTk5OSJ9LCJpYXQiOjE2NDgyODQwNTMsImV4cCI6MTY1MDg3NjA1M30.15Y4I3ScglwO2E0vHFaxsKnwiVSvQmbD45MS1wHPptI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/v1/find/centre/by/id",
    "title": "Afficher un centre en particulier",
    "version": "1.0.0",
    "name": "Affiche_un_centre_par_son_id",
    "group": "Centre",
    "description": "<p>Pour afficher  les informations d'un  centre par son id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n   \n{\n  \n  \"id\":1\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "centre",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"centre: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Centre"
  },
  {
    "type": "post",
    "url": "/api/v1/add/centre",
    "title": "Ajouter un centre",
    "version": "1.0.0",
    "name": "Ajouter_un_centre",
    "group": "Centre",
    "description": "<p>Ajout d'un centre dans la base de données</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "long",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n\n\n \"status\": \"ok\"\n \"id\":\"1\"\n \"nom\": \"nom\",\n \"lat\": \"lat\",\n \"long\": \"long\",\n \"adminId\": \"admin\",\n \n  \n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "centre",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n  {\n  \n   \"status\": \"ok\",\n   \"centre\":{\n   \"id\":\"1\"\n   \"nom\": \"nom\",\n   \"lat\": \"lat\",\n   \"long\": \"long\",\n   \"adminId\": \"admin\",\n}\n   \n   \n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Centre"
  },
  {
    "type": "post",
    "url": "/api/v1/update/centre",
    "title": "Modifier un centre",
    "version": "1.0.0",
    "name": "Modifier_un_centre",
    "group": "Centre",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "long",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "adminId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \n \"id\":\"1\"\n \"nom\": \"nom\",\n \"lat\": \"lat\",\n \"long\": \"long\",\n \"adminId\": \"admin\",\n \n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"Centre modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Centre"
  },
  {
    "type": "post",
    "url": "/api/v1/all/medecin",
    "title": "Afficher tous les medecins",
    "version": "1.0.0",
    "name": "Affiche_medecin",
    "group": "Medecin",
    "description": "<p>Pour afficher  les informations des medecins</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medecins",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"medecins : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/find/medecin/by/id",
    "title": "Afficher un medecin en particulier",
    "version": "1.0.0",
    "name": "Affiche_medecin",
    "group": "Medecin",
    "description": "<p>Pour afficher  les informations d'un  medecin par son id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n   \n{\n  \n  \"id\":1\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medecin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"medecin: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/add/medecin",
    "title": "Ajouter un medecin",
    "version": "1.0.0",
    "name": "Ajouter_Medecin",
    "group": "Medecin",
    "description": "<p>Pour l'ajout d'un medecin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "medecin",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateNaissance",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "centre",
            "description": "<p>s</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"pseudo\": \"baba\",\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"password\": \"silence44\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n \"medecin\": 1\n \"centre\":1\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "medecin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "   HTTP/1.1 200 OK\n{\n   status:'ok',\n   medecin:{\"pseudo\": \"baba\",\n \"createdAt\": 1648280820835,\n \"updatedAt\": 1648280820835,\n \"id\": 5,\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"password\": \"silence44\",\n \"role\": \"vaccinate\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n \"status\": \"ok\",\n \"Admin_medecin\": \"1\"\n \"centre\":\"1\"}\n \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationFormat",
            "description": "<p>Le Format est Authorization: Bearer [token].</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeader",
            "description": "<p>Aucune Authorization trouver.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>token invalide .</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Erreur survenue à l'enregistrement</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "\nHTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"trace\": \"\"\n  \"message\" : \"Les paramètres envoyés sont invalide\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/update/medecin/password",
    "title": "Modifier mot de passe d'un medecin",
    "version": "1.0.0",
    "name": "Modifier_mot_de_passe_d'un_medecin",
    "group": "Medecin",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ancienmdp",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nouveaumdp",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"ancienmdp\": \"baba\",\n \"nouveaumdp\": \"BABA\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"mot de passe modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/update/medecin",
    "title": "Modifier un medecin",
    "version": "1.0.0",
    "name": "Modifier_un_medecin",
    "group": "Medecin",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateNaissance",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"pseudo\": \"baba\",\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"Medecin modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Medecin"
  },
  {
    "type": "post",
    "url": "/api/v1/find/patient/by/id",
    "title": "Afficher un patient en particulier",
    "version": "1.0.0",
    "name": "Affiche_patient",
    "group": "Patient",
    "description": "<p>Pour afficher  les informations d'un  patient par son id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n   \n{\n  \n  \"id\":1\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"patient: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Patient"
  },
  {
    "type": "post",
    "url": "/api/v1/all/patient",
    "title": "Afficher tous les patients",
    "version": "1.0.0",
    "name": "Affiche_patients",
    "group": "Patient",
    "description": "<p>Pour afficher  les informations des patients</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patients",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"patients : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Patient"
  },
  {
    "type": "post",
    "url": "/api/v1/add/patient",
    "title": "Ajouter un patient",
    "version": "1.0.0",
    "name": "Ajouter_Patient",
    "group": "Patient",
    "description": "<p>Pour l'ajout d'un patient le medecin doit renseigner les in</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Represente le nom du patient</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": "<p>Represente le prenom du patient</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "medecin",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateNaissance",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n \"medecin\": 1\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "  HTTP/1.1 200 OK\n{\n\n status: 'ok'\n patient : {\"pseudo\": \"baba\",\n\"createdAt\": 1648280820835,\n\"updatedAt\": 1648280820835,\n\"id\": 5,\n\"nom\": \"BABA\",\n\"prenom\": \"TCHAO\",\n\"tel\": \"22893068270\",\n\"password\": \"silence44\",\n\"role\": \"vaccinate\",\n\"card_id\": \"557767777767657\",\n\"email\": \"baba@mail.com\",\n\"code_connection\": \"465d3124-c698-4359-a10b-f5c00fe04baa\",\n\"date_naissance\": \"20/03/1993\",\n\"status\": false,\n\"medecin\": 1}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationFormat",
            "description": "<p>Le Format est Authorization: Bearer [token].</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeader",
            "description": "<p>Aucune Authorization trouver.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>token invalide .</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Erreur survenue à l'enregistrement</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "smsSenderError",
            "description": "<p>Le message sms n'a pas été envoyé</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"trace\" : \"\"\n  \"message\" : \"Les paramètres envoyés sont invalide\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Patient"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/update/patient/password",
    "title": "Modifier mot de passe d'un patient",
    "version": "1.0.0",
    "name": "Modifier_mot_de_passe_d'un_patient",
    "group": "Patient",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "ancienmdp",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nouveaumdp",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"ancienmdp\": \"baba\",\n \"nouveaumdp\": \"BABA\",\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"mot de passe modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Patient"
  },
  {
    "type": "post",
    "url": "/api/v1/update/patient",
    "title": "Modifier un patient",
    "version": "1.0.0",
    "name": "Modifier_un_patient",
    "group": "Patient",
    "description": "<p>Pour actualiser les informations d'une application</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prenom",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "tel",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardId",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateNaissance",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n \"pseudo\": \"baba\",\n \"nom\": \"BABA\",\n \"prenom\": \"TCHAO\",\n \"tel\": \"22893068270\",\n \"card_id\": \"557767777767657\",\n \"email\": \"baba@mail.com\",\n \"date_naissance\": \"20/03/1993\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"description : \"Patient modifier avec succès \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalides.</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalides\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Patient"
  },
  {
    "type": "post",
    "url": "/api/v1/find/vaccin/by/id",
    "title": "Afficher un vaccin en particulier",
    "version": "1.0.0",
    "name": "Affiche_vaccin",
    "group": "Vaccin",
    "description": "<p>Pour afficher  les informations d'un  vaccin par son id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"vaccin: {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccin"
  },
  {
    "type": "post",
    "url": "/api/v1/all/vaccin",
    "title": "Afficher tous les vaccins",
    "version": "1.0.0",
    "name": "Affiche_vaccins",
    "group": "Vaccin",
    "description": "<p>Pour afficher  les informations des vaccins</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccins",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"vaccins : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccin"
  },
  {
    "type": "post",
    "url": "/api/v1/add/vaccin",
    "title": "Ajouter un vaccin",
    "version": "1.0.0",
    "name": "Ajouter_un_vaccin",
    "group": "Vaccin",
    "description": "<p>Pour l'ajout d'un Vaccin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "libelle",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "maladie",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "doseRcmd",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "codeVaccin",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateExpiration",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n     \n       \"libelle\": \"ASTElkm\",\n       \"maladie\": \"corona\",\n       \"description\": \"lol\",\n       \"doseRcmd\": \"1\",\n       \"codeVaccin\": \"12\",\n       \"dateExpiration\": \"5\",\n      \n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n    {\n    status:'ok',\n    vacin: {\n        \"createdAt\": 1648534987580,\n        \"updatedAt\": 1648534987580,\n        \"id\": 3,\n        \"libelle\": \"ASTElkm\",\n        \"maladie\": \"corona\",\n        \"description\": \"lol\",\n        \"dose_rcmd\": \"1\",\n        \"code_vaccin\": \"12\",\n        \"etat_vaccin\": \"good\",\n        \"date_expiration\": \"5\",\n        \"status\": true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationFormat",
            "description": "<p>Le Format est Authorization: Bearer [token].</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeader",
            "description": "<p>Aucune Authorization trouver.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>token invalide .</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Erreur survenue à l'enregistrement</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalide\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccin"
  },
  {
    "type": "post",
    "url": "/api/v1/find/vaccination/by/id",
    "title": "Afficher une vaccination en particulier",
    "version": "1.0.0",
    "name": "Affiche_vaccination",
    "group": "Vaccination",
    "description": "<p>Pour afficher  les informations d'une  vaccination par son id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n \"id\":1\n\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccination",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"vaccination : {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccination"
  },
  {
    "type": "post",
    "url": "/api/v1/all/vaccination",
    "title": "Afficher tous les vaccinations",
    "version": "1.0.0",
    "name": "Affiche_vaccinations",
    "group": "Vaccination",
    "description": "<p>Pour afficher  les informations des vaccinations</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccinations",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"vaccinations : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccination"
  },
  {
    "type": "post",
    "url": "/api/v1/find/vaccination/by/medecin",
    "title": "Afficher une vaccination en particulier",
    "version": "1.0.0",
    "name": "Affiche_vaccinations_pour_un_medecin",
    "group": "Vaccination",
    "description": "<p>Pour afficher  les informations de  vaccination effectuer par un medecin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n\n \"id\":1\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccinations",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"vaccinations : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccination"
  },
  {
    "type": "post",
    "url": "/api/v1/find/vaccination/by/patient",
    "title": "Afficher une vaccination en particulier",
    "version": "1.0.0",
    "name": "Affiche_vaccinations_pour_un_patient",
    "group": "Vaccination",
    "description": "<p>Pour afficher  les informations de  vaccination effectuer par un patient</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n\n \"id\":1\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccinations",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"vaccinations : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccination"
  },
  {
    "type": "post",
    "url": "/api/v1/find/vaccination/by/vaccin",
    "title": "Afficher une vaccination en particulier",
    "version": "1.0.0",
    "name": "Affiche_vaccinations_pour_un_vaccin",
    "group": "Vaccination",
    "description": "<p>Pour afficher  les informations de  vaccination effectuer par un vaccin</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n\n \"id\":1\n\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccinations",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "\n HTTP/1.1 200 OK\n\n{\n  \"status\": \"ok\",\n  \"vaccinations : [{}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Une erreur est survenue à la recupération des données</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"internalError\",\n  \"trace\":\"\"\n  \"message\" : \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccination"
  },
  {
    "type": "post",
    "url": "/api/v1/add/vaccination",
    "title": "Ajouter une vaccination",
    "version": "1.0.0",
    "name": "Ajouter_une_vaccination",
    "group": "Vaccination",
    "description": "<p>Pour l'ajout d'un Vaccination</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token unique de l'utilisateur disponible quand l'utilisateur se log  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Exemple:",
          "content": "{\n  \"Content-Type\": \"application/x-www-form-urlencoded\",\n  \"Authorization\": \"Bearer token\",\n  \"Accept\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dosePrise",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "code_enrollement",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "datePrise",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateExpirationPrise",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "medecin",
            "description": ""
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "vaccin",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body-Exemple:",
          "content": "\n    \n{\n     \n       \"dosePrise\": \"ASTElkm\",\n       \"code_enrollement\": \"corona\",\n       \"datePrise\": \"lol\",\n       \"dateExpirationPrise\": \"1\",\n       \"patient\": \"12\",\n       \"medecin\": \"5\",\n         \"vaccin\": \"5\",\n      \n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vaccination",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Reponse de succès :",
          "content": "    HTTP/1.1 200 OK\n    {\n    status:'ok',\n    vaccination: {\n        \n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationFormat",
            "description": "<p>Le Format est Authorization: Bearer [token].</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeader",
            "description": "<p>Aucune Authorization trouver.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidToken",
            "description": "<p>token invalide .</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataVerificationError",
            "description": "<p>Les paramètres envoyés sont invalide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalError",
            "description": "<p>Erreur survenue à l'enregistrement</p>"
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>Service   indisponible .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple reponse d'échec :",
          "content": "HTTP/1.1 200 \n{\n  \"status\": \"ko\",\n  \"name\": \"DataVerificationError\",\n  \"message\" : \"Les paramètres envoyés sont invalide\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./doc 2.js",
    "groupTitle": "Vaccination"
  }
] });
