---
id: paymentGateway
title: Payment Gateway Integration
sidebar_label: Payment Gateway Integration
---

## Overview

Project CX can be used to collect payments via custom forms and integrated payment gateways.

### Process

#### Start Transaction process in Project CX

1.  [Login](api.md#login)
1.  [Start Transaction](api.md#start-transaction)

#### Send Users to page in Project CX

1.  The URI is the payment page that has been setup. Pass the order ID returned from the call to start transaction as a parameter.

```
https://project-cx.com.au/payment?orderId=<your orderId>&return=<Uri to return to after payment is submitted>
```

| Param     |          | Details                                                                      |
| --------- | -------- | ---------------------------------------------------------------------------- |
| orderId   | Required | order ID returned from call to [Start Transaction](api.md#start-transaction) |
| returnUrl | Optional | Url to return to after payment has been submitted by user                    |

1. Once user has submitted the form for payment they will either be returned to 'returnUrl' passed, or handled by Project CX.
1. Once payment has been processed Project CX will call URL passed as callback in [Start Transaction](api.md#start-transaction) with the [result of the payment](api.md#payment-result)
