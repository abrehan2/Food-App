<div align="center">
<img src="https://img.shields.io/badge/-React.js-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React.js" />
<img src="https://img.shields.io/badge/-Chakra%20UI-black?style=for-the-badge&logoColor=white&logo=chakraui&color=319795" alt="Chakra UI" />
<img src="https://img.shields.io/badge/-Chart.js-black?style=for-the-badge&logoColor=white&logo=chartdotjs&color=FF6384" alt="Chart.js" />
<img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=nodedotjs&color=339933" alt="Node.js" />
<img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="MongoDB" />
</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

**Greetings, fellow developers!**

Food-App is an interactive web application designed with recommended industrial practices for selling burgers. While the UI is kept minimal, the primary focus is on incorporating diverse functionalities:

- Integrated a payment method using **Braintree**
- Incorporated **passport-oauth** for Google sign-up functionality
- Generates **real-time** email responses based on customer feedback

## <a name="quick-start">Quick Start</a>

### **Cloning the Repository**

```bash
git clone https://github.com/abrehan2/food-app.git
cd food-app
```

### **Installation**

**Front-end**

```bash
cd client
npm install
```

**Back-end**

```bash
cd server
npm install
```

### **Environment Variables**

Create a `config.env` file in the `config` directory at the back-end and add the following variables:

```env
PORT=
MONGO_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
FRONTEND_URL=
SESSION_SECRET=
MERCHANT_ID=
PUBLIC_KEY=
PRIVATE_KEY=
SMPT_SERVICE=
SMPT_MAIL=
SMPT_PASSWORD=
SMPT_HOST=
SMPT_PORT=
```

### **Running the Project**

**Front-end**

```bash
npm run start
```

**Back-end**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.
