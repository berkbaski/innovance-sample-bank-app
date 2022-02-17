# Innovance Sample Bank
This project is a sample banking application. Be careful, this is not fully tested :)

Sample Bank App has some skills.

These,
  Authentication
  - Login - Login to the application with you want credentials.
  - Registration - Register for login to the application.
  - Forgot Password - When you forgot your password. 

  Main
  - My Accounts - List accounts owned by the user.
  - My Cards - List cards owned by the user.
  - Incomes - Show the money list received in the account.
  - Outgoings - Shows the list of money outgoing from the account.

  Transfer
  - The form that allows you to Transfer/EFT/Fast to the account you want.

All data are fake.

## Usage
### Installation
```bash
git clone https://github.com/berkbaski/innovance-sample-bank-app

cd innovance-sample-bank-app && yarn
```

### Running for development w/Docker
```bash
docker-compose -f docker-compose.yml up
```

### Running for development w/npm
```bash
npm run start
```

### Build for production
```bash
npm run build
```
