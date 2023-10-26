This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


#  Simple-Todo-DApp-Next.js Starter

A starter repository for building simple Todo-dApp with [Next.js](https://nextjs.org/) and [Wagmi](https://wagmi.sh/).

This code is for anyone looking to quickly bootstrap an Todo-dApp using modern best practices. In particular, developers with existing JavaScript/TypeScript experience who're newer to Next.js & Wagmi.

If you want to learn how to interact with a simple smart contract from the client side, this repository is for you.


#### App Stack

- [Next.js](https://nextjs.org/)
- [Alchemy](https://www.alchemy.com/)
- [Chakra-UI](https://chakra-ui.com/)
- [viem](https://viem.sh/)
- [wagmi](https://wagmi.sh/)
- [RainbowKit](https://www.rainbowkit.com/)
- [TypeScript](https://www.typescriptlang.org/)

#### App Scripts

- `yarn dev` - Starts the Next.js local development environment
- `yarn build` - Creates an optimised production build of your app
- `yarn start` - Starts the Next.js application in production mode
- `yarn lint` - Checks for problems in your code using ESLint
- `yarn format` - Formats all code using Prettier

## Prerequisites

- [Node](https://nodejs.org/en/download/)
- [MetaMask](https://metamask.io/download.html)

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Initial Setup

Use `git clone https://github.com/dicethedev/todo-dapp-nextjs-starter.git` to clone this repository to your local machine.

Enter the repository folder with `cd todo-dapp-nextjs-starter`, then install all dependencies using `yarn`.

### App Setup


````
src/
├── app/
│   |
│   │  
│   │  
│   ├── layout.tsx  // Home layout 
│   ├── page.tsx  // Page Home
├── components/
│   ├── Header/ 
|   |   ├── index.tsx  //Navbar details is here - Connect Button
│   ├── Providers/ 
|   |   ├── index.tsx  //Rainbowkit and Chakra-UI configuration is here
│   ├── TodoUI/ 
|   |   ├── index.tsx  //All the Todo implementation is here
├── constants/
│   ├── abi.json  //abi can be found here
|   ├── types.js // Data types declaration can be found here
├── hooks/
│   ├── useAddTodo.tsx/ custom hook to add todo with wagmi implementation can be found here (Write)
│   ├── useDisplayTodo.tsx/ custom hook to get all todos (Read)
│   |
│   │    
│   │   
│   └── ...
└── ...
````

You'll need a RainbowKit project ID. You can get one from [WalletConnect Cloud](https://cloud.walletconnect.com/) and it will look something like this: `S4sTYP9joUROq_zKY9YGroLoO4o7NkWk` (not a real key).

Afterwards, duplicate `.env.example` and rename the file `.env`. Then add your RainbowKit project ID like this: `NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID=[your-project-id]`. Then add your Alchemy API KEY like this:  `NEXT_PUBLIC_ALCHEMY_API_KEY=[api-key]` 

Once your environment variables are set, run the application using `yarn dev`. To view, open up `localhost:3000` (or whatever port Next.js has assigned) in your browser.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Be sure to deploy the directory if you like and set these environment variables:

```bash
NEXT_PUBLIC_ALCHEMY_API_KEY=[your-api-key]
NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID=[your-project-id]
```

Here's an app I deployed earlier: [https://todo-dapp-nextjs-starter.vercel.app/](https://todo-dapp-nextjs-starter.vercel.app/)

## Why I Built This

I built this to onboard others to web3. Just willing to help others and contribute to the space.

## Contributions

All suggestions for improvement are welcome. Please submit a [pull request](https://github.com/dicethedev/todo-dapp-nextjs-starter/pulls) to contribute.

