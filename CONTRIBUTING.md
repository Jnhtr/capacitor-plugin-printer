# Contributing

This guide provides instructions for contributing to this Capacitor printing plugin.

## Development Prerequisites

Before contributing, ensure you have:
- Node.js (LTS version recommended)
- Java 21+ (for Android development)
- Xcode 15+ (for iOS development, macOS only)
- Android SDK with API level 24+ (for Android development)

## Platform Support

This plugin supports:
- **iOS**: 14.0+
- **Android**: API 24+ (Android 6.0+)
- **Capacitor**: 7.0+

## Developing

### Local Setup

1. Fork and clone the repo.
1. Install the dependencies.

    ```shell
    npm install
    ```

1. Install SwiftLint if you're on macOS.

    ```shell
    brew install swiftlint
    ```

### Scripts

#### `npm run build`

Build the plugin web assets and generate plugin API documentation using [`@capacitor/docgen`](https://github.com/ionic-team/capacitor-docgen).

It will compile the TypeScript code from `src/` into ESM JavaScript in `dist/esm/`. These files are used in apps with bundlers when your plugin is imported.

Then, Rollup will bundle the code into a single file at `dist/plugin.js`. This file is used in apps without bundlers by including it as a script in `index.html`.

#### `npm run verify`

Build and validate the web and native projects.

This is useful to run in CI to verify that the plugin builds for all platforms.

#### `npm run lint` / `npm run fmt`

Check formatting and code quality, autoformat/autofix if possible.

This template is integrated with ESLint, Prettier, and SwiftLint. Using these tools is completely optional, but the [Capacitor Community](https://github.com/capacitor-community/) strives to have consistent code style and structure for easier cooperation.

## Code Style Guidelines

- Follow existing TypeScript/JavaScript patterns
- Use Prettier for code formatting (automatic via `npm run fmt`)
- Follow ESLint rules
- Add JSDoc comments for new interfaces and methods
- Test changes on both iOS and Android when possible

## Submitting Changes

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Test thoroughly:
   ```shell
   npm run build
   npm run verify
   ```
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Pull Request Guidelines

- Describe what your PR does and why
- Include any breaking changes in the description
- Test on actual devices/simulators if possible
- Update documentation as needed
- Ensure all checks pass

## Publishing

There is a `prepublishOnly` hook in `package.json` which prepares the plugin before publishing, so all you need to do is run:

```shell
npm publish
```

> **Note**: The [`files`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#files) array in `package.json` specifies which files get published. If you rename files/directories or add files elsewhere, you may need to update it.

## Attribution

This plugin was originally created by BarisCanYesil and has been upgraded for Capacitor 7 compatibility. We maintain respect for the original work while continuing to improve and modernise the plugin.

See [CONTRIBUTORS.md](./CONTRIBUTORS.md) for a full list of contributors.
