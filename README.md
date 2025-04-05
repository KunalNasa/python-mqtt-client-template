# Python MQTT Client Template

This project is a part of the [Creating a Template Tutorial](https://www.asyncapi.com/docs/tools/generator/generator-template) and it was created while learning and contributing to [AsyncAPI Generator](https://github.com/asyncapi/generator).
The project uses asyncapi v3 and supports generator version: ">=1.3.0 <3.0.0"

---
## Structure
```
├── components
│   ├── Constructor.js
│   ├── DeclareClass.js
│   ├── FileHeader.js
│   ├── InitializeBroker.js
│   └── TopicFunction.js
├── template
│   └── index.js
├── test
│   ├── __fixtures__
│   │   └── asyncapi.yml
│   ├── integration.test.js
│   └── test.py
├── .gitignore
├── package-lock.json
├── package.json
```

- **`components/`**: All the components used to write and compose the template.
- **`template/index.js`**: The entry point of the template. It calls all the components to generate the client.
- **`test/__fixtures__/asyncapi.yml`**: AsyncAPI document that contains all the service definitions used for code generation.
- **`test/integration.test.js`**: Generates a Python client that connects to a local MQTT broker.
- **`test/test.py`**: Example code to test the output generated from the integration test.

---
## Prerequisites
Make sure you have the following installed on your machine:

- **Node.js** `>= 20.14.0`
- **npm** `>= 10.8.2`
- **Docker**
- **Python** `>= 3.x`

---


## Getting Started

### 1. Clone the repo

> git clone https://github.com/KunalNasa/python-mqtt-client-template.git
cd python-mqtt-client-template

### 2. Install Dependencies
> npm install

this will install all the dependencies required to run the project.

### 3. Generate the Python Client
> npm test

This will generate a Python MQTT client and save it to temp/snapshotTestResult/client.py.

### 4. Start a Local MQTT Broker Using Docker
> docker run -d --name mosquitto -p 1883:1883 eclipse-mosquitto

This will start an Eclipse Mosquitto broker locally on your machine, listening on port 1883.

### 5. Test the test.py file
> npm run start

This command will execute test/test.py and simulate messages using the generated client.

---

### Expected Output
After running the test.py file, you should see output similar to:
``` 
> python-mqtt-client-template@0.0.1 start
> python3 test/test.py

Temperature drop detected 67593426 sent to temperature/dropped
Temperature rise detected 67593426 sent to temperature/risen
New temperature detected 67593426 sent to temperature/changed
Temperature drop detected 78656585 sent to temperature/dropped
Temperature rise detected 78656585 sent to temperature/risen
New temperature detected 78656585 sent to temperature/changed
Temperature drop detected 49991899 sent to temperature/dropped
Temperature rise detected 49991899 sent to temperature/risen
New temperature detected 49991899 sent to temperature/changed
Temperature drop detected 23023123 sent to temperature/dropped
Temperature rise detected 23023123 sent to temperature/risen
New temperature detected 23023123 sent to temperature/changed
Temperature drop detected 95025701 sent to temperature/dropped
Temperature rise detected 95025701 sent to temperature/risen
New temperature detected 95025701 sent to temperature/changed
Temperature drop detected 76566429 sent to temperature/dropped
Temperature rise detected 76566429 sent to temperature/risen
New temperature detected 76566429 sent to temperature/changed
```
