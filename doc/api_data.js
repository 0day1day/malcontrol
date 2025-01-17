define({ api: [
  {
    "type": "get",
    "url": "/api/malwareh",
    "title": "returns the number of malwares per hour",
    "name": "Malware_per_H",
    "version": "0.1.0",
    "group": "advanceStats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "field": "String",
            "optional": false,
            "description": "representing json object"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"status\": \"ok\", \n    \"current\":33.75, \n    \"max\":35.291666666666664\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/advances.js"
  },
  {
    "type": "get",
    "url": "/api/malwaresourcestats",
    "title": "returns the number of malwares per scraped sources",
    "name": "Number_of_Malware_per_scraped",
    "version": "0.1.0",
    "group": "advanceStats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "field": "Array",
            "optional": false,
            "description": "representing json object"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n  {\n   \"source\": \"malwr.com\",\n   \"count\": 64\n   },\n   {\n    \"name\": \"malwr.com\",\n    \"count\": 4000\n   }\n]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/advances.js"
  },
  {
    "type": "get",
    "url": "/api/threatsresourcestats",
    "title": "returns the number of threats  per scraped sources",
    "name": "Number_of_Threats_per_scraped",
    "version": "0.1.0",
    "group": "advanceStats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "field": "Array",
            "optional": false,
            "description": "representing json object"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n  {\n   \"source\": \"urlquery\",\n   \"count\": 64\n   },\n   {\n    \"name\": \"phishtank\",\n    \"count\": 4000\n   }\n]\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/advances.js"
  },
  {
    "type": "get",
    "url": "/api/threatsh",
    "title": "returns the number of threats per hour",
    "name": "Threats_per_H",
    "version": "0.1.0",
    "group": "advanceStats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "field": "String",
            "optional": false,
            "description": "representing json object"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n    \"status\": \"ok\", \n    \"current\":33.75, \n    \"max\":35.291666666666664\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/advances.js"
  },
  {
    "type": "get",
    "url": "/api/malware",
    "title": "returns the malwares between specific dates",
    "name": "Malware",
    "version": "0.2.0",
    "group": "basicstats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fyear",
            "optional": false,
            "description": "From Year"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "{JSON",
            "optional": true,
            "description": "}] JSon Array object representing Malware"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n{\n\"_id\": \"533ec33ac7c0c23b6460a497\",\n\"alerts\": \"37\",\n\"city\": \"Denver\",\n\"country\": \"US\",\n\"desc\": \"PE32 executable (GUI) Intel 80386, for MS Windows\",\n\"ids\": \"48\",\n\"ip\": \"174.128.255.229\",\n\"linkToReport\": \"https://malwr.com/analysis/M2EwODc5YTRlZjQ4NDZjYmI3YjQ4YWQxNTY0NTU5ZTE/\",\n\"ll\": \"39.7525,-104.9995\",\n\"md5\": \"8261b051340baf1d3077bd6bdf8b301e\",\n\"name\": \"WMS.exe\",\n\"scraped_source\": \"malwr.com\",\n\"timestamp\": \"April 4, 2014, 8:36 a.m.\",\n\"modified\": \"2014-04-04T14:57:13.748Z\",\n\"geoLoc\": true\n},\n{\n\"_id\": \"533ec33ac7c0c23b6460a497\",\n\"alerts\": \"37\",\n\"city\": \"Denver\",\n\"country\": \"US\",\n\"desc\": \"PE32 executable (GUI) Intel 80386, for MS Windows\",\n\"ids\": \"48\",\n\"ip\": \"174.128.255.229\",\n\"linkToReport\": \"https://malwr.com/analysis/M2EwODc5YTRlZjQ4NDZjYmI3YjQ4YWQxNTY0NTU5ZTE/\",\n\"ll\": \"39.7525,-104.9995\",\n\"md5\": \"8261b051340baf1d3077bd6bdf8b301e\",\n\"name\": \"WMS.exe\",\n\"scraped_source\": \"malwr.com\",\n\"timestamp\": \"April 4, 2014, 8:36 a.m.\",\n\"modified\": \"2014-04-04T14:57:13.748Z\",\n\"geoLoc\": true\n}\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/getmaplic",
    "title": "returns the license key for map",
    "name": "Maps",
    "version": "0.0.1",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "License",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"license\": \"asda123-we-1658jkgjf5\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/numberofmalware",
    "title": "returns the number of malwares between specific dates",
    "name": "NumberOfMalware",
    "version": "0.2.0",
    "group": "basicstats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fyear",
            "optional": false,
            "description": "From Year"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of Malware between Dates"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"numberofmalware\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/numberofthreats",
    "title": "returns the number of threats between specific dates",
    "name": "NumberOfThreat",
    "version": "0.2.0",
    "group": "basicstats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fyear",
            "optional": false,
            "description": "From Year"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of Threats between Dates"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"numberofthreat\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/threats",
    "title": "returns the threats between specific dates",
    "name": "Threat",
    "version": "0.2.0",
    "group": "basicstats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fyear",
            "optional": false,
            "description": "From Year"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "field": "{JSON",
            "optional": true,
            "description": "}] Json Objects"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   \n{\n\"_id\": \"531b3dbad375ff1e9a78f8b4\",\n\"url\": \"http://richiesburgerurge.com/ForumRetrieve.aspx?ForumID=683&amp;TopicID=152063&amp;NoTe (...)\",\n\"timestamp\": \"2014-03-08 16:55:16\",\n\"ip\": \"54.236.189.64\",\n\"alerts\": \"0 \",\n\"ids\": \" 0\",\n\"scraped_source\": \"urlquery\",\n\"country\": \"US\",\n\"city\": \"Ashburn\",\n\"region\": \"VA\",\n\"ll\": \"39.0437,-77.4875\",\n\"__v\": 0,\n\"modified\": \"2014-03-08T15:56:42.941Z\"\n}\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Missing Parameters\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/topcountriesthreats",
    "title": "Request to obtain the top countries threats list",
    "name": "TopCountries",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "in top country"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of threats"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"country\": \"EN\",\n     \"score\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/topcountriesmalware",
    "title": "Request to obtain the top malware countries list",
    "name": "TopCountries",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "in top country"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of malware"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"country\": \"EN\",\n     \"score\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/topcountriesphishers",
    "title": "Request to obtain the top countries phishers list",
    "name": "TopCountries",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Country",
            "optional": false,
            "description": "in top country"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "of threats"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"country\": \"EN\",\n     \"score\": \"20\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/totalmalware",
    "title": "Request to obtain total number of malwar",
    "name": "TotalMalware",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Totals",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"totals\": \"3000\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/totalphishers",
    "title": "Request to obtain total number of phinshers",
    "name": "TotalPhishers",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Totals",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"totals\": \"3000\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  },
  {
    "type": "get",
    "url": "/api/totalthreats",
    "title": "Request to obtain total number threats",
    "name": "TotalThreats",
    "version": "0.2.0",
    "group": "basicstats",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "Totals",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"totals\": \"3000\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "InternalError",
            "optional": false,
            "description": "The Servers had some serious problems, contact mramilli@gmail.com"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"status\" : \"error\",\n     \"message\": \"Internal Error\"\n   }\n"
        }
      ]
    },
    "filename": "routes/basic.js"
  }
] });