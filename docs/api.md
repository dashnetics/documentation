---
id: api
title: API
sidebar_label: API
slug: /api
---

# General

## Login

Returns a Bearer token.

```
POST https://<project cx domain>/rest2/login
```

### Input

```json
{
  "username": "<USERNAME>",
  "password": "<PASSWORD>"
}
```

| Param    | Details  |
| -------- | -------- |
| username | Username |
| password | Password |

### Output

```json
{
  "auth_token": "XXX",
  "refresh_token": "YYY",
  "token_type": "Bearer",
  "expires_in": 8400
}
```

| Param         | Details                                               |
| ------------- | ----------------------------------------------------- |
| auth_token    | Token to be used as a Bearer token in other API calls |
| refresh_token |                                                       |
| token_type    | Always 'Bearer'                                       |
| expires_in    | Time to token expiry                                  |

# Payments

## Start Payment

Starts a payment transaction in Project CX

```
POST https://<project cx domain>/rest2/payment/create
```

### Input

```json
{
    "amount":10000,
    "description: "Test Payment",
    "info": "Payment 1",
    "callback": "https://your.callback.url"
}
```

| Param       | Details                                                                  |
| ----------- | ------------------------------------------------------------------------ |
| amount      | Amount of the payment in cents                                           |
| description | Description of the payment, can be shown to users in the Project CX form |
| info        | Payment information sent to the payment gateway                          |
| callback    | URI to callback with the results of the payment                          |

### Output

```json
{
  "orderId": "XXX"
}
```

| Param   | Details                           |
| ------- | --------------------------------- |
| orderId | Order ID to be sent to Project CX |

## Payment Result

Sent back to callback URI sent in [Start Payment](#start-payment)

### Output

```json
{
  "dateSent": "2020-07-28T00:15:02.868Z",
  "status": "Success",
  "bankTransactionId": "111111",
  "message": "Transaction successful"
}
```

| Param             | Details                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------- |
| dateSent          | Date and time sent to payment gateway                                                    |
| status            | Status of Transaction "Success" or "Failure"                                             |
| bankTransactionId | Id of the payment from the payment gateway                                               |
| message           | Message from the payment gateway. If status is Failure, will be the cause of the failure |
