# Reskinit

## Getting Started

### Install Dependencies

Run the setup script:

```bash
bash bin/setup.sh
```

You may need to follow the below instructions regarding `asdf` to get the script to finish successfully.

Once completed successfully, run `which yarn` and you should see something close to this:

```
/Users/atmiguel/.asdf/shims/yarn
```

### asdf

`asdf` is a tool version manager. It will use the nearest `.tool-versions` to your working directory to determine which versions of tools & language runtimes should be installed and used.

`asdf` will keep node.js, python, yarn, etc. in sync.

To finish `asdf` setup, you will need to add some changes to your shell profile. Follow the instructions here: https://asdf-vm.com/guide/getting-started.html#_3-install-asdf

## Next JS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Run Server

To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
