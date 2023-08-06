# typescript-data-structures

Simple implementations of common data structures in typescript.

Included data structures:

- Doubly Linked List
- Linked List
- Queue
- Stack

## Usage

GitHub Packages requires authentication to install npm packages.

```text
You need an access token to publish, install, and delete private, internal, and public packages.
```

More information can be found in the GitHub Packages [documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).

Here is a brief overview of the steps:

- Generate a Personal Access Token (classic)

- Add the token to the local npmrc file

    ```shell
    echo //npm.pkg.github.com/:_authToken=${PAT} >> ~/.npmrc
    ```

- Create an npmrc file in the repository, specifying the npm registry to use for the `@ben-cart3r` namespace

    ```shell
    echo @ben-cart3r:registry=https://npm.pkg.github.com/ >> .npmrc
   ```

- Install this package

    ```shell
    npm install @ben-cart3r/typescript-data-structures
    ```

## Development

A `devcontainer.json` file is included to speed up development in Visual Studio Code.

- Installing dependencies

    ```shell
    npm install
    ```

- Running the tests

    ```shell
    npm run test
    ```

    or

    ```shell
    npm run test:watch
    ```

- Fixing linting issues

   ```shell
   npm run lint:fix
   ```

### Releasing a new version

Incrementing the `version` property in `package.json` and pushing the change to the `main` branch will trigger a new version of the package to be published.
