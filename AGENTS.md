**Package Manager**: Use **pnpm** strictly. Do not use `npm` or `yarn` unless explicitly instructed.

## 🧠 Context & Documentation
- **Codebase Context**: Always retrieve sufficient context (files, folder structures) before proposing changes. Do not make assumptions about unknown code.
- **Documentation**: Use the **context7** MCP server to fetch the latest documentation and best practices for libraries (especially for fast-moving tech like Next.js, Shadcn, etc.).

## 🧪 Testing
- **Scripting**: For test scripts or standalone automation, use **Pure JavaScript (Node.js)**. Avoid TypeScript complexities for simple ephemeral scripts unless necessary.

## 🛡️ Development Standards
- **Security**: Never hardcode secrets (API keys, tokens). Always suggest adding them to `.env.local` and refer to them via `process.env`.
- **Type Safety**: Avoid using `any` type in TypeScript. Always define a proper `interface` or use `unknown` if the type is truly ambiguous.
- **Design**: Adopt a **Mobile-First** approach. Ensure UI components are responsive and function correctly on smaller screens before optimizing for desktop.
- **Verification**: Proactively verify changes. After significant refactors, suggest running `pnpm lint` or `pnpm build` to catch issues early.