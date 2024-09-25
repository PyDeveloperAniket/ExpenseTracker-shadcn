This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

##folder structure
.
├── client/
│   └── src/
│       ├── components/
│       │   ├── Addexpense.js
│       │   ├── Analysis.js
│       │   ├── Barchart.js
│       │   ├── Daily.js
│       │   ├── DatePicker2.js
│       │   ├── DoughnutChart.js
│       │   ├── Home.js
│       │   ├── LineChart.js
│       │   ├── List.js
│       │   ├── Login.js
│       │   ├── Profile.js
│       │   ├── ProfileExpand.js
│       │   ├── SetBudget.js
│       │   └── Signup.js
│       ├── lib/
│       │   └── utils.js
│       ├── Pages/
│       │   ├── ConfirmDelete.js
│       │   ├── DailySpendAnalysis.js
│       │   ├── Dashboard.js
│       │   ├── LandingPage.js
│       │   ├── Main.js
│       │   ├── MainAnalysis.js
│       │   ├── Main.js
│       │   ├── MainAnalysis.js
│       │   ├── MainDaily.js
│       │   └── MainSpendAnalysis.js
│       ├── utilities/
│       │   └── Categorysegator.js
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       └── reportWebVitals.js
└── server/
    ├── controller/
    │   ├── authController.js
    │   └── expenseControl.js
    ├── middleware/
    │   └── authMiddleware.js
    ├── models/
    │   ├── expense.js
    │   └── user.js
    ├── router/
    │   ├── expenseRouter.js
    │   ├── index.js
    │   └── userRouter.js
    ├── .env
    └── app.js

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
